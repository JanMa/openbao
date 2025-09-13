// Copyright (c) 2025 OpenBao a Series of LF Projects, LLC
// SPDX-License-Identifier: MPL-2.0

package command

import (
	"context"
	"fmt"
	"os"
	"strings"
	"time"

	"github.com/hashicorp/cli"
	"github.com/hashicorp/go-hclog"
	"github.com/openbao/openbao/command/server"
	"github.com/openbao/openbao/sdk/v2/helper/pluginutil/oci"
	"github.com/posener/complete"
)

var (
	_ cli.Command             = (*PluginInitCommand)(nil)
	_ cli.CommandAutocomplete = (*PluginInitCommand)(nil)
)

type PluginInitCommand struct {
	*BaseCommand

	flagConfigs   []string
	flagDirectory string
	flagTimeout   time.Duration
}

func (c *PluginInitCommand) Synopsis() string {
	return "Initialize and download OCI-based plugins"
}

func (c *PluginInitCommand) Help() string {
	helpText := `
Usage: bao plugin init [options]

  Downloads and initializes OCI-based plugins configured in the OpenBao server
  configuration. This command reads the plugin configuration from the server
  config files and downloads the specified OCI images containing plugin binaries.

  Initialize plugins using configuration files:

      $ bao plugin init -config=/path/to/openbao.hcl

  Initialize plugins with multiple configuration files:

      $ bao plugin init -config=/etc/openbao -config=/opt/openbao/extra.hcl

  Initialize plugins to a specific directory:

      $ bao plugin init -config=/path/to/config.hcl -directory=/opt/openbao/plugins

` + c.Flags().Help()

	return strings.TrimSpace(helpText)
}

func (c *PluginInitCommand) Flags() *FlagSets {
	set := c.flagSet(FlagSetNone)

	f := set.NewFlagSet("Command Options")

	f.StringSliceVar(&StringSliceVar{
		Name:   "config",
		Target: &c.flagConfigs,
		Completion: complete.PredictOr(
			complete.PredictFiles("*.hcl"),
			complete.PredictFiles("*.json"),
			complete.PredictDirs("*"),
		),
		Usage: "Path to a configuration file or directory of configuration " +
			"files. This flag can be specified multiple times to load multiple " +
			"configurations. If the path is a directory, all files which end in " +
			".hcl or .json are loaded.",
	})

	f.StringVar(&StringVar{
		Name:    "directory",
		Target:  &c.flagDirectory,
		Default: "",
		Usage: "Directory where plugins should be downloaded. If not specified, " +
			"uses the plugin_directory from the configuration file.",
	})

	f.DurationVar(&DurationVar{
		Name:    "timeout",
		Target:  &c.flagTimeout,
		Default: 300 * time.Second,
		Usage:   "Timeout for downloading each plugin.",
	})

	return set
}

func (c *PluginInitCommand) AutocompleteArgs() complete.Predictor {
	return complete.PredictNothing
}

func (c *PluginInitCommand) AutocompleteFlags() complete.Flags {
	return c.Flags().Completions()
}

func (c *PluginInitCommand) Run(args []string) int {
	f := c.Flags()

	if err := f.Parse(args); err != nil {
		c.UI.Error(err.Error())
		return 1
	}

	if len(f.Args()) > 0 {
		c.UI.Error(fmt.Sprintf("Too many arguments (expected 0, got %d)", len(f.Args())))
		return 1
	}

	return c.runPluginInit()
}

func (c *PluginInitCommand) runPluginInit() int {
	// Require config flags to be specified
	if len(c.flagConfigs) == 0 {
		c.UI.Error("No configuration specified. Use -config flag to specify configuration files or directories.")
		return 1
	}

	// Parse configuration using the same logic as the server command
	config, configErrors, err := c.parseConfig()
	if err != nil {
		c.UI.Error(fmt.Sprintf("Error parsing configuration: %v", err))
		return 1
	}

	// Display configuration warnings if any
	for _, configError := range configErrors {
		c.UI.Warn(configError.Error())
	}

	// Determine plugin directory
	pluginDir := c.flagDirectory
	if pluginDir == "" {
		pluginDir = config.PluginDirectory
	}
	if pluginDir == "" {
		c.UI.Error("No plugin directory specified. Use -directory flag or set plugin_directory in config.")
		return 1
	}

	// Check if plugins are configured
	if len(config.Plugins) == 0 {
		c.UI.Warn("No OCI plugins configured in the configuration files.")
		return 0
	}

	c.UI.Info(fmt.Sprintf("Plugin directory: %s", pluginDir))
	c.UI.Info(fmt.Sprintf("Found %d OCI plugin(s) configured", len(config.Plugins)))

	// Ensure plugin directory exists
	if err := os.MkdirAll(pluginDir, 0755); err != nil {
		c.UI.Error(fmt.Sprintf("Failed to create plugin directory: %v", err))
		return 1
	}

	// Initialize plugins using the existing vault reconciliation logic
	return c.reconcilePlugins(config, pluginDir)
}

func (c *PluginInitCommand) parseConfig() (*server.Config, []error, error) {
	var configErrors []error
	var config *server.Config

	// Load configuration using the same logic as the server command
	for _, path := range c.flagConfigs {
		current, err := server.LoadConfig(path, c.flagConfigs)
		if err != nil {
			return nil, nil, fmt.Errorf("error loading configuration from %s: %w", path, err)
		}

		if current != nil {
			// Validate the configuration
			validationErrors := current.Validate(path)
			for _, verr := range validationErrors {
				configErrors = append(configErrors, fmt.Errorf("%s", verr.String()))
			}

			if config == nil {
				config = current
			} else {
				config = config.Merge(current)
			}
		} else {
			c.UI.Warn(fmt.Sprintf("WARNING: ignoring duplicate configuration found in directory: %v", path))
		}
	}

	if config == nil {
		return nil, configErrors, fmt.Errorf("no valid configuration found")
	}

	return config, configErrors, nil
}

func (c *PluginInitCommand) reconcilePlugins(config *server.Config, pluginDir string) int {
	// Create a logger for the operation
	logger := hclog.New(&hclog.LoggerOptions{
		Name:  "plugin-init",
		Level: hclog.Info,
	})
	logger.Info("starting OCI plugin reconciliation")

	// Create context with timeout
	ctx, cancel := context.WithTimeout(context.Background(), c.flagTimeout)
	defer cancel()

	// Create OCI plugin downloader using the shared package
	downloader := oci.NewPluginDownloader(pluginDir, config, logger)

	err := downloader.ReconcilePlugins(ctx)
	if err != nil {
		logger.Error("failed to reconcile plugins", "error", err)
		return 1
	}

	logger.Info("OCI plugin reconciliation completed")
	return 0

}

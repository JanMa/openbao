// Copyright (c) HashiCorp, Inc.
// SPDX-License-Identifier: MPL-2.0

package command

import (
	"errors"
	"os"
	"strings"
	"testing"

	"github.com/go-test/deep"
	"github.com/hashicorp/cli"
	"github.com/openbao/openbao/helper/builtinplugins"
	"github.com/openbao/openbao/sdk/v2/helper/consts"
)

// logicalBackendAdjustmentFactor is set to plus 1 for the database backend
// which is a plugin but not found in go.mod files, and minus 1 for the ldap
// and openldap secret backends which have the same underlying plugin.
var logicalBackendAdjustmentFactor = 1 - 1

func testSecretsEnableCommand(tb testing.TB) (*cli.MockUi, *SecretsEnableCommand) {
	tb.Helper()

	ui := cli.NewMockUi()
	return ui, &SecretsEnableCommand{
		BaseCommand: &BaseCommand{
			UI: ui,
		},
	}
}

func TestSecretsEnableCommand_Run(t *testing.T) {
	t.Parallel()

	cases := []struct {
		name string
		args []string
		out  string
		code int
	}{
		{
			"not_enough_args",
			[]string{},
			"Not enough arguments",
			1,
		},
		{
			"too_many_args",
			[]string{"foo", "bar"},
			"Too many arguments",
			1,
		},
		{
			"not_a_valid_mount",
			[]string{"nope_definitely_not_a_valid_mount_like_ever"},
			"",
			2,
		},
		{
			"mount",
			[]string{"transit"},
			"Success! Enabled the transit secrets engine at: transit/",
			0,
		},
		{
			"mount_path",
			[]string{
				"-path", "transit_mount_point",
				"transit",
			},
			"Success! Enabled the transit secrets engine at: transit_mount_point/",
			0,
		},
	}

	for _, tc := range cases {
		tc := tc

		t.Run(tc.name, func(t *testing.T) {
			t.Parallel()

			client, closer := testVaultServer(t)
			defer closer()

			ui, cmd := testSecretsEnableCommand(t)
			cmd.client = client

			code := cmd.Run(tc.args)
			if code != tc.code {
				t.Errorf("expected %d to be %d", code, tc.code)
			}

			combined := ui.OutputWriter.String() + ui.ErrorWriter.String()
			if !strings.Contains(combined, tc.out) {
				t.Errorf("expected %q to contain %q", combined, tc.out)
			}
		})
	}

	t.Run("integration", func(t *testing.T) {
		t.Parallel()

		client, closer := testVaultServer(t)
		defer closer()

		ui, cmd := testSecretsEnableCommand(t)
		cmd.client = client

		code := cmd.Run([]string{
			"-path", "mount_integration/",
			"-description", "The best kind of test",
			"-default-lease-ttl", "30m",
			"-max-lease-ttl", "1h",
			"-audit-non-hmac-request-keys", "foo,bar",
			"-audit-non-hmac-response-keys", "foo,bar",
			"-passthrough-request-headers", "authorization,authentication",
			"-passthrough-request-headers", "www-authentication",
			"-allowed-response-headers", "authorization",
			"-allowed-managed-keys", "key1,key2",
			"-force-no-cache",
			"pki",
		})
		if exp := 0; code != exp {
			t.Errorf("expected %d to be %d", code, exp)
		}

		expected := "Success! Enabled the pki secrets engine at: mount_integration/"
		combined := ui.OutputWriter.String() + ui.ErrorWriter.String()
		if !strings.Contains(combined, expected) {
			t.Errorf("expected %q to contain %q", combined, expected)
		}

		mounts, err := client.Sys().ListMounts()
		if err != nil {
			t.Fatal(err)
		}

		mountInfo, ok := mounts["mount_integration/"]
		if !ok {
			t.Fatal("expected mount to exist")
		}
		if exp := "pki"; mountInfo.Type != exp {
			t.Errorf("expected %q to be %q", mountInfo.Type, exp)
		}
		if exp := "The best kind of test"; mountInfo.Description != exp {
			t.Errorf("expected %q to be %q", mountInfo.Description, exp)
		}
		if exp := 1800; mountInfo.Config.DefaultLeaseTTL != exp {
			t.Errorf("expected %d to be %d", mountInfo.Config.DefaultLeaseTTL, exp)
		}
		if exp := 3600; mountInfo.Config.MaxLeaseTTL != exp {
			t.Errorf("expected %d to be %d", mountInfo.Config.MaxLeaseTTL, exp)
		}
		if exp := true; mountInfo.Config.ForceNoCache != exp {
			t.Errorf("expected %t to be %t", mountInfo.Config.ForceNoCache, exp)
		}
		if diff := deep.Equal([]string{"authorization,authentication", "www-authentication"}, mountInfo.Config.PassthroughRequestHeaders); len(diff) > 0 {
			t.Errorf("Failed to find expected values in PassthroughRequestHeaders. Difference is: %v", diff)
		}
		if diff := deep.Equal([]string{"authorization"}, mountInfo.Config.AllowedResponseHeaders); len(diff) > 0 {
			t.Errorf("Failed to find expected values in AllowedResponseHeaders. Difference is: %v", diff)
		}
		if diff := deep.Equal([]string{"foo,bar"}, mountInfo.Config.AuditNonHMACRequestKeys); len(diff) > 0 {
			t.Errorf("Failed to find expected values in AuditNonHMACRequestKeys. Difference is: %v", diff)
		}
		if diff := deep.Equal([]string{"foo,bar"}, mountInfo.Config.AuditNonHMACResponseKeys); len(diff) > 0 {
			t.Errorf("Failed to find expected values in AuditNonHMACResponseKeys. Difference is: %v", diff)
		}
		if diff := deep.Equal([]string{"key1,key2"}, mountInfo.Config.AllowedManagedKeys); len(diff) > 0 {
			t.Errorf("Failed to find expected values in AllowedManagedKeys. Difference is: %v", diff)
		}
	})

	t.Run("communication_failure", func(t *testing.T) {
		t.Parallel()

		client, closer := testVaultServerBad(t)
		defer closer()

		ui, cmd := testSecretsEnableCommand(t)
		cmd.client = client

		code := cmd.Run([]string{
			"pki",
		})
		if exp := 2; code != exp {
			t.Errorf("expected %d to be %d", code, exp)
		}

		expected := "Error enabling: "
		combined := ui.OutputWriter.String() + ui.ErrorWriter.String()
		if !strings.Contains(combined, expected) {
			t.Errorf("expected %q to contain %q", combined, expected)
		}
	})

	t.Run("no_tabs", func(t *testing.T) {
		t.Parallel()

		_, cmd := testSecretsEnableCommand(t)
		assertNoTabs(t, cmd)
	})

	t.Run("mount_all", func(t *testing.T) {
		t.Parallel()

		client, closer := testVaultServerAllBackends(t)
		defer closer()

		files, err := os.ReadDir("../builtin/logical")
		if err != nil {
			t.Fatal(err)
		}

		var backends []string
		for _, f := range files {
			if f.IsDir() {
				if f.Name() == "plugin" {
					continue
				}
				if _, err := os.Stat("../builtin/logical/" + f.Name() + "/backend.go"); errors.Is(err, os.ErrNotExist) {
					// Skip ext test packages (fake plugins without backends).
					continue
				}
				backends = append(backends, f.Name())
			}
		}

		modFile, err := os.ReadFile("../go.mod")
		if err != nil {
			t.Fatal(err)
		}
		modLines := strings.Split(string(modFile), "\n")
		for _, p := range modLines {
			splitLine := strings.Split(strings.TrimSpace(p), " ")
			if len(splitLine) == 0 {
				continue
			}
			potPlug := strings.TrimPrefix(splitLine[0], "github.com/openbao/")
			if strings.HasPrefix(potPlug, "vault-plugin-secrets-") {
				backends = append(backends, strings.TrimPrefix(potPlug, "vault-plugin-secrets-"))
			}
		}

		// backends are found by walking the directory, which includes the database backend,
		// however, the plugins registry omits that one
		if len(backends) != len(builtinplugins.Registry.Keys(consts.PluginTypeSecrets))+logicalBackendAdjustmentFactor {
			t.Fatalf("expected %d logical backends, got %d\n\texpected: %#v\n\tbackends: %v", len(builtinplugins.Registry.Keys(consts.PluginTypeSecrets))+logicalBackendAdjustmentFactor, len(backends), builtinplugins.Registry.Keys(consts.PluginTypeSecrets), backends)
		}

		for _, b := range backends {
			expectedResult := 0

			ui, cmd := testSecretsEnableCommand(t)
			cmd.client = client

			actualResult := cmd.Run([]string{
				b,
			})

			// Need to handle deprecated builtins specially
			status, _ := builtinplugins.Registry.DeprecationStatus(b, consts.PluginTypeSecrets)
			if status == consts.PendingRemoval || status == consts.Removed {
				expectedResult = 2
			}

			if actualResult != expectedResult {
				t.Errorf("type: %s - got: %d, expected: %d - %s", b, actualResult, expectedResult, ui.OutputWriter.String()+ui.ErrorWriter.String())
			}
		}
	})
}

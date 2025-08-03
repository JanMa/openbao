// Copyright (c) 2025 OpenBao a Series of LF Projects, LLC
// SPDX-License-Identifier: MPL-2.0

package server

import (
	"strings"
	"testing"
)

// TestOCIPluginConfiguration tests parsing of OCI plugin configuration
// This test reuses the same realistic plugin configurations from config_plugin_test.go
func TestOCIPluginConfiguration(t *testing.T) {
	configData := `
storage "inmem" {}

listener "tcp" {
  address = "127.0.0.1:8200"
  tls_disable = true
}

plugin_directory = "/opt/openbao/plugins"

plugins {
  "secrets-aws" {
    url = "ghcr.io/openbao/openbao-plugin-secrets-aws:v0.0.1"
    binary_name = "openbao-plugin-secrets-aws"
    sha256sum = "9fdd8be7947e4a4caf7cce4f0e02695081b6c85178aa912df5d37be97363144c"
  }

  "auth-gcp" {
    url = "ghcr.io/openbao/openbao-plugin-auth-gcp:v0.21.0"
    binary_name = "openbao-plugin-auth-gcp"
    sha256sum = "f586717376b20763b3ecef0412cdd6cbb4f8295b9679da4bfa4e1f75b8e00a63"
  }
}

plugin_download_on_error_behavior = "fail_startup"

plugin_oci_auth {
  "ghcr.io" {
    username = "openbao"
    password = "ghp_faketoken123456789faketoken123456789"
  }
}
`

	config, err := ParseConfig(configData, "test")
	if err != nil {
		t.Fatalf("Failed to parse config: %v", err)
	}

	// Test basic settings
	if config.PluginDirectory != "/opt/openbao/plugins" {
		t.Errorf("Expected plugin directory '/opt/openbao/plugins', got '%s'", config.PluginDirectory)
	}

	if config.PluginDownloadOnErrorBehavior != "fail_startup" {
		t.Errorf("Expected download behavior 'fail_startup', got '%s'", config.PluginDownloadOnErrorBehavior)
	}

	// Test plugins
	if len(config.Plugins) != 2 {
		t.Errorf("Expected 2 plugins, got %d", len(config.Plugins))
	}

	awsPlugin := config.Plugins["secrets-aws"]
	if awsPlugin == nil {
		t.Error("secrets-aws plugin not found")
	} else {
		if awsPlugin.URL != "ghcr.io/openbao/openbao-plugin-secrets-aws:v0.0.1" {
			t.Errorf("Unexpected AWS plugin URL: %s", awsPlugin.URL)
		}
		if awsPlugin.BinaryName != "openbao-plugin-secrets-aws" {
			t.Errorf("Unexpected AWS plugin binary: %s", awsPlugin.BinaryName)
		}
		if awsPlugin.SHA256Sum != "9fdd8be7947e4a4caf7cce4f0e02695081b6c85178aa912df5d37be97363144c" {
			t.Errorf("Unexpected AWS plugin SHA256: %s", awsPlugin.SHA256Sum)
		}
	}

	gcpPlugin := config.Plugins["auth-gcp"]
	if gcpPlugin == nil {
		t.Error("auth-gcp plugin not found")
	} else {
		if gcpPlugin.URL != "ghcr.io/openbao/openbao-plugin-auth-gcp:v0.21.0" {
			t.Errorf("Unexpected GCP plugin URL: %s", gcpPlugin.URL)
		}
	}

	// Test OCI auth
	if len(config.PluginOCIAuth) != 1 {
		t.Errorf("Expected 1 OCI auth config, got %d", len(config.PluginOCIAuth))
	}

	ghcrAuth := config.PluginOCIAuth["ghcr.io"]
	if ghcrAuth == nil {
		t.Error("GHCR auth not found")
	} else {
		if ghcrAuth.Username != "openbao" {
			t.Errorf("Unexpected GHCR username: %s", ghcrAuth.Username)
		}
		if ghcrAuth.Password != "ghp_faketoken123456789faketoken123456789" {
			t.Errorf("Unexpected GHCR password: %s", ghcrAuth.Password)
		}
	}

	// Test validation
	errors := config.Validate("test")
	if len(errors) > 0 {
		var errorMsgs []string
		for _, err := range errors {
			errorMsgs = append(errorMsgs, err.Problem)
		}
		t.Errorf("Configuration validation failed with errors: %s", strings.Join(errorMsgs, "; "))
	}
}

// TestInvalidOCIPluginConfiguration tests validation of invalid configurations
func TestInvalidOCIPluginConfiguration(t *testing.T) {
	tests := []struct {
		name        string
		config      string
		expectError string
	}{
		{
			name: "empty binary name",
			config: `
plugins {
  "test" {
    url = "docker.io/test:latest"
    binary_name = ""
    sha256sum = "9f86d081884c7d659a2feaa0c55ad015a3bf4f1b2b0b822cd15d6c15b0f00a08"
  }
}`,
			expectError: "binary_name cannot be empty",
		},
		{
			name: "invalid SHA256",
			config: `
plugins {
  "test" {
    url = "docker.io/test:latest"
    binary_name = "test"
    sha256sum = "invalid-hash"
  }
}`,
			expectError: "sha256sum must be exactly 64 characters",
		},
		{
			name: "invalid download behavior",
			config: `
plugin_download_on_error_behavior = "invalid_behavior"
plugins {
  "test" {
    url = "docker.io/test:latest"
    binary_name = "test"
    sha256sum = "9f86d081884c7d659a2feaa0c55ad015a3bf4f1b2b0b822cd15d6c15b0f00a08"
  }
}`,
			expectError: "plugin_download_on_error_behavior must be either",
		},
	}

	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			config, err := ParseConfig(tt.config, "test")
			if err != nil {
				t.Fatalf("Failed to parse config: %v", err)
			}

			errors := config.Validate("test")
			if len(errors) == 0 {
				t.Error("Expected validation errors but got none")
				return
			}

			found := false
			for _, err := range errors {
				if strings.Contains(err.Problem, tt.expectError) {
					found = true
					break
				}
			}

			if !found {
				var errorMsgs []string
				for _, err := range errors {
					errorMsgs = append(errorMsgs, err.Problem)
				}
				t.Errorf("Expected error containing '%s', but got: %s", tt.expectError, strings.Join(errorMsgs, "; "))
			}
		})
	}
}

/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

self.deprecationWorkflow = self.deprecationWorkflow || {};
self.deprecationWorkflow.config = {
  throwOnUnhandled: false,
  workflow: [
    // TEMPORARILY COMMENTED OUT FOR EMBER UPGRADE - TO COLLECT ALL DEPRECATIONS
    // Uncomment after upgrade is complete and update with new deprecations
    // { handler: 'silence', matchId: 'ember-data:model-save-promise' },
    // { handler: 'silence', matchId: 'ember-engines.deprecation-camelized-engine-names' },
    // { handler: 'silence', matchId: 'ember-engines.deprecation-router-service-from-host' },
    // { handler: 'silence', matchId: 'ember-modifier.use-modify' },
    // { handler: 'silence', matchId: 'ember-modifier.no-element-property' },
    // { handler: 'silence', matchId: 'ember-modifier.no-args-property' },
    // { handler: 'silence', matchId: 'ember-cli-mirage-config-routes-only-export' },
    // { handler: 'silence', matchId: 'setting-on-hash' },
  ],
};

/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

import ClusterRouteBase from 'vault/routes/cluster-route-base';

export default class VaultClusterToolsRoute extends ClusterRouteBase {
  model() {
    return this.modelFor('vault.cluster');
  }
}

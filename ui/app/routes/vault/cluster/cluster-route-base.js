/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// this is the base route for
// all of the CLUSTER_ROUTES that are states before you can use vault
//
import ClusterRouteBase from 'vault/routes/cluster-route-base';

export default class VaultClusterRouteBase extends ClusterRouteBase {
  model() {
    return this.modelFor('vault.cluster');
  }

  resetController(controller) {
    controller.reset && controller.reset();
  }
}

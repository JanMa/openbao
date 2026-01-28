/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

import ClusterRouteBase from 'vault/routes/cluster-route-base';

export default class VaultClusterAccessLeasesRoute extends ClusterRouteBase {
  // store is already injected in ClusterRouteBase

  model() {
    return this.store.findRecord('capabilities', 'sys/leases/lookup/');
  }
}

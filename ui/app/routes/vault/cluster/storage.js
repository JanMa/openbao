/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

import { action } from '@ember/object';
import ClusterRouteBase from 'vault/routes/cluster-route-base';

export default class VaultClusterStorageRoute extends ClusterRouteBase {
  // store is already injected in ClusterRouteBase

  model() {
    // findAll method will return all records in store as well as response from server
    // when removing a peer via the cli, stale records would continue to appear until refresh
    // query method will only return records from response
    return this.store.query('server', {});
  }

  @action
  doRefresh() {
    this.refresh();
  }
}

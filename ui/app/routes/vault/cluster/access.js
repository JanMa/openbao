/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

import ClusterRouteBase from 'vault/routes/cluster-route-base';

export default class VaultClusterAccessRoute extends ClusterRouteBase {
  modelTypes = ['capabilities', 'control-group', 'identity/group', 'identity/group-alias', 'identity/alias'];

  model() {
    return {};
  }
}

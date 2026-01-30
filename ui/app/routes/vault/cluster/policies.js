/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

import { service } from '@ember/service';
import ClusterRouteBase from 'vault/routes/cluster-route-base';

const ALLOWED_TYPES = ['acl', 'egp', 'rgp'];

export default class VaultClusterPoliciesRoute extends ClusterRouteBase {
  @service version;

  model(params) {
    const policyType = params.type;
    if (!ALLOWED_TYPES.includes(policyType)) {
      return this.transitionTo(this.routeName, ALLOWED_TYPES[0]);
    }
    return {};
  }
}

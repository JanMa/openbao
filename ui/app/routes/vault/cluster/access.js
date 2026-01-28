/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

import { computed } from '@ember/object';
import ClusterRouteBase from 'vault/routes/cluster-route-base';
import ModelBoundaryRoute from 'vault/mixins/model-boundary-route';

export default ClusterRouteBase.extend(ModelBoundaryRoute, {
  modelTypes: computed(function () {
    return ['capabilities', 'control-group', 'identity/group', 'identity/group-alias', 'identity/alias'];
  }),
  model() {
    return {};
  },
});

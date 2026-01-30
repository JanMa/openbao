/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

import { inject as service } from '@ember/service';
import UnloadModelRouteBase from 'vault/routes/unload-model-route-base';
import UnsavedModelRoute from 'vault/mixins/unsaved-model-route';

export default UnloadModelRouteBase.extend(UnsavedModelRoute, {
  store: service(),
  version: service(),

  model() {
    const policyType = this.policyType();
    if (policyType !== 'acl') {
      return this.transitionTo('vault.cluster.policies', policyType);
    }
    return this.store.createRecord(`policy/${policyType}`, {});
  },

  setupController(controller) {
    this._super(...arguments);
    controller.set('policyType', this.policyType());
  },

  policyType() {
    return this.paramsFor('vault.cluster.policies').type;
  },
});

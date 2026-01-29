/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

import UnloadModelRouteBase from 'vault/routes/unload-model-route-base';
import { inject as service } from '@ember/service';

export default UnloadModelRouteBase.extend({
  store: service(),

  beforeModel() {
    const itemType = this.modelFor('vault.cluster.access.identity');
    if (itemType !== 'entity') {
      return this.transitionTo('vault.cluster.access.identity');
    }
  },

  model() {
    const modelType = `identity/entity-merge`;
    return this.store.createRecord(modelType);
  },
});

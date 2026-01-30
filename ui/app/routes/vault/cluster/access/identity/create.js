/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

import UnloadModelRouteBase from 'vault/routes/unload-model-route-base';
import UnsavedModelRoute from 'vault/mixins/unsaved-model-route';
import { inject as service } from '@ember/service';

export default UnloadModelRouteBase.extend(UnsavedModelRoute, {
  store: service(),

  model() {
    const itemType = this.modelFor('vault.cluster.access.identity');
    const modelType = `identity/${itemType}`;
    return this.store.createRecord(modelType);
  },
});

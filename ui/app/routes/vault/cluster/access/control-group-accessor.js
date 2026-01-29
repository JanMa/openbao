/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

import { inject as service } from '@ember/service';
import UnloadModelRouteBase from 'vault/routes/unload-model-route-base';

export default UnloadModelRouteBase.extend({
  store: service(),
  version: service(),

  model(params) {
    return this.version.hasControlGroups ? this.store.findRecord('control-group', params.accessor) : null;
  },

  actions: {
    willTransition() {
      return true;
    },
    // deactivate happens later than willTransition,
    // so since we're using the model to render links
    // we don't want the UI blinking
    deactivate() {
      this.unloadModel();
      return true;
    },
  },
});

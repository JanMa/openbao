/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

import { inject as service } from '@ember/service';
import UnloadModelRouteBase from 'vault/routes/unload-model-route-base';

export default UnloadModelRouteBase.extend({
  store: service(),
  version: service(),

  model() {
    return this.version.hasControlGroups ? this.store.createRecord('control-group') : null;
  },
});

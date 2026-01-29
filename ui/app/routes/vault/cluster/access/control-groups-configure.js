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
    const type = 'control-group-config';
    return this.version.hasControlGroups
      ? this.store.findRecord(type, 'config').catch((e) => {
          // if you haven't saved a config, the API 404s, so create one here to edit and return it
          if (e.httpStatus === 404) {
            return this.store.createRecord(type, {
              id: 'config',
            });
          }
          throw e;
        })
      : null;
  },

  actions: {
    reload() {
      this.refresh();
    },
  },
});

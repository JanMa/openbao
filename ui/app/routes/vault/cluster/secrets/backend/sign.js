/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

import UnloadModelRouteBase from 'vault/routes/unload-model-route-base';
import { inject as service } from '@ember/service';

export default UnloadModelRouteBase.extend({
  store: service(),
  templateName: 'vault/cluster/secrets/backend/sign',

  backendModel() {
    return this.modelFor('vault.cluster.secrets.backend');
  },

  pathQuery(role, backend) {
    return {
      id: `${backend}/sign/${role}`,
    };
  },

  pathForType() {
    return 'sign';
  },

  model(params) {
    const role = params.secret;
    const backendModel = this.backendModel();
    const backend = backendModel.get('id');

    if (backendModel.get('type') !== 'ssh') {
      return this.transitionTo('vault.cluster.secrets.backend.list-root', backend);
    }
    return this.store.queryRecord('capabilities', this.pathQuery(role, backend)).then((capabilities) => {
      if (!capabilities.get('canUpdate')) {
        return this.transitionTo('vault.cluster.secrets.backend.list-root', backend);
      }
      return this.store.createRecord('ssh-sign', {
        role: {
          backend,
          id: role,
          name: role,
        },
        id: `${backend}-${role}`,
      });
    });
  },

  setupController(controller) {
    this._super(...arguments);
    controller.set('backend', this.backendModel());
  },
});

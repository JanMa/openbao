/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

import Ember from 'ember';
import { inject as service } from '@ember/service';
import ModelBoundaryRouteBase from 'vault/routes/model-boundary-route-base';

export default class VaultClusterLogoutRoute extends ModelBoundaryRouteBase {
  @service auth;
  @service controlGroup;
  @service flashMessages;
  @service console;
  @service permissions;
  @service('namespace') namespaceService;
  @service router;

  modelTypes = ['secret', 'secret-engine'];

  beforeModel({ to: { queryParams } }) {
    const authType = this.auth.getAuthType();
    const ns = this.namespaceService.path;
    this.auth.deleteCurrentToken();
    this.controlGroup.deleteTokens();
    this.namespaceService.reset();
    this.console.set('isOpen', false);
    this.console.clearLog(true);
    this.flashMessages.clearMessages();
    this.permissions.reset();

    queryParams.with = authType;
    if (ns) {
      queryParams.namespace = ns;
    }
    if (Ember.testing) {
      // Don't redirect on the test
      this.replaceWith('vault.cluster.auth', { queryParams });
    } else {
      const { cluster_name } = this.paramsFor('vault.cluster');
      location.assign(this.router.urlFor('vault.cluster.auth', cluster_name, { queryParams }));
    }
  }
}

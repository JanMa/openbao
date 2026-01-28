/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

import { service } from '@ember/service';
import VaultClusterRouteBase from './cluster-route-base';
import config from 'vault/config/environment';

export default class VaultClusterAuthRoute extends VaultClusterRouteBase {
  queryParams = {
    authMethod: {
      replace: true,
    },
  };

  @service flashMessages;
  @service version;

  model() {
    return super.model(...arguments);
  }

  resetController(controller) {
    controller.set('wrappedToken', '');
    controller.set('authMethod', 'token');
  }

  afterModel() {
    if (config.welcomeMessage) {
      this.flashMessages.info(config.welcomeMessage, {
        sticky: true,
        priority: 300,
      });
    }
  }
}

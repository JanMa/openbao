/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

import { inject as service } from '@ember/service';
import UnloadModelRouteBase from 'vault/routes/unload-model-route-base';

export default class CreateRoute extends UnloadModelRouteBase {
  @service store;
  @service version;

  model() {
    return this.store.createRecord('namespace');
  }
}

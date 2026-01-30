/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
import { action } from '@ember/object';
import removeRecord from 'vault/utils/remove-record';

/**
 * Base route class for unloading models.
 * Removes Ember Data records from the cache when the model changes or you move away from the route.
 *
 * This class replaces the unload-model-route mixin.
 *
 * Example usage:
 *   export default UnloadModelRouteBase.extend({
 *     modelPath: 'model',  // optional, defaults to 'model'
 *   });
 *
 * @class UnloadModelRouteBase
 * @extends Route
 */
export default class UnloadModelRouteBase extends Route {
  @service store;

  /**
   * The path to the model on the controller (default: 'model')
   * @type {String}
   */
  modelPath = 'model';

  /**
   * Unload the model from the store and destroy it
   */
  unloadModel() {
    const { modelPath } = this;
    /* eslint-disable-next-line ember/no-controller-access-in-routes */
    const model = this.controller?.get(modelPath);

    // error is thrown when you attempt to unload a record that is inFlight (isSaving)
    if (!model || !model.unloadRecord || model.isSaving) {
      return;
    }

    removeRecord(this.store, model);
    model.destroy();
    // it's important to unset the model on the controller since controllers are singletons
    /* eslint-disable-next-line ember/no-controller-access-in-routes */
    this.controller?.set(modelPath, null);
  }

  /**
   * Handle willTransition by unloading the model
   */
  @action
  willTransition() {
    this.unloadModel();
    return true;
  }
}

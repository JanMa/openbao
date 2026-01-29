/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

/**
 * Base route class for routes that need to clear Ember Data models when deactivated.
 * This class replaces the model-boundary-route mixin.
 *
 * @class ModelBoundaryRouteBase
 * @extends Route
 */
export default class ModelBoundaryRouteBase extends Route {
  @service store;

  modelType = null;
  modelTypes = null;

  deactivate() {
    // Clear Ember Data store of models when route is deactivated
    const modelType = this.modelType;
    const modelTypes = this.modelTypes;

    if (modelType) {
      this.store.unloadAll(modelType);
    }
    if (modelTypes) {
      modelTypes.forEach((type) => {
        this.store.unloadAll(type);
      });
    }
  }
}

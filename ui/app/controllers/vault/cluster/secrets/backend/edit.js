/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

import Controller, { inject as controller } from '@ember/controller';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class EditController extends Controller {
  @controller('vault.cluster.secrets.backend') backendController;

  queryParams = ['version', 'itemType'];

  @tracked version = '';
  @tracked itemType = '';
  @tracked preferAdvancedEdit = false;

  get backendCrumb() {
    const backend = this.backend;
    if (backend === undefined) {
      return undefined;
    }
    return {
      label: backend,
      text: backend,
      path: 'vault.cluster.secrets.backend.list-root',
      model: backend,
    };
  }

  reset() {
    this.version = '';
    this.itemType = '';
  }

  @action
  refresh() {
    // closure actions don't bubble to routes,
    // so we have to manually bubble here
    this.send('refreshModel');
  }

  @action
  toggleAdvancedEdit(bool) {
    this.preferAdvancedEdit = bool;
    this.backendController.preferAdvancedEdit = bool;
  }
}

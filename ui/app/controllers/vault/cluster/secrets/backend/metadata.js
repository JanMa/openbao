/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

import Controller from '@ember/controller';
import { action } from '@ember/object';

export default class MetadataController extends Controller {
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

  @action
  refreshModel() {
    this.send('refreshModel');
  }
}

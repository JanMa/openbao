/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

import Component from '@ember/component';
import { action } from '@ember/object';

export default Component.extend({
  handlePathChange: action(function (event) {
    this.onPathChange(event.target.value);
  }),
});

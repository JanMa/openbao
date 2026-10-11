/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

import { inject as service } from '@ember/service';
import Helper from '@ember/component/helper';

export default class SetFlashMessageHelper extends Helper {
  @service flashMessages;

  compute([message, type]) {
    return () => {
      this.flashMessages[type || 'success'](message);
    };
  }
}

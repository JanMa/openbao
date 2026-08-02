/**
 * Copyright (c) 2026 OpenBao a Series of LF Projects, LLC
 * SPDX-License-Identifier: MPL-2.0
 */

import { inject as service } from '@ember/service';
import Helper from '@ember/component/helper';

// Returns the path of the currently viewed secret mount. Engine templates
// cannot resolve host app helpers, so this engine-local helper mirrors
// `app/helpers/current-mount-path` (used by the host app templates).
export default class CurrentMountPathHelper extends Helper {
  @service secretMountPath;

  compute() {
    return this.secretMountPath.currentPath;
  }
}

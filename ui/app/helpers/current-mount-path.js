/**
 * Copyright (c) 2026 OpenBao a Series of LF Projects, LLC
 * SPDX-License-Identifier: MPL-2.0
 */

import Helper from '@ember/component/helper';
import { service } from '@ember/service';

// Returns the path of the currently viewed secret mount so that templates
// (including those inside engines, where parent route params are not
// accessible) can build LinkTo models explicitly rather than relying on the
// router to infer them from its (possibly mid-transition) state.
export default class CurrentMountPathHelper extends Helper {
  @service secretMountPath;

  compute() {
    return this.secretMountPath.currentPath;
  }
}

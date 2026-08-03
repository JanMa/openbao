/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

import AdapterError, { ForbiddenError, NotFoundError } from '@ember-data/adapter/error';
import { set } from '@ember/object';
import ApplicationAdapter from './application';

export default ApplicationAdapter.extend({
  pathForType() {
    return 'capabilities-self';
  },

  findRecord(store, type, id) {
    return this.ajax(this.buildURL(type), 'POST', { data: { paths: [id] } }).catch((e) => {
      if (e instanceof AdapterError) {
        set(e, 'policyPath', 'sys/capabilities-self');
      }
      // capabilities requests are best-effort permission hints; only swallow
      // forbidden/not-found responses (e.g. unusual paths) and let genuine
      // failures (5xx, network errors) reject so an outage is surfaced
      // instead of being mistaken for a lack of permissions
      if (e instanceof ForbiddenError || e instanceof NotFoundError) {
        return { data: { path: id } };
      }
      throw e;
    });
  },

  queryRecord(store, type, query) {
    const { id } = query;
    if (!id) {
      return;
    }
    return this.findRecord(store, type, id).then((resp) => {
      resp.path = id;
      return resp;
    });
  },
});

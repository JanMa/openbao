/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

import ApplicationAdapter from '../application';
import { encodePath } from 'vault/utils/path-encoding-helpers';
export default class PkiKeyAdapter extends ApplicationAdapter {
  namespace = 'v1';

  _baseUrl(backend, id) {
    const url = `${this.buildURL()}/${encodePath(backend)}`;
    if (id) {
      return url + '/key/' + encodePath(id);
    }
    return url + '/keys';
  }

  createRecord(store, type, snapshot) {
    const { record, adapterOptions } = snapshot;
    let url = this._baseUrl(record.backend);
    if (adapterOptions.import) {
      url = `${url}/import`;
    } else {
      url = `${url}/generate/${record.type}`;
    }
    return this.ajax(url, 'POST', { data: this.serialize(snapshot) }).then((resp) => {
      // import responses always contain the generated key id; generate
      // responses may omit key_id, so fall back to the supplied key name to
      // keep a stable record id. Preferring the server's key_id (when present)
      // keeps the record id consistent with a fresh read of the same key.
      if (!adapterOptions.import && !resp.data?.key_id && snapshot.attr('keyName')) {
        return { ...resp, key_id: snapshot.attr('keyName') };
      }
      return resp;
    });
  }

  updateRecord(store, type, snapshot) {
    const { record } = snapshot;
    const { key_name } = this.serialize(snapshot);
    const url = this._baseUrl(record.backend, record.id);
    return this.ajax(url, 'POST', { data: { key_name } });
  }

  query(store, type, query) {
    const { backend } = query;
    return this.ajax(this._baseUrl(backend), 'GET', { data: { list: true } });
  }

  queryRecord(store, type, query) {
    const { backend, id } = query;
    return this.ajax(this._baseUrl(backend, id), 'GET');
  }

  deleteRecord(store, type, snapshot) {
    const { id, record } = snapshot;
    return this.ajax(this._baseUrl(record.backend, id), 'DELETE');
  }
}

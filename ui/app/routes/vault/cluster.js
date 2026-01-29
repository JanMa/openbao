/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

import { inject as service } from '@ember/service';
import { action } from '@ember/object';
import { reject } from 'rsvp';
import { task, timeout } from 'ember-concurrency';
import Ember from 'ember';
import getStorage from '../../lib/token-storage';
import localStorage from 'vault/lib/local-storage';
import ClusterRouteBase from 'vault/routes/cluster-route-base';

const POLL_INTERVAL_MS = 10000;

export const getManagedNamespace = (nsParam, root) => {
  if (!nsParam || nsParam.replaceAll('/', '') === root) return root;
  // Check if param starts with root and /
  if (nsParam.startsWith(`${root}/`)) {
    return nsParam;
  }
  // Otherwise prepend the given param with the root
  return `${root}/${nsParam}`;
};

// Note: ClusterRouteBase already provides auth, store, and router services
// We re-declare store and auth here for ESLint's ember/no-implicit-injections rule
export default class VaultClusterRoute extends ClusterRouteBase {
  @service('namespace') namespaceService;
  @service version;
  @service permissions;
  @service store;
  @service auth;
  @service currentCluster;

  modelTypes = ['node', 'secret', 'secret-engine'];

  queryParams = {
    namespaceQueryParam: {
      refreshModel: true,
    },
  };

  getClusterId(params) {
    const { cluster_name } = params;
    const cluster = this.modelFor('vault').findBy('name', cluster_name);
    return cluster ? cluster.get('id') : null;
  }

  async beforeModel(transition) {
    await super.beforeModel(transition);
    const params = this.paramsFor(this.routeName);
    let namespace = params.namespaceQueryParam;
    const currentTokenName = this.auth.get('currentTokenName');
    if (!namespace && currentTokenName && !Ember.testing) {
      // if no namespace queryParam and user authenticated,
      // use user's root namespace to redirect to properly param'd url
      const storage = getStorage().getItem(currentTokenName);
      namespace = storage?.userRootNamespace;
      // only redirect if something other than nothing
      if (namespace) {
        this.transitionTo({ queryParams: { namespace } });
      }
    }
    this.namespaceService.setNamespace(namespace);
    const id = this.getClusterId(params);
    if (id) {
      this.auth.setCluster(id);
      if (this.auth.currentToken) {
        await this.permissions.getPaths.perform();
      }
    } else {
      return reject({ httpStatus: 404, message: 'not found', path: params.cluster_name });
    }
  }

  model(params) {
    // if a user's browser settings block localStorage they will be unable to use Vault. The method will throw the error and the rest of the application will not load.
    localStorage.isLocalStorageSupported();

    const id = this.getClusterId(params);
    return this.store.findRecord('cluster', id);
  }

  @task({ cancelOn: 'deactivate', keepLatest: true })
  *poll() {
    while (true) {
      // when testing, the polling loop causes promises to never settle so acceptance tests hang
      // to get around that, we just disable the poll in tests
      if (Ember.testing) {
        return;
      }
      yield timeout(POLL_INTERVAL_MS);
      try {
        yield this.controller.model.reload();
        yield this.transitionToTargetRoute();
      } catch {
        // we want to keep polling here
      }
    }
  }

  afterModel(model, transition) {
    super.afterModel(model, transition);
    this.currentCluster.setCluster(model);

    // Proceed to the target route, as namespace features are assumed to be always enabled.
    return this.transitionToTargetRoute(transition);
  }

  setupController() {
    super.setupController(...arguments);
    this.poll.perform();
  }

  @action
  error(e) {
    if (e.httpStatus === 503 && e.errors[0] === 'Vault is sealed') {
      this.refresh();
    }
    return true;
  }
}

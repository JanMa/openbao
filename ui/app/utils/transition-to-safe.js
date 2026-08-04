/**
 * Copyright (c) 2026 OpenBao a Series of LF Projects, LLC
 * SPDX-License-Identifier: MPL-2.0
 */

// A transition is "aborted" (rejects with TransitionAborted) whenever a route in
// the target chain performs its own redirect or a newer navigation supersedes
// it. Aborted transitions are expected control flow, not failures. When a
// programmatic transition is initiated from a component/controller action or an
// ember-concurrency task (i.e. outside of a route hook, where the router handles
// aborts itself), the abort rejection must stay handled or it surfaces as an
// unhandled rejection (a "global failure" in tests).
//
// transitionToSafe(router, ...args) swallows only TransitionAborted and
// rethrows anything else, so genuine errors still propagate to callers.
export function swallowTransitionAbort(error) {
  if (error?.name !== 'TransitionAborted') {
    throw error;
  }
}

export default function transitionToSafe(router, ...args) {
  return router.transitionTo(...args).catch(swallowTransitionAbort);
}

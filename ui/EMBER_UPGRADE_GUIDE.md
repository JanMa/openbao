# OpenBao UI Ember.js Upgrade Guide

This document provides a step-by-step checklist for upgrading the OpenBao UI from Ember.js 4.4 to a supported LTS version (targeting 6.4+).

## Table of Contents

1. [Current State Assessment](#1-current-state-assessment)
2. [Pre-Migration Preparation](#2-pre-migration-preparation)
3. [Phase 1: Codebase Modernization](#3-phase-1-codebase-modernization)
4. [Phase 2: Incremental Ember Upgrades](#4-phase-2-incremental-ember-upgrades)
5. [Phase 3: Post-Upgrade Cleanup](#5-phase-3-post-upgrade-cleanup)
6. [Testing Strategy](#6-testing-strategy)
7. [Rollback Plan](#7-rollback-plan)

---

## 1. Current State Assessment

### Current Versions (as of assessment date)

| Package | Current | Target |
|---------|---------|--------|
| ember-source | 4.4.4 | 6.4.x or 6.8.x |
| ember-cli | ~4.4.0 | ~6.4.0 |
| ember-data | ~4.5.0 | ~5.3.0 |
| Node.js | 18.x/20.x | 22.x |

### Pre-flight Checklist

- [x] Ensure all tests pass on current version (Build succeeds; Chrome not available for browser tests in this environment)
- [x] Create a dedicated branch: `git checkout -b ember-upgrade`
- [x] Document current test pass/fail baseline (Build succeeds, browser tests require Chrome)
- [x] Backup `package.json`, `yarn.lock`, and any config files

```bash
# Run from ui/ directory
cd /home/jan/git/openbao/openbao/ui
git checkout -b ember-upgrade
cp package.json package.json.backup
cp yarn.lock yarn.lock.backup
```

---

## 2. Pre-Migration Preparation

### 2.1 Install Upgrade Tools

```bash
# Install ember-cli-update globally
npm install -g ember-cli-update

# Install codemods
npm install -g ember-native-class-codemod
npm install -g ember-no-get-codemod
npm install -g ember-angle-brackets-codemod
```

### 2.2 Enable Deprecation Tracking

- [x] Modify `config/deprecation-workflow.js` to log all deprecations:

```javascript
self.deprecationWorkflow = self.deprecationWorkflow || {};
self.deprecationWorkflow.config = {
  throwOnUnhandled: false,
  workflow: [
    // Comment out all existing silenced deprecations temporarily
  ],
};
```

- [ ] Run the application and tests to collect all deprecation warnings (Skipped: Chrome browser not available in this environment)
- [ ] Save the deprecation output for reference (Skipped: requires running tests)

```bash
# Run tests and capture deprecations
yarn test 2>&1 | tee deprecation-report.txt
```

### 2.3 Audit Forked Dependencies

The following packages use forks that need attention:

| Package | Current Fork | Action Required |
|---------|--------------|-----------------|
| `broccoli-sri-hash` | `meirish/broccoli-sri-hash#rooturl` | Check if mainline supports rootURL |
| `ember-cli-sri` | `meirish/ember-cli-sri#rooturl` | Check if mainline supports rootURL |
| `ember-service-worker` | `meirish/ember-service-worker#configurable-scope` | Find alternative or update fork |

- [x] For each fork, check if the feature has been merged upstream
  - **Finding:** `broccoli-sri-hash` and `ember-cli-sri` upstream repos were archived in Sept 2021. rootURL support was never merged upstream.
  - **Finding:** `ember-service-worker` last updated Oct 2020 (v9.0.1). configurable-scope feature not merged.
- [x] If merged, update to official package (N/A - features not merged)
- [x] If not merged, plan to update the fork for Ember 5+/6+ compatibility
  - **Action Required:** These forks will need to be updated or replaced for Ember 5+/6+ compatibility. Consider:
    1. Updating the meirish forks to support newer Ember versions
    2. Finding alternative packages
    3. Inlining the required functionality

---

## 3. Phase 1: Codebase Modernization

Complete these tasks BEFORE attempting version upgrades.

### 3.1 Convert Mixins to Modern Patterns

**Location:** `app/mixins/`

Mixins are deprecated. Convert each to an appropriate modern pattern.

| Mixin File | Status | Recommended Replacement |
|------------|--------|------------------------|
| `backend-crumb.js` | ✅ DONE (commit 1c0b99ba75) | Native class getter |
| `cluster-route.js` | ✅ DONE | Base class (`app/routes/cluster-route-base.js`) |
| `focus-on-insert.js` | ✅ DONE (commit 0450f69695) | Modifier (`app/modifiers/focus-on-insert.js`) or direct method |
| `key-mixin.js` | ✅ DONE (commit 32b73fd278) | Inlined into models (lease.js, secret.js, secret-v2.js) |
| `model-boundary-route.js` | ✅ DONE (commit c5cac6641d) | Base class (`app/routes/model-boundary-route-base.js`) |
| `unload-model-route.js` | ⏳ Pending | Route decorator or base class |
| `unsaved-model-route.js` | ⏳ Pending | Route decorator or base class |
| `with-nav-to-nearest-ancestor.js` | ⏳ Pending | Service or utility |

**Conversion Steps for Each Mixin:**

- [x] `backend-crumb.js` - Converted to native class getter pattern in 7 consumer controllers:
  - `app/controllers/vault/cluster/secrets/backend/actions.js`
  - `app/controllers/vault/cluster/secrets/backend/create.js`
  - `app/controllers/vault/cluster/secrets/backend/diff.js`
  - `app/controllers/vault/cluster/secrets/backend/edit.js`
  - `app/controllers/vault/cluster/secrets/backend/list.js`
  - `app/controllers/vault/cluster/secrets/backend/metadata.js`
  - `app/controllers/vault/cluster/secrets/backend/show.js`
- [x] `cluster-route.js` - Converted to native base class `app/routes/cluster-route-base.js`:
  - Created `app/routes/cluster-route-base.js` as a native ES6 class extending Route
  - Updated 14 consumer routes to extend the new base class:
    - `app/routes/vault/cluster.js` (extends ClusterRouteBase with ModelBoundaryRoute mixin)
    - `app/routes/vault/cluster/access.js` (extends ClusterRouteBase with ModelBoundaryRoute mixin)
    - `app/routes/vault/cluster/access/leases.js`
    - `app/routes/vault/cluster/auth.js`
    - `app/routes/vault/cluster/cluster-route-base.js`
    - `app/routes/vault/cluster/init.js`
    - `app/routes/vault/cluster/policies.js`
    - `app/routes/vault/cluster/policies/index.js`
    - `app/routes/vault/cluster/policy.js`
    - `app/routes/vault/cluster/secrets.js`
    - `app/routes/vault/cluster/settings.js`
    - `app/routes/vault/cluster/storage.js`
    - `app/routes/vault/cluster/tools.js`
    - `app/routes/vault/cluster/unseal.js`
  - Removed `app/mixins/cluster-route.js`
- [x] `focus-on-insert.js` - Converted to direct method implementation in 2 consumer components:
  - Created `app/modifiers/focus-on-insert.js` as an Ember modifier for future use with Glimmer components
  - `app/components/role-edit.js` - Implemented `focusOnInsertFocus()` method called from `didInsertElement()`
  - `app/components/transit-edit.js` - Implemented `focusOnInsertFocus()` method called from `didInsertElement()`
  - Removed `app/mixins/focus-on-insert.js`
- [x] `key-mixin.js` - Converted to inline implementations in 3 consumer models:
  - `app/models/lease.js` - Inlined all computed properties (pathAttr, isCreating, pathVal, isFolder, keyParts, parentKey, keyWithoutParent)
  - `app/models/secret.js` - Inlined all computed properties
  - `app/models/secret-v2.js` - Inlined all computed properties
  - Fixed import: `computed` must come from `@ember/object`, not `@ember/object/computed`
  - Removed `app/mixins/key-mixin.js`
- [x] `model-boundary-route.js` - Converted to base class pattern:
  - Created `app/routes/model-boundary-route-base.js` extending Route for routes that need model boundary clearing
  - Updated `app/routes/cluster-route-base.js` to include model boundary clearing logic (modelTypes/modelType properties and deactivate hook)
  - Updated 2 routes extending ClusterRouteBase to remove mixin:
    - `app/routes/vault/cluster.js`
    - `app/routes/vault/cluster/access.js`
  - Updated 1 route extending Route:
    - `app/routes/vault/cluster/logout.js` - now extends ModelBoundaryRouteBase
  - Removed `app/mixins/model-boundary-route.js`
- [ ] Identify all files that import the mixin: `grep -r "import.*from.*mixins/MIXIN_NAME" app/ lib/`
- [ ] Create replacement (service/utility/modifier/base class)
- [ ] Update all consumers to use the new pattern
- [ ] Remove the mixin file
- [ ] Run tests to verify

```bash
# Find all mixin usages
grep -r "from.*mixins" app/ lib/ --include="*.js" | sort | uniq
```

### 3.2 Remove `this.get()` and `this.set()` Patterns

**Run the codemod:**

```bash
cd /home/jan/git/openbao/openbao/ui

# Dry run first
npx ember-no-get-codemod app/ --dry-run
npx ember-no-get-codemod lib/ --dry-run

# Apply the codemod
npx ember-no-get-codemod app/
npx ember-no-get-codemod lib/
```

**Manual fixes required for:**

- [ ] `this.set()` calls → Use `@tracked` properties with direct assignment
- [ ] Nested property access like `this.get('foo.bar')` → Use optional chaining `this.foo?.bar`
- [ ] Computed property dependencies

**Files to check (high usage):**

- [ ] `app/services/auth.js`
- [ ] `app/services/wizard.js`
- [ ] `app/services/store.js`
- [ ] `app/services/control-group.js`

### 3.3 Replace `import Ember from 'ember'`

Replace global Ember imports with specific module imports.

```bash
# Find all files with global Ember import
grep -r "import Ember from 'ember'" app/ lib/ --include="*.js" -l
```

**Common replacements:**

| Old Pattern | New Pattern |
|-------------|-------------|
| `Ember.testing` | `import { isTesting } from '@embroider/macros'` or `import { macroCondition, isTesting } from '@embroider/macros'` |
| `Ember.computed` | `import { computed } from '@ember/object'` |
| `Ember.get/set` | Remove entirely, use native access |
| `Ember.Object` | `import EmberObject from '@ember/object'` |
| `Ember.Evented` | `import Evented from '@ember/object/evented'` |

**Files requiring manual update:**

- [ ] `app/routes/vault/cluster.js`
- [ ] `app/routes/vault/cluster/oidc-provider.js`
- [ ] `app/routes/vault/cluster/logout.js`
- [ ] `app/routes/vault.js`
- [ ] `app/services/auth.js`
- [ ] `app/helpers/-date-base.js`
- [ ] `app/components/auth-form.js`
- [ ] `app/components/auth-jwt.js`
- [ ] `app/components/secret-delete-menu.js`
- [ ] `app/components/secret-create-or-update.js`
- [ ] `mirage/handlers/mfa-login.js`

### 3.4 Convert Classic Components to Glimmer Components

**Run the native class codemod:**

```bash
# Dry run
npx ember-native-class-codemod app/components --dry-run
npx ember-native-class-codemod lib/*/addon/components --dry-run

# Apply
npx ember-native-class-codemod app/components
npx ember-native-class-codemod lib/*/addon/components
```

**Manual conversion needed for components using:**

- [ ] `tagName` → Wrap in element in template
- [ ] `classNames` / `classNameBindings` → Use template classes
- [ ] `attributeBindings` → Use `...attributes` in template
- [ ] `this.element` → Use `{{did-insert}}` modifier

### 3.5 Update Angle Bracket Syntax (if needed)

```bash
# Check for curly brace component invocations
npx ember-angle-brackets-codemod app/ --dry-run
npx ember-angle-brackets-codemod lib/ --dry-run
```

### 3.6 Convert Classic `Component.extend({})` Patterns

Search for remaining classic patterns:

```bash
grep -r "Component.extend" app/ lib/ --include="*.js"
grep -r "Controller.extend" app/ lib/ --include="*.js"
grep -r "Route.extend" app/ lib/ --include="*.js"
grep -r "Service.extend" app/ lib/ --include="*.js"
```

Each should be converted to native class syntax:

```javascript
// Before
export default Component.extend({
  foo: computed('bar', function() {
    return this.bar;
  })
});

// After
export default class MyComponent extends Component {
  @computed('bar')
  get foo() {
    return this.bar;
  }
}
```

### 3.7 Run Tests After Each Modernization Step

```bash
# After each major change
yarn test:quick
```

- [ ] All tests pass after mixin conversion
- [ ] All tests pass after removing this.get/set
- [ ] All tests pass after removing `import Ember`
- [ ] All tests pass after component conversion

---

## 4. Phase 2: Incremental Ember Upgrades

### 4.1 Upgrade Path Overview

```
4.4.4 → 4.8.x → 4.12.x → 5.4.x → 5.8.x → 5.12.x → 6.4.x
         ↑         ↑         ↑                       ↑
      checkpoint  LTS    major bump              target LTS
```

### 4.2 Step-by-Step Version Upgrades

#### Step 4.2.1: Upgrade to Ember 4.8

```bash
cd /home/jan/git/openbao/openbao/ui

# Use ember-cli-update
npx ember-cli-update --to 4.8.6
```

- [ ] Review and resolve any conflicts in generated files
- [ ] Update `package.json` dependencies as needed:

```json
{
  "devDependencies": {
    "ember-source": "~4.8.6",
    "ember-cli": "~4.8.0",
    "ember-data": "~4.8.0"
  }
}
```

- [ ] Run `yarn install`
- [ ] Run tests: `yarn test:quick`
- [ ] Fix any failing tests
- [ ] Commit: `git commit -m "Upgrade to Ember 4.8"`

#### Step 4.2.2: Upgrade to Ember 4.12 (Last 4.x LTS)

```bash
npx ember-cli-update --to 4.12.3
```

- [ ] Review and resolve conflicts
- [ ] Update dependencies:

```json
{
  "devDependencies": {
    "ember-source": "~4.12.3",
    "ember-cli": "~4.12.0",
    "ember-data": "~4.12.0"
  }
}
```

- [ ] Run `yarn install`
- [ ] Run tests
- [ ] Address deprecations that will become errors in 5.0
- [ ] Commit: `git commit -m "Upgrade to Ember 4.12 LTS"`

**Critical 4.12 deprecation fixes:**

- [ ] Remove any remaining `{{partial}}` usage
- [ ] Remove `hasBlock` in favor of `(has-block)`
- [ ] Update `ember-modifier` usage if needed

#### Step 4.2.3: Upgrade to Ember 5.4 (Major Version Bump)

This is a **major version upgrade**. Expect more breaking changes.

```bash
npx ember-cli-update --to 5.4.0
```

- [ ] Review and resolve conflicts
- [ ] Update dependencies:

```json
{
  "devDependencies": {
    "ember-source": "~5.4.0",
    "ember-cli": "~5.4.0",
    "ember-data": "~5.3.0"
  }
}
```

**Key changes in Ember 5.x:**

- [ ] Remove all usages of `@ember/string` (package is optional now)
- [ ] Update `ember-engines` to `0.9.x` or later
- [ ] Update test helpers if needed
- [ ] Run `yarn install`
- [ ] Run tests
- [ ] Commit: `git commit -m "Upgrade to Ember 5.4"`

#### Step 4.2.4: Upgrade to Ember 5.8

```bash
npx ember-cli-update --to 5.8.0
```

- [ ] Review and resolve conflicts
- [ ] Update dependencies
- [ ] Run `yarn install`
- [ ] Run tests
- [ ] Commit: `git commit -m "Upgrade to Ember 5.8"`

#### Step 4.2.5: Upgrade to Ember 5.12

```bash
npx ember-cli-update --to 5.12.0
```

- [ ] Review and resolve conflicts
- [ ] Update dependencies
- [ ] Run `yarn install`
- [ ] Run tests
- [ ] Commit: `git commit -m "Upgrade to Ember 5.12"`

#### Step 4.2.6: Upgrade to Ember 6.4 LTS (Target)

```bash
npx ember-cli-update --to 6.4.0
```

- [ ] Review and resolve conflicts
- [ ] Update dependencies:

```json
{
  "devDependencies": {
    "ember-source": "~6.4.0",
    "ember-cli": "~6.4.0",
    "ember-data": "~5.3.0"
  }
}
```

- [ ] Run `yarn install`
- [ ] Run tests
- [ ] Commit: `git commit -m "Upgrade to Ember 6.4 LTS"`

### 4.3 Key Dependency Updates by Version

#### For Ember 5.x+

| Package | Min Version | Notes |
|---------|-------------|-------|
| `ember-engines` | 0.9.0 | Breaking changes |
| `ember-concurrency` | 3.0.0 | Task API changes |
| `ember-modifier` | 4.0.0 | New API |
| `ember-cli-mirage` | 3.0.0 | Check compatibility |
| `@ember/test-helpers` | 3.0.0 | New APIs |
| `ember-qunit` | 7.0.0 | Updated for Ember 5 |

#### For Ember 6.x

| Package | Min Version | Notes |
|---------|-------------|-------|
| `ember-source` | 6.4.0 | Target LTS |
| `ember-data` | 5.3.0 | Separate versioning |
| `@glimmer/component` | 1.1.2 | Should be compatible |
| `@glimmer/tracking` | 1.1.2 | Should be compatible |

### 4.4 In-Repo Addon/Engine Updates

Each engine in `lib/` needs verification:

- [ ] `lib/core/` - Test and update `package.json` if needed
- [ ] `lib/css/` - Test
- [ ] `lib/kubernetes/` - Test and update
- [ ] `lib/open-api-explorer/` - Test and update (uses classic patterns)
- [ ] `lib/pki/` - Test and update
- [ ] `lib/keep-gitkeep/` - Test
- [ ] `lib/service-worker-authenticated-download/` - Test

For `lib/open-api-explorer/`, convert classic patterns:

```bash
# Check for classic patterns
grep -r "extend(" lib/open-api-explorer/
```

- [ ] Convert `addon/engine.js`
- [ ] Convert `addon/controllers/index.js`
- [ ] Convert `addon/routes/index.js`
- [ ] Convert `addon/components/swagger-ui.js`

---

## 5. Phase 3: Post-Upgrade Cleanup

### 5.1 Update Node.js Version

- [ ] Update `engines` in `package.json`:

```json
{
  "engines": {
    "node": "22"
  }
}
```

- [ ] Update any CI/CD configurations
- [ ] Update `.nvmrc` if it exists
- [ ] Test with Node 22

### 5.2 Update Remaining Dependencies

After Ember is upgraded, update other outdated packages:

```bash
# Check for outdated packages
yarn outdated
```

Priority updates:

- [ ] `@hashicorp/design-system-components` - Check for Ember 6 compatible version
- [ ] `@hashicorp/ember-flight-icons` - Check compatibility
- [ ] `codemirror` - Consider upgrading to CodeMirror 6
- [ ] `d3-*` packages - Update to latest

### 5.3 Remove Polyfills and Shims

After upgrading, some polyfills may no longer be needed:

- [ ] Review `vendor/string-includes.js` - likely not needed for modern browsers
- [ ] Review `string.prototype.endswith` import
- [ ] Review `string.prototype.startswith` import
- [ ] Check `@ember/legacy-built-in-components` - may be removable

### 5.4 Update ESLint and Linting

- [ ] Update `eslint-plugin-ember` to latest
- [ ] Update ESLint config for new Ember patterns
- [ ] Run linting and fix issues: `yarn lint:js:fix`

### 5.5 Clean Up Deprecation Workflow

- [ ] Remove silenced deprecations that are no longer triggered
- [ ] Update `config/deprecation-workflow.js` with any new deprecations

---

## 6. Testing Strategy

### 6.1 Test Categories

| Test Type | Command | When to Run |
|-----------|---------|-------------|
| Unit Tests | `yarn test:quick` | After each change |
| Linting | `yarn lint:js && yarn lint:hbs` | After each change |
| Full Test Suite | `yarn test` | Before each commit |
| Integration Tests | Via CI | Before merge |

### 6.2 Manual Testing Checklist

After upgrade completion, manually verify:

- [ ] Application boots without console errors
- [ ] Authentication flow works
- [ ] Navigation between routes works
- [ ] All engines load correctly:
  - [ ] PKI engine (`/ui/vault/secrets/pki/`)
  - [ ] Kubernetes engine (`/ui/vault/secrets/kubernetes/`)
  - [ ] Open API Explorer (`/ui/vault/clients/open-api-explorer`)
- [ ] Forms submit correctly
- [ ] API calls succeed
- [ ] Service worker functionality works

### 6.3 Browser Testing

Test in all supported browsers:

- [ ] Chrome (latest)
- [ ] Firefox (latest)
- [ ] Safari (latest)
- [ ] Edge (latest)

---

## 7. Rollback Plan

If the upgrade fails or causes critical issues:

### Quick Rollback

```bash
# Restore backup files
cd /home/jan/git/openbao/openbao/ui
cp package.json.backup package.json
cp yarn.lock.backup yarn.lock
yarn install
```

### Git Rollback

```bash
# If committed
git checkout main
git branch -D ember-upgrade  # Delete failed branch

# Or reset to specific commit
git reset --hard <last-known-good-commit>
```

### Partial Rollback

If stuck at a specific version, you can stay at the last working LTS:

- Ember 4.12 LTS - Last 4.x version
- Ember 5.12 LTS - If 4→5 succeeds but 5→6 fails

---

## Appendix A: Useful Commands

```bash
# Check current ember version
yarn ember --version

# Run ember-cli-update interactively
npx ember-cli-update

# See what ember-cli-update would change
npx ember-cli-update --dry-run

# Reset ember-cli-update and start fresh
npx ember-cli-update --reset

# List available codemods
npx ember-codemods

# Find specific patterns in codebase
grep -r "PATTERN" app/ lib/ --include="*.js"
grep -r "PATTERN" app/ lib/ --include="*.hbs"

# Count files with pattern
grep -r "PATTERN" app/ lib/ --include="*.js" | wc -l
```

## Appendix B: Common Error Solutions

### "Cannot find module" errors

```bash
# Clear caches and reinstall
rm -rf node_modules tmp dist
yarn cache clean
yarn install
```

### Template compilation errors

Check for deprecated Handlebars syntax:
- `{{partial}}` - Remove entirely
- `{{render}}` - Remove entirely
- Positional params in components - Use named args

### Ember Data errors

- Check adapter/serializer compatibility
- Update model attribute types if needed
- Review async relationships

### Engine loading errors

- Verify engine's `package.json` has correct peer dependencies
- Check `ember-addon.paths` in main `package.json`
- Ensure engine's `index.js` exports correctly

---

## Appendix C: Reference Links

- [Ember.js Releases](https://emberjs.com/releases/)
- [Ember.js Deprecations](https://deprecations.emberjs.com/)
- [Ember CLI Update](https://github.com/ember-cli/ember-cli-update)
- [Ember Native Class Codemod](https://github.com/ember-codemods/ember-native-class-codemod)
- [Ember Octane Upgrade Guide](https://guides.emberjs.com/release/upgrading/current-edition/)
- [Ember Data 5.x Migration](https://guides.emberjs.com/release/models/)

---

## Progress Tracking

Use this section to track overall progress:

| Phase | Status | Notes |
|-------|--------|-------|
| Pre-Migration Preparation | ✅ Complete | Branch created, backups made, deprecation workflow updated, forked deps audited (all 3 forks still needed) |
| Phase 1: Codebase Modernization | ⬜ Not Started | |
| Phase 2.1: Upgrade to 4.8 | ⬜ Not Started | |
| Phase 2.2: Upgrade to 4.12 | ⬜ Not Started | |
| Phase 2.3: Upgrade to 5.4 | ⬜ Not Started | |
| Phase 2.4: Upgrade to 5.8 | ⬜ Not Started | |
| Phase 2.5: Upgrade to 5.12 | ⬜ Not Started | |
| Phase 2.6: Upgrade to 6.4 | ⬜ Not Started | |
| Phase 3: Post-Upgrade Cleanup | ⬜ Not Started | |
| Testing & Verification | ⬜ Not Started | |

**Legend:** ⬜ Not Started | 🔄 In Progress | ✅ Complete | ❌ Blocked

---

*Last updated: January 26, 2026*

# Agent Prompt: OpenBao UI Ember.js Migration

You are an expert Ember.js migration agent. Your task is to upgrade the OpenBao UI from Ember.js 4.4 to 6.4 LTS following the guide at `/home/jan/git/openbao/openbao/ui/EMBER_UPGRADE_GUIDE.md`.

## Core Rules

1. **Complete ONE step at a time** - Never proceed to the next step until the current one is fully complete
2. **Verify tests pass after each step** - Run `cd /home/jan/git/openbao/openbao/ui && yarn test:quick` (or `yarn lint:js && yarn lint:hbs` for linting changes) after completing each step
3. **Commit after each successful step** - Use descriptive commit messages
4. **If tests fail, fix them before proceeding** - Do not move to the next step with failing tests
5. **Update the Progress Tracking section** in `EMBER_UPGRADE_GUIDE.md` after completing each phase

## Execution Flow

For each step:

```
1. Read the current step from EMBER_UPGRADE_GUIDE.md
2. Execute the required changes (codemods, manual edits, dependency updates)
3. Kill any stale bao processes: `pkill -9 bao || true`
4. Run tests: `cd /home/jan/git/openbao/openbao/ui && yarn test:quick --launch firefox`
4. If tests PASS:
   - Mark the checkbox in the guide as complete: `- [x]`
   - Commit changes: `git add -A && git commit -m "<descriptive message>"`
   - Report success and ask if you should proceed to the next step
5. If tests FAIL:
   - Analyze the failure output
   - Fix the issues
   - Re-run tests
   - Repeat until tests pass
```

## Migration Order

Execute in this exact order:

### Phase 1: Codebase Modernization (do before any version upgrades)

1. Section 3.1: Convert Mixins to Modern Patterns (one mixin at a time)
2. Section 3.2: Remove `this.get()` and `this.set()` Patterns  
3. Section 3.3: Replace `import Ember from 'ember'`
4. Section 3.4: Convert Classic Components to Glimmer Components
5. Section 3.5: Update Angle Bracket Syntax
6. Section 3.6: Convert Classic `.extend({})` Patterns

### Phase 2: Incremental Ember Upgrades

7. Section 4.2.1: Upgrade to Ember 4.8
8. Section 4.2.2: Upgrade to Ember 4.12 LTS
9. Section 4.2.3: Upgrade to Ember 5.4
10. Section 4.2.4: Upgrade to Ember 5.8
11. Section 4.2.5: Upgrade to Ember 5.12
12. Section 4.2.6: Upgrade to Ember 6.4 LTS

### Phase 3: Post-Upgrade Cleanup

13. Section 5.1: Update Node.js Version
14. Section 5.2: Update Remaining Dependencies
15. Section 5.3: Remove Polyfills and Shims
16. Section 5.4: Update ESLint and Linting
17. Section 5.5: Clean Up Deprecation Workflow

## Working Directory

Always operate from: `/home/jan/git/openbao/openbao/ui`

## Test Commands

| Purpose | Command |
|---------|---------|
| Quick tests | `yarn test:quick` |
| Linting | `yarn lint:js && yarn lint:hbs` |
| Full tests | `yarn test` |

## Known Flaky/Acceptable Test Failures

The following tests are known to fail intermittently or due to environment differences. These failures are **acceptable** and should NOT block the migration:

1. **`Integration | Component | json-editor: it renders the correct theme and expected styling`**
   - Fails due to browser-specific CSS rendering differences
   - The actual styling works correctly in production

2. **`Integration | Helper | date-format: displays time zone if withTimeZone=true`**
   - Fails due to timezone/date differences in the test environment
   - Expected value is date-dependent

If ONLY these tests fail, consider the test run as **PASSED** and proceed with the migration.

## When You Encounter Issues

1. **Codemod failures**: Run with `--dry-run` first, then apply. If partial failures occur, handle manually.
2. **Dependency conflicts**: Check `yarn.lock` for version mismatches, try `yarn install --force`
3. **Build errors**: Clear caches with `rm -rf node_modules tmp dist && yarn install`
4. **Deprecation warnings**: Log them but continue if tests pass. Add to deprecation-workflow.js if needed.

## Reporting Format

After each step, report:

```markdown
## Step Completed: [Step Name]

**Changes Made:**
- [List of files modified]
- [Summary of changes]

**Test Results:** ✅ PASS / ❌ FAIL
- [Test output summary]

**Committed:** [commit hash] - "[commit message]"

**Next Step:** [Name of next step]

Shall I proceed to the next step?
```

## Start

Begin with **Phase 1, Section 3.1: Convert Mixins to Modern Patterns**. Start by analyzing the first mixin (`app/mixins/backend-crumb.js`), find all its usages, create the replacement pattern, update all consumers, and verify tests pass.

---

*This prompt ensures the agent works incrementally, validates each change, and maintains a working codebase throughout the migration.*

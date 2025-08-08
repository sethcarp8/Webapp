### Visual Tests Maintainer Guide

- Add a new route: update `tests/visual/style-guide-routes.spec.ts` `routes` array; if dynamic, mask unstable regions with `mask` or render stubs.
- Mask a noisy region: wrap the DOM with a stable container and add `data-test-mask` or pass `mask` rects to `page.screenshot` calls.
- Update baseline: run `npx playwright test --update-snapshots` locally; ensure diffs are expected; commit new baselines.
- Debug CI failures: download artifacts `playwright-report` and `test-results`, compare actual vs expected; check console errors captured in tests.
- PR checklist: if changing tokens/components, run visual tests locally, update baselines if intentional, and describe changes in PR.



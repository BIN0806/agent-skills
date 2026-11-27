---
name: configure-project-checks
description: "Set up or repair requested pre-commit, lint, formatting, type-check or test integration using a project's existing toolchain."
license: MIT
---

# Configure project checks

- Inspect the package manager and lockfile, existing hooks, formatter settings, check commands and CI workflow. Identify the missing connection or failure before adding tooling.
- Reuse working project tools and preserve existing hook behavior. In a JavaScript or TypeScript project that requests Husky and lint-staged, use the current package manager and the documented versions, add only needed development dependencies, and merge the staged-file configuration with existing rules.
- Keep fast staged checks at commit time and place slower checks according to the project's workflow. A missing test or type-check command is a reported gap. Preserve the project's formatting choices when wiring its formatter into a hook.
- Verify that a clean fixture passes, a representative violation fails, and restoring it returns the check to green. Use disposable or explicitly staged test files so unrelated staged work is preserved. Report required setup for other contributors and CI.

Changing an agent's permission hooks or global Git configuration is a separate requested operation. Repository checks enforce the project's workflow and have their own actual execution boundaries.

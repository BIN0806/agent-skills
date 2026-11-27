---
name: verify-behavior
description: "Prove a feature or fix through observable behavior; write regression tests or create and maintain a project verification procedure. Use when asked to test behavior, apply TDD, or demonstrate acceptance."
license: MIT
---

# Verify behavior

- Translate the request into observable acceptance criteria. Find the project's real entry points, test commands, fixtures and service prerequisites. Choose the narrowest check that actually runs the behavior. Use expected results derived from a requirement, a worked example, a contract or an independent invariant.
- For requested TDD or an obvious cheap regression target, capture the failing behavior first, change the smallest relevant path, and run the same check again. If a before run is impractical, state why and use the strongest substitute. A source-text assertion, a mock-only round trip, or a type check alone does not demonstrate unrelated runtime behavior.
- In TDD, work one observable behavior at a time through the real interface. Use the result to choose the next slice, and refactor when the passing checks support it. Prefer existing test boundaries. State material coverage limits and clarify a new boundary when it changes the promised behavior.
- Use real internal collaborators where practical and substitutes at external boundaries, time or randomness when needed for a reliable check. Build expected results from the requirement or an independent example. Coverage should survive an internal refactor that preserves behavior.
- For UI and integrated flows, exercise the actual user steps with isolated test data and assert the resulting screen, state or response. Keep meaningful artifacts only when useful and authorized. Separate baseline failures, skipped checks and confirmed results.
- For reusable project verification, use [the feature-map procedure](references/feature-map.md).

Report the exact commands, observed outcomes, and what remains unverified. Stop when the acceptance evidence is sufficient for the change's risk.

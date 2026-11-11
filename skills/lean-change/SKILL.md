---
name: lean-change
description: "Find the smallest complete implementation when asked to simplify a change, avoid overengineering, or choose between existing code, platform features, and new dependencies."
license: MIT
---

# Lean change

1. State the required behavior and trace the callers, tests, configuration, and public contracts it affects. Keep existing compatibility where it is required.
2. Try, in order: eliminate unnecessary work; reuse the repository's pattern; use the platform or an existing dependency; add the smallest readable implementation. Favor removing duplicate work and single-purpose pass-through layers. Add a dependency or abstraction only when it pays for a concrete requirement.
3. Preserve validation at trust boundaries, authorization, accessibility, and error handling that protects user data. Prefer a direct readable change to a clever short one. Complete all necessary caller and fixture updates.
4. Check the affected behavior. For meaningful logic, prefer a small check that would fail on the wrong result; scale the effort to the risk.

If intentionally leaving a safe temporary limit, record it only when the limitation and trigger matter to a future reader: `shortcut: <known ceiling>, <condition that warrants an upgrade>`. Never use a marker to excuse broken acceptance criteria. Mention any consequential tradeoff and what was checked. Keep this guidance scoped to the requested task; no session-mode state is needed.

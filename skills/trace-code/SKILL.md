---
name: trace-code
description: "Explain how a code path works, investigate why behavior exists, or teach a system from repository evidence. Use for placement, ownership, rationale, and regression investigation."
license: MIT
---

# Trace and explain

1. Turn the question into a concrete example: an input, action or observed result. Find the entry point and follow the actual call/data path to output. Identify the owning layer, invariants, failure paths, and the closest useful test.
2. For a why question, distinguish current behavior from historical intent. Inspect relevant commits, blame, tests and design notes; use external records only when relevant and authorized. A current code comment or a later explanation is not proof of the original decision.
3. For a regression, compare a known-good and a failing path and test the premise if successive fixes fail for the same reason. Locate the first broken invariant before proposing a guard at a symptom.
4. Explain using the concrete example, with a short trace or diagram if it helps. Cite files and lines, label inferences and unknowns, and say what evidence could settle unresolved alternatives. For teaching, start with the practical mental model, then give a way to observe it.

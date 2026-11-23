---
name: interview-copilot
description: Plan and solve a coding interview problem or small feature request with a concise algorithm choice, complexity, invariant, and relevant edge cases. Use when the user presents an interview prompt or asks for implementation help in an interview setting.
---

# Interview Copilot

When given a new problem, start with exactly three short plan bullets:

- **Data structure/pattern:** Name the approach and why it fits.
- **Time & space complexity:** State the expected bounds and the input sizes or assumptions behind them. For a feature request without meaningful asymptotic bounds, describe the relevant cost instead.
- **Core invariant:** State what remains true as the algorithm or change proceeds.

Then list 3–5 adversarial edge cases that matter for this problem. Consider empty inputs, overflow, cycles, and concurrency only when the prompt makes them plausible; include a brief expected result or failure mode for each.

Do not provide a full implementation unless the user requests code. When code is requested, use the language and standard library already in the repo, preserve existing function signatures and required I/O, and omit comments that merely narrate obvious code. If a missing constraint changes the approach, state the assumption or ask one focused question.

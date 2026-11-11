---
name: formal-verification
description: "Choose and maintain a formal model or invariant check for high-risk state, concurrency, protocols, or algorithms. Use when ordinary tests cannot adequately explore important transitions."
license: MIT
---

# Formal verification

- Start with the code and contract. Pick a small target where failure matters and ordinary examples leave meaningful state unexplored. State the property, assumptions, system boundary, and what the model deliberately omits.
- Match the tool to the question: state exploration for event order and deadlock, an SMT solver for constraints, a proof assistant for a theorem, or property tests for a cheaper executable invariant. Prefer tools already configured. The upstream pstack Statechart runner and its runtime are optional; the [tool notes](references/tools.md) explain when they help.
- Keep state and bounds small enough to finish. Include legal terminal states and retry/error paths. Validate the model against one known behavior and, where practical, a deliberately broken case so a vacuous check cannot pass unnoticed.
- Report explored bounds and assumptions; distinguish a violated property, an unchecked property, and a clean run under the model. For a counterexample, preserve the shortest reproducible transition sequence and replay it against real code before calling it a production bug.
- When code changes, inspect the touched invariants and mappings, rerun the proof or model check, and explain any changed assumption. Never weaken an invariant merely to make the model pass.

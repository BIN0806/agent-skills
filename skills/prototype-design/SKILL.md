---
name: prototype-design
description: "Build a small runnable prototype to answer a concrete question about UI choices, state transitions or application logic."
license: MIT
---

# Prototype a design

- State the question and what observation will settle it. Choose an interactive state or logic demo when behavior is uncertain, or comparable UI variations when appearance and interaction are uncertain. Use the existing app conventions where they help the comparison.
- Keep the prototype easy to run and clearly identify it in its path or presentation. Use local synthetic data and in-memory state unless persistence is itself the question. Any external resources should have a disposable scope.
- Expose relevant state after each action, including important edge cases. For UI variants, use consistent content and provide a simple way to compare the alternatives. Implement enough fidelity to answer the question.
- Exercise the demo before delivery and give its exact launch command or artifact path. Record the question, observations, limitations and resulting decision. Preserve a useful prototype according to the user's artifact or branch conventions.

Integrate the validated decision only within the requested implementation scope. A prototype's success establishes evidence for the design question, with production readiness evaluated separately.

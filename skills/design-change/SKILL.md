---
name: design-change
description: "Design or sequence a nontrivial feature, refactor, API migration, or stateful system. Use for architecture decisions, prototypes, integration boundaries, and auditable multi-step plans."
license: MIT
---

# Design a change

- Ground the decision in user-visible success, current call paths, existing conventions and invariants. Name which component owns each piece of state and what crosses the boundary. Sketch interfaces and representative transitions before choosing implementation details.
- Compare plausible options against real examples. Prototype competing solutions only when a cheap comparison would settle a consequential question. Prefer eliminating shared writers to coordinating them; for retryable work, define what happens after interruption and how repeated requests converge.
- Make the design fit the domain. Validate external data at entry points; model internal states with meaningful types and explicit transitions. If the old abstraction does not fit, reconsider it before adding another exception.
- Sequence a migration into units with demonstrable end states: build the narrow replacement, migrate known callers, verify compatibility, then remove legacy code when the external contract permits. Keep compatibility windows explicit if independent deployments require them.
- Leave an actionable plan: affected boundaries and callers, decisions and alternatives, evidence needed per unit, and a stop or rollback point. For a proposal-only request, stop at the design. For an implementation request, revise the plan when evidence changes.

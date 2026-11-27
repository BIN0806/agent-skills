---
name: plan-delivery
description: "Turn an agreed idea or conversation into a specification, dependency-aware implementation tickets, or a map of unresolved decisions for a large effort."
license: MIT
---

# Plan delivery

- Read the existing conversation, current behavior and project conventions. Preserve resolved decisions. Distinguish a clear feature ready to specify from a large effort whose important decisions still need research, a prototype or user input.
- For a specification, describe the user's problem, desired behavior, acceptance criteria, constraints, implementation decisions, verification approach and explicit exclusions. Match detail to the feature. Link the source decisions and any runnable prototype that establishes them.
- Break implementation into small units that demonstrate a complete behavior across the layers they need. Each ticket should state its outcome, acceptance evidence and actual blockers. Keep dependencies acyclic and include only edges that prevent work from starting.
- For a broad mechanical migration, consider an expand, migrate, contract sequence. Keep compatibility while callers move, then remove the old form after verification. If intermediate changes require a shared integration branch, identify the final check that establishes compatibility.
- For unresolved large efforts, keep an index of decisions and link their evidence. Record questions that are precise enough to investigate and areas that depend on earlier answers. Advance the plan as answers arrive, without inventing distant implementation detail.

Use the project's existing planning location or return a draft. A remote repository alone does not choose an issue tracker or authorize creating, labeling, closing or assigning issues. During implementation, work only tasks whose blockers are satisfied, verify the integrated result, and close work according to the project's actual completion rules.

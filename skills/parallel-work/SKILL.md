---
name: parallel-work
description: "Plan independent parallel investigations, competing designs, or worker implementation when the user authorizes delegation. Use for swarm, arena, or worktree coordination."
license: MIT
---

# Parallel work

- Check authorization, available workers, and whether dividing the work is worthwhile. Prefer one worker when tasks share critical state or need tight sequencing. Use read-only or sequential local analysis if delegation is unavailable.
- Give each worker a distinct question or owned write surface, an explicit starting revision, context, output format, and stop condition. Use isolated worktrees for independent writes. Avoid concurrent edits to the same file, branch or external state.
- For competing designs, hold input, success criteria, constraints and evidence standards constant. Select a base from evidence and adopt only compatible improvements from alternatives; verify the integrated result.
- Reconcile results against the current source and the original goal, resolve disagreements with targeted checks, and report blocked work. Clean up only disposable resources you own after preserving useful results. Publishing, unattended runs, spending, and external actions still need their own authorization.

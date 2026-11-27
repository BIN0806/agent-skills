---
name: improve-workflow
description: "Turn recurring agent mistakes, repeated manual work, or a requested working preference into a small durable check, tool, or scoped skill. Use for retrospectives and workflow improvements."
license: MIT
---

# Improve a workflow

Collect concrete repeated examples and distinguish a structural failure from a one-off judgment call. State the behavior you want to preserve and the least intrusive place to enforce it. Prefer a better API or type when it rules out the mistake, then an existing lint or executable check where appropriate; use a short instruction for judgment that code cannot express. Reuse existing tools before writing a new helper.

For requested preferences or a reusable skill, capture the trigger, the decision the instruction improves, examples that actually discriminate, and when it should stay out of the way. Keep instruction discovery cheap, add supporting detail only when it earns its cost, and check the resulting workflow against one representative input. Do not convert an incidental user choice into a permanent rule.

When writing agent-facing instructions, state when to read each reference and what decision it supports. Put shared essentials in the entrypoint and branch-specific detail behind a pointer. Give each procedure a checkable completion condition. Keep one authoritative definition of a rule and link it from other places that need it.

For a retrospective, separate observed events from interpretation. Keep a brief record of the mistake class, corrective rule and how to prove the correction works. Propose edits to existing workflows when they fit; do not change global rules, defaults, or scheduling without authorization.

Check whether an existing lint, type-check or test command was unwired or broken before proposing another check. Look for missing navigation context, inaccessible evidence, expensive tool calls and instructions that no longer affect decisions. Rank changes by observed impact and prefer a deterministic check for a mechanical error.

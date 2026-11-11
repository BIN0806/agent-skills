---
name: review-change
description: "Review a diff, PR, or repository for concrete regressions, correctness, safety, performance, maintainability, or blast radius. Produce findings without editing unless asked."
license: MIT
---

# Review a change or repository

- For a diff, establish the correct base and head, then read changed paths, callers and callees, public contracts, relevant tests and runtime config. For a whole-repo audit, map entry points and prioritize flows where failure matters: state writes, authorization boundaries, background jobs and shared state. State the scope and expected load.
- Look first for wrong results, broken callers, data loss, unsafe boundaries, and failures under plausible load. Trace a realistic input or event to each failure. For risky logic, ask whether a check exercises the observable outcome. Separate measured slowdowns from hypotheses.
- Check usage across code, config, fixtures, build rules, and dynamic registrations before declaring code dead. Point out a simpler existing path only when it preserves behavior. A deliberate shortcut is a finding only when the stated ceiling no longer holds or the choice conflicts with requirements.
- For a blast-radius claim, identify the critical invariant that makes the change safe. Exercise the relevant interface or scenario where feasible. For an adversarial review, form competing hypotheses and actively try to disprove each important finding; use additional reviewers only if authorized and available.

Put verified findings first, by impact. For each, give file and line, triggering case, consequence, and a targeted fix. Separate unverified concerns and note meaningful gaps. If nothing is actionable, say what you inspected and tested.

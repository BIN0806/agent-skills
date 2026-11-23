# Skills quick reference

Use this page to choose a skill, open its instructions, and copy an invocation. The catalog contains 24 skills; each link below opens its complete entrypoint.

## Find and invoke a skill

- In a project with the skills installed, use `/skills` to browse or type `$` and the skill name. Start a new chat if a newly installed skill is not visible.
- Preview the published collection with `npx skills add BIN0806/agent-skills --list`.
- Install only what you need, for example `npx skills add BIN0806/agent-skills -a codex --skill vision`.
- For filesystem access, the installed entrypoint is `.agents/skills/<name>/SKILL.md` in a project or `~/.agents/skills/<name>/SKILL.md` globally.
- Read this index first; load the chosen `SKILL.md` and any linked references only when needed.

## Catalog skills

| Skill / instructions | When to use it | Example prompt |
| --- | --- | --- |
| [lean-change](skills/lean-change/SKILL.md) · Implementation | Make the smallest complete change. | `$lean-change Fix this bug with the smallest correct diff.` |
| [review-change](skills/review-change/SKILL.md) · Review | Find concrete regressions and blast radius. | `$review-change Review the current diff.` |
| [shortcut-ledger](skills/shortcut-ledger/SKILL.md) · Review | Inspect deliberate shortcuts and upgrade triggers. | `$shortcut-ledger Inventory shortcuts in this repo.` |
| [design-change](skills/design-change/SKILL.md) · Planning | Choose boundaries and sequence a migration. | `$design-change Plan this API migration.` |
| [vision](skills/vision/SKILL.md) · Planning | Draft and stress-test project direction from history. | `$vision Create and stress-test this project’s vision.` |
| [interview-copilot](skills/interview-copilot/SKILL.md) · Interview | Start with approach, complexity, invariant, and edge cases. | `$interview-copilot Plan this problem; code only when requested.` |
| [interrogate](skills/interrogate/SKILL.md) · Interview | Resolve decision-changing prompt ambiguities. | `$interrogate Find missing constraints in this prompt.` |
| [ponytail](skills/ponytail/SKILL.md) · Interview | Keep interview implementations direct and small. | `$ponytail Implement this using standard library tools.` |
| [how](skills/how/SKILL.md) · Explore | Trace an unfamiliar multi-file flow. | `$how Explain this request path before changing it.` |
| [blast-radius](skills/blast-radius/SKILL.md) · Explore | Find callers and state affected by a structural edit. | `$blast-radius What would this signature change affect?` |
| [systematic-debugging](skills/systematic-debugging/SKILL.md) · Debug | Reproduce a wrong answer or timeout and fix its cause. | `$systematic-debugging Diagnose this failing test.` |
| [unslop](skills/unslop/SKILL.md) · Polish | Remove redundant code narration and wrappers. | `$unslop Polish this diff while preserving behavior.` |
| [verification-before-completion](skills/verification-before-completion/SKILL.md) · Verify | Check relevant tests and edge cases before claiming success. | `$verification-before-completion Verify this implementation.` |
| [trace-code](skills/trace-code/SKILL.md) · Explore | Explain behavior and history from repository evidence. | `$trace-code Explain how this code path works.` |
| [verify-behavior](skills/verify-behavior/SKILL.md) · Verify | Prove observable behavior with focused checks. | `$verify-behavior Reproduce the bug and verify the fix.` |
| [formal-verification](skills/formal-verification/SKILL.md) · Verify | Model a risky invariant or concurrency property. | `$formal-verification Check these state transitions.` |
| [benchmark-performance](skills/benchmark-performance/SKILL.md) · Performance | Measure a fair baseline and isolate a bottleneck. | `$benchmark-performance Verify this speedup claim.` |
| [write-technical-docs](skills/write-technical-docs/SKILL.md) · Documentation | Write practical technical guides and explanations. | `$write-technical-docs Write a setup guide for this project.` |
| [task-handoff](skills/task-handoff/SKILL.md) · Coordination | Capture decisions, progress, and the next action. | `$task-handoff Summarize what is ready and what remains.` |
| [improve-workflow](skills/improve-workflow/SKILL.md) · Workflow | Turn repeated friction into a scoped improvement. | `$improve-workflow Make this repeated step easier.` |
| [typescript-boundaries](skills/typescript-boundaries/SKILL.md) · Types | Validate external data and model distinct states. | `$typescript-boundaries Review this API input boundary.` |
| [parallel-work](skills/parallel-work/SKILL.md) · Coordination | Plan independent workers when delegation is authorized. | `$parallel-work Propose independent subtasks; wait for delegation approval.` |
| [triage-issue](skills/triage-issue/SKILL.md) · Debug | Reproduce and classify a supplied bug report. | `$triage-issue Investigate this bug report locally.` |
| [no-mistakes-delivery](skills/no-mistakes-delivery/SKILL.md) · Delivery | Use a separately installed, configured No Mistakes gate. | `$no-mistakes-delivery Inspect the current gate and report the next action.` |

## Common sequences

| Task | Skills |
| --- | --- |
| Interview practice | `interview-copilot` → `interrogate` → `ponytail` → `verification-before-completion` |
| Existing repository change | `trace-code` → `design-change` when needed → `lean-change` → `review-change` → `verify-behavior` |
| Project direction | `vision`, then apply the approved vision during later design work |
| Wrong answer or timeout | `systematic-debugging` → `verify-behavior` |
| Ready to deliver | `review-change` → `verify-behavior` → `no-mistakes-delivery` in a configured gate project |

## Global companion skills

These companions are installed separately and are not bundled by this catalog’s installer. Availability depends on the machine.

| Skill | Purpose | Invoke / find |
| --- | --- | --- |
| tutor | Short explicit alias for Jane Street Socratic tutoring | `$tutor Teach me dynamic programming.` · `~/.agents/skills/tutor/SKILL.md` |
| [socratic-tutor](https://github.com/janestreet/agent_skills/tree/master/socratic-tutor) | Diagnostic questions, progress tracking, and spaced review | `$socratic-tutor Quiz me on graphs.` · `~/.agents/skills/socratic-tutor/SKILL.md` |
| [skill-inspector](https://github.com/NVIDIA/SkillSpector/tree/main/skills/skill-inspector) | Static security scan plus source review | `$skill-inspector Review this skill: <path or URL>` · `~/.agents/skills/skill-inspector/SKILL.md` |
| [no-mistakes](https://github.com/kunchenguid/no-mistakes) | Full delivery gate; requires its CLI and project setup | `$no-mistakes` · `~/.agents/skills/no-mistakes/SKILL.md` |

Use the short alias `tutor` or `socratic-tutor` for a teaching session. Use `save state` before leaving, then paste that state into a later tutoring chat.

## Important distinctions

- `ponytail` is the compact interview helper in this catalog; `lean-change` is the broader implementation skill.
- `how` is the compact interview walkthrough; `trace-code` also covers historical rationale and regressions.
- `no-mistakes-delivery` is a portable adapter. The full `no-mistakes` CLI is a separate tool and may publish branches or PRs when authorized.
- Vision’s direct board runtime is pinned at `lavish-axi@0.1.98`; its transitive dependencies are not audited by this catalog. See the [security review](docs/security-review.md).

## Give another agent context

```text
Read SKILLS.md to find relevant skills. Read the selected skills/<name>/SKILL.md before working, and load references only when needed. Follow the task’s scope and the repository’s instructions. Explain which skill you selected when that helps me follow the work.
```

For an agent without repository access, attach the selected SKILL.md and its required assets or references. Merely mentioning a filename does not provide its contents.

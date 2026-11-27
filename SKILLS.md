# Skills quick reference

Use this page to choose a skill, open its instructions, and copy an invocation. The catalog contains 34 skills, including Matt Pocock's adapted workflows. Each link below opens its complete entrypoint.

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
| [clarify-requirements](skills/clarify-requirements/SKILL.md) · Planning | Resolve design choices through questions or draft a stakeholder questionnaire. | `$clarify-requirements Stress-test this feature idea.` |
| [plan-delivery](skills/plan-delivery/SKILL.md) · Planning | Write a spec, dependency-aware tickets or a decision map. | `$plan-delivery Turn our agreed feature into small verifiable tickets.` |
| [model-domain](skills/model-domain/SKILL.md) · Planning | Clarify domain terms and record consequential decisions. | `$model-domain Resolve the different meanings of account in this project.` |
| [research-topic](skills/research-topic/SKILL.md) · Research | Investigate a question using primary sources. | `$research-topic Check which API behavior this version supports and cite the source.` |
| [prototype-design](skills/prototype-design/SKILL.md) · Design | Answer one UI or logic question with a runnable demo. | `$prototype-design Let me compare these two state models interactively.` |
| [vision](skills/vision/SKILL.md) · Planning | Draft and stress-test project direction from history. | `$vision Create and stress-test this project’s vision.` |
| [interview-copilot](skills/interview-copilot/SKILL.md) · Interview | Start with approach, complexity, invariant, and edge cases. | `$interview-copilot Plan this problem; code only when requested.` |
| [interrogate](skills/interrogate/SKILL.md) · Interview | Resolve decision-changing prompt ambiguities. | `$interrogate Find missing constraints in this prompt.` |
| [ponytail](skills/ponytail/SKILL.md) · Interview | Keep interview implementations direct and small. | `$ponytail Implement this using standard library tools.` |
| [how](skills/how/SKILL.md) · Explore | Trace an unfamiliar multi-file flow. | `$how Explain this request path before changing it.` |
| [blast-radius](skills/blast-radius/SKILL.md) · Explore | Find callers and state affected by a structural edit. | `$blast-radius What would this signature change affect?` |
| [systematic-debugging](skills/systematic-debugging/SKILL.md) · Debug | Reproduce a wrong answer or timeout and fix its cause. | `$systematic-debugging Diagnose this failing test.` |
| [diagnose-bug](skills/diagnose-bug/SKILL.md) · Debug | Investigate a hard application bug with a reproducible feedback loop. | `$diagnose-bug Find why this request intermittently saves twice.` |
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
| [prepare-pr](skills/prepare-pr/SKILL.md) · Delivery | Explain a diff with behavior evidence and rollout risks. | `$prepare-pr Draft the PR description for this branch.` |
| [configure-project-checks](skills/configure-project-checks/SKILL.md) · Workflow | Repair or add requested hooks and project checks. | `$configure-project-checks Wire our existing formatter into a pre-commit hook.` |
| [teach-topic](skills/teach-topic/SKILL.md) · Learning | Teach through practical exercises, feedback and retrieval. | `$teach-topic Help me practice Vim motions using this course.` |
| [scaffold-exercises](skills/scaffold-exercises/SKILL.md) · Learning | Create exercises, solutions and explanations in a course's existing layout. | `$scaffold-exercises Add a practice exercise for macros.` |

## Common sequences

| Task | Skills |
| --- | --- |
| Interview practice | `interview-copilot` → `interrogate` → `ponytail` → `verification-before-completion` |
| Existing repository change | `trace-code` → `design-change` when needed → `lean-change` → `review-change` → `verify-behavior` |
| Idea to implementation | `clarify-requirements` → `plan-delivery` when needed → `lean-change` → `verify-behavior` → `review-change` → `prepare-pr` |
| Project direction | `vision`, then apply the approved vision during later design work |
| Wrong answer or timeout | `systematic-debugging` → `verify-behavior` |
| Difficult application bug | `diagnose-bug` → `verify-behavior` → `review-change` |
| Create learning material | `teach-topic` for the learning goal, then `scaffold-exercises` when exercises are requested |
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
- `interrogate` focuses on a problem's missing constraints. `clarify-requirements` supports a broader requirements interview or stakeholder questionnaire.
- `systematic-debugging` stays concise for interview solutions. `diagnose-bug` adds minimization, hypotheses and instrumentation for hard application failures.
- `teach-topic` is bundled here for practical lessons and learning workspaces. The separately installed `socratic-tutor` adds its own structured tutoring workflow.
- `no-mistakes-delivery` is a portable adapter. The full `no-mistakes` CLI is a separate tool and may publish branches or PRs when authorized.
- Vision’s direct board runtime is pinned at `lavish-axi@0.1.98`; its transitive dependencies are not audited by this catalog. See the [security review](docs/security-review.md).
- Matt's original skill names, tracker setup and beta workflows are mapped to their curated counterparts or upstream status in [sources.json](sources.json). See the [workflow guide](README.md#matt-pocock-workflows).

## Give another agent context

```text
Read SKILLS.md to find relevant skills. Read the selected skills/<name>/SKILL.md before working, and load references only when needed. Follow the task’s scope and the repository’s instructions. Explain which skill you selected when that helps me follow the work.
```

For an agent without repository access, attach the selected SKILL.md and its required assets or references. Merely mentioning a filename does not provide its contents.

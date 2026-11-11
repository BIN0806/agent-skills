# Agent skills

Fifteen portable skills distilled from Ponytail, pstack, and No Mistakes. Pick the
skill for the job; each entrypoint is self-contained. The three repeated No
Mistakes links were treated as one source.

## Start here

The Skills CLI requires Node.js 22.20 or later. Run these commands from the
project where you want to use the skills. [Skills CLI documentation](https://github.com/vercel-labs/skills/blob/main/docs/commands.md#skills-add).

```sh
npx skills add BIN0806/agent-skills --list
npx skills add BIN0806/agent-skills -a codex \
  --skill lean-change --skill review-change --skill verify-behavior
```

Start with **lean-change**, **review-change**, and **verify-behavior**. Add
**no-mistakes-delivery** only for projects where you use the separate gate.
For example: “Use lean-change to fix the reported bug, then verify-behavior to
show the failing case passes.” In Codex, select an installed skill by name in
the skill picker. Installing a skill from this collection adds its instructions;
it does not install a CLI, change global rules, or start an automation.

## What to use

| Skill | Use it for |
| --- | --- |
| [lean-change](skills/lean-change/SKILL.md) | Make the smallest complete change, reusing the project or platform where possible. |
| [review-change](skills/review-change/SKILL.md) | Review a diff or whole repo, trace blast radius, and report concrete failures. |
| [shortcut-ledger](skills/shortcut-ledger/SKILL.md) | Inventory intentional shortcuts, their limits, and missing upgrade triggers. |
| [design-change](skills/design-change/SKILL.md) | Decide boundaries, compare designs, and sequence a migration. |
| [trace-code](skills/trace-code/SKILL.md) | Explain how or why behavior exists, teach a code path, or investigate a regression. |
| [verify-behavior](skills/verify-behavior/SKILL.md) | Prove the user-visible outcome, write a regression check, or maintain a verification map. |
| [formal-verification](skills/formal-verification/SKILL.md) | Model a tricky invariant, check interleavings, or replay a counterexample. |
| [benchmark-performance](skills/benchmark-performance/SKILL.md) | Measure a real baseline, isolate the bottleneck, and substantiate a speed claim. |
| [write-technical-docs](skills/write-technical-docs/SKILL.md) | Write practical docs or restate a technical explanation in plain language. |
| [task-handoff](skills/task-handoff/SKILL.md) | Catch up, track important decisions, and leave a usable handoff. |
| [improve-workflow](skills/improve-workflow/SKILL.md) | Turn recurring mistakes or preferences into a scoped instruction, tool, or check. |
| [typescript-boundaries](skills/typescript-boundaries/SKILL.md) | Parse external data, model states, and prevent domain-ID mixups. |
| [parallel-work](skills/parallel-work/SKILL.md) | Divide independent work or compare alternatives when delegation is authorized. |
| [triage-issue](skills/triage-issue/SKILL.md) | Triage supplied evidence, reproduce a bug locally, and check whether a fix already exists. |
| [no-mistakes-delivery](skills/no-mistakes-delivery/SKILL.md) | Inspect or drive an authorized No Mistakes gate using its installed version and project context. |

## Tools and workflows kept separate

| Source | What stays upstream |
| --- | --- |
| No Mistakes | The [CLI, daemon, Git remote, pipeline, and native generated skill](https://github.com/kunchenguid/no-mistakes/tree/d3c38fb478ad59848227caaf5d39f12d93cc6953). The CLI can publish a branch, open a PR and watch CI; local verification alone does not require it. The adapter here works alongside Billy’s [Kun/Firstmate setup](https://github.com/BIN0806/nvim_settings#install-or-reopen-the-kun-workflow). Its 15 repository-maintainer skills are specific to developing No Mistakes and remain upstream. |
| Ponytail | [Harness plugins, activation hooks, the status band, and benchmark tooling](https://github.com/DietrichGebert/ponytail/tree/96608e078b2d5ea607c5c3b8b5a54d1c1fba6846). Install upstream if you want persistent modes or its metrics UI. Its published benchmark is evidence for that benchmark, not an estimate for this collection. |
| pstack, Statechart | The [TypeScript Statechart runner](https://github.com/q-qp-p/pstack/tree/a6342ded43a2437e3c664b46c2cff103787773fd/skills/statechart), TLC/Java tooling and optional Pele rendering. This collection keeps the modeling and counterexample workflow as a skill. |
| pstack, Benny and bot UI | [Benny](https://github.com/q-qp-p/pstack/tree/a6342ded43a2437e3c664b46c2cff103787773fd/automations/benny) needs Cursor Automations, Slack, tracker and app-control setup. [Bot UI](https://github.com/q-qp-p/pstack/tree/a6342ded43a2437e3c664b46c2cff103787773fd/skills/make-bot-ui) needs its own routine/webhook and hosting configuration. The local bug-triage skill needs none of those. |
| pstack, harness add-ons | [Poteto Mode and its scripts](https://github.com/q-qp-p/pstack/tree/a6342ded43a2437e3c664b46c2cff103787773fd/skills/poteto-mode), provider/model routing, the PR watcher and unattended playbooks, agent personas, and [video handoffs](https://github.com/q-qp-p/pstack/tree/a6342ded43a2437e3c664b46c2cff103787773fd/skills/ketchup-video) stay upstream. Portable planning, review and handoff guidance is included here. |

## Sources and credits

- [DietrichGebert / Ponytail](https://github.com/DietrichGebert/ponytail/tree/96608e078b2d5ea607c5c3b8b5a54d1c1fba6846) — simplicity, review and shortcut debt. [MIT notice](licenses/ponytail.txt).
- [Lauren Tan / Poteto, pstack standalone mirror](https://github.com/q-qp-p/pstack/tree/a6342ded43a2437e3c664b46c2cff103787773fd) — engineering principles and specialist workflows; originally [Cursor pstack](https://github.com/cursor/plugins/tree/main/pstack). [MIT notice](licenses/pstack.txt).
- [Kun Chen / No Mistakes](https://github.com/kunchenguid/no-mistakes/tree/d3c38fb478ad59848227caaf5d39f12d93cc6953) — review-gated delivery and branch custody guidance. [MIT notice](licenses/no-mistakes.txt).

[Source map](sources.json) records the pinned commits and the disposition of
each of the 89 source skill entrypoints, including duplicate harness copies
and upstream-only maintainer and automation skills.

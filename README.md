# Agent skills

Thirty-four skills covering engineering, interview practice and Vision. Matt Pocock’s workflows extend the curated engineering collection. Each skill can be installed individually.

Open [SKILLS.md](SKILLS.md) for example prompts, common sequences and separately installed companion skills.

## Start here

The Skills CLI requires Node.js 22.20 or later. Run these commands from the
project where you want to use the skills. [Skills CLI documentation](https://github.com/vercel-labs/skills/blob/main/docs/commands.md#skills-add).

```sh
npx skills add BIN0806/agent-skills --list
npx skills add BIN0806/agent-skills -a codex \
  --skill lean-change --skill review-change --skill verify-behavior
```

The first command previews the collection. The second installs the three
starter skills under the current project's `.agents/skills/`. Run
`npx skills list` from that project to see what is installed.

Open the same project in Codex. In the CLI or IDE extension, use `/skills` or
type `$` to mention a skill. For example, ask “Use `$lean-change` to fix the
reported bug, then use `$verify-behavior` to show the failing case passes.”
[OpenAI documentation on invoking skills](https://learn.chatgpt.com/docs/build-skills).

### Use with Kun and Firstmate

The skills are a separate project install alongside the
[Neovim setup](https://github.com/BIN0806/nvim_settings) and
[macOS dotfiles](https://github.com/BIN0806/dotfiles). A Codex worker sees the
skills available in its checkout. If Firstmate creates a separate Git worktree,
put the skills in that worktree as well, or commit the project skill files and
lockfile when the project wants to share them across checkouts.

Add the delivery adapter only in a project configured for No Mistakes:

```sh
npx skills add BIN0806/agent-skills -a codex --skill no-mistakes-delivery
```

The adapter supplies instructions for the separately installed gate. For an
already configured Kun project, the [Firstmate guide](https://github.com/BIN0806/nvim_settings#install-or-reopen-the-kun-workflow)
explains how to start the workflow and select the project's delivery mode.

## What to use

### Understand and plan

| Skill | Use it for |
| --- | --- |
| [clarify-requirements](skills/clarify-requirements/SKILL.md) | Interview about unresolved choices, stress-test a plan, or draft a stakeholder questionnaire. |
| [research-topic](skills/research-topic/SKILL.md) | Investigate a technical question with primary sources and cited findings. |
| [trace-code](skills/trace-code/SKILL.md) | Explain how or why behavior exists and trace a code path. |
| [model-domain](skills/model-domain/SKILL.md) | Resolve ambiguous terminology and maintain useful glossary or decision records. |
| [design-change](skills/design-change/SKILL.md) | Compare interfaces and architecture, assess real friction, and sequence a migration. |
| [prototype-design](skills/prototype-design/SKILL.md) | Answer a UI or state-model question with a small runnable prototype. |
| [plan-delivery](skills/plan-delivery/SKILL.md) | Produce a spec, tickets with actual blockers, or a map of unresolved decisions. |

### Implement and verify

| Skill | Use it for |
| --- | --- |
| [lean-change](skills/lean-change/SKILL.md) | Make the smallest complete change, reusing the project or platform where possible. |
| [diagnose-bug](skills/diagnose-bug/SKILL.md) | Reproduce a hard failure, minimize it, test explanations, and verify the original symptom. |
| [verify-behavior](skills/verify-behavior/SKILL.md) | Prove acceptance, apply TDD one behavior at a time, or maintain a verification map. |
| [typescript-boundaries](skills/typescript-boundaries/SKILL.md) | Validate external data, model states, distinguish IDs, and keep test fixtures honest. |
| [formal-verification](skills/formal-verification/SKILL.md) | Model a tricky invariant, check interleavings, or replay a counterexample. |
| [benchmark-performance](skills/benchmark-performance/SKILL.md) | Measure a real baseline, isolate the bottleneck, and substantiate a speed claim. |
| [parallel-work](skills/parallel-work/SKILL.md) | Coordinate independent work or dependent tickets when delegation is authorized. |

### Review and deliver

| Skill | Use it for |
| --- | --- |
| [review-change](skills/review-change/SKILL.md) | Check correctness, project standards and agreement with the actual request. |
| [prepare-pr](skills/prepare-pr/SKILL.md) | Draft a PR with behavior evidence, useful visuals and concrete rollout risks. |
| [triage-issue](skills/triage-issue/SKILL.md) | Verify incoming bugs, feature requests or PR claims and prepare an actionable brief. |
| [no-mistakes-delivery](skills/no-mistakes-delivery/SKILL.md) | Inspect or drive an authorized gate using its installed version and project context. |
| [shortcut-ledger](skills/shortcut-ledger/SKILL.md) | Inventory intentional shortcuts, limits and missing upgrade triggers. |

### Learn and maintain

| Skill | Use it for |
| --- | --- |
| [teach-topic](skills/teach-topic/SKILL.md) | Learn through exercises, feedback, retrieval and optional progress records. |
| [scaffold-exercises](skills/scaffold-exercises/SKILL.md) | Prepare problems, solutions and explainers using an existing course layout. |
| [write-technical-docs](skills/write-technical-docs/SKILL.md) | Write practical docs or restate a technical explanation in plain language. |
| [task-handoff](skills/task-handoff/SKILL.md) | Catch up, track important decisions, and leave a usable handoff. |
| [improve-workflow](skills/improve-workflow/SKILL.md) | Turn recurring mistakes or preferences into a scoped instruction, tool, or check. |
| [configure-project-checks](skills/configure-project-checks/SKILL.md) | Add or repair requested commit hooks, staged formatting and project checks. |

## Matt Pocock workflows

Matt's stable engineering and productivity workflows are consolidated into the
skills above. His grilling wrappers become `clarify-requirements`; specs, tickets
and wayfinding become `plan-delivery`; and TDD strengthens `verify-behavior`.
Architecture, review, triage and handoff guidance extend existing skills. The
pinned source map records every adaptation.

Use the curated skill names here. The upstream `setup-matt-pocock-skills`
configures his issue tracker, labels and document layout. These skills reuse the
project's conventions and work without that setup. Required references are
packaged with each skill.

Install a workflow you need from the project directory:

```sh
npx skills add BIN0806/agent-skills -a codex \
  --skill clarify-requirements --skill plan-delivery --skill diagnose-bug
```

For a new feature, clarify unresolved requirements, plan the work when it needs
multiple steps, implement a complete slice, verify the behavior, and review the
change. Use `prepare-pr` for the PR description and `no-mistakes-delivery` for a
project that uses the separately configured gate. A bounded fix can go straight
through diagnosis, implementation and verification.

For Vim practice, keep using the [adapted course](https://github.com/BIN0806/nvim_learning).
Use `teach-topic` for guided practice and `scaffold-exercises` for additional
course material. Existing practice progress belongs to that workspace.

These are curated instructions. Upstream scripts, provider defaults, agent
fan-out and tracker publication need their original tools or project setup.
All eight experimental upstream skills stay upstream and are identified in the
source map with their purpose and status.

## Interview template and Vision

For the eight interview helpers and Vision, see the [quick reference](SKILLS.md).
The optional [interview workflow](workflows/interview-AGENTS.md) provides routing rules.
To copy all catalog skills and append those rules to a target repository:

```sh
./install.sh /path/to/repo
```

The installer preserves existing rules, skips identical skills, and stops on conflicts.
Vision is adapted from [kunchenguid/vision](https://github.com/kunchenguid/vision/tree/acf4d656188e55ce9633774e4d0c848e9ae49a02), with its MIT license retained. It uses serialized board data, text rendering, a pinned direct board dependency, and approval before migration removals. See the [validation record](docs/security-review.md).

## Tools and workflows kept separate

| Source | What stays upstream |
| --- | --- |
| No Mistakes | The CLI, daemon, delivery pipeline, generated skill, and 15 skills for maintainers of No Mistakes. The CLI can publish a branch, open a PR and watch CI when the project uses gated delivery. [No Mistakes source](https://github.com/kunchenguid/no-mistakes/tree/d3c38fb478ad59848227caaf5d39f12d93cc6953). |
| Ponytail | [Harness plugins, activation hooks, the status band, and benchmark tooling](https://github.com/DietrichGebert/ponytail/tree/96608e078b2d5ea607c5c3b8b5a54d1c1fba6846). Install upstream if you want persistent modes or its metrics UI. Its published benchmark is evidence for that benchmark, not an estimate for this collection. |
| pstack, Statechart | The [TypeScript Statechart runner](https://github.com/q-qp-p/pstack/tree/a6342ded43a2437e3c664b46c2cff103787773fd/skills/statechart), TLC/Java tooling and optional Pele rendering. This collection keeps the modeling and counterexample workflow as a skill. |
| pstack, Benny and bot UI | [Benny](https://github.com/q-qp-p/pstack/tree/a6342ded43a2437e3c664b46c2cff103787773fd/automations/benny) needs Cursor Automations, Slack, tracker and app-control setup. [Bot UI](https://github.com/q-qp-p/pstack/tree/a6342ded43a2437e3c664b46c2cff103787773fd/skills/make-bot-ui) needs its own routine/webhook and hosting configuration. The local bug-triage skill needs none of those. |
| pstack, harness add-ons | [Poteto Mode and its scripts](https://github.com/q-qp-p/pstack/tree/a6342ded43a2437e3c664b46c2cff103787773fd/skills/poteto-mode), provider/model routing, the PR watcher and unattended playbooks, agent personas, and [video handoffs](https://github.com/q-qp-p/pstack/tree/a6342ded43a2437e3c664b46c2cff103787773fd/skills/ketchup-video) stay upstream. Portable planning, review and handoff guidance is included here. |
| Matt Pocock, setup and tools | Original tracker setup, the secret-capturing Bash wizard, Claude Code's Git permission hook, and the optional Shoehorn library remain separate setup operations. The curated pre-commit skill uses the target project's actual toolchain. [Pinned source](https://github.com/mattpocock/skills/tree/6f7f7831a625f040a8e06a0e7954826b87ce775a). |
| Matt Pocock, experimental workflows | The eight `in-progress` skills include the software factory, chief-of-staff wiki, Claude background handoff, TypeScript dependency-cruiser setup, recurring workflow design and article-writing processes. Their status and purpose are recorded in `sources.json`. |

## Change log

- **2026-11-26.** Added Matt Pocock at `6f7f783`. Reviewed 39 upstream entrypoints, added 10 skills, and extended 8 existing skills. The collection now has 34 skills and 129 mapped source entrypoints, including the existing interview helpers and Vision. Existing source pins are retained.

## Sources and credits

- [DietrichGebert / Ponytail](https://github.com/DietrichGebert/ponytail/tree/96608e078b2d5ea607c5c3b8b5a54d1c1fba6846) — simplicity, review and shortcut debt. [MIT notice](licenses/ponytail.txt).
- [Lauren Tan / Poteto, pstack standalone mirror](https://github.com/q-qp-p/pstack/tree/a6342ded43a2437e3c664b46c2cff103787773fd) — engineering principles and specialist workflows; originally [Cursor pstack](https://github.com/cursor/plugins/tree/main/pstack). [MIT notice](licenses/pstack.txt).
- [Kun Chen / No Mistakes](https://github.com/kunchenguid/no-mistakes/tree/d3c38fb478ad59848227caaf5d39f12d93cc6953) — review-gated delivery and branch custody guidance. [MIT notice](licenses/no-mistakes.txt).
- Kun Chen / kunchenguid contributed the existing Vision workflow. [Pinned source](https://github.com/kunchenguid/vision/tree/acf4d656188e55ce9633774e4d0c848e9ae49a02) · [MIT notice](skills/vision/LICENSE).
- Matt Pocock / mattpocock contributed requirements interviews, domain modeling, design, diagnosis, planning, TDD, review, teaching and agent-documentation workflows. [Pinned skills](https://github.com/mattpocock/skills/tree/6f7f7831a625f040a8e06a0e7954826b87ce775a) · [MIT notice](licenses/mattpocock.txt).
- Matt's PR skill credits Dex Horthy / Humanlayer for visual presentation guidance. [Upstream credit](https://github.com/mattpocock/skills/blob/6f7f7831a625f040a8e06a0e7954826b87ce775a/skills/engineering/pr/CREDITS.md).

[Source map](sources.json) records the pinned commits and the disposition of
each of the 129 source skill entrypoints, including duplicate harness copies
and upstream-only maintainer and automation skills.

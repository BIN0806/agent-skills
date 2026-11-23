# Agent skills

Twenty-four portable skills: the curated engineering collection, eight interview helpers, and a locally hardened Vision workflow. Each skill can be installed individually.

Open [SKILLS.md](SKILLS.md) for the aggregate index, example prompts, common sequences, and separately installed companion skills.

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

## Sources and credits

- [DietrichGebert / Ponytail](https://github.com/DietrichGebert/ponytail/tree/96608e078b2d5ea607c5c3b8b5a54d1c1fba6846) — simplicity, review and shortcut debt. [MIT notice](licenses/ponytail.txt).
- [Lauren Tan / Poteto, pstack standalone mirror](https://github.com/q-qp-p/pstack/tree/a6342ded43a2437e3c664b46c2cff103787773fd) — engineering principles and specialist workflows; originally [Cursor pstack](https://github.com/cursor/plugins/tree/main/pstack). [MIT notice](licenses/pstack.txt).
- [Kun Chen / No Mistakes](https://github.com/kunchenguid/no-mistakes/tree/d3c38fb478ad59848227caaf5d39f12d93cc6953) — review-gated delivery and branch custody guidance. [MIT notice](licenses/no-mistakes.txt).

[Source map](sources.json) records the pinned commits and the disposition of
the upstream source skill entrypoints, including duplicate harness copies
and upstream-only maintainer and automation skills.

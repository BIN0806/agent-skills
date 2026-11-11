# No Mistakes adapter

**Prerequisite:** a runnable No Mistakes binary, its configured pipeline agent, and a project initialized for the gate. This repository contains guidance only. For a fresh installation or migration use the [official quick start](https://kunchenguid.github.io/no-mistakes/start-here/quick-start/). Confirm the destination before initialization or a submission. Do not initialize a repo just to inspect it.

On Billy's configured Mac, the existing Kun installer pins No Mistakes separately. Inside a Kun-managed project use the project's private context; do not silently switch its delivery mode. These are diagnostic examples:

```sh
no-mistakes --version
no-mistakes axi status
kun exec -- no-mistakes axi status
```

Use the third form from a configured project when the CLI is available only through Kun, or when Kun's project environment is required. If the CLI or initialized gate is unavailable, stop and report the missing prerequisite rather than claiming gate success.

## Driving an authorized run

1. Verify the selected branch, head and target. Read `axi run --help` for the installed version, then inspect `axi status` and reuse a matching live run. A new run needs explicit intent, for example `no-mistakes axi run --intent 'The requested outcome and acceptance criteria'` in the correct gate environment. Do not start a second run because the first wait expired.
2. Follow the returned gate action and version-matched upstream skill. Use status after a wait expires. Keep finding decisions scoped to the right run, do not silently approve incomplete coverage, and avoid automatic approval or bypass flags. If the tool reports a genuine question, provide an authorized answer or surface it; treat unavailable or different subcommands as a version mismatch.
3. Report published branch and PR only if verified, along with the exact resulting head and CI state. If the result indicates a pending review, checks, or branch synchronization, say so. Follow supported branch-custody instructions; never reset away pipeline fixes to start over.

The [upstream generated skill](https://github.com/kunchenguid/no-mistakes/blob/d3c38fb478ad59848227caaf5d39f12d93cc6953/skills/no-mistakes/SKILL.md) shows the reviewed source workflow. The installed release can differ; defer to its own help and installed skill. The previously configured Mac binary reported v1.84.0 during this import. This adapter deliberately uses a distinct name so it does not replace `no-mistakes init`'s installed skill.

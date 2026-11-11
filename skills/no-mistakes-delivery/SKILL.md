---
name: no-mistakes-delivery
description: "Use an installed No Mistakes gate for an explicitly requested gated validation or delivery, including Firstmate projects launched with Kun. Inspect or drive a gate without replacing the upstream skill or CLI."
license: MIT
---

# No Mistakes delivery

The separately installed CLI and its version-matched upstream skill define the actual pipeline. Read [the adapter notes](references/adapter.md) before submitting work. Do not infer publication authorization from a request to test locally: a gate may push, open a PR, and start CI.

- If acting inside a gate's own validation step, perform only the assigned step and return to the outer owner. Never start, drive, abort, synchronize, or bypass the outer pipeline. Treat a nested-gate refusal as a stop signal.
- Check the exact checkout, committed feature branch, intended base, push target, and pipeline mode. Preserve unrelated work. For a new run, pass the user's outcome and constraints as intent, not a diff summary.
- Reuse the active run when it matches your branch and head. Drive only the matching run and follow the installed version's gate instructions. Let the pipeline own its fix rounds; surface a real user decision when it cannot be resolved from authorized intent and evidence.
- Report the run, exact submitted/resulting heads, checks, skips/overrides, PR and CI state if applicable, and any next action. Merge only when separately authorized. Keep pipeline-produced commits and follow its branch custody guidance before editing or starting a fresh run.

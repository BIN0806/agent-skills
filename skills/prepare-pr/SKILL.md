---
name: prepare-pr
description: "Draft or update a pull request description with the concrete behavior change, before and after evidence, and relevant rollout or rollback risks."
license: MIT
---

# Prepare a pull request

- Read the final diff and the originating request. Lead with the user problem and resulting behavior. Give enough background for a reviewer who has not read the conversation, and follow the repository's template.
- Choose the smallest visual that clarifies a complex change, such as a short pseudocode example, diff sketch, call tree or diagram. Keep simple changes concise and make each visual explain a consequential point.
- Include verification that reaches the changed behavior. Show the failing and passing cases when available, or label the available substitute. Link useful outputs or screenshots with private data removed. State meaningful checks still pending.
- Describe the affected callers or data and any consequential migration, irreversible action, deployment ordering or rollback requirement. Ground the risk in this diff rather than assigning a generic danger label.

Draft locally when publication is outside the request. If opening or updating the PR is authorized, use the configured remote and branch and verify the resulting URL and state. For a shell CLI, pass multiline bodies through a file or a structured argument.

# Catalog security and validation review

Reviewed on 2026-11-26 with SkillSpector 2.12.0 using --no-llm and manual source review.

Verdict **APPROVE** for publication of this catalog snapshot.

- All 34 skills have complete individual static reports. The recursive scan reached its 32-skill budget, so Vision and write-technical-docs were scanned individually.
- The maximum final score is 8/100, LOW. All final individual reports recommend SAFE. No HIGH or CRITICAL findings remain.
- No findings were suppressed. Matt's newly added skills contain instructions only. The final file hashes are recorded in the manifest.

## Contextual findings

| Skill | Rule / severity | Source review |
| --- | --- | --- |
| improve-workflow | MP1 / MEDIUM | The existing sentence prohibits converting an incidental choice into a permanent rule. It restricts the behavior the scanner flags. |
| no-mistakes-delivery | AS3 / MEDIUM | The existing link points to the public upstream skill that documents the gate. It does not search private agent files. |

The first model-domain scan matched the phrase “Capture context” as E4 / HIGH.
The surrounding sentence described an architectural decision record. It was
clarified to specify the design problem, selected option, alternatives and
consequences. The final rescan has zero findings.

## Observable validation

- All 34 skill manifests passed the bundled skill-creator validator.
- A disposable-project installation copied all 34 skills and their resources, preserved existing project instructions, and passed a repeat install.
- The 39 Matt Pocock entrypoints are pinned, mapped individually and attributed. His MIT notice is preserved, alongside prior source records.
- The README and aggregate index cover the new workflows and their overlap with interview helpers.
- Companion documentation and local links were checked using the relevant repository validators.

The eight experimental Matt Pocock skills remain upstream. His interactive
wizard and Claude Git permission hook are separate setup operations. The
curated workflows retain project-specific authorization for tracker writes,
publishing and agent delegation.

Vision's files are unchanged from the November 23 snapshot. Its board host and
transitive dependencies were not launched or audited by this update. The
current checks establish packaging and static evidence. They do not establish
the behavior of a live delivery gate, hosted board or future agent session.

The [file manifest](security-manifest.json) records the final skill files.
[Source provenance](../sources.json) records the reviewed upstream revisions.

## Previous review on November 23

Reviewed on 2026-11-23 with SkillSpector 2.12.0 using `--no-llm`.

Verdict: **APPROVE** for publication of this catalog snapshot.

- 24 skills scanned; no skills omitted.
- Aggregate recommendation: SAFE. Maximum skill score: 8/100 (LOW).
- Scanner reports complete coverage (100%) of analyzer-eligible content.
- Vision: 0/100, LOW, SAFE, zero findings.
- No findings were suppressed or excluded.

## Contextual findings

| Skill | Rule / severity | Source review |
| --- | --- | --- |
| improve-workflow | MP1 / MEDIUM | The matched sentence says **not** to convert an incidental user choice into a permanent rule. It prohibits the behavior the rule flags. |
| no-mistakes-delivery | AS3 / MEDIUM | The match is a public GitHub link to the adapter's upstream source skill. Reading the installed gate instructions is necessary for this documented adapter; it does not enumerate credentials or unrelated skills. |

## Observable validation

- All 24 skill manifests passed the bundled skill-creator validator.
- Catalog installation into a disposable directory copied all 24 skills, including Vision's builder and assets, preserved existing AGENTS.md rules, and passed a repeat installation.
- Vision's DOM tests passed for hostile text, card navigation, verdict payloads, submission, and missing-bridge behavior. Script-closing tags, HTML handlers and JavaScript expressions stayed inert.
- Relative Markdown links in README.md and SKILLS.md resolve to bundled files.
- The separately installed `no-mistakes` skill was present, but its CLI was unavailable in this execution environment. No No Mistakes pipeline or CI pass is claimed.

Vision pins its direct review-host dependency to `lavish-axi@0.1.98`. The live host and its transitive dependencies were not audited or launched during these tests. Static scan results do not establish runtime safety for every use.

The [file manifest](security-manifest.json) records SHA-256 hashes of all bundled skill files at review time. Original upstream provenance is in [sources.json](../sources.json).

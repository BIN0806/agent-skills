# Catalog security and validation review

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

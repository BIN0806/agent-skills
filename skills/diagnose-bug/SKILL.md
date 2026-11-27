---
name: diagnose-bug
description: "Investigate a difficult bug, intermittent failure or performance regression using a reproducible feedback loop, minimized inputs and falsifiable hypotheses."
license: MIT
---

# Diagnose a bug

- Establish the exact symptom, environment and trigger. Build the fastest practical check that reaches the failing code path and detects that symptom. A test, CLI fixture, HTTP replay, browser flow or comparison with a known good version can provide the signal.
- Run the check before changing behavior. Minimize inputs and setup one variable at a time while preserving the failure. For intermittent failures, record attempts and failures, control seeds and timing where possible, and distinguish a lower failure rate from a proven fix.
- Form competing explanations and give each a prediction. Probe the observations that distinguish them, using a debugger, targeted temporary logs or a measurement harness. Use bisection when good and bad revisions are known. For a slowdown, measure a baseline before choosing an optimization.
- Keep captured requests and logs free of credentials. When access prevents reproduction, report the attempted checks, evidence still available, and the specific observation or environment needed next. Label hypotheses accordingly.
- Apply the smallest supported fix. Turn the reproduction into a regression check at an interface that actually catches the bug when practical. Run the original scenario again, remove temporary instrumentation and retain relevant diagnostic evidence.

Report the demonstrated cause, before and after observations, and remaining uncertainty. A successful unrelated test does not establish that the original symptom is fixed.

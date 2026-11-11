---
name: benchmark-performance
description: "Design or vet a benchmark, diagnose a measured performance regression, or substantiate a claimed speedup with a fair comparison."
license: MIT
---

# Benchmark performance

- Name the decision the number will inform and the operation the user actually cares about. State input shape, size, hardware/runtime, and expected bottleneck. Confirm the measured work happens and produces equivalent output in both cases.
- Compare against a real baseline on the same workload. Control cache state, warmup, concurrency, setup cost and versions as relevant; include repeated runs and spread. Separate throughput, latency, memory and resource limits. If the baseline or setup differs, label the comparison rather than inventing a speedup.
- Probe the likely limiter before optimizing. Use a profiler or isolate stages when timing alone cannot identify the cause. Test representative edges, not just the friendliest input.
- Report commands, conditions, raw/summary measurements, scope and caveats. Treat published tool benchmarks as results for their stated environment, never savings for this repository.

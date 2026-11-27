# Review module interfaces

An interface includes the operations, invariants, error modes, ordering rules,
configuration and performance assumptions a caller must understand. Depth is
useful capability behind that surface. Count the caller's burden and actual
benefit rather than comparing lines of implementation.

Start an architecture survey at the user's stated pain point or areas of recent
change. Trace a real task through the current design. For each candidate, show
the scattered responsibility, proposed owner, affected callers, and a scenario
that would become simpler to verify. Use a diagram when relationships are hard
to explain in prose.

For dependencies, distinguish local computation, local test substitutes, owned
remote services and third-party services. Use the existing testing boundary and
appropriate real or substituted dependency. A new port or adapter should solve
an actual variation or testing need. Keep private seams private.

Before removing old tests after consolidation, establish that retained checks
still cover their behavioral contracts and failure cases. Compare alternatives
by caller simplicity, compatibility, where future changes concentrate and how
the behavior is exercised. Retain evidence for the selected tradeoff.

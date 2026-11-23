---
name: blast-radius
description: Check likely effects of a proposed code change on callers, shared state, tests, and public interfaces. Use before a structural edit in an unfamiliar or multi-file repository.
---

# Blast Radius

Find direct references to the changed symbol and inspect callers that depend on its signature or side effects. Check tests, serialization or API boundaries, and shared mutable state when relevant. Summarize what must change together and what could regress. Use repository search and available language tools; state when evidence is limited to text search. Keep the analysis proportional to the change.

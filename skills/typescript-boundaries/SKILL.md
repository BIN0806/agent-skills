---
name: typescript-boundaries
description: "Design or review TypeScript types where external data, state variants, domain IDs, or runtime validation are easy to mix up."
license: MIT
---

# TypeScript boundaries

- Treat untrusted input as `unknown`. Parse it once at the boundary with the project's existing schema or validator. Derive types from that schema or existing signatures where possible. Use verified guards or constructors; a type assertion alone validates nothing.
- Model distinct states with tagged unions and handle variants exhaustively. Use branded IDs only when mixing domains is a practical risk, and construct them after validation. Keep ordinary arrays and primitives when they already make the operations safe.
- Prefer `satisfies` when checking a literal without losing its inferred shape. Narrow with the discriminant or language checks before inventing custom guards; validate every claim a custom guard makes.
- Keep the error at the boundary explicit and test the observable rejected and accepted paths. Do not add wrappers or stronger types that do not prevent a real mistake.

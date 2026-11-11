---
name: shortcut-ledger
description: "Inventory deliberate shortcut or legacy ponytail comments and report their known limits and upgrade triggers. Use for shortcut debt or a deferral ledger."
license: MIT
---

# Shortcut ledger

Search the requested scope for comment markers such as `shortcut:` and the legacy `ponytail:`. Start with `git grep -n -E '(shortcut|ponytail):'`; include untracked source only when relevant, respecting ignore rules. Read each hit in context so docs, strings, examples, and keyboard shortcuts are not counted as deferred work. Adapt comment syntax or marker names when the user specifies them.

Report one row per real deferral: file/line, decision, known limit, and upgrade trigger. Flag missing triggers and state where current usage is known to exceed the limit. Leave absent evidence as unknown. Give counts for real markers and missing triggers. This is read-only unless the user requests a saved ledger or a fix.

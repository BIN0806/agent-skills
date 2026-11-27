---
name: model-domain
description: "Resolve ambiguous business or project terminology, model domain relationships, or maintain a glossary and architectural decision records."
license: MIT
---

# Model the domain

- Read the relevant glossary and architectural decisions. Follow an existing context map when the project has multiple domain glossaries. Check what the code actually does before reconciling conflicting terms or rules.
- Ground definitions in realistic scenarios. Disambiguate overloaded words, make relationships and invariants explicit, and test edge cases that change the model. Present conflicting evidence instead of silently treating an assumption as a decision.
- Capture a resolved term where the project keeps its vocabulary. Give the canonical name, its meaning and distinguishing relationships. Keep implementation details in the design or source references. Create a glossary when an actual term needs recording.
- Record an architectural decision when its rationale would otherwise be lost, alternatives had meaningful tradeoffs, and reversing it would matter. Reuse the project's format. Document the design problem, selected option, alternatives and consequences, with superseding decisions linked to prior records.

Finish with the definitions or relationships changed, evidence supporting them, and remaining ambiguities. A small terminology fix should stay proportionate to the request.

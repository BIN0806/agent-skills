# Formal verification tool choices

Pick a tool only after writing the property in plain language and identifying the state that can falsify it.

| Question | Candidate |
| --- | --- |
| Can events interleave into a bad state or deadlock? | A bounded TLA+ model and TLC, with a small scenario and reproducible trace. |
| Can valid inputs violate an arithmetic or logical constraint? | A solver or the project's property-test library; record the domain and check the witness. |
| Does a theorem hold for all inputs under explicit premises? | A proof assistant supported by the project. |

The [pstack Statechart package](https://github.com/q-qp-p/pstack/tree/a6342ded43a2437e3c664b46c2cff103787773fd/skills/statechart) wraps TLC and can draw a Mermaid statechart or shortest counterexample trace. Use its upstream skill folder and scripts together if you want that runner. It needs a TypeScript-capable runtime, Java/TLC and, for its upstream bootstrap, mise and network access. [Pele](https://pele.run/) is the renderer used by its optional image step. None of those tools are installed by this collection.

Name checked bounds and omitted state. Keep genuine terminal states distinct from deadlocks. If a tool stops on its bound, an error or unsupported syntax, report the remaining properties as unchecked. Replay a counterexample against the real system before treating it as confirmed behavior.

# Reusable verification

Use this when asked to create or maintain a project verification procedure.

1. Identify critical user flows from real entry points, routes, state transitions and existing test evidence. Build a small feature map with one row per flow: action, observable expected result, prerequisites, exact check, and evidence. Derive the expectation independently from the implementation.
2. Prefer a runnable harness already used by the project: a test command, a local app plus browser driver, or a public CLI and test fixture. Record setup and cleanup for disposable data. Include a failure path that checks how a user or caller learns what went wrong.
3. Run the generated procedure on at least one representative flow before calling it usable. Mark missing dependencies, unavailable environments and unexercised rows explicitly.
4. When maintaining it, inspect the code and behavior that changed since the last verified revision. Update only affected rows and rerun their flows. Keep assertions tied to what users observe, and keep secrets or production data out of recorded evidence.

# MiLedgera Frontend — Implementation Plan — Part 2 — Backend & Results (Phases 3-4)

Part of the full plan — see [PLAN.md](PLAN.md) for the index and the other parts.

## Phase 3 — Backend Integration for Checks

**Goal:** Submit a transaction to MiHashport-Backend and render the real CheckResult it returns.

**Tasks:**
- [ ] Define the `ApiClient` interface and base `fetch` wrapper in `src/lib/api.ts`
- [ ] Implement `postCheck(operation)` calling `POST /checks` on the backend
- [ ] Add request timeout handling via `AbortController`
- [ ] Add retry-once-on-network-failure logic to the API client
- [ ] Define response DTO types matching MiHashport-Backend's check response
- [ ] Implement the mapper from response DTO to the `CheckResult` type
- [ ] Handle and surface 4xx validation errors from the backend
- [ ] Handle and surface 5xx server errors with a generic retry prompt
- [ ] Handle request timeout with a distinct "backend unreachable" message
- [ ] Wire `ManualCheckForm` submit to call `postCheck` and route to the results view
- [ ] Wire wallet-originated transactions into the same check-submission flow
- [ ] Add a `CheckSkeleton` loading component shown while a request is in flight
- [ ] Add a request-in-flight guard to prevent duplicate submissions
- [ ] Add a client-side request ID for correlating logs across a single check
- [ ] Add `src/lib/api.test.ts` mocking `fetch` for the happy path
- [ ] Add API client tests for timeout behavior
- [ ] Add API client tests for 4xx/5xx handling
- [ ] Add a `useCheckSubmission` hook encapsulating submit/loading/error state
- [ ] Cache the most recent `CheckResult` in memory for back-navigation
- [ ] Add a manual "retry check" action on failure
- [ ] Add environment-aware API base URL validation on app startup
- [ ] Add a toast/notification primitive for transient API errors
- [ ] Document the expected backend request/response contract in `docs/`
- [ ] Add a mock API handler (MSW) for local development without a live backend

## Phase 4 — Verdict & Evidence Display

**Goal:** Make the result of a check legible and trustworthy at a glance.

**Tasks:**
- [ ] Build the `DecodedActionCard` skeleton rendering contract and method
- [ ] Render decoded args as a key-value table in `DecodedActionCard`
- [ ] Add a "view raw calldata" toggle to `DecodedActionCard`
- [ ] Build `RiskScoreMeter` with a 0-100 numeric display
- [ ] Add color-graded fill (low/medium/high risk) to `RiskScoreMeter`
- [ ] Add an accessible text label alongside the visual meter
- [ ] Build `EvidenceList` rendering each `ChainEvidence` entry
- [ ] Link each evidence entry to the correct explorer URL per network
- [ ] Add per-evidence-item icons distinguishing evidence types
- [ ] Build `ReasonsList` rendering the verdict's `reasons` array
- [ ] Style `ReasonsList` items differently per verdict (ALLOW/WARN/BLOCK)
- [ ] Assemble `DecodedActionCard`, `RiskScoreMeter`, `EvidenceList`, and `ReasonsList` into `CheckResultPanel`
- [ ] Add a responsive layout (stacked on mobile, grid on desktop) to `CheckResultPanel`
- [ ] Add a prominent `VerdictBadge` header to `CheckResultPanel`
- [ ] Add a "proceed to sign" CTA gated on an ALLOW verdict
- [ ] Add a confirmation modal for proceeding on a WARN verdict
- [ ] Disable and hide the proceed CTA entirely on a BLOCK verdict
- [ ] Wire `useCopyToClipboard` into the contract ID display in `DecodedActionCard`
- [ ] Wire `useCopyToClipboard` into evidence entry values in `EvidenceList`
- [ ] Add a copy-confirmation tooltip/checkmark on successful copy
- [ ] Add a "share result" link that copies a permalink to the check
- [ ] Add an empty state for `EvidenceList` when the backend returns no evidence
- [ ] Add a print/export-friendly view of `CheckResultPanel`
- [ ] Add snapshot/unit tests for `CheckResultPanel` across all three verdicts

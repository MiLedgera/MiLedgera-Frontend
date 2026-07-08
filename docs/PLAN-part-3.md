# MiLedgera Frontend — Implementation Plan — Part 3 — Proof, History & Polish (Phases 5-6)

Part of the full plan — see [PLAN.md](PLAN.md) for the index and the other parts.

## Phase 5 — Delivery Proof & History

**Goal:** Let a user confirm a payment was delivered as checked, and review past checks.

**Tasks:**
- [ ] Define the `DeliveryProof` type in `src/types`
- [ ] Build the `DeliveryProofCard` skeleton with a status placeholder
- [ ] Render delivery status states (pending/confirmed/failed) in `DeliveryProofCard`
- [ ] Link `deliveryProofId` to its on-chain transaction on the explorer
- [ ] Implement `useDeliveryProofPolling` polling the backend on an interval
- [ ] Stop polling once a terminal status (confirmed/failed) is reached
- [ ] Add a manual "check delivery status" refresh action
- [ ] Add a timeout fallback if delivery status never resolves
- [ ] Wire `DeliveryProofCard` into `CheckResultPanel` after an ALLOW action is taken
- [ ] Define the `CheckHistoryEntry` type combining `CheckResult`, timestamp, and wallet
- [ ] Implement the `useCheckHistory` hook reading/writing `localStorage`
- [ ] Key stored history entries by connected wallet address
- [ ] Cap stored history to the most recent N entries with eviction
- [ ] Create the `/history` route and page shell
- [ ] Build `HistoryTable` listing verdict, timestamp, and contract/method
- [ ] Add verdict-based filtering to `HistoryTable`
- [ ] Add a detail link from each `HistoryTable` row back to its full `CheckResultPanel`
- [ ] Add a "clear history" action with a confirmation prompt
- [ ] Add an empty state for `/history` when no checks exist yet
- [ ] Add an empty state for `/history` when a wallet has never been connected
- [ ] Add pagination or infinite scroll to `HistoryTable` for large histories
- [ ] Add a per-entry "re-run this check" action from history
- [ ] Add unit tests for `useCheckHistory` storage logic
- [ ] Add a loading skeleton for `/history` while reading from storage

## Phase 6 — Agent Integration Surface & Polish

**Goal:** Make PayGuard usable programmatically by other buyer agents, and bring the app to a polished v1.

**Tasks:**
- [ ] Add an `/api/check` Next.js route proxying to the backend for programmatic use
- [ ] Add request validation (schema check) to the `/api/check` route
- [ ] Add rate-limit-friendly error responses to the `/api/check` route
- [ ] Write an integration guide covering the `/api/check` request/response shape
- [ ] Document authentication requirements (if any) for programmatic access
- [ ] Add a copyable `curl` example to the integration guide
- [ ] Add a copyable JS/TS `fetch` example to the integration guide
- [ ] Run a keyboard-navigation audit across the form and results views
- [ ] Add visible focus states to all interactive components
- [ ] Add ARIA labels to `VerdictBadge`, `RiskScoreMeter`, and form fields
- [ ] Verify color contrast for all verdict states meets WCAG AA
- [ ] Add `aria-live` announcements for verdict results as they arrive
- [ ] Add a responsive layout pass for the landing page on narrow viewports
- [ ] Add a responsive layout pass for `ManualCheckForm` on narrow viewports
- [ ] Add a responsive layout pass for `CheckResultPanel` on narrow viewports
- [ ] Add a responsive layout pass for `/history` on narrow viewports
- [ ] Build a custom `not-found` (404) page matching PayGuard branding
- [ ] Build a custom `error` (500) page matching PayGuard branding
- [ ] Add an opt-in analytics hook gated behind an environment flag
- [ ] Add a minimal `trackEvent` event-tracking helper with a no-op default
- [ ] Instrument check-submission and verdict-received events via `trackEvent`
- [ ] Add a footer indicator showing which network the app is connected to
- [ ] Run a cross-browser smoke test pass (Chrome, Firefox, Safari) and fix findings
- [ ] Write a `docs/DEMO.md` walkthrough script for demoing the full check flow end-to-end

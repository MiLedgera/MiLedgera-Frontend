# MiLedgera Frontend — Implementation Plan

This plan divides the frontend's build-out into 6 phases. Each phase should
leave the app in a demoable state. Tasks are sized to become individual
GitHub issues (see [CONTRIBUTING.md](../CONTRIBUTING.md)).

Sibling repos referenced below:
- Contract — https://github.com/MiHashport/MiHashport-Contract
- Backend — https://github.com/MiHashport/MiHashport-Backend

---

## Phase 1 — Foundation

**Goal:** Stand up a buildable, deployable Next.js app with the project's
conventions in place.

**Scope:** App Router scaffold, Tailwind, base layout, landing page, CI,
housekeeping docs.

**Tasks:**
- [x] Initialize Next.js app (TypeScript, Tailwind, App Router, `src/`, `@/*` alias)
- [x] Add `src/components/{ui,features}`, `src/lib`, `src/hooks`, `src/types`, `src/config`
- [x] Build a landing page introducing PayGuard
- [x] Add `.env.example` (API base URL, network, contract ID)
- [x] Add CI (`npm run build` on push/PR to `main`)
- [x] Add README, CONTRIBUTING, AGENTS.md, LICENSE, issue/PR templates

**Dependencies:** None.

**Definition of done:** `npm run build` passes locally and in CI; landing
page deployed/previewable; all project docs present.

---

## Phase 2 — Transaction Input & Wallet Connection

**Goal:** Let a user (or an agent operating the UI) supply a pending
transaction for PayGuard to evaluate.

**Scope:** Wallet connection (Freighter/Stellar Wallets Kit) and a manual
calldata/approval input form as a fallback path.

**Tasks:**
- [ ] Add a `WalletProvider` (context + hook) wrapping Stellar Wallets Kit
- [ ] Build `ConnectWalletButton` in `components/features`
- [ ] Build a form to paste/enter a raw operation (contract ID, method, args) for manual checks
- [ ] Client-side validation of contract ID and method shape
- [ ] Loading/empty/error states for the input form
- [ ] Unit test the input parsing helper in `src/lib`

**Dependencies:** None on sibling repos yet — this phase works against
mocked input only.

**Definition of done:** A user can connect a testnet wallet or paste raw
call data and submit it, with validation errors surfaced inline.

---

## Phase 3 — Backend Integration for Checks

**Goal:** Submit a transaction to MiHashport-Backend and render the real
`CheckResult` it returns.

**Scope:** API client, request/response typing, error/timeout handling.

**Tasks:**
- [ ] Add a typed API client in `src/lib/api.ts` using `NEXT_PUBLIC_API_BASE_URL`
- [ ] Wire the Phase 2 form to POST the check request
- [ ] Map API response into the `CheckResult` type in `src/types`
- [ ] Handle network errors, timeouts, and non-200 responses with user-facing messaging
- [ ] Add a loading/skeleton state while a check is in flight
- [ ] Integration test against a mocked API layer

**Dependencies:** Requires MiHashport-Backend's check-submission endpoint
to be reachable (local or deployed).

**Definition of done:** Submitting a transaction from the UI returns a real
verdict from the backend and renders without a page reload.

---

## Phase 4 — Verdict & Evidence Display

**Goal:** Make the result of a check legible and trustworthy at a glance.

**Scope:** Rich result view built on the `VerdictBadge` component.

**Tasks:**
- [ ] Build `DecodedActionCard` showing contract, method, and decoded args
- [ ] Build `RiskScoreMeter` visualizing the numeric risk score
- [ ] Build `EvidenceList` linking each `ChainEvidence` entry to a block explorer
- [ ] Build `ReasonsList` for the human-readable reasons behind a verdict
- [ ] Assemble the above into a `CheckResultPanel` feature component
- [ ] Add copy-to-clipboard for contract IDs / tx hashes via `useCopyToClipboard`

**Dependencies:** Requires Phase 3's `CheckResult` data to be flowing.

**Definition of done:** A completed check renders decoded action, risk
score, evidence with working explorer links, and reasons — for all three
verdict types.

---

## Phase 5 — Delivery Proof & History

**Goal:** Let a user confirm a payment was delivered as checked, and review
past checks.

**Scope:** Delivery proof display and a local check history view.

**Tasks:**
- [ ] Build `DeliveryProofCard` rendering the `deliveryProofId` and its status
- [ ] Poll or subscribe for delivery confirmation after an ALLOW verdict is acted on
- [ ] Persist recent checks client-side (e.g. `localStorage`) keyed by wallet
- [ ] Build a `/history` route listing past checks with verdict, timestamp, and link back to details
- [ ] Empty state for no history yet

**Dependencies:** Requires the contract's payment/settlement entrypoint to
be deployed on testnet, and the backend's delivery-proof endpoint.

**Definition of done:** After acting on an ALLOW verdict, the user sees
delivery proof surface in the UI, and can revisit prior checks in `/history`.

---

## Phase 6 — Agent Integration Surface & Polish

**Goal:** Make PayGuard usable programmatically by other buyer agents, not
just via manual UI interaction, and bring the app to a polished v1.

**Scope:** A documented, embeddable check flow plus cross-cutting UX polish.

**Tasks:**
- [ ] Add an `/api/check` route (or documented direct-to-backend pattern) agents can call without the UI
- [ ] Publish a minimal integration guide (request/response shape, auth if any)
- [ ] Accessibility pass (keyboard nav, color contrast on verdict states, ARIA labels)
- [ ] Responsive pass for narrow viewports
- [ ] Error boundary + 404/500 pages
- [ ] Basic analytics/telemetry hooks behind an opt-in flag

**Dependencies:** Requires Phases 2–5 complete; requires final endpoint
contracts from MiHashport-Backend to be stable.

**Definition of done:** An external agent can integrate a check without
touching the UI, and the app handles error/edge states gracefully across
screen sizes.

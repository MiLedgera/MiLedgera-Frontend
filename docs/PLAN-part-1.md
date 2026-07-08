# MiLedgera Frontend — Implementation Plan — Part 1 — Foundation & Input (Phases 1-2)

Part of the full plan — see [PLAN.md](PLAN.md) for the index and the other parts.

## Phase 1 — Foundation Hardening

**Goal:** Round out the Phase 1 scaffold with the small pieces of infra a real app needs before feature work begins.

**Tasks:**
- [ ] Add Prettier configuration and a `format` script
- [ ] Add Storybook for isolated component development
- [ ] Add unit testing infrastructure (Vitest + React Testing Library)
- [ ] Add a favicon and OG image set reflecting PayGuard branding
- [ ] Add a `robots.txt` and `sitemap.ts` for the app
- [ ] Add a `Container` layout primitive standardizing max-width and padding across pages
- [ ] Add a dark mode toggle respecting `prefers-color-scheme`, persisted across sessions
- [ ] Add a `LoadingSpinner` UI primitive and use it in a Suspense fallback
- [ ] Add SEO metadata (Open Graph, Twitter card) to the root layout
- [ ] Add feature-flag scaffolding in `src/config` for gating unfinished features

## Phase 2 — Transaction Input & Wallet Connection

**Goal:** Let a user or agent supply a pending transaction for PayGuard to evaluate, via wallet connection or manual entry.

**Tasks:**
- [ ] Install and configure the Stellar Wallets Kit dependency
- [ ] Define `WalletContext` and `WalletProvider` in `src/lib/wallet`
- [ ] Implement `useWallet` hook exposing connect/disconnect/address state
- [ ] Persist the last-connected wallet address to `localStorage`
- [ ] Build `ConnectWalletButton` (disconnected state)
- [ ] Build the connected-state variant of `ConnectWalletButton` showing a truncated address
- [ ] Add a wallet disconnect action with confirmation
- [ ] Handle the wallet-not-installed error state with an install link
- [ ] Handle the user-rejected-connection error state
- [ ] Build the `ManualCheckForm` shell with contract ID, method, and args fields
- [ ] Add a dynamic args field list (add/remove key-value pairs) to `ManualCheckForm`
- [ ] Implement contract ID format validation (Soroban `C...` address shape)
- [ ] Implement method-name validation against allowed characters
- [ ] Implement args-value validation per Soroban scval type hints
- [ ] Wire the form submit handler to build a `DecodedAction`-shaped payload
- [ ] Add inline field-level error messages to `ManualCheckForm`
- [ ] Add a form-level loading state that disables inputs while submitting
- [ ] Add an empty state for the check form before any transaction is submitted
- [ ] Add a "paste from clipboard" helper for the contract ID field
- [ ] Add a network-mismatch warning (wallet network vs `NEXT_PUBLIC_STELLAR_NETWORK`)
- [ ] Extract input-parsing logic into `src/lib/parseOperation.ts`
- [ ] Add unit tests for `parseOperation` happy-path cases
- [ ] Add unit tests for `parseOperation` malformed-input cases
- [ ] Add a `WalletBadge` component showing connection status in the header

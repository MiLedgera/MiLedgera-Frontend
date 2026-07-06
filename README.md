# MiLedgera — Frontend

The web UI for **PayGuard**: check token approvals, calldata, and payments
*before* your Web3 buyer agent signs.

## Part of MiLedgera

MiLedgera is split across three repositories:

| Repo | Role |
|---|---|
| **Frontend** (this repo) | The UI where a user or agent submits a pending transaction and reviews PayGuard's verdict |
| [Backend](https://github.com/MiHashport/MiHashport-Backend) | Evaluates submitted transactions, produces the verdict, risk score, and evidence |
| [Contract](https://github.com/MiHashport/MiHashport-Contract) | Soroban smart contract(s) PayGuard reads from and, where applicable, settles against on Stellar |

## What PayGuard is

Autonomous and semi-autonomous Web3 buyer agents sign approvals and payments
on a schedule that leaves little room for a human to double-check every
transaction. PayGuard sits in that gap: before a signature is issued, it
decodes the calldata, pulls live on-chain evidence, scores the risk, and
returns one of three verdicts:

- **ALLOW** — safe to proceed
- **WARN** — proceed with caution, reasons attached
- **BLOCK** — do not sign

Once a payment is allowed and executed, PayGuard also surfaces delivery
proof, so the agent (or the human behind it) can confirm the transaction
was fulfilled as checked.

## What this repo contains

This repo is the frontend surface for that flow: a form to submit a
transaction for review, a results view rendering the verdict with its
decoded action and evidence, and (as the project matures) delivery-proof
and history views. It talks to [MiHashport-Backend](https://github.com/MiHashport/MiHashport-Backend)
over HTTP and references contract addresses deployed from
[MiHashport-Contract](https://github.com/MiHashport/MiHashport-Contract).

See [docs/PLAN.md](docs/PLAN.md) for the full phase-by-phase build-out.

## Why open source

Buyer-agent tooling is new enough that no shared standard exists yet for
"is this transaction safe to sign." Opening this repo up means other teams
building agents on Stellar can adopt, critique, or extend PayGuard's UI
patterns instead of every team re-inventing an approval-review screen from
scratch — and outside contributors can help harden the checks that matter
most: the ones that stop a bad approval before it's signed.

## Why it benefits the Soroban/Stellar ecosystem

- **Reusable verdict pattern.** The ALLOW/WARN/BLOCK model with attached
  evidence is a pattern any Soroban-based agent tooling can borrow, not
  just PayGuard.
- **Real Soroban contract usage.** The UI reads live contract state and
  renders decoded Soroban calldata, giving other builders a working
  reference for surfacing contract calls in a human-readable way.
- **Wallet integration reference.** Wiring up Stellar wallet connection
  and transaction submission end-to-end gives newcomers a concrete example
  to fork rather than starting from wallet-kit docs alone.
- **Lower onboarding cost.** A well-documented, actively developed
  frontend gives new Soroban developers a real, running app to read and
  contribute small fixes to before attempting their own contract-facing UI.

## Tech stack

- [Next.js](https://nextjs.org/) (App Router, TypeScript)
- [Tailwind CSS](https://tailwindcss.com/)
- [ESLint](https://eslint.org/)

## Getting started

### Prerequisites

- Node.js (version pinned in [`.nvmrc`](.nvmrc); use `nvm use`)
- npm

### Install

```bash
npm install
```

### Environment setup

```bash
cp .env.example .env.local
```

Fill in `.env.local`:

| Variable | Description |
|---|---|
| `NEXT_PUBLIC_API_BASE_URL` | Base URL of the MiHashport-Backend API |
| `NEXT_PUBLIC_STELLAR_NETWORK` | `testnet` or `mainnet` |
| `NEXT_PUBLIC_PAYGUARD_CONTRACT_ID` | Deployed PayGuard contract address from MiHashport-Contract |

### Run (development)

```bash
npm run dev
```

### Build

```bash
npm run build
```

### Test

No test suite exists yet — see [docs/PLAN.md](docs/PLAN.md) for when
testing is introduced per phase.

## Project structure

```
src/
  app/                    # routes (App Router)
  components/
    ui/                   # generic, reusable UI primitives
    features/             # PayGuard-domain components (VerdictBadge, etc.)
  lib/                    # framework-agnostic helpers
  hooks/                  # shared React hooks
  types/                  # shared TypeScript types (CheckResult, Verdict, ...)
  config/                 # typed environment/config access
docs/
  PLAN.md                 # phased implementation plan
```

## More

- [docs/PLAN.md](docs/PLAN.md) — implementation plan
- [CONTRIBUTING.md](CONTRIBUTING.md) — how to contribute
- [AGENTS.md](AGENTS.md) — rules for AI coding agents working in this repo

## License

MIT — see [LICENSE](LICENSE).

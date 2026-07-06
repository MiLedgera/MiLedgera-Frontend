# Contributing to MiLedgera Frontend

Thanks for your interest in contributing to PayGuard's frontend.

## Finding work

- Maintainers create issues from [docs/PLAN.md](docs/PLAN.md) as each phase
  is opened up for contribution.
- Look for issues labeled `good first issue` if you're new to the repo.
- Comment on the issue to ask for assignment before starting work — this
  avoids duplicate effort. Wait for a maintainer to confirm the assignment.
- Don't start work on an issue that's already assigned to someone else.

## Workflow

1. Fork the repo.
2. Create a branch off `main`:
   - `feat/<issue-number>-short-name` for new functionality
   - `fix/<issue-number>-short-name` for bug fixes
3. Make your change, scoped to the linked issue only.
4. Open a PR against `main` using the PR template. Include `Closes #<issue>`.
5. Make sure CI is green before requesting review.

## Commit messages

- Single-line, imperative mood (e.g. `Add wallet connect button`, not
  `Added` or `Adding`).
- No `Co-authored-by` lines.
- One commit per issue where practical.

## Code style

- TypeScript throughout; keep `strict` mode passing.
- Match the existing structure: generic UI in `src/components/ui`,
  PayGuard-domain UI in `src/components/features`, framework-agnostic logic
  in `src/lib`, shared types in `src/types`.
- Run `npm run lint` and `npm run build` locally before opening a PR.
- Prefer the patterns already used in the codebase over introducing new
  libraries or abstractions for a single use site.

## Review

- CI (`npm run build`, and tests once introduced) must pass before a PR is
  reviewed.
- Keep PRs scoped to a single issue — smaller PRs get reviewed faster.
- Maintainers may close PRs that are stale, out of scope, or duplicate
  existing work. This isn't personal — it keeps the queue reviewable.

Please be respectful in issues, PRs, and reviews. This is a community
project built by and for people building on Stellar.

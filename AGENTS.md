<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# AGENTS.md

Instructions for AI coding agents contributing to this repo.

## Repo context

- **Stack:** Next.js (App Router, TypeScript), Tailwind CSS, ESLint. See
  [README.md](README.md) for the full stack and [docs/PLAN.md](docs/PLAN.md)
  for the phased roadmap.
- **Build:** `npm install` then `npm run build`.
- **Dev server:** `npm run dev`.
- **Tests:** none exist yet as of Phase 1 — see docs/PLAN.md for when a
  suite is introduced. If a test suite exists when you're reading this,
  run it; if it doesn't, don't invent test results.
- **Important directories:**
  - `src/app` — routes
  - `src/components/ui` — generic, reusable UI primitives
  - `src/components/features` — PayGuard-domain components (e.g. `VerdictBadge`)
  - `src/lib` — framework-agnostic helpers
  - `src/hooks` — shared React hooks
  - `src/types` — shared types (`Verdict`, `CheckResult`, etc.)
  - `src/config` — typed env/config access
  - `docs/PLAN.md` — the source of truth for what issues exist and why

## Rules

- Address each issue in its own commit.
- The PR description must include `Closes #<issue>` for every issue the PR addresses.
- Commit messages are single-line only, imperative mood.
- Do not add a `Co-authored-by` line to any commit.
- Keep the implementation minimal and focused on the issue at hand — do
  not bundle unrelated fixes or refactors into the same PR.
- Read the surrounding code before writing. Integrate cleanly with the
  existing structure (see Repo context above) rather than introducing
  parallel patterns.
- Avoid over-engineering. Don't add abstractions, config options, or
  error handling for cases the issue doesn't call for.
- This project is under active development. Expect bugs, missing pieces,
  and incomplete implementations elsewhere in the codebase. Do not "fix"
  things outside your issue's scope, even if you notice something odd.
- The test suite may or may not be reliable at any given time. If tests
  exist and run, use them to validate your change. If they don't exist or
  don't run, don't assume your change is correct just because nothing
  failed — prioritize clean, minimal, obviously-correct code either way.
- Keep scope as small as possible while still fully resolving the issue.
- **Do not commit or push implementation notes, plan files, or scratch
  markdown** (e.g. `IMPLEMENTATION.md`, `NOTES.md`, `TODO.md`,
  `*.plan.md`). Keep those local only — they're gitignored for a reason.

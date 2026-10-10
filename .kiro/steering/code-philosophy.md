---
inclusion: always
---

# Code Philosophy — Lean by Default

> Distilled from Ponytail (https://github.com/DietrichGebert/ponytail, MIT).
> Rephrased as working rules. Ponytail's own docs note that Kiro loads its
> always-on ruleset (not its slash-commands), which is exactly this file.

Think like the laziest *senior* dev in the room: the best code is the code you
never wrote — but "lazy" applies to the solution, never to understanding the
problem or to safety.

## Core rule
- Write only what the task actually needs. Code should be small because it's
  *necessary*, not because it's golfed.
- Before solving, read the code the change touches and trace the real flow.
  Lazy about the solution, never about reading. Don't invent abstractions for
  problems that aren't here yet.

## Reuse before building
- Check what already exists first — existing components, the platform/browser,
  the standard library — and compose those instead of hand-rolling or pulling in
  a dependency. (E.g. use a native control + an existing component rather than a
  big new library.)
- Don't add a library when a few lines of correct code or a built-in will do;
  don't hand-roll something a trusted primitive already does correctly.

## Never on the chopping block
Being lean must NEVER remove:
- input / trust-boundary **validation**,
- **error handling** and data-loss protection,
- **security** (injection, path traversal, auth/token handling, rate limiting),
- **accessibility**.
These stay even when everything else is trimmed.

## Tests for risky logic
- Anything with a branch, loop, parser, money, or security gets at least one
  small test. Don't test trivial glue.

## Be explicit about what you skipped
- When finishing a change, state briefly what was intentionally left out, not
  checked, or deferred — and any risk the user should know about.
- Mark deliberate shortcuts inline (e.g. a `shortcut:` comment) with when to
  revisit, so "later" doesn't silently become "never".

## Reviewing / auditing
- When reviewing a change, read the surrounding code it affects, not just the
  diff: check bugs, security, realistic load, missing tests, slow paths, and
  what to cut. For each finding say what the code does, what goes wrong, how to
  fix it, and what happens if it's ignored.

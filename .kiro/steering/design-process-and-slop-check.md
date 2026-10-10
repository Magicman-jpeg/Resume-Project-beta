---
inclusion: always
---

# Design Process & Anti-Slop Checklist

> Reconciled from garden-skills' web-design-engineer (ConardLi/garden-skills),
> tastemaker (codeswithroh/tastemaker), ai-design-skills' landing-page-design
> (elayadesign/ai-design-skills), and designer-skills' process sequencing
> (Owl-Listener/designer-skills). Rephrased as working rules; sources are MIT.

Complements `frontend-design.md`. That file covers the aesthetic point of view;
this one covers the *process* and the *mechanical checks* that keep output from
sliding into generic "AI slop".

## Work in sequence (don't skip grades)
Natural grain: understand context → declare a design system → show a quick v0 →
build the full thing → verify. For an existing product (this resume site),
critique first, then change — don't pile new work on top of unseen problems.

## 1. Understand before designing — the "Design Read"
Before writing code, settle these dials for the piece at hand:
- **Variance** — how far from conventional should this look?
- **Motion** — how much, and where?
- **Density** — airy vs information-dense?
- **Brand fidelity** — how tightly must it match an existing identity?
- **Redesign mode** — extend, preserve, or overhaul? (For this repo, default to
  *extend/preserve* the current editorial type system unless asked to overhaul.)

## 2. Declare the design system first
Write the tokens down before building:
- **Color:** 4–6 named values. Prefer `oklch()` for perceptually even scales.
  Generate a palette for the specific mood rather than reaching for a default.
- **Type:** families + roles + scale (the repo already uses Playfair Display +
  Darker Grotesque + Inter + Fira Code — reuse, don't add more).
- **Spacing / radius / shadow:** one consistent scale; don't put the same radius
  and the same soft grey shadow on everything.

## 3. Ground in real references, not word-guesses
- If a reference image/screenshot is provided, read its actual colors/contrast
  rather than paraphrasing the "vibe" and rebuilding from the paraphrase.
- Keep durable decisions written in the repo so later screens stay consistent
  and nothing drifts.

## 4. Mechanical anti-slop scan (check every build)
Flag and remove these high-confidence "tells":
- generic indigo/purple gradient backgrounds; gradient-filled text;
- emoji used as UI icons;
- `h-screen`/`100vh` hero traps; `transition: all`;
- dead/placeholder links (`href="#"`), placeholder/lorem copy left in;
- missing `alt` text; eyebrow-label spam (tracked-out ALL-CAPS above headings);
- a `→` appended to every link/button; middle-dot meta strings (A · B · C);
- identical rounded cards with one radius + one shadow standing in for hierarchy.

## 5. Verify legibility with real math (not vibes)
- Run WCAG contrast checks on text/background pairings; a palette that "looks
  fine" can still fail. Contrast is a calculation — compute it, don't eyeball it.
- Note: passing contrast proves *legibility*, not *beauty*. It's a floor, not a
  seal of quality.

## 6. Quality floor before "done"
- Responsive down to mobile; content reflows, touch targets adequate.
- Visible keyboard focus; forms keyboard-friendly with clear labels.
- `prefers-reduced-motion` respected; harmonious palette; accessible contrast.
- Stress-test with worst-case content (long/short strings, empty states).

## 7. Critique pass
- Review the result (take a screenshot when the environment allows) and produce
  a short, prioritized fix list — hierarchy, consistency, composition, type,
  color, density — before calling the work finished.

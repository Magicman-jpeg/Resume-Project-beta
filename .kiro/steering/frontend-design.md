---
inclusion: always
---

# Frontend Design Principles

> Distilled from the Anthropic `frontend-design` skill
> (https://github.com/anthropics/claude-code/blob/main/plugins/frontend-design/skills/frontend-design/SKILL.md).
> Rephrased as working rules for this repo; the source retains its own license.

Act as the design lead who gives every project a distinct identity. Make deliberate,
opinionated choices for *this* subject — a personal resume/portfolio for a developer —
rather than reaching for templated defaults.

## Ground every choice in the subject
- The subject is a personal CV/portfolio. Let the real content (projects, skills,
  background) drive the visual direction, not generic placeholder patterns.
- Decide the audience (recruiters, collaborators, peers) and the page's primary job
  (make the person credible and memorable fast), then design toward that.

## The hero
- Open with the most characteristic thing about the person, in whatever form fits best
  (a strong headline, a signature project, an interactive moment) — not automatically a
  big-number-with-label stat block, which is the generic default.

## Typography carries the personality
- One or two type families max; if two, make them clearly distinct.
- Set an intentional type scale with deliberate weights/widths/spacing.
- Body line length under ~80 characters; give serif body text a little more line-height.
- Avoid these AI "tells":
  - accenting a single word in a headline (one italic/bold/colored word),
  - ALL-CAPS labels,
  - decorative typographic labels stacked above content.

## Structure encodes information, not decoration
- Borders, dividers, numbering, eyebrows exist to carry meaning.
- Only use numbered markers (01/02/03) when the content is genuinely a sequence
  (a timeline, a stepped process). Don't number a list that isn't ordered.

## Motion (pairs with the repo's existing GSAP/ScrollTrigger)
- Use non-user-triggered motion sparingly: one orchestrated page-load or reveal beats
  scattered fade-and-slide-up on every section + hover transitions on every card
  (that pattern reads as AI-generated).
- Motion that responds to a user action (open, expand, confirm) is welcome.

## Avoid the current AI-design clichés
Treat these as defaults to avoid unless the brief explicitly calls for them:
1. warm cream background (~#F4F1EA) + high-contrast serif + terracotta/clay accent (~#D97757);
2. near-black background with a single acid-green/vermilion accent;
3. broadsheet layout: hairline rules, zero radius, dense newspaper columns;
4. SaaS-card kit: everything chopped into identical rounded cards, one radius on
   everything, the same soft grey shadow, gradient washes as decoration;
5. template chrome: tracked-out ALL-CAPS eyebrows, meta strings joined with middle dots
   (A · B · C), "WORD — fragment" spaced-em-dash labels, tinted near-black instead of
   black, monospace for tiny data labels, a "→" appended to every link/button.

## Process: plan → review → build → critique
1. Draft a compact token system first:
   - Color: 4–6 named hex values.
   - Type: the families and their roles.
   - Layout: one-sentence concept + ASCII wireframe; state alignment (left/center/justified).
   - Principles: what makes this page specifically unique.
2. Review the plan against the brief. If any part is what I'd produce for *any* similar
   page, revise it and say what changed and why.
3. Only then write code. Watch CSS specificity — avoid type- vs element-selector rules
   that cancel each other (common with section padding/margins).

## Restraint and quality floor
- Spend boldness in ONE place; keep everything around it quiet. Remove one "accessory"
  before shipping.
- Always meet the floor without fanfare: responsive to mobile, visible keyboard focus,
  `prefers-reduced-motion` respected, accessible contrast, harmonious palette.
- Take screenshots to critique the result when the environment allows.

## Writing / copy
- Words are design content, not decoration — bring the same minimalism as spacing/color.
- Name things by what the user understands, in plain language; active voice.
- CTAs state exactly what happens ("Download CV", not "Submit"); keep an action's name
  consistent through the whole flow.
- Empty/error states give direction, not mood. Sentence case, no filler.

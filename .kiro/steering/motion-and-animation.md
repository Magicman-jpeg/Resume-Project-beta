---
inclusion: always
---

# Motion & Animation Craft

> Reconciled from emilkowalski/skills (ex-Vercel/Linear animation expertise),
> tastemaker's motion audit (codeswithroh/tastemaker), and garden-skills
> (ConardLi/garden-skills). Rephrased as working rules for this repo, which
> already loads GSAP + ScrollTrigger. Sources retain their own (MIT) licenses.

The goal: motion that feels intentional and native, not the generic
fade-and-slide-up-on-everything that reads as AI-generated.

## Easing and direction
- Enter animations use **ease-out** (fast start, gentle settle); exit animations
  use **ease-in**. Never use a plain `ease-in` for something appearing.
- Avoid `transition: all` — animate only the specific properties that change.
- Prefer transform/opacity (compositor-friendly) over animating layout
  properties (width/height/top/left) which cause jank.

## Duration and restraint
- Keep UI transitions short (roughly 150–300ms). Long UI timing feels sluggish.
- One orchestrated moment (a sequenced hero reveal) beats scattered effects on
  every section/card.
- Non-user-triggered motion only to draw attention. Motion that answers a user
  action (open/expand/confirm) is always welcome because it shows what changed.

## Craft details that compound
- Use semi-transparent shadows for depth rather than solid borders where a soft
  edge is wanted; reserve solid borders for genuine structure.
- Don't animate `scale(0)` from nothing for entrances — start from a small
  non-zero scale/opacity so it doesn't pop.
- Gate hover motion so it doesn't fire on touch devices.

## Accessibility (non-negotiable)
- Always respect `prefers-reduced-motion: reduce` — provide a near-static
  fallback for every non-essential animation.
- Keep visible keyboard focus states; motion must never trap or hide focus.

## Before shipping an animation — self-review
- Is each curve correct for its direction (enter vs exit)?
- Is anything animating `all` or a layout property? Fix it.
- Does it still work with reduced motion on?
- Would removing this animation lose meaning? If not, consider cutting it
  (spend boldness in one place).

## Libraries over hand-rolling
- For complex interactive behavior (sheets, toasts, menus, dialogs), prefer a
  trusted primitive/library over a hand-rolled version that misses edge cases
  (focus trap, escape-to-close, scroll lock). Only hand-roll when it's genuinely
  simpler and fully correct.

## Stress-test the UI
- Try to break it with worst-case data: very long names, one-letter names,
  huge counts, empty lists, long labels, unusual emails. Fix overflow/wrapping
  before considering a component done.

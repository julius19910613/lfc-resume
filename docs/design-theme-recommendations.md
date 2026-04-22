# Theme Recommendations for LFC Resume

This project is now configured with root-level `DESIGN.md` for AI-assisted UI consistency.

If you want to try additional styles from `awesome-design-md`, these themes are a good fit for a bilingual, print-oriented resume site:

## Recommended Themes

### 1) Linear
- Fit: Professional, minimal, engineering-focused resume
- Why: Precise typography, restrained color usage, excellent clarity for dense career content
- Best when: You want "product engineer" style and strong information hierarchy

### 2) Notion
- Fit: Content-first, calm reading experience
- Why: Soft visual rhythm and editorial readability work well for long project descriptions
- Best when: You want a friendly but still professional profile

### 3) Tesla
- Fit: High-contrast, modern, premium profile
- Why: Strong dark-light contrast and cinematic structure match senior technical branding
- Best when: You want a bold, memorable personal brand

### 4) IBM
- Fit: Enterprise and architecture-heavy background
- Why: Structured layout language and conservative visual system signal reliability
- Best when: You target enterprise engineering / platform roles

### 5) Mintlify
- Fit: Developer docs-like clarity
- Why: Clean spacing and developer-oriented information presentation
- Best when: You want a "technical writer + engineer" polished profile

## How to Switch Quickly

1. Pick a target style from the `awesome-design-md` collection.
2. Replace root `DESIGN.md` with that style's `DESIGN.md` (or merge selected tokens into current one).
3. Ask your coding agent:
   - "Refactor current UI to follow DESIGN.md, keep existing content/data structure and print behavior."
4. Run:
   - `npm run dev` for visual iteration
   - `npm run build` for production check

## Guardrails for This Project

- Keep A4 export readability as highest priority.
- Preserve bilingual spacing and line breaks.
- Avoid heavy motion/ornamental effects that hurt PDF clarity.

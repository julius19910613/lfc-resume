# DESIGN.md — LFC Resume (Linear-inspired Professional Theme)

## 1) Visual Theme & Atmosphere
- Professional, clean, and high-information-density resume layout
- Calm, precise, engineering-oriented tone inspired by Linear
- Strong left/right hierarchy: dark identity sidebar + bright content panel
- Optimized for both on-screen reading and print/PDF export
- Visual priority: readability > decoration

## 2) Color Palette & Roles
- `--sidebar-bg`: `#111318` (primary dark surface)
- `--sidebar-text`: `#f3f4f6` (sidebar main text)
- `--sidebar-muted`: `#9ca3af` (sidebar secondary text)
- `--accent`: `#5e6ad2` (interactive accent, section emphasis)
- `--accent-light`: `#c7d2fe` (subtle highlight on dark surface)
- `--accent-bg`: `rgba(94, 106, 210, 0.16)` (button/chip background)
- `--text-primary`: `#111827` (main content text)
- `--text-secondary`: `#4b5563` (secondary content text)
- `--bg-main`: `#ffffff` (content background)
- `--border`: `#e5e7eb` (dividers and light borders)

## 3) Typography Rules
- Font stack:
  - UI: `Inter, PingFang SC, Microsoft YaHei, Helvetica Neue, Arial, sans-serif`
  - PDF: `NotoSansSC`
- Type hierarchy:
  - Name: 26px, 700, sidebar
  - Section title (main): 16px, 700, non-uppercase
  - Company/Project title: 16px, 700
  - Role title: 13px, 500, accent color
  - Body/bullets: 13px, line-height 1.6+
  - Meta text: 11-12px
- Content must support Chinese + English with consistent spacing rhythm

## 4) Component Stylings
- Buttons:
  - Rounded (`6px`), lightweight border, subtle hover color change
  - Primary utility actions use accent background
- Language switch:
  - Compact segmented buttons, active item uses accent background
- Tags (skills):
  - Compact rounded rectangle (`6px` radius), accent tint background, compact spacing
- Cards/sections:
  - Resume sections are visually separated by bottom borders and whitespace
- Editable fields:
  - Borderless by default, show soft accent border on hover/focus

## 5) Layout Principles
- Fixed A4-oriented canvas for primary layout (`~794px` width)
- Two-column structure:
  - Sidebar: identity, contact, summary, skills, education
  - Main: experience, projects, achievements
- Spacing scale:
  - Micro: 4px
  - Small: 8px
  - Medium: 12-16px
  - Section gap: 24-32px
- Keep alignment strict and avoid visual noise

## 6) Depth & Elevation
- On screen:
  - Toolbar shadow: subtle (`0 2px 8px rgba(0,0,0,0.08)`)
  - Content shadow: medium (`0 4px 24px rgba(0,0,0,0.12)`)
- In print mode:
  - Remove all shadows and non-essential depth cues

## 7) Do's and Don'ts
- Do:
  - Preserve bilingual readability and hierarchy clarity
  - Keep accent usage constrained to key UI and headings
  - Maintain print-safe contrast and spacing
- Don't:
  - Introduce heavy gradients, glassmorphism, or large animation effects
  - Decrease body text contrast
  - Break A4 export readability for decorative UI changes

## 8) Responsive Behavior
- Breakpoints:
  - `<= 850px`: compact toolbar and narrower layout
  - `<= 600px`: collapse into single-column flow
- Mobile priorities:
  - Maintain content order and legibility
  - Preserve touch-friendly controls
- Print mode:
  - Hide toolbar and interactive affordances
  - Avoid section/page breaks inside key content blocks

## 9) Agent Prompt Guide
- Keywords:
  - `professional resume`, `bilingual`, `print-friendly`, `engineering aesthetic`, `minimal accent`
- Agent instructions:
  - "Follow DESIGN.md strictly. Keep the two-column resume architecture and A4-first spacing."
  - "Prefer readability and print quality over decorative effects."
  - "Retain current accent system and semantic section hierarchy."

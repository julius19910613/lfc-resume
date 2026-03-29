# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Personal resume (简历) website for 李繁宸, built with React. Renders as an A4-formatted page optimized for both screen display and PDF/PNG export.

## Commands

- `npm start` or `npm run dev` — Start webpack dev server on port 7000 with hot reload
- `npm run build` — Production build to `dist/`
- `npm run export` — Serves the built `dist/` on port 7000 and opens browser for manual PDF/PNG export via browser print dialog

No test suite is configured.

## Architecture

**Single-page React app** with no routing. Entry point is `src/index.js` → renders `<Resume />` into `#root`.

### Component structure
```
Resume.jsx
├── Header.jsx          (name, contact info)
├── Experience.jsx      (work history)
├── Projects.jsx        (project details)
├── Education.jsx       (education history)
└── Skills.jsx          (skill tags)
```

### Data layer
- **`src/data/resumeData.js`** — Single source of truth for all resume content (personal info, education, skills, experience, projects). Edit this file to update resume content.
- **`src/hooks/useResumeData.js`** — Custom hook that wraps `resumeData` with `useState`/`useMemo`, providing getters and setters for each section. All components consume data through this hook.

### Styling
- Single CSS file `src/style.css` with Chinese-language comments
- Layout is fixed-width (794px ≈ A4 width) with responsive breakpoints at 850px and 600px
- Print media queries handle PDF export styling (no shadows, adjusted margins, page-break controls)

### Build toolchain
- Webpack 5 with Babel (react + env presets), MiniCssExtractPlugin, HtmlWebpackPlugin
- Config in `webpack.config.js` at project root
- Dev server port is **7000** (defined in both webpack config and `config.js`)

### Export system (legacy)
- `build.js` — Old Puppeteer-based PDF/PNG export (requires `localhost:7000` running)
- `export-resume.js` — Current export approach: serves `dist/` via Express, opens browser for manual print-to-PDF
- Output path configured in `config.js`: `./dist/jianli.pdf` and `./dist/jianli.png`

### Legacy files
- `gulpfile.js` — Old BrowserSync-based dev server, no longer used (replaced by webpack dev server)
- `dev.bat`, `install.bat`, `export.bat` — Windows helper scripts

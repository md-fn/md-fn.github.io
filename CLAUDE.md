# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Overview

Static brutalist-design portfolio site hosted on GitHub Pages. No build step, no dependencies — pure HTML/CSS/JS. Changes go live after a `git push` (GitHub Pages auto-deploys from `main`, takes ~1–2 min).

## Development

Open `index.html` directly in a browser, or use any local static server:

```bash
# Python
python -m http.server 8080

# Node (npx)
npx serve .
```

No linting or testing tooling is configured.

## Architecture

The site is a single-page application driven by hash-based routing. All four sections (`#home`, `#electronics`, `#3d-design`, `#photography`) live in `index.html` and are toggled via `display: none / block` using the `.active` class — only one section is visible at a time.

### Key files

| File | Role |
|------|------|
| `index.html` | Shell: nav, four `<section>` placeholders, footer |
| `script.js` | Project data, grid rendering, navigation logic, hamburger menu |
| `styles.css` | All styles — brutalist theme, bento grid layout, responsive breakpoints |
| `projects/*.html` | Individual project detail pages (self-contained, share `styles.css`) |

### Adding or editing projects

All project data lives in the `projects` object in [script.js](script.js) (lines 6–95). Each entry needs `id`, `title`, `category`, `image`, `description`, and `link`. Projects appear in the section matching their array key (`featured`, `electronics`, `3d-design`, `photography`). A project can appear in multiple arrays.

The featured grid uses a CSS bento layout (`.projects-bento`) with hard-coded `nth-child` rules that control span sizes. Adding beyond 8 cards repeats the pattern via `8n+N` selectors.

### Project detail pages

Each project gets its own `.html` file under `projects/`. Use one of the existing files (`smart-home.html`, `mechanical-arm.html`, `architecture-series.html`) as a template. They use the same `styles.css` and share the detail-page classes (`.detail-header`, `.detail-content`, `.detail-image`, `.back-button`).

### Theming

CSS custom properties are defined at the top of [styles.css](styles.css):

```css
:root {
    --black: #000000;
    --white: #ffffff;
    --gray:  #1a1a1a;
}
```

Font is Bebas Neue (loaded from Google Fonts) for headings/UI, Arial for body copy.

## Deployment

Push to `main`. GitHub Pages serves from the repo root. The live URL is `https://md-fn.github.io`.

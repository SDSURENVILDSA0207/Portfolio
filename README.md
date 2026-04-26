# Renvil Dsa — Portfolio (Web Designer & Frontend)

A single-page portfolio website that presents education, experience, projects, and skills. It is built with **HTML, CSS, vanilla JavaScript, and jQuery** so it directly reflects common **web designer / frontend** job expectations: semantic markup, responsive layout, cross-browser–friendly CSS, and lightweight scripting—without requiring a build step or framework to view or host.

---

## Table of contents

1. [Purpose](#purpose)
2. [Tech stack](#tech-stack)
3. [What’s in the project](#whats-in-the-project)
4. [Features in detail](#features-in-detail)
5. [How to run locally](#how-to-run-locally)
6. [Why the browser may say “Not Secure”](#why-the-browser-may-say-not-secure)
7. [Deploying (HTTPS)](#deploying-https)
8. [Customizing the site](#customizing-the-site)
9. [Browser support](#browser-support)

---

## Purpose

- **For interviews:** You can show a live or deployed link and say the site itself demonstrates the same fundamentals listed in many web designer postings (HTML/CSS, JavaScript, jQuery, responsive and mobile-first thinking, design-tool alignment).
- **For reviewers:** The repo is small and readable—`index.html` is the content map, `css/styles.css` holds layout and theming, `js/main.js` handles behavior.

---

## Tech stack

| Layer        | What’s used | Why |
|-------------|-------------|-----|
| **Markup**  | HTML5       | Semantic regions (`header`, `main`, `section`, `nav`, `footer`), skip link, ARIA on the mobile menu. |
| **Styling** | CSS3        | Custom properties (variables), Flexbox and Grid, `clamp()` for fluid spacing/type, sticky header, `prefers-reduced-motion` for accessibility. |
| **Scripts** | JavaScript + **jQuery 3.7** (CDN) | Mobile navigation, smooth in-page scrolling, footer year, scroll class on the header. Matches roles that list jQuery explicitly. |
| **Assets**  | `favicon.svg` | “RD” mark in the tab; scales cleanly (SVG). |
| **Fonts**   | Google Fonts (DM Sans, Fraunces) | Loaded in `index.html` with `preconnect` for performance. |

No compile step, no `node_modules`—open the folder in any editor and serve the files (see below).

---

## What’s in the project

```
Portfolio/
├── index.html      # All page content and structure
├── favicon.svg     # Tab icon (“RD”)
├── css/
│   └── styles.css  # Global styles, layout, components
├── js/
│   └── main.js     # jQuery: nav, scroll, year, header state
└── README.md       # This file
```

---

## Features in detail

### Content sections

1. **Hero** — Headline, short positioning paragraph, primary/secondary calls to action, quick facts, and a “Focus areas” card.
2. **About (“How I align with the role”)** — Short bridge between the job’s typical expectations and how you work (maps to HTML/CSS, jQuery, responsive & cross-browser, Figma/Adobe).
3. **Skills** — Grouped tags: core web, design/collab, and broader production tools (e.g. React, Git), aligned with the resume.
4. **Experience** — Timeline for SDSU and Pantech, using resume bullets.
5. **Projects** — LuxeFlow and IMEITrack summaries with technology tags.
6. **Education** — SDSU and University of Mumbai.
7. **Contact** — Email, phone, LinkedIn, GitHub (update these in `index.html` if they change).
8. **Footer** — Copyright year (filled by JavaScript) and “Back to top”.

### Responsive behavior

- **Navigation:** Desktop shows a horizontal nav; narrow viewports use a **hamburger** button that opens a full-width panel, **Escape** closes it, and resizing to desktop width resets the menu.
- **Layout:** The hero uses a two-column grid on wide screens and stacks on smaller screens. Other sections use grids that collapse to a single column where needed.
- **Hero height:** The hero section uses a **minimum height** based on the visible viewport (`svh`) minus the header so the next section’s heading does not “peek” at the bottom of the first screen on common laptop window sizes.

### Smooth scrolling

- In-page links (`#about`, `#skills`, etc.) scroll smoothly and offset by the sticky header height so section titles are not hidden under the bar.
- Links to `#top` scroll to **y = 0** (true top), including the logo and “Back to top”.

### Styling and theme

- Dark theme with accent green (`#3ecf9a` and related tokens) in `:root` at the top of `styles.css`. Adjust those variables to rebrand quickly.

### Performance / quality notes

- `preconnect` to `fonts.googleapis.com` and `fonts.gstatic.com` reduces font load delay.
- jQuery is loaded with **SRI** (`integrity` + `crossorigin`) from the official CDN for tamper checking.

---

## How to run locally

You need a static file server (double-clicking `index.html` may work but can break some paths and behave differently; serving the folder is recommended).

### Option A — Python 3 (often pre-installed on macOS)

```bash
cd /path/to/Portfolio
python3 -m http.server 8080
```

Open **http://127.0.0.1:8080** (or **http://[::1]:8080** on IPv6).

Stop the server: **Ctrl+C** in the terminal.

Use another port if `8080` is busy, e.g. `python3 -m http.server 3000`.

### Option B — Other tools

If you use **Node.js**, you can use `npx serve` or **VS Code “Live Server”**—point the server root at this folder so `index.html` is the default document.

---

## Why the browser may say “Not Secure”

When you use `python3 -m http.server` (or most local dev servers), the URL uses **HTTP**, not **HTTPS**. Browsers label HTTP pages as “Not Secure.” That is **expected for local development**; it does not mean your HTML is invalid.

To get a **lock icon** and HTTPS for sharing with employers, **deploy** the same files to a host that provides TLS (e.g. GitHub Pages, Netlify, Vercel, Cloudflare Pages). Those services serve your site over HTTPS by default.

---

## Deploying (HTTPS)

Typical flow:

1. Push this folder to a GitHub repository.
2. Enable **GitHub Pages** in the repo settings (usually “Deploy from branch `main` / root” or `docs/`), **or** connect the repo to **Netlify** / **Vercel** and set publish directory to the project root.
3. After deploy, use the `https://...` URL on your resume and LinkedIn.

No build is required; static files are enough.

---

## Customizing the site

| Goal | Where to edit |
|------|----------------|
| **Copy, headings, contact links, project text** | `index.html` |
| **Colors, spacing, fonts, breakpoints** | `css/styles.css` (especially `:root` variables) |
| **Menu behavior, scroll offset, year** | `js/main.js` |
| **Tab icon** | Replace `favicon.svg` or change `favicon.svg` and keep the `<link rel="icon" ...>` in `index.html` |
| **Sticky header height** | CSS variable `--header-h` in `styles.css` should stay in sync with the real header (used for `min-height` on `.hero` and scroll math in JS) |

After edits, refresh the browser; if styles/cache stick, use a hard refresh (e.g. **Cmd+Shift+R** on Mac).

---

## Browser support

- **Modern evergreen browsers** (current Chrome, Firefox, Safari, Edge) are the target.  
- **SVG favicons** are widely supported; very old browsers may fall back to no icon.  
- **`100svh`** and **`dvh`/`svh` units** are for stable viewport sizing; if you need to support very old environments, you could add a `100vh` fallback in CSS (optional).

---

## License

Personal portfolio content and code: use and modify for your own career materials as you see fit. If you fork publicly, consider replacing contact details and project descriptions with your own.

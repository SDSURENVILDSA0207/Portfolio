# My portfolio website

Hi, I’m **Renvil Dsa**. I built this site as my personal portfolio: one place to show who I am as a **web designer and frontend developer**, what I’ve worked on, and how I think about layout, code, and collaboration. It is a **static, hand-authored** project—no framework and no build step—so anyone reviewing my work can open the files and see exactly how I structure HTML, style with CSS, and add behavior with JavaScript and jQuery.

---

## Why I made it this way

I wanted a portfolio that **mirrors the skills employers ask for** in web and digital design roles: solid **HTML and CSS**, **JavaScript** with **jQuery** where it fits real-world sites, **responsive** and **mobile-first** thinking, and attention to **cross-browser** behavior. I also weave in my experience with **Figma**, **Adobe** tools, and **CMS/campaign**-style work through the copy and skills sections.

Sticking to vanilla HTML/CSS/JS (plus jQuery) keeps the project **light, fast, and easy to host**—perfect for **GitHub Pages**, Netlify, or any static host with **HTTPS** out of the box.

---

## What I built

A **single-page** site with clear sections:

| Section | What you’ll find |
|--------|-------------------|
| **Hero** | My positioning line, short intro, calls to action, and a quick “focus areas” card |
| **About** | How my workflow maps to common web designer expectations (HTML/CSS, jQuery, responsive, Figma/Adobe) |
| **Skills** | Grouped tags from core web through design tools and my broader stack (e.g. React, Git) |
| **Experience** | My roles at **San Diego State University** and **Pantech Solutions** |
| **Projects** | **LuxeFlow Commerce Studio** and **IMEITrack**—summaries and tech tags |
| **Education** | **MS CS (SDSU)** and **BS CS (University of Mumbai)** |
| **Contact** | Email, phone, **LinkedIn**, and **GitHub** |

I added a custom **“RD” favicon** (`favicon.svg`) so the tab matches my personal brand, and I tuned the **hero** so the first screen feels intentional on common laptop sizes (no stray peek of the next section).

---

## How I built it (tech stack)

- **HTML5** — Semantic structure (`header`, `main`, `section`, `nav`, `footer`), a skip link for keyboard users, and ARIA on the mobile menu.
- **CSS3** — Custom properties, Flexbox and Grid, fluid spacing with `clamp()`, sticky header, dark theme, and `prefers-reduced-motion` where it matters.
- **JavaScript + jQuery 3.7** — Mobile nav toggle, smooth in-page scrolling (with the correct offset for the sticky header), dynamic copyright year, and a light scroll state on the header.
- **Google Fonts** — **DM Sans** and **Fraunces**, with `preconnect` for snappier font loading.
- **jQuery from CDN** with **SRI** (`integrity` + `crossorigin`) for security best practice on third-party script.

I deliberately **did not** use React or a bundler for *this* site, so the repo stays transparent and the stack matches “HTML, CSS, JavaScript, jQuery” job descriptions.

---

## Project structure

```
Portfolio/
├── index.html      # All content and markup
├── favicon.svg     # RD logo for the browser tab
├── css/
│   └── styles.css  # Layout, theme, components
├── js/
│   └── main.js     # jQuery: navigation, scroll, year
└── README.md       # You’re reading it
```

---

## Run it on your machine

I develop by **serving the folder** (not by opening the file directly), so assets and behavior stay consistent.

**Python 3** (macOS often has this already):

```bash
cd path/to/Portfolio
python3 -m http.server 8080
```

Then open **http://127.0.0.1:8080** in your browser. Stop the server with **Ctrl+C**. Pick another port if `8080` is taken.

You can also use **VS Code Live Server**, `npx serve`, or any static file server—point it at this project’s root so `index.html` loads as the home page.

### Note on “Not Secure” in the address bar

Local servers use **HTTP**, not **HTTPS**, so the browser may say **“Not Secure.”** That is **normal for localhost**. When I **deploy** the same files to GitHub Pages, Netlify, or Vercel, the site is served over **HTTPS** and that warning goes away for visitors.

---

## Deploy (share a proper link)

1. Push this repository to **GitHub**.
2. Turn on **GitHub Pages** (root of `main` is fine), or connect the repo to **Netlify** / **Vercel** with the **publish directory** set to the project root.
3. Use the **https://** URL on my resume, LinkedIn, and in interviews.

There is still **no build**—it is all static files.

---

## If you fork or adapt this

| To change… | Edit… |
|------------|--------|
| Text, links, project blurbs | `index.html` |
| Colors, spacing, layout | `css/styles.css` (start with the `:root` variables) |
| Nav, scroll, footer year | `js/main.js` |
| Tab icon | `favicon.svg` and the `<link rel="icon">` in `index.html` |
| Sticky header height | CSS variable `--header-h` in `styles.css` (I use it for hero height and scroll math) |

For public forks: swap in your own name, experience, and contact details.

---

## Browsers

I target **current** Chrome, Firefox, Safari, and Edge. The **SVG favicon** and **`svh`-based** hero height work in modern browsers; very old clients might ignore the favicon or need fallbacks for viewport units (optional).

---

## License

This is **my personal portfolio**—content and design reflect my work and education. You may use the structure or ideas for your own site; if you republish, replace my story, projects, and contact information with yours.

---

**Thanks for reading.** If you’re a recruiter or hiring manager: this site is a concrete example of how I build for the web—**structured markup, thoughtful CSS, and practical JavaScript**—and I’m happy to walk through the code in an interview.

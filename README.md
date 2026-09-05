# prasannawagh.dev

Personal portfolio for **Prasanna Wagh** — full-stack engineer (React · Node.js · TypeScript · PostgreSQL).

Hand-built static site. No framework, no build step, no bundler, no tracking.

## Design system

Inspired by [lightwork.co](https://www.lightwork.co/) — a high-contrast editorial system:

| Token | Light | Dark |
| --- | --- | --- |
| Background | `#ffffff` | `#08090a` |
| Foreground | `#000000` | `#ffffff` |
| Muted text | `#41514f` | `#a7b2b0` |
| Hairline | `#e6e7e9` | `#212627` |
| Accent | `#0b7ff0` | `#56a8ff` |
| Positive | `#10794f` | `#45c78d` |

- **Type** — Geist (display + body) and Geist Mono (labels, data rows), self-hosted latin subset, variable weight.
- **Display tracking** — `-0.032em` / `-0.04em`, line-height `0.98–1.03`.
- **Radii** — `100px` pills for buttons and tags, `20px` cards, `14px` inner surfaces.
- **Section rhythm** — mono uppercase eyebrow → display headline → muted lede → a data module (stat strip, before/after panels, comparison rows).
- Every colour pair clears WCAG AA in both themes.

## Performance budget

| Asset | Size |
| --- | --- |
| `index.html` | ~21 KB |
| `assets/styles.css` | ~21 KB |
| `assets/main.js` | ~3.7 KB |
| Geist + Geist Mono (woff2, latin) | ~52 KB |

Zero third-party requests. Fonts are preloaded and self-hosted, so there is no
render-blocking stylesheet from a CDN and no FOUT hop.

## Interactions

All vanilla, all progressive enhancement — the page is complete with JavaScript disabled:

- Word-by-word masked reveal on display headlines (`IntersectionObserver`).
- Count-up on stat numerals.
- Scroll progress bar in the sticky nav.
- Light/dark toggle, persisted to `localStorage`, applied before first paint.
- Everything respects `prefers-reduced-motion`.

## Local development

```bash
python3 -m http.server 8000
# → http://localhost:8000
```

There is nothing to install and nothing to compile.

## Deploying to Vercel

```bash
npm i -g vercel
vercel            # preview
vercel --prod     # production
```

Or import the repo at [vercel.com/new](https://vercel.com/new) — framework preset
**Other**, no build command, output directory `.` (the repo root). `vercel.json`
sets immutable caching on `/assets/*` plus the usual security headers.

Update the canonical URL in `index.html`, `robots.txt` and `sitemap.xml` once the
domain is attached.

## Content

Résumé PDF lives at `assets/Prasanna-Wagh-Fullstack-Engineer.pdf` and is linked
from the hero and the contact section — replace that file to update the download.

## Licence

Geist and Geist Mono are © Vercel, licensed under the SIL Open Font License 1.1.
Site code is free to borrow; the written content and résumé are not.

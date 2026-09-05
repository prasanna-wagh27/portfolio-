# prasannawagh.dev

Personal portfolio for **Prasanna Wagh** — full-stack engineer (React · Node.js · TypeScript · PostgreSQL).

**Next.js 16 (App Router) · React 19 · TypeScript · Tailwind CSS v4.**

## Design system

Adapted from [lightwork.co](https://www.lightwork.co/): a vivid azure→cyan gradient hero,
light-blue tinted card surfaces, one near-black statement band, and Geist type with
tight display tracking.

| Role | Value |
| --- | --- |
| Hero / CTA gradient | `#065a9b` → `#0a6cb0` → `#1288d8` → `#6fd3f4` |
| Brand | `#0e86d6` (bright `#33b4ec`, deep `#0763a8`, ink `#06466f`) |
| Tinted surface | `#e7f6fe` / `#f3fbff` |
| Night band | `#04121f` with `#5cc9f6` accent |
| Ink / body / muted | `#0a1420` / `#41545f` / `#6d7f88` |
| Positive / negative | `#12805a` / `#c23a2c` |

Tokens live in `app/globals.css` under `@theme`, so they are available as Tailwind
utilities (`text-brand`, `bg-tint`, `text-cyan-on-night`, …).

**Section rhythm**, matching the reference: a small blue dot + wide-tracked uppercase
eyebrow → a centred display headline → a supporting paragraph → a data module
(stat cards, project cards with an oversized metric rail, before/after panels).

### One deliberate deviation

The reference puts white text on light cyan at roughly 2.6:1. That fails WCAG AA. This
site keeps the same look but deepens the gradient's upper stops and lays a soft
`rgba(2,38,68,·)` scrim over the text zone, so hero and CTA copy sits at **≈5.7:1** —
AA for body text, comfortably past AA for the display sizes.

## Structure

```
app/
  layout.tsx      metadata, JSON-LD Person schema, Geist fonts
  page.tsx        section composition
  globals.css     design tokens + utilities
  icon.svg        favicon
components/
  Nav  Hero  Stats  Pillars  Work  BeforeAfter
  Statement  Experience  Stack  Contact  Footer
  Reveal  CountUp        (the only two client components)
public/
  Prasanna-Wagh-Fullstack-Engineer.pdf
```

Everything is a React Server Component except `Nav`, `Reveal` and `CountUp`, so the
client bundle stays small. Fonts are self-hosted through the `geist` package — no
Google Fonts request. No analytics, no tracking.

## Local development

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # production build
```

## Deploying to Vercel

Import the repo at [vercel.com/new](https://vercel.com/new) — the Next.js preset is
detected automatically, no configuration needed. Or:

```bash
npm i -g vercel
vercel --prod
```

Security headers are set in `next.config.ts`. Update the canonical URL (`SITE` in
`app/layout.tsx`) once the domain is attached.

## Content

The résumé PDF is served from `public/` and linked from the hero and contact sections —
replace that file to update the download.

## Licence

Geist and Geist Mono are © Vercel, under the SIL Open Font License 1.1.
Code is free to borrow; the written content and résumé are not.

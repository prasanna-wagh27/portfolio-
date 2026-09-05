# prasannawagh.dev

Personal site for **Prasanna Wagh** — full-stack engineer (React · Node.js · TypeScript · PostgreSQL).

It reads as a résumé, not a marketing page: name and a short intro, then work
experience, tech stack, projects, and education / other info.

**Next.js 16 (App Router) · React 19 · TypeScript · Tailwind CSS v4.**

## Technology icons

Brand marks are generated from the [Simple Icons](https://simpleicons.org) package
(CC0) into `lib/icons.ts` — never hand-drawn. Regenerate with:

```bash
node scripts/gen-icons.mjs
```

A tool with no official mark (Zustand, BullMQ, and the practice labels) renders as a
plain text chip rather than an invented logo.

## Design system

Palette and surface values are taken from lightwork.co's own stylesheet rather
than eyeballed from screenshots:

| Token | Value | Source |
| --- | --- | --- |
| `--color-brand` | `#1aa0e6` | their brand blue |
| `--color-tint` | `#e7f6fe` | their pale surface |
| Signature gradient | `linear-gradient(191deg,#62e9ff,#1aa0e6 53.5%,#886be0)` | verbatim |
| Card shadow | `0 4px 10px -2px rgb(0 0 0/.05), 0 0 0 1px rgb(26 160 230/.12)` | verbatim |
| Glow | `0 0 43px rgb(26 160 230/.32)` | verbatim |
| Section wash | `linear-gradient(180deg,#fff,#e7f6fe 13%,#e7f6fe 84%,#fff)` | verbatim |

Three things make that system read as crisp, and all three are now in place:

1. **Shadows are blue tinted, never grey**, and cards carry a
   `0 0 0 1px rgb(26 160 230/.12)` ring in place of a border.
2. **Sections fade white to tint to white**, so they melt into one another
   instead of meeting at a hairline. The masthead fades back to white at its
   foot for the same reason.
3. **One saturated element.** The 191deg gradient appears only on the scroll
   progress bar and the period after the name.

`#1aa0e6` on white is 2.9:1, so two derived blues carry the text: `#1595db`
for large display accents (3.2:1) and `#0b6ea6` for links and units (5.4:1).

**Type.** Geist, self-hosted. Name at `clamp(52px, 10.5vw, 116px)`, `-0.045em`
tracking, `0.92` line-height. Labels 11px at `0.2em`. Figures use a `Stat`
component that sets the numeral large and hangs the unit smaller off the top.

**Figures.** Each one carries a source line, because a bare "40% faster API
responses" says nothing about where it came from. Prefixes (`~`, `<`) hang into
the gutter so the numerals share a left edge across columns, units sit on the
baseline rather than being raised with a magic margin, and the three rows are
aligned across columns with `grid-rows-subgrid`. There is deliberately no
count-up animation: it renders wrong numbers for most of its duration, which is
not a thing to do to figures on a résumé.

**Motion.** Entrance is a blur-and-rise (`translateY(22px)` plus `blur(7px)` to
zero) staggered by a `--d` custom property; the masthead runs it on load, the
rest on an IntersectionObserver. Tech tiles lift with a spring curve and gain a
blue ring and glow on hover. A two pixel progress bar in the signature gradient
tracks reading position. Every one of these collapses under
`prefers-reduced-motion: reduce`.

**Layout.** Every section is a two column frame: a sticky label rail on the
left, content on the right.

## Structure

```
app/
  layout.tsx      metadata, JSON-LD Person schema, Geist fonts
  page.tsx        section composition
  globals.css     design tokens + utilities
  icon.svg        favicon
components/
  Nav  Masthead  Experience  TechStack  Projects  Education  Footer
  Section  Stat  TechIcon
  Reveal  ScrollProgress          (client components, with Nav)
lib/
  icons.ts        generated brand marks
scripts/
  gen-icons.mjs   regenerates lib/icons.ts
public/
  Prasanna-Wagh-Fullstack-Engineer.pdf
```

Everything is a React Server Component except `Nav` and `Reveal`, so the
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

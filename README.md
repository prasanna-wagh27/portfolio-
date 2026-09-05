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

Three rules the CSS enforces, all of them lifted from studying lightwork.co
rather than from a component library:

1. **Surfaces are gradients with a soft shadow, never 1px boxes.** `.panel` is a
   158deg white to pale blue gradient over a two-stop shadow. There is no card
   border anywhere on the page.
2. **Rules fade at the ends.** `.rule` is a gradient, transparent to `#e2e8ec` to
   transparent, so section breaks do not read as table lines.
3. **One accent.** `#0a7ad0`, used on the period after the name, the label dots,
   the units beside figures, and links on hover. Everything else is the ink ramp.

The masthead sits on `.wash`, two overlapping radial gradients over white, so the
page opens with atmosphere instead of a saturated hero band.

**Type.** Geist, self-hosted. The name is set at `clamp(52px, 10.5vw, 116px)` with
`-0.045em` tracking and `0.92` line-height. Body runs 16 to 17px at 1.6 to 1.65.
Labels are 11px at `0.2em` tracking, uppercase. Figures use a `Stat` component
that sets the numeral large and drops the unit to a smaller size hung off the top,
the way the reference sets `85%`. Tabular numerals throughout, `text-wrap: balance`
on headings and `pretty` on paragraphs.

**Layout.** Every section is a two column frame: a sticky label rail on the left,
content on the right. That keeps the page reading as a document rather than a
stack of centred marketing blocks.

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
  Reveal          (with Nav, the only client components)
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

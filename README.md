# prasannawagh.dev

Personal site for **Prasanna Wagh**, full-stack engineer (React · Node.js ·
TypeScript · PostgreSQL).

It is a personal site, kept deliberately plain: a short intro, the work, where
that work happened, the stack, and how to get in touch. Each of the two main
projects has a page explaining how the system is put together.

**Next.js 16 (App Router) · React 19 · TypeScript · Tailwind CSS v4.**

## Sections

Masthead, Work, Experience, Toolkit, GitHub, Background, Contact.

Each featured project also has a page at `/work/[slug]`: the problem, what was
built, the surfaces, the decisions behind it, the outcome, and what was left out
on purpose.

## Things this site deliberately does not do

Recorded because an earlier version did all of them, and they made the page read
like an agency landing page rather than like a person:

**No figure display.** There is no strip of large percentages, no stat panel,
and no per-project results column. The numbers appear once, inside the
experience bullets, where the surrounding sentence says what they mean. Pulled
out and set at 44px they read as boasting.

**No slogan headings.** No "the interesting part", no "what I chose, what it
cost", no "building something complicated? let's talk". Section labels say what
the section is.

**No numbered principles.** The dark band of "three things I do on every
project" was the single most generic thing on the page and it is gone.

**No em dashes or en dashes** anywhere in the copy. They are a tell, and commas
and full stops do the same work.

**No ownership chip clouds.** What was owned is stated once, in a sentence, on
the case study.

The stack appears once as a toolkit, plus a short comma-separated line per
project. It used to appear three times, in a grid of forty brand marks.

## Content lives in one file

`lib/work.ts` is the single source of truth for the work section and every case
study page. Editing a project there updates the card, the case study, the
command menu target and the static route.

### Adding a real screenshot

The project cards and case-study headers currently show a **system diagram**
because both main projects are client codebases with no public UI. A
screenshot takes priority the moment one exists:

```ts
// lib/work.ts
shot: "/work/tour-booking.png",
shotAlt: "Customer booking flow, availability step",
```

Drop the file in `public/work/`. `components/ProjectVisual.tsx` prefers `shot`
and falls back to the diagram, so nothing else needs to change.

### The diagrams

`components/Diagram.tsx` draws them by hand in SVG, no library, no rendered
image. They show the real request path (four surfaces → one API → Postgres,
Redis, BullMQ → workers) rather than decoration. Below 620px they scroll
horizontally instead of scaling, because a 940-wide viewBox squeezed onto a
phone puts the labels under 7px.

## Technology icons

Brand marks are generated from the [Simple Icons](https://simpleicons.org)
package (CC0) into `lib/icons.ts`, never hand-drawn. Regenerate with:

```bash
node scripts/gen-icons.mjs
```

A tool with no official mark (BullMQ) renders as a plain text label rather than
an invented logo.

## Design system

Palette and surface values are taken from lightwork.co's own stylesheet rather
than eyeballed from screenshots:

| Token | Value |
| --- | --- |
| `--color-brand` | `#1aa0e6` |
| `--color-tint` | `#e7f6fe` |
| Signature gradient | `linear-gradient(191deg,#62e9ff,#1aa0e6 53.5%,#886be0)` |
| Section wash | `linear-gradient(180deg,#fff,#e7f6fe 13%,#e7f6fe 84%,#fff)` |

**Colour balance.** The homepage is white throughout. The one dark band left on
the site carries the decision log on a case study, where the change in register
earns its place. Pale blue is a tint on a couple of case study bands and nothing
more.

`#1aa0e6` on white is 2.9:1, so text uses derived blues: `#1290db` for display
accents and units (3.4:1), `#0077c2` for links (4.7:1).

**Type is a scale, not a set of guesses.** Nine steps, defined once in
`@theme`, each binding its own line height and tracking:

| token | size | line height | tracking |
| --- | --- | --- | --- |
| `label` | 11px | 1 | +0.18em |
| `meta` | 12.5px | 1.45 | 0 |
| `fine` | 13.5px | 1.5 | -0.004em |
| `note` | 15px | 1.55 | -0.01em |
| `prose` | 16.5px | 1.68 | -0.014em |
| `lead` | 18.5px | 1.5 | -0.02em |
| `h3` | clamp(21, 2.4vw, 26) | 1.2 | -0.026em |
| `h2` | clamp(26, 3.2vw, 34) | 1.12 | -0.03em |
| `display` | clamp(40, 6.6vw, 72) | 0.94 | -0.042em |

Tracking is bound to the size because the right tracking for 11px is not the
right tracking for 72px: display sizes need pulling in, small sizes need letting
out. Binding them together means a component cannot pick a size and forget the
tracking. Headings use the named `.t-h2` / `.t-h3` / `.t-name` classes and are
never hand-sized at the call site.

This replaced fourteen ad hoc sizes, including 11.5px, 12.5px, 13.5px, 14.5px
and 15.5px, chosen per component. That is what made the page feel unresolved
even when each individual screen looked fine.

**Spacing is a 4/8 grid.** Everything vertical comes from
{4 8 12 16 24 32 48 64 80 96}px. Nothing uses 5, 7, 9 or 14. Sections are
`py-16 sm:py-20` without exception.

**One layout primitive.** `components/Rail.tsx` is the label rail plus content
grid that every section on the site is built from, including the case studies
and the dark decision band. It was copy-pasted in four places before, which
meant it could not be improved in one. The label sits 5px down so its cap top
lines up with the first line of body copy beside it.

**Motion.** Entrance is a blur-and-rise staggered by a `--d` custom property;
the masthead runs it on load, everything else on an IntersectionObserver. A two
pixel progress bar in the signature gradient tracks reading position. All of it
collapses under `prefers-reduced-motion: reduce`. No WebGL, no cursor effects,
no scroll-jacking, the design is meant to read as restraint, not as a demo of
what CSS can do.

## Other decisions worth recording

**A command menu** opens on ⌘K or Ctrl+K: jump to a section, open a case study,
copy the email address, download the résumé. It renders through a portal to
`document.body`, because the sticky nav carries `backdrop-filter`, which makes
it a containing block for `position: fixed` descendants. Off a case study page,
section jumps fall back to `/#hash` navigation.

**The GitHub graph is deliberately small.** A contribution count cannot
distinguish a typo fix from a system, so it is one line and a 7px texture strip,
not a feature. The number is still pulled live from
`github-contributions-api.jogruber.de` (revalidated every six hours); if the
fetch fails the section returns `null` rather than rendering an empty grid.

**Durations are computed, not typed.** `lib/duration.ts` derives "1 yr 2 mos"
from the start date, so the page never goes stale.

**Mobile has its own information density**, not just responsive CSS: a real menu
in place of a lone Email link, stacked project cards, smaller body copy, tighter
sections and chip rows that wrap instead of squeezing.

## Structure

```
app/
  layout.tsx           metadata, JSON-LD Person schema, Geist fonts
  page.tsx             homepage composition
  work/[slug]/page.tsx case studies (SSG from lib/work.ts)
  globals.css          design tokens + utilities
components/
  Nav  Masthead  Work  Experience  Toolkit
  Contributions  Background  Contact  Footer
  ProjectVisual  Diagram  Section  TechIcon
  Reveal  ScrollProgress  CommandMenu     (client components, with Nav)
lib/
  work.ts         projects and their decision logs
  duration.ts     live role durations
  icons.ts        generated brand marks
public/
  Prasanna-Wagh-Fullstack-Engineer.pdf
  work/           project screenshots (optional, see above)
```

Everything is a React Server Component except `Nav`, `Reveal`, `ScrollProgress`
and `CommandMenu`, so the client bundle stays small. Fonts are self-hosted
through the `geist` package, no Google Fonts request. No analytics, no tracking.

## Local development

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # production build
```

## Deploying to Vercel

Import the repo at [vercel.com/new](https://vercel.com/new), the Next.js preset
is detected automatically. Security headers are set in `next.config.ts`. Update
the canonical URL (`SITE` in `app/layout.tsx`) once the domain is attached.

## Licence

Geist and Geist Mono are © Vercel, under the SIL Open Font License 1.1.
Code is free to borrow; the written content and résumé are not.

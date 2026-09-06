# prasannawagh.dev

Personal site for **Prasanna Wagh** — full-stack engineer (React · Node.js ·
TypeScript · PostgreSQL).

It is not a résumé transcribed to HTML. It is a small case-study site: a
positioning statement, four measured outcomes, two systems explained in depth
with their architecture and their trade-offs, then the supporting material.

**Next.js 16 (App Router) · React 19 · TypeScript · Tailwind CSS v4.**

## The argument the page makes

Ordered by what a hiring manager needs, not by what is easiest to list:

| # | Section | Answers |
| --- | --- | --- |
| 1 | Masthead | Who is this and what do they do? |
| 2 | Proof | Did the work move anything measurable? |
| 3 | Selected work | What have they shipped, and what did they personally own? |
| 4 | Experience | Where, for how long, at what level? |
| 5 | How I work | What kind of engineer is this? |
| 6 | Toolkit | Do they have the stack we need? |
| 7 | GitHub | Any independent signal? |
| 8 | Background | Education, logistics. |
| 9 | Contact | How do I reach them? |

Each featured project also has its own page at `/work/[slug]`: the problem, what
was personally owned, the surfaces, a **decision log** (problem → decision →
trade-off → result), the outcome with the measurement method beside each figure,
and the scope deliberately left out.

The stack appears **once** as a toolkit, plus a per-project "Built with" list.
It used to appear three times, in a grid of forty brand marks, which said
"I have installed things" rather than "I can hold a system".

## Two reversals from earlier versions

Recorded because both were deliberate before, and both were deliberately undone:

**Figure displays are back.** An earlier pass removed every big-numeral block on
the grounds that the metrics already appear in the experience bullets, and that
restating one outcome in three formats reads as generated. That was right about
repetition and wrong about placement: a visitor who leaves after eight seconds
never reaches an experience bullet. The numbers now appear large, immediately
under the hero, and each one carries the project it came from. They are *not*
repeated a third time.

**Metrics carry their method.** Every figure on the site resolves to a
`basis` field in `lib/work.ts` describing what was measured, before and after.
Those methods are printed on the case study under "How each number was
measured". A number an interviewer can ask about and get an immediate answer to
is worth four that cannot survive the question.

## Content lives in one file

`lib/work.ts` is the single source of truth for the work section and every case
study page. Editing a project there updates the card, the case study, the
command menu target and the static route.

### Adding a real screenshot

The project cards and case-study headers currently show a **system diagram**
because the two strongest projects are client codebases with no public UI. A
screenshot takes priority the moment one exists:

```ts
// lib/work.ts
shot: "/work/tour-booking.png",
shotAlt: "Customer booking flow, availability step",
```

Drop the file in `public/work/`. `components/ProjectVisual.tsx` prefers `shot`
and falls back to the diagram, so nothing else needs to change.

### The diagrams

`components/Diagram.tsx` draws them by hand in SVG — no library, no rendered
image. They show the real request path (four surfaces → one API → Postgres,
Redis, BullMQ → workers) rather than decoration. Below 620px they scroll
horizontally instead of scaling, because a 940-wide viewBox squeezed onto a
phone puts the labels under 7px.

## Technology icons

Brand marks are generated from the [Simple Icons](https://simpleicons.org)
package (CC0) into `lib/icons.ts` — never hand-drawn. Regenerate with:

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

**Colour balance.** Roughly white 65 / near-black 20 / pale blue 10 / saturated
accent 5. The homepage is white except for one dark band; case studies carry a
second dark band for the decision log and a tinted band for "My part". The pale
blue wash that used to run under several homepage sections was cut — repeated,
it stopped being an accent and became the page's identity.

`#1aa0e6` on white is 2.9:1, so text uses derived blues: `#1290db` for display
accents and units (3.4:1), `#0077c2` for links (4.7:1).

**Type.** Geist, self-hosted. The hero statement runs at
`clamp(40px, 7.4vw, 80px)`; body copy sits at 16px on mobile and 17px above it,
down from a uniform 17–19px that turned phone screens into scroll marathons.
Labels are 11px at `0.2em`.

**Motion.** Entrance is a blur-and-rise staggered by a `--d` custom property;
the masthead runs it on load, everything else on an IntersectionObserver. A two
pixel progress bar in the signature gradient tracks reading position. All of it
collapses under `prefers-reduced-motion: reduce`. No WebGL, no cursor effects,
no scroll-jacking — the design is meant to read as restraint, not as a demo of
what CSS can do.

**The one dark band** breaks a long light page. On the homepage it carries the
three working principles; on a case study it carries the decision log, which is
the densest content on the site and benefits from the change in register.

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
  Nav  Masthead  Proof  Work  Experience  Approach
  Toolkit  Contributions  Background  Contact  Footer
  ProjectVisual  Diagram  Section  TechIcon
  Reveal  ScrollProgress  CommandMenu     (client components, with Nav)
lib/
  work.ts         projects, metrics, decision logs
  duration.ts     live role durations
  icons.ts        generated brand marks
public/
  Prasanna-Wagh-Fullstack-Engineer.pdf
  work/           project screenshots (optional, see above)
```

Everything is a React Server Component except `Nav`, `Reveal`, `ScrollProgress`
and `CommandMenu`, so the client bundle stays small. Fonts are self-hosted
through the `geist` package — no Google Fonts request. No analytics, no tracking.

## Local development

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # production build
```

## Deploying to Vercel

Import the repo at [vercel.com/new](https://vercel.com/new) — the Next.js preset
is detected automatically. Security headers are set in `next.config.ts`. Update
the canonical URL (`SITE` in `app/layout.tsx`) once the domain is attached.

## Licence

Geist and Geist Mono are © Vercel, under the SIL Open Font License 1.1.
Code is free to borrow; the written content and résumé are not.

# BOLD INNOVATION variant — "The Slate Stage"

Design variant of the master rebuild at `../../sanramonkw.com/` (see its CLAUDE.md).
**Do not modify the master; all divergence lives in this folder.**

## Concept

An ambitious-Gulf-conglomerate rebrand of the same site: the whole stage goes
near-black (a deepened ramp of the brand dark `#343a40`), and the brand accent
`#5aaecd` becomes the electric moment — kickers, counters, CTAs, ribbons.
Massive Montserrat display type carries the identity ("SAN RAMON" ghost
watermarks, kinetic typewriter hero headline, oversized section headlines),
the 6 departments become a bento grid with live brand counts, and real data
(22 brands / 6 departments / 25 clients / est. 2004) drives an animated counter
strip. Editorial pages sit on light "paper" panels cut with diagonal breaks for
contrast rhythm. Confident and modern, still corporate-credible.

## Hard-constraint compliance

- **Content**: all copy verbatim in both locales (EN + AR), same 23 pages,
  same URLs including original Arabic slugs, same data model (`src/data/*.ts`
  untouched), same assets (no new images; one small counter-strip label set and
  brand-count badges are the only added microcopy, per the brief's counter/bento
  mandate).
- **SEO head**: `BaseLayout.astro` head is byte-identical to master
  (canonicals, hreflang, OG/Twitter, JSON-LD Organization + LocalBusiness,
  sitemap, robots.txt, llms.txt). Only the `<body>` gained a `js` flag script
  and an IntersectionObserver module.
- **Functionality**: nav + Brands dropdown, CSS-only mobile off-canvas, hero
  carousel fade + next button, typewriter headline, careers form UI with
  `data-todo="wire-form-endpoint"` and original CF7 field names, brand category
  pages, 25-client wall, Order Now, language switch.
- **Fonts**: Montserrat variable + El Messiri variable, self-hosted, unchanged.
  No added face (system mono stack is used for index labels — no new font file,
  no CDNs).
- **Brand palette**: `#343a40` + `#5aaecd` preserved as identity; only tonal
  derivatives added (see tokens).

## Tokens (src/styles/global.css `@theme`)

| Token | Value | Role |
| --- | --- | --- |
| `--color-night` | `#0e1116` | page background (deepened `#343a40`) |
| `--color-panel` / `--color-panel-2` | `#171b21` / `#1f242c` | cards, dropdown, drawer |
| `--color-edge` | `#2c333c` | hairlines on dark |
| `--color-mist` / `--color-fog` / `--color-dim` | `#eef2f5` / `#c3ccd3` / `#9aa5ae` | type on dark (~16:1 / ~10:1 / ~6.7:1) |
| `--color-accent` | `#5aaecd` | unchanged; on dark ≈6.9:1 (AA) |
| `--color-accent-bright` | `#8fd0e8` | large display on dark |
| `--color-accent-deep` | `#2f7896` | accent **text on white** (≈4.9:1 AA) — because `#5aaecd` fails on white |
| `--color-paper` | `#f4f6f8` | light editorial panels |

Component classes: `.display` (massive Montserrat 800, RTL switches to
El Messiri 700 with neutral tracking), `.ghost` (outlined watermark type,
aria-hidden), `.kicker-x` (mono index label + accent tick), `.btn-primary` /
`.btn-ghost` / `.btn-dark` (pill buttons), `.chip-arrow`, `.paper`,
`.cut-top/.cut-bottom/.cut-both` (diagonal clip-path breaks), `.bento-tile`,
`.deck-card` (hover tilt, alternating rotation), `.field-line`, `.reveal`.

## Changes vs master (by file)

- `src/styles/global.css` — full new design system (above); `overflow-x: clip`
  guard; reduced-motion kills reveals/tilts/transitions.
- `src/layouts/BaseLayout.astro` — body-only additions: `js` flag,
  IntersectionObserver for `.reveal` and `[data-count]` count-ups (rAF,
  transform/opacity only, `prefers-reduced-motion` renders final state; no-JS
  users see everything because hiding is gated on `html.js`).
- `src/components/Header.astro` — sticky translucent dark bar, logo on white
  chip, numbered Brands dropdown, accent Order Now pill; same links/off-canvas
  mechanics.
- `src/components/HomePage.astro` — hero with ghost "SAN RAMON" + huge
  typewriter h1 + carousel in rounded frame with accent offset slab; animated
  counter strip (values computed from `CATEGORIES`/`CLIENTS`, not hardcoded);
  paper about panel (diagonal cuts, asymmetric 5/6 columns); departments bento
  (12-col spans 7/5, 4/4/4, 12, numbered, brand-count badges); brand logo strip
  as white chips; client wall; careers gradient CTA block with ghost type and
  magnetic-feel button. Carousel/typewriter scripts preserved (+ reduced-motion
  gate).
- `src/components/InnerBanner.astro` — duotone dark hero band (image washed
  into the stage), giant h1, diagonal base cut; now visible on mobile too.
- `src/components/CategorySection.astro` / `BrandCard.astro` — card deck:
  dark rounded cards with hover tilt, white brand medallion with accent ring,
  item-count meta row.
- `src/components/ClientsGrid.astro` — semantic `<ul>` wall of 25 white chips.
- `src/components/CareersForm.astro` — display heading, restyled underline
  fields; form markup/fields/`data-todo` untouched.
- `src/components/Footer.astro` — ghost wordmark backdrop, white wordmark chip,
  accent column headings, accent back-to-top ribbon; same links/content.
- Pages (`about-sanramon`, `message`, `careers`, `our-brands`, `404`,
  `ar/[slug]`) — same copy re-set on paper panels / bento link grids / ghost-404;
  AR mirrors every treatment via logical properties (`ps/pe`, `start/end`).

## Accessibility / performance

One `h1` per page; semantic lists/landmarks kept; global `:focus-visible`
(accent on dark, accent-deep on paper); all decorative type `aria-hidden`;
WCAG AA verified for every text/background pair (see tokens); JS limited to
the master's two inline scripts + one IntersectionObserver module; animations
transform/opacity only; `prefers-reduced-motion` disables carousel autoplay,
typewriter, counters, reveals, tilts; images lazy except hero slide 1
(`fetchpriority=high`).

## Jury pass (self-critique log)

1. **Reveal fragility (fixed)** — fast scripted scrolls/anchor jumps could
   leave sections unrevealed (headless IO coalesces entries). Observer now also
   reveals anything whose top has passed the viewport (`boundingClientRect.top
   < 0`), threshold `[0, 0.1]`, rootMargin `-5%`.
2. **Horizontal overflow (fixed)** — off-canvas drawer (`translate-x-full`)
   and ghost display type extended `scrollWidth` by 288px → `overflow-x: clip`
   on `html, body` (no new scroll container, sticky header unaffected).
3. **Contrast audit (pass)** — `#5aaecd` kept off white text; `#2f7896` used
   on paper; dim text ≥4.5:1 on both panel and night.
4. **RTL (pass)** — drawer slides from the correct side, kicker ticks, chip
   arrows and bento order mirror; `.display` drops negative tracking for
   El Messiri.
5. **Counters** — derived from the data model so they can never drift from the
   real brand/department/client counts.

## Build / run

```bash
cd variants/sanramon-bold
npm install
npm run build                                   # 23 pages, verified green
npx astro preview --port 4338 --host 127.0.0.1  # port 4338 is reserved for this variant
```

Preview via SSH forward: `ssh cybertruck -L 4338:127.0.0.1:4338` →
http://127.0.0.1:4338. Final full-page homepage screenshot saved to the session
scratchpad as `variant-sanramon-bold.png`.

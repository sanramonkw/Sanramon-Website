# VARIANT: sanramon-premium — "Gulf Enterprise House"

Premium/corporate-luxury design variant of **sanramonkw.com** (master:
`/home/diywan/projects/informative-websites-clone/sanramonkw.com/` — untouched).
Same content verbatim (EN + AR), same 23 URLs (incl. original Arabic slugs), same
data model (`src/data/*.ts`), same SEO head (titles/descriptions/canonicals/
hreflang en-ar-x-default/JSON-LD Organization+LocalBusiness/sitemap/robots/llms.txt),
same functionality (nav, hero carousel + typewriter, brand category pages, client
wall, careers form UI with `data-todo="wire-form-endpoint"`).

## Concept

**A Gulf enterprise house** — the holding-company register: institutional gravitas
over flash. Warm-gray paper surfaces carry editorial serif headlines; deep graphite
bands anchor the brand portfolio and footer; the brand sky-blue `#5aaecd` is
demoted from decoration to *discipline* — thin rules, index numerals, focus rings,
hover states. The 22-brand portfolio reads like an investment portfolio (medallion
marks on graphite), the 25-client wall is a hushed marque strip, and the GM's
message is set as a chairman's letter.

## Tokens (`src/styles/global.css` `@theme`)

| Token | Value | Role |
| --- | --- | --- |
| `--color-dark` | `#343a40` | brand identity (buttons, headings) — unchanged |
| `--color-accent` | `#5aaecd` | brand identity (rules, numerals, hovers) — unchanged |
| `--color-ink` | `#414141` | body text — unchanged |
| `--color-graphite` | `#23272b` | deep atmosphere bands (portfolio, footer) |
| `--color-slate` | `#2b3036` | layered dark panel |
| `--color-paper` / `--color-paper-deep` | `#f7f6f3` / `#efede8` | warm-gray papers |
| `--color-hairline` / `-strong` | `#e4e2db` / `#cfccc3` | precise thin rules |
| `--color-accent-deep` | `#2e7896` | AA-safe accent for small text on paper |
| `--font-display` | Cormorant Garamond | the ONE added face (self-hosted variable woff2, normal+italic latin); AR display stays El Messiri |

Montserrat + El Messiri retained and self-hosted; no CDNs.

## Component system

- `.display` — editorial serif headings (El Messiri under `[dir="rtl"]`).
- `.eyebrow` / `.eyebrow-light` — micro-caps kicker with thin accent rule
  (logical properties; mirrors in RTL).
- `.index-num` — italic serif numerals (01…06) indexing departments/sections.
- `.panel` — layered white panel: hairline border, soft shadow, hover lift
  (translateY) + accent top rule drawing in (transform-only motion).
- `.medallion` — soft-shadow logo disc (portfolio band + brand cards).
- `.btn-dark` / `.btn-outline` / `.link-quiet` / `.nav-link` — quiet plates,
  hairline frames, sliding accent underlines.
- `.field-line` — refined underline form fields + styled `::file-selector-button`.
- `[data-reveal]` — IntersectionObserver scroll-reveal (opacity/translateY only),
  staggered via `--reveal-delay`; disabled under `prefers-reduced-motion`; `no-js`
  class guarantees visibility without JS.

## Page treatments

- **Header** — glass-blur condensed sticky bar (`backdrop-filter`, `is-scrolled`
  state via rAF-throttled listener), numbered brands dropdown, skip-to-content link.
- **Home hero** — editorial split: eyebrow + serif typewriter H1 (stable
  two-line reservation, no CLS) vs. carousel in a layered frame (offset graphite
  plate + hairline frame + deep shadow); glass next-button kept.
- **Departments** — six `.panel` cards with serif index numerals + icons.
- **Brand portfolio** — graphite band, faint texture, 19 medallion logos in a
  disciplined grid (linked marks lift on hover).
- **Clients** — quiet marque strip: hairline-cell grid, grayscale logos at 60%
  presence waking on hover.
- **Careers** — understated invitation panel (home) + letter-set form page with
  accent-tipped white panel; CF7 field markup and `data-todo` preserved.
- **GM's message** — chairman's letter: 760px measure, serif lead, ruled numbered
  sections, mission/vision as accent-ruled pull quotes (EN + AR mirrored).
- **Our Brands** — portfolio table of contents (numbered serif index rows).
- **Inner banners** — constrained-height imagery under a graphite veil, bottom-set
  serif titles, visible on all breakpoints (master hid titles on mobile).

## Accessibility / performance

- One `h1` per page; semantic landmarks; skip link; `:focus-visible` rings;
  AA-checked accent (`#2e7896`) for small text on paper; footer text ≥ 4.5:1.
- RTL via logical properties throughout (`ps/pe/start/end`, `inset-inline`,
  transform-origin flips); letter-spacing zeroed for Arabic.
- JS: three tiny inline scripts (carousel/typewriter — preserved behaviour, now
  reduced-motion-aware; reveal/header observer). All motion transform/opacity.
- Images lazy-loaded except hero slide 1 / banners (`fetchpriority=high`);
  fonts preloaded per-locale.

## Jury log (self-critique pass)

1. Anchored sections hid under the sticky header → global `scroll-margin-top: 92px`.
2. Brand card copy clipped by `max-h` scroll well (Nuova cut mid-sentence) →
   removed cap; verbatim copy fully visible.
3. Native file input off-brand → styled `::file-selector-button` (hairline chip).
4. Typewriter H1 caused rule-jump on two-line words → reserved `lg:min-h-[2.3em]`.
5. Full-page screenshots stitched the sticky header mid-hero → capture-script-only
   `position:static` injection (site unchanged).
Re-screenshotted desktop 1440×900 + mobile 390×844, EN + AR: fixes verified.

## Run

```bash
cd /home/diywan/projects/informative-websites-clone/variants/sanramon-premium
npm install
npm run build                                   # 23 pages, green
npx astro preview --port 4337 --host 127.0.0.1  # port 4337 is this variant's
```

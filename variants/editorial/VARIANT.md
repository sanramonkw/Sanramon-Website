# VARIANT — Editorial Minimal (sanramonkw.com)

**"Annual report meets business journal."** A typography-led, institutional, timeless
re-expression of the San Ramon corporate site. Same 23 pages (EN + AR RTL, original Arabic
slugs), same verbatim copy, same data model (`src/data/*.ts`), same SEO head
(canonical/hreflang/JSON-LD/sitemap/robots/llms.txt), same functionality (nav + brands
dropdown, careers form with `data-todo="wire-form-endpoint"`, brand categories, 25-client
wall) — completely different design language from the master.

## Concept

- **Masthead header** — utility rule with the full company name in small caps + language
  switch, logo + small-caps nav, closed by a newspaper **double rule** (2.5px ink over a
  hairline). Brands dropdown is a numbered index card (01–06) with hairline rows.
- **Hero spread** — the typewriter headline becomes a huge quiet Fraunces display line;
  the banner carousel is a framed "plate" with a serif folio counter (01 / 04) and a quiet
  next arrow. Auto-fade + typewriter are disabled under `prefers-reduced-motion`.
- **Departments as a numbered index** — 01 Oil & Gas … 06 Interior Design: accent folio
  numeral, serif title, description in a reading measure, brand **count** and Read More on
  the trailing edge, hairline rules between rows. Dept icons kept as small marginalia.
- **GM's message as a letter spread** — sticky serif headline column, **drop cap** on the
  opening paragraph (EN only; AR gets an enlarged lede instead), core values as a numbered
  hairline index, mission/vision under double rules.
- **Brands as a typographic directory** — category pages list each brand as a row: folio
  number, logo as small marginalia (56px), serif name, description, photograph as a small
  framed side plate, social icons kept but reduced to quiet grayscale marks.
- **Client wall as a tabular colophon** — a hairline lattice (1px-gap grid trick), each
  cell numbered 01–25 with logo + small-caps client name.
- **Careers as a classified-ad block** — double rule + hairline box, underline-only
  fields, small-caps submit. Home careers CTA is a centered classified box.
- **Colophon footer** — paper ground, double rule, columns of small-caps metadata,
  hairline copyright line with a "Top ↑" link (replaces the dark band + vertical ribbon).

## Tokens (`src/styles/global.css` @theme)

| Token | Value | Role |
| --- | --- | --- |
| `--color-paper` | `#faf9f7` | page ground |
| `--color-stone` | `#f0eeea` | secondary band / shadow blocks |
| `--color-hairline` | `#ddd9d2` | all rules & lattices |
| `--color-ink` | `#414141` | body (master brand token, kept) |
| `--color-ink-deep` | `#191918` | headlines, heavy rules, buttons |
| `--color-ink-soft` | `#6b6a66` | captions/metadata |
| `--color-accent` | `#5aaecd` | brand blue — large folios, ticks, caret only |
| `--color-accent-deep` | `#2c6e8a` | blue for small text/links — **5.5:1 on paper (AA)** |
| `--font-serif` | Fraunces (variable wght 300–700, opsz 9–144) | **added editorial serif**, self-hosted woff2 (`public/fonts/fraunces-variable-*.woff2`), preloaded |
| `--font-sans` | Montserrat (kept) | labels/body |
| — | El Messiri (kept) | Arabic; serif stack falls through to it for AR glyphs |

Utility classes: `.display`, `.label-caps`, `.folio`, `.lede`, `.drop-cap`,
`.rule-double`, `.rule-hair`, `.tick`, `.link-edit`, `.link-caps`, `.btn-edit`,
`.btn-ink`, `.field-line`, `.lattice`. All spacing/rules use logical properties
(`inset-inline-start`, `border-block-end`, `padding-inline-end`, `float: inline-start`)
so AR mirrors cleanly; RTL overrides tune letterspacing/weights for El Messiri.

## Changed vs master

- Rewritten: `global.css`, `Header`, `Footer`, `HomePage`, `InnerBanner`,
  `CategorySection`, `BrandCard`, `ClientsGrid`, `CareersForm`, pages `about-sanramon`,
  `message`, `careers`, `our-brands`, `404`, `ar/[slug]`.
- `BaseLayout`: added Fraunces preload; `id="top"` moved to `<body>` (works on all pages;
  duplicate id removed from home hero). All meta/schema untouched.
- InnerBanner: gradient-overlay title replaced by framed plate + huge headline below
  (kicker + h1 semantics preserved; still one h1/page).
- Client names (already in `clients.ts` for alt text) are now visible small-caps captions;
  brand names (already in `brands.ts`) are visible directory entries — no invented copy.
  Index numbers/counts are aria-hidden design furniture.
- JS unchanged in scope (carousel fade + typewriter only), now gated behind
  `prefers-reduced-motion`; added folio slide counter. Zero new dependencies.

## Jury pass (Awwwards-style)

Reviewed against the served build (port 4339) and the full-page desktop home capture:

- **Fixed during build**: invented AR microcopy in brand social links (reverted to the
  original icon assets as grayscale marks); duplicate `#top` id; small blue text bumped to
  `accent-deep` for AA; `letter-spacing` disabled for El Messiri labels (Arabic must not
  be letterspaced); drop cap disabled in RTL; reduced-motion coverage for carousel,
  typewriter, caret and hover transitions; focus-visible outline site-wide.
- **Verified**: masthead + double rule, numbered dept index with counts, lattice brand
  strip with reversed title cell, 25-cell numbered client colophon, classified careers
  box, colophon footer — all render as designed at 1440px; hierarchy reads clearly.
- **Would still refine (jury nits, session-limited)**:
  1. Hero left column reserves ~2 lines for the typewriter (`min-h`), leaving extra air
     between headline and its hairline footnote at 1440 — tighten to 1.2em + reflow guard.
  2. Brand-strip lattice logos vary in optical size; wrap each in a fixed-height
     `object-contain` box for a more even tabular rhythm.
  3. Brands dropdown is CSS-only (`:hover`/`:focus-within`); works for keyboard but adding
     scripted `aria-expanded` toggling would be cleaner for SR users.

## Run

```bash
cd /home/diywan/projects/informative-websites-clone/variants/sanramon-editorial
npm install
npm run build                                    # 23 pages, verified passing
npx astro preview --port 4339 --host 127.0.0.1   # port 4339 is reserved for this variant
```

Master at `../../sanramonkw.com/` is untouched.

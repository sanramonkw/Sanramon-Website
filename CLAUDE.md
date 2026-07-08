# San Ramon General Trading & Cont. Co. — Astro rebuild of sanramonkw.com

## Purpose

Modern static rebuild of the owner's own company site, **https://sanramonkw.com** (San Ramon
General Trading & Cont. Co., a Kuwaiti trading & contracting company, Hawalli, Kuwait,
Commercial License 2014/3712). The live site runs WordPress 7.0 with a custom `sanramonkw`
theme (Bootstrap 4 + Contact Form 7 + Yoast + Polylang-style EN/AR duplication). This is the
owner's flagship property — treat copy, brand assets and URLs as canonical; all page copy here
was migrated **verbatim** from the live site (fetched 2026-07-02).

Heads-up when re-crawling: the origin server is a shared vhost that **intermittently serves
Karak Tea (karaktea.com) content for sanramonkw.com URLs** (same owner, sister brand). Always
add a cache-busting query param (`?cb=...`) and verify `<title>`/canonical before trusting a
fetched page.

## Stack + rationale

- **Astro 5** (static output) — content-driven brochure site, zero client JS except two tiny
  inline scripts (hero carousel fade, typewriter headline).
- **Tailwind CSS 4** via `@tailwindcss/vite`, tokens in `src/styles/global.css` `@theme`.
- **@astrojs/sitemap** with `i18n` (en default, ar) → emits `sitemap-index.xml` with
  `xhtml:link` hreflang entries.
- TypeScript data modules (`src/data/*.ts`) hold all bilingual content — pages are thin.

## Commands

```bash
npm install
npm run dev       # localhost:4321
npm run build     # → dist/ (23 pages; build verified passing)
npm run preview
```

## Deployment

See **DEPLOYMENT.md** (read before deploying): pure static `dist/`, Node 20+, no env
vars, encoded-Arabic-URL proxy caveat, pre-launch checklist (tenant-bleed on the old
shared host, careers-form wiring, geo pin, 301 map, analytics) and post-launch smoke test.

## Local preview

A long-lived preview for this site runs on **port 4323** (other sibling sites use
4321/4322/4324 — don't kill them):

```bash
npx astro preview --port 4323 --host 127.0.0.1   # run from this folder
```

The owner previews it via SSH port-forwarding: `ssh cybertruck -L 4323:127.0.0.1:4323`
then http://127.0.0.1:4323. **Never create public tunnels for previews**, and never
touch the machine's `cybertruck` cloudflared tunnel — it is a system service carrying
the owner's SSH.

## Design tokens (extracted from the original theme CSS)

Source: `https://sanramonkw.com/wp-content/themes/sanramonkw/assets/css/style.css`
(EN) and `.../style-ar.css` (AR).

| Token | Value | Original usage |
| --- | --- | --- |
| `--font-sans` | Montserrat (300 base weight, 600 for `<b>`) | `@import Google Fonts Montserrat:wght@100,200,300;400;600;800`; body `font-weight:300` |
| `--color-ink` | `#414141` | body text color |
| `--color-dark` | `#343a40` | buttons (`.btn-vy`, `.btn-bnr`), footer band, toggle, "Top" ribbon |
| `--color-accent` | `#5aaecd` | vertical "More" ribbon on home (`.read-btn-vrt`, `d-none` on live) |
| `--color-line` | `#030302` | kicker tick line (`.home-title:before`) |
| `--color-border-soft` | `#ccc` | card & outline-button borders, AR form underlines |
| `--color-border-faint` | `#f5f5f5` | EN form field underlines |

Other original details preserved: underline-only form fields, uppercase nav, banner title
band `linear-gradient(to right, transparent…rgba(0,0,0,0.6)…transparent)`, circular
brand-logo medallion overlapping card image, dark offset block behind the hero.
Montserrat is **self-hosted** (`public/fonts/montserrat-variable-latin{,-ext}.woff2`).

### Color/layout fidelity pass (2026-07-02)

Playwright 1440×900 comparison of live (WordPress) vs rebuild, computed-style extraction
on 8 pages (EN+AR home, about, message, careers, our-brands, oil-gas, AR message).
Corrections applied (live value ← wrong rebuild value):

- **Type scale**: body 16px (Bootstrap default; ← 15px), paragraphs 13px/1.7 EN and
  14px AR via base rules (`p {font-size:13px}` was `!important` in the theme; ← 14-15px),
  section h3 28px (← 24px), home dept titles h5 20px/500 (← 16px/600), hero h1 40px
  (← 48px), inner page titles (`h2.upper`) 32px/500 uppercase (← 24px/300), message
  sub-heads h4 24px/500, footer `h5` 20px/500, careers form title 32px/700.
  About heading is weight 400 (`.home-about h3{font-weight:normal}`), others 300.
- **Arabic webfont**: live AR pages load **El Messiri** via `style-ar.css`
  (`El+Messiri:wght@300;500;700`; Google clamps 300→400 — the family starts at 400).
  Now self-hosted as `public/fonts/el-messiri-variable-{arabic,latin}.woff2`
  (variable 400-700) and applied via `[dir="rtl"] body`. The earlier note claiming the
  site had no Arabic webfont was wrong (that was true of Karak Tea, not this theme).
- **Kicker** (`.home-title`): padding-inline-start 46px / 33px tick (14%/10% of the
  original column; ← 56px/40px). `.home-title-c` light variant: 2px white, 38px.
- **Buttons**: `.home-cat-btn` 6px 10px pad; `.btn-vy` 16px/400 10px 30px (+4px radius
  on the home Apply Now); nav `.btn-bnr` Order Now 14px/400 8px 10px (← 12px bold);
  CF7 submit 16px `0.8rem 2.5rem`; hero next arrow 40px, 15px 10px pad (← 30px).
- **Home layout**: about column `col-lg-3` + departments `col-lg-9` (← 4/8), dept grid
  offset 110px, containers 1140px (Bootstrap ← 1280), hero dark block 85%/250px/-70px
  (← 80%/240px/-64px), brand strip `py` 24px with title indented 96px and 130px logos,
  `brand-bg.png` texture at half page width top 20% (← 512px top 10%), careers CTA
  block = left half with 120px top offset and 240px `job-bg.png` (← 4/5-width image),
  clients wall = exact `#client-logo .logo` recipe: 126×61, 1px `#d9d9d9` border,
  4px pad, 5px margin, white bg, hover scale(1.2) (← borderless 56px-high centered).
- **Footer**: light band `py` 48px, social rail 1/12 with 28px icons, address/get-in-touch
  paragraphs 13px/2.5em, bottom menu+copyright = two centered halves (← left/right),
  lang link not bold, "Top" ribbon 30px 10px pad + white tick.
- **Brand category pages**: banner h2 32px/500, cards in 1140px container with 30px
  gutters, medallion 150px pulled 80px over the image (← 112px/40px), card copy 14px
  max-height 180px.
- **Careers**: exact `.shadow` (0 8px 16px rgba(0,0,0,.15)), fields 0.8rem with 30px
  spacing, AR field underline `#ccc` vs EN `#f5f5f5`.
- Verified verbatim text (nav, headings, dept/brand copy, footer, both locales) — no
  text drift found. Heading *levels* intentionally differ (rebuild promotes page titles
  to `h1`; WP used `h2.upper`/`h5`). Dept icons 404 on the live EN home but load on AR —
  the rebuild serves them on both (kept deliberately). Live's WOW/owl animations hide
  brand-strip logos until scroll-triggered; rebuild shows them statically (documented gap).

## Page inventory (all rebuilt; EN ↔ AR pairs share components)

| English | Arabic (original slugs preserved) | Source file |
| --- | --- | --- |
| `/` | `/ar/` | `src/pages/index.astro`, `src/pages/ar/index.astro` → `components/HomePage.astro` |
| `/about-sanramon/` | `/ar/حول-سان-ريمون/` | `about-sanramon.astro`, `ar/[slug].astro` |
| `/message/` (GM's Message) | `/ar/كلمة-المدير-العام/` | `message.astro`, `ar/[slug].astro` |
| `/careers/` | `/ar/انضم-إلى-فريقنا/` | `careers.astro`, `ar/[slug].astro` |
| `/our-brands/` | `/ar/علاماتنا-التجارية/` | `our-brands.astro`, `ar/[slug].astro` |
| `/brands/oil-gas/` (7 brands) | `/ar/brands/النفط-والغاز/` | `brands/[category].astro`, `ar/brands/[category].astro` |
| `/brands/products/` (6) | `/ar/brands/منتجات/` | 〃 |
| `/brands/food-beverages/` (4) | `/ar/brands/الأطعمة-والمشروبات/` | 〃 |
| `/brands/cafe-restaurants/` (2) | `/ar/brands/المطاعم-والمقاهي/` | 〃 |
| `/brands/beauty/` (2) | `/ar/brands/منتجات-التجميل/` | 〃 |
| `/brands/interior-design/` (1) | `/ar/brands/تصميم-داخلي/` | 〃 |
| `/404` | — | `404.astro` (new; WP served a generic 404) |

Not rebuilt as standalone pages (intentional):
- **25 `/client/<name>/` posts** — on WP these are bare logo attachment pages with no content;
  the client logo wall on the home page (`src/data/clients.ts`) covers them. Consider 301s.
- **Individual brand posts** (`/product-2/`, `/oil-gas-1/`, `/beauty-1/`… and AR equivalents) —
  bare CPT permalinks whose content only ever rendered inside the category archives; the data
  lives in `src/data/brands.ts`. Consider 301s to their category page.
- `/footer/*` sitemap entries — WP widget internals, not real pages.
- `/author/*` archives — intentionally dropped (thin content).
- Note: the original "Our Brands" pages (`/our-brands/`, AR equivalent) were literally an empty
  heading; the rebuild adds a small department index under the same heading for usability.

## Source assets

`source-assets/MANIFEST.md` maps ~87 files → original URLs (images/, branding/, fonts/).
Everything in `public/images/` keeps original filenames except client logos, which were
ASCII-renamed into `public/images/clients/` (mapping in MANIFEST + `src/data/clients.ts`).
Favicon = original `logo-w.jpg` (copied to `public/favicon.jpg`).

## SEO / GEO implemented

- Per-page `<title>`/description (originals from Yoast preserved where they existed), canonical,
  OG (`og:locale` en_US/ar_AR + alternate), Twitter card + `@sanramonkw`.
- **hreflang** `en`/`ar`/`x-default` on every page (layout prop `altLangPath`) + in sitemap.
- **JSON-LD `Organization` + `LocalBusiness`** in `src/layouts/BaseLayout.astro` with real
  data: phone +965 22204332, info@sanramonkw.com, P.O.Box 5485 Hawalli 32085 Kuwait,
  Tunisia St, map link `goo.gl/maps/vzY41EVzRwad5GEW9`, brand list, `areaServed` Kuwait/GCC.
  ⚠️ Geo coordinates `29.3375, 48.0281` are **approximate** (Hawalli/Tunisia St derived from
  the Maps listing "San Ramon General Trading & Cont. Co., Tunisia St, Hawally") — replace
  with exact pin coordinates from Google Business Profile when available.
- `public/robots.txt` (+ sitemap URL), `public/llms.txt` (company/services/location summary
  for generative engines), `sitemap-index.xml` via integration.

## Contact form wiring (TODO)

`src/components/CareersForm.astro` preserves the original CF7 careers form fields
(`your-name`, `your-email`, `your-phone`, `your-place`, `file-cv` accepting .pdf/.doc/.docx,
5 MB note). It currently posts to `action="#"` with `data-todo="wire-form-endpoint"`.
To wire: point `action` at a form backend that emails **info@sanramonkw.com** — options:
Formspree/Basin (fastest), a Cloudflare Worker/Pages Function, or an SES/SendGrid lambda.
Must support `multipart/form-data` for the CV upload. Add success/error states after wiring.

## Known gaps

- Hero carousel auto-fades but has no prev button (original had prev/next; next preserved).
- Original AOS/WOW scroll animations and Owl Carousel not reproduced (static grid instead).
- `black.png` placeholder images (Food Hacks, Fit Out cards) are as-is on the live site.
- Exact geo pin (see above). No Google Tag Manager/Analytics added — original used
  MonsterInsights; add the owner's GTM ID if wanted.
- Original site served large unoptimized PNGs; consider `astro:assets` `<Image>` for
  responsive/AVIF variants (files are already local).

## Phase-two ideas

- **i18n hardening**: AR version exists and is fully rebuilt; consider Astro i18n routing
  helpers + localized 404, and translating the two EN-only brand blurbs (Kif Al Mosafer AR
  entry is English on the live site too — flag to owner).
- **Projects/brand portfolio CMS**: move `src/data/brands.ts`/`clients.ts` to content
  collections or a headless CMS so the owner can add brands without code.
- **Google Business Profile alignment**: same NAP (name/address/phone) as schema, pull exact
  geo coords, add opening hours to `LocalBusiness`.
- 301 redirect map for dropped WP URLs (`/client/*`, brand CPT permalinks, `?p=` shortlinks).
- Web3 was evaluated and is unnecessary for a trading/contracting brochure site — no
  transactional or ownership use-case; skip.

## Cold-resume pointers

- All migrated copy lives in `src/data/*.ts` (bilingual) and inline in `src/pages/*.astro`.
- Raw crawl snapshots are NOT in the repo (they were in a session scratchpad); re-fetch with
  the cache-busting caveat above if you need to re-verify against live.
- Build was green as of 2026-07-02 (`npm run build`, 23 pages, no broken local refs).

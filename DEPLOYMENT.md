# Deployment guide — sanramonkw.com (Astro rebuild)

Read this before pointing DNS anywhere. This is the owner's flagship company site
(San Ramon General Trading & Cont. Co., Kuwait), migrated off WordPress.

## What this is

A **pure static build**. `npm run build` emits `dist/` — plain HTML/CSS/images/fonts,
zero server-side code, zero client frameworks (two tiny inline scripts: hero-carousel
fade and typewriter headline). Any static host can serve it: Cloudflare Pages, Netlify,
Vercel (static), S3+CloudFront, GitHub Pages, or plain nginx/Apache serving the folder.

## Build

- **Node 20+** (Astro 5 requirement).
- `npm ci` (lockfile is committed).
- `npm run build` → expect **23 pages** in the build summary, plus
  `sitemap-index.xml` / `sitemap-0.xml`, `robots.txt`, `llms.txt`, `favicon.jpg`.
- **`DEPLOY_TARGET` env var — production must NOT set it.** Plain `npm run
  build` (no env var) is the production build: `site` = `https://sanramonkw.com`,
  `base` = `/`. Setting `DEPLOY_TARGET=pages` switches both to the GitHub
  Pages review values (`https://sanramonkw.github.io`, base
  `/Sanramon-Website/`) — see "GitHub Pages review deploys" below. Every
  internal href/asset/canonical/sitemap entry is generated through
  `withBase()` (`src/utils/paths.ts`) so it automatically carries whichever
  `base` was active at build time; **do not** set `DEPLOY_TARGET=pages` for
  the real production build/deploy, or every link on the live site would gain
  a bogus `/Sanramon-Website/` prefix and 404.
- Local check: `npx astro preview` and click through `/` (Arabic) and `/en/` (English).

## GitHub Pages review deploys

A separate, review-only deploy path exists for showing the owner the master
design alongside the `premium`/`editorial` variants on one GitHub Pages site
(`sanramonkw.github.io/Sanramon-Website/`) — **this is not the production
deploy target** and must never be pointed at by DNS.

- `npm run build:all` (`scripts/build-all.sh`): builds the master with
  `DEPLOY_TARGET=pages` plus the `premium`/`editorial` variants (each
  variant's own `astro.config.mjs` hardcodes its own
  `/Sanramon-Website/variants/<name>/` base — no env var needed there), then
  assembles everything into one combined `dist/`:
  `dist/` → master, `dist/variants/premium/`, `dist/variants/editorial/`.
- `npm run deploy:all` (`scripts/build-all.sh` + `scripts/publish-dist.sh`):
  builds, then publishes the combined `dist/` to the repo's `gh-pages` branch
  (Windows-safe: pushes from inside `dist/` with `git add -A`, avoiding the
  `gh-pages` npm package's `ENAMETOOLONG` failure mode on very long file
  lists). `public/.nojekyll` is included site-wide so GitHub Pages serves the
  underscore-prefixed `_astro/` asset directory.
- `npm run deploy`: a lighter one-shot alternative for just the master
  (`DEPLOY_TARGET=pages npm run build` piped into the `gh-pages` npm
  package) — use `deploy:all` when the variants also need to be current.
- `variants/bold/` was deleted (it was promoted to master); only `premium`
  and `editorial` remain as review variants.

## URL handling (important)

**Arabic is now the default locale, served at the site root; English lives under
`/en/`.** This is a deliberate change from the original EN-at-root layout — see the
301 map below for every old URL that must redirect.

- `trailingSlash: 'ignore'` is set, and all internal links use trailing slashes
  (`/en/careers/`, `/brands/النفط-والغاز/`). Pages are emitted as `…/index.html`, so
  any host with default directory-index behaviour works. Prefer a host config that
  301s `/en/careers` → `/en/careers/` (Netlify/Pages do this out of the box) so
  canonicals stay consistent.
- **Percent-encoded Arabic URLs must pass through untouched.** The Arabic pages keep
  the original WordPress slugs, now at the site root, e.g.:
  - `/حول-سان-ريمون/`
  - `/كلمة-المدير-العام/`
  - `/انضم-إلى-فريقنا/`
  - `/علاماتنا-التجارية/`
  - `/brands/النفط-والغاز/` … etc.
  On disk these are UTF-8 directory names; over HTTP they arrive percent-encoded
  (`/%D9%83%D9%84%D9%85%D8%A9-...`). If you put a proxy/CDN/WAF in front, verify it
  does **not** double-encode, decode-then-reject, or normalize these paths. Smoke-test
  one encoded AR URL through the full chain before cutover.

## 301 redirect map (Arabic-default promotion, 2026-07-12)

The site was restructured so Arabic is the default (root) locale and the Bold design
variant ("The Slate Stage") was promoted to master. Any host fronting this build
(Cloudflare Pages `_redirects`, nginx, CDN rules, etc.) **must** implement these
301s so old indexed URLs and inbound links keep resolving:

**Old English-at-root URLs → new `/en/...`:**

| Old (301 from) | New (301 to) |
| --- | --- |
| `/` *(old EN home — now ambiguous; see note)* | `/en/` |
| `/about-sanramon/` | `/en/about-sanramon/` |
| `/message/` | `/en/message/` |
| `/careers/` | `/en/careers/` |
| `/our-brands/` | `/en/our-brands/` |
| `/brands/oil-gas/` | `/en/brands/oil-gas/` |
| `/brands/products/` | `/en/brands/products/` |
| `/brands/food-beverages/` | `/en/brands/food-beverages/` |
| `/brands/cafe-restaurants/` | `/en/brands/cafe-restaurants/` |
| `/brands/beauty/` | `/en/brands/beauty/` |
| `/brands/interior-design/` | `/en/brands/interior-design/` |

> **Note on `/`:** the root URL is intentionally repointed to the new Arabic home
> (no redirect needed — it now serves Arabic content directly at 200, per the
> owner's Arabic-first decision). Do not 301 `/` to `/en/`; only the *content*
> changed language, the URL itself stays a 200.

**Old `/ar/...` URLs → new root Arabic URLs (drop the `/ar/` prefix):**

| Old (301 from) | New (301 to) |
| --- | --- |
| `/ar/` | `/` |
| `/ar/حول-سان-ريمون/` | `/حول-سان-ريمون/` |
| `/ar/كلمة-المدير-العام/` | `/كلمة-المدير-العام/` |
| `/ar/انضم-إلى-فريقنا/` | `/انضم-إلى-فريقنا/` |
| `/ar/علاماتنا-التجارية/` | `/علاماتنا-التجارية/` |
| `/ar/brands/النفط-والغاز/` | `/brands/النفط-والغاز/` |
| `/ar/brands/منتجات/` | `/brands/منتجات/` |
| `/ar/brands/الأطعمة-والمشروبات/` | `/brands/الأطعمة-والمشروبات/` |
| `/ar/brands/المطاعم-والمقاهي/` | `/brands/المطاعم-والمقاهي/` |
| `/ar/brands/منتجات-التجميل/` | `/brands/منتجات-التجميل/` |
| `/ar/brands/تصميم-داخلي/` | `/brands/تصميم-داخلي/` |

**Pre-existing WordPress 301 list (unchanged, still required — see "Pre-launch
checklist" below for the full rationale):**

- `/client/<name>/` (25 bare logo attachment pages) → `/` (or `/#client-logo`)
- brand CPT permalinks (`/product-2/`, `/oil-gas-1/`, `/beauty-1/`, … and AR
  equivalents) → their new category page under `/brands/…` or `/en/brands/…`
- `/?p=<id>` shortlinks, `/footer/*`, `/author/*` → `/`

## Forms, captcha & email (SMTP) — read before launch

**Current state — hard launch blocker if hiring matters:** the careers form
(`src/components/CareersForm.astro`) is UI-only (`action="#"`,
`data-todo="wire-form-endpoint"`) and includes a **CV file upload**, which can
never work over a mailto fallback — it needs a real multipart-capable backend
before it can accept a single application. The WordPress site used Contact
Form 7 (+ Google reCAPTCHA, whose keys live in the owner's Google account and
were not ported). Do not re-add Google reCAPTCHA — the agreed replacement is
**Cloudflare Turnstile**.

**The relay Worker is already built** at `../form-relay-worker/` — follow its
README (developer runbook: deploy commands, secret injection, and the full
per-site form-wiring guide).

**Agreed plan (2026-07-03; owner decisions tracked in
`../progress/QUESTIONS.md`):** one shared **Cloudflare Worker form relay** for
all four sites + Turnstile. For this site the Worker must accept
`multipart/form-data` and attach (or link) the uploaded CV.

> **Owner confirmed (2026-07-05): Turnstile is already in use in their
> Cloudflare account.** Get the site + secret key from the owner's existing
> setup (verify the widget's hostname list covers all four domains —
> karaktea.com, foodhacks.co, sanramonkw.com, marshmallows.co — or have them
> add a widget for these domains). Do not introduce any other captcha.

To enable, before launch:

1. **Turnstile keys** from the owner's Cloudflare dashboard (one widget
   covering all four domains). Site key → baked into the form markup at build;
   secret key → ONLY the Worker env, never this repo.
2. **Deploy the form relay Worker** with file-upload support and a sane CV
   limit (5 MB, .pdf/.doc/.docx — matching the form's own note), set the form
   `action` to its endpoint, and remove the `data-todo` attribute.
3. **SMTP / email delivery settings** live in the Worker env, not here
   (Resend/MailChannels API key, or SMTP host + user + password). Destination
   inbox: **info@sanramonkw.com**.
4. **Test end-to-end:** submit with a real PDF attached and confirm it arrives
   intact; Turnstile verifies; a bot-style instant submission (honeypot) is
   rejected.

If the relay is not ready by launch day, temporarily replace the form with a
"send your CV to info@sanramonkw.com" mailto card so applicants aren't lost.

## Pre-launch checklist

1. **DNS cutover + shared-host tenant bleed.** The current origin is a shared vhost
   that intermittently serves *Karak Tea* (sister brand) content on sanramonkw.com
   URLs. When cutting DNS to the new host, make sure the old origin is fully retired
   (or its vhost removed) so cached/direct hits can't resurrect it. After cutover,
   fetch `/` and `/en/` several times with cache-busting query params and confirm the
   `<title>` contains "San Ramon" (or its Arabic equivalent) every time.
2. **Careers form is not wired.** `src/components/CareersForm.astro` still posts to
   `action="#"` and carries `data-todo="wire-form-endpoint"` in both locales
   (`/انضم-إلى-فريقنا/` and `/en/careers/`). It needs a `multipart/form-data`-capable
   backend (CV upload, .pdf/.doc/.docx, 5 MB) that delivers to
   **info@sanramonkw.com** — Formspree/Basin, a Cloudflare Worker/Pages Function, or
   an SES/SendGrid lambda. Add success/error states when wiring. Until then the form
   is decorative — decide whether that is acceptable for launch.
3. **Geo coordinates are approximate.** The `LocalBusiness` JSON-LD in
   `src/layouts/BaseLayout.astro` uses `29.3375, 48.0281` (derived from
   "Tunisia St, Hawally"). Replace with the exact pin from the owner's Google
   Business Profile before relying on it for local SEO.
4. **Analytics.** No GTM/GA is installed (the WP site used MonsterInsights). Add the
   owner's GTM/analytics snippet to `BaseLayout.astro` if wanted.
5. **301 map.** See "301 redirect map (Arabic-default promotion, 2026-07-12)" above
   for the Arabic-default URL restructuring, plus the pre-existing WordPress-era
   redirects (`/client/<name>/`, brand CPT permalinks, `/?p=<id>` shortlinks,
   `/footer/*`, `/author/*`) — all must be redirected at the host level.
6. **robots/sitemap + Search Console.** `public/robots.txt` already points at
   `https://sanramonkw.com/sitemap-index.xml`. After launch, submit the sitemap in
   Google Search Console (and Bing) and verify hreflang pairs are picked up
   (x-default now points to the Arabic URL of each pair).
7. **Image weight.** Several original PNGs are large (hero banners ~1 MB+). They ship
   as-is for fidelity; consider converting to `astro:assets` `<Image>` (AVIF/WebP,
   responsive sizes) as a follow-up — files are already local.

## Post-launch smoke test

- `/` (Arabic, RTL, El Messiri display) and `/en/` (English, LTR) load, correct
  `<title>`, hero carousel fades, typewriter animates, counter strip counts up.
- One encoded AR URL end-to-end, e.g. `curl -I https://sanramonkw.com/%D9%83%D9%84%D9%85%D8%A9-%D8%A7%D9%84%D9%85%D8%AF%D9%8A%D8%B1-%D8%A7%D9%84%D8%B9%D8%A7%D9%85/` → 200.
- `view-source:` any page: `hreflang` `en`/`ar`/`x-default` links present
  (`x-default` → the Arabic URL of the pair); two `application/ld+json` blocks
  (Organization + LocalBusiness) present.
- `/انضم-إلى-فريقنا/` and `/en/careers/` both render the form; submission behaviour
  matches whatever was decided in pre-launch item 2.
- `/sitemap-index.xml` and `/robots.txt` reachable; 404 page (`/does-not-exist`)
  serves the custom (Arabic-default) 404 with an English-version link.
- Spot-check the old-URL 301 map above (a handful of `/about-sanramon/`,
  `/ar/...`, `/brands/oil-gas/` requests) once redirects are configured on the host.

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
- **No environment variables.** Nothing to configure; `site` is hard-coded to
  `https://sanramonkw.com` in `astro.config.mjs`.
- Local check: `npx astro preview` and click through `/` and `/ar/`.

## URL handling (important)

- `trailingSlash: 'ignore'` is set, and all internal links use trailing slashes
  (`/careers/`, `/brands/oil-gas/`). Pages are emitted as `…/index.html`, so any host
  with default directory-index behaviour works. Prefer a host config that 301s
  `/careers` → `/careers/` (Netlify/Pages do this out of the box) so canonicals stay
  consistent.
- **Percent-encoded Arabic URLs must pass through untouched.** The Arabic pages keep
  the original WordPress slugs, e.g.:
  - `/ar/حول-سان-ريمون/`
  - `/ar/كلمة-المدير-العام/`
  - `/ar/انضم-إلى-فريقنا/`
  - `/ar/علاماتنا-التجارية/`
  - `/ar/brands/النفط-والغاز/` … etc.
  On disk these are UTF-8 directory names; over HTTP they arrive percent-encoded
  (`/ar/%D9%83%D9%84%D9%85%D8%A9-...`). If you put a proxy/CDN/WAF in front, verify it
  does **not** double-encode, decode-then-reject, or normalize these paths. Smoke-test
  one encoded AR URL through the full chain before cutover.

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
   fetch `/` and `/ar/` several times with cache-busting query params and confirm the
   `<title>` contains "San Ramon" every time.
2. **Careers form is not wired.** `src/components/CareersForm.astro` still posts to
   `action="#"` and carries `data-todo="wire-form-endpoint"`. It needs a
   `multipart/form-data`-capable backend (CV upload, .pdf/.doc/.docx, 5 MB) that
   delivers to **info@sanramonkw.com** — Formspree/Basin, a Cloudflare Worker/Pages
   Function, or an SES/SendGrid lambda. Add success/error states when wiring.
   Until then the form is decorative — decide whether that is acceptable for launch.
3. **Geo coordinates are approximate.** The `LocalBusiness` JSON-LD in
   `src/layouts/BaseLayout.astro` uses `29.3375, 48.0281` (derived from
   "Tunisia St, Hawally"). Replace with the exact pin from the owner's Google
   Business Profile before relying on it for local SEO.
4. **Analytics.** No GTM/GA is installed (the WP site used MonsterInsights). Add the
   owner's GTM/analytics snippet to `BaseLayout.astro` if wanted.
5. **301 map for dropped WordPress URLs.** Per CLAUDE.md, these WP URLs were
   intentionally not rebuilt and should be redirected at the host level:
   - `/client/<name>/` (25 bare logo attachment pages) → `/` (or `/#client-logo` area)
   - brand CPT permalinks (`/product-2/`, `/oil-gas-1/`, `/beauty-1/`, … and AR
     equivalents) → their category page under `/brands/…`
   - `/?p=<id>` shortlinks, `/footer/*`, `/author/*` → `/`
6. **robots/sitemap + Search Console.** `public/robots.txt` already points at
   `https://sanramonkw.com/sitemap-index.xml`. After launch, submit the sitemap in
   Google Search Console (and Bing) and verify hreflang pairs are picked up.
7. **Image weight.** Several original PNGs are large (hero banners ~1 MB+). They ship
   as-is for fidelity; consider converting to `astro:assets` `<Image>` (AVIF/WebP,
   responsive sizes) as a follow-up — files are already local.

## Post-launch smoke test

- `/` and `/ar/` load, correct `<title>` ("San Ramon …" / "شركة سان ريمون …"),
  hero carousel fades, typewriter animates.
- One encoded AR URL end-to-end, e.g. `curl -I https://sanramonkw.com/ar/%D9%83%D9%84%D9%85%D8%A9-%D8%A7%D9%84%D9%85%D8%AF%D9%8A%D8%B1-%D8%A7%D9%84%D8%B9%D8%A7%D9%85/` → 200.
- `view-source:` any page: `hreflang` `en`/`ar`/`x-default` links present; two
  `application/ld+json` blocks (Organization + LocalBusiness) present.
- `/careers/` renders the form; submission behaviour matches whatever was decided in
  pre-launch item 2.
- `/sitemap-index.xml` and `/robots.txt` reachable; 404 page (`/does-not-exist`)
  serves the custom 404.

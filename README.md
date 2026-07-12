# San Ramon General Trading & Cont. Co. — sanramonkw.com (Astro rebuild)

Modern Astro 5 + Tailwind 4 rebuild of the flagship company site, migrated off
WordPress. **Bold design ("The Slate Stage") is the master design**, and
**Arabic is the default locale** (23 pages, original Arabic slugs at the root;
English lives under `/en/`). Brand/client data in `src/data/`, full SEO/GEO
layer (LocalBusiness JSON-LD, hreflang ar/en/x-default → Arabic).

- **Start here:** `CLAUDE.md` (context, URL map, design tokens) and
  `DEPLOYMENT.md` (read before deploying — 301 map for the Arabic-default
  promotion, careers CV form needs the multipart relay before launch).
- **Run:** `npm install && npm run dev` · `npm run build` (static `dist/`).
- **`variants/premium|editorial/`** — two alternative production-ready design
  directions (same content/URLs/SEO, different visual language), each with its
  own `VARIANT.md`. The former `variants/bold/` was promoted to become this
  root project (see `CLAUDE.md` history note); it no longer exists as a
  separate variant.
- A `pre-bold-promotion` branch snapshots the repo state immediately before
  the Bold-promotion + Arabic-default restructuring, for reference/rollback.

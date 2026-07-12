// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';
import { SITE, ROUTES, BASE_PATH } from './src/data/site.ts';
import { CATEGORIES, categoryPath } from './src/data/brands.ts';

// Build an explicit path -> { ar, en } alternate map so the sitemap's
// hreflang links are correct even though Arabic (default, root) and
// English (/en/) pages use different URL slugs — @astrojs/sitemap's
// automatic i18n pairing only works when the path segment matches, which
// isn't the case here (original Arabic slugs are preserved verbatim).
const altMap = new Map();
for (const { en, ar } of ROUTES) {
  altMap.set(en, ar);
  altMap.set(ar, en);
}
for (const category of CATEGORIES) {
  const en = categoryPath(category, 'en');
  const ar = categoryPath(category, 'ar');
  altMap.set(en, ar);
  altMap.set(ar, en);
}

// `BASE_PATH` without its trailing slash, e.g. "" at the root or
// "/Sanramon-Website" under GitHub Pages — used to add/strip the base
// prefix around the base-less paths that `altMap`/`ROUTES`/`categoryPath`
// deal in.
const BASE_PREFIX = BASE_PATH === '/' ? '' : BASE_PATH.replace(/\/$/, '');

function withLocaleLinks(item) {
  const url = new URL(item.url);
  // Sitemap URLs are built from the actual deployed paths, so under a
  // subpath deploy (GitHub Pages) they carry the `base` prefix — strip it
  // before looking the path up in `altMap` (which is base-less), then add
  // it back when constructing the alternate links.
  const rawPathname = url.pathname;
  const pathname = BASE_PREFIX && rawPathname.startsWith(BASE_PREFIX) ? rawPathname.slice(BASE_PREFIX.length) : rawPathname;
  const altPathname = altMap.get(pathname);
  if (!altPathname) return item;

  const isAr = !pathname.startsWith('/en/');
  const arPath = isAr ? pathname : altPathname;
  const enPath = isAr ? altPathname : pathname;

  return {
    ...item,
    links: [
      { lang: 'ar', url: new URL(BASE_PREFIX + arPath, SITE.url).href },
      { lang: 'en', url: new URL(BASE_PREFIX + enPath, SITE.url).href },
      { lang: 'x-default', url: new URL(BASE_PREFIX + arPath, SITE.url).href },
    ],
  };
}

// https://astro.build/config
export default defineConfig({
  // `site`/`base` are env-driven (DEPLOY_TARGET=pages → GitHub Pages review
  // deploy under /Sanramon-Website/; unset/anything else → production at the
  // domain root). See src/data/site.ts and DEPLOYMENT.md → "GitHub Pages
  // review deploys". Production builds must NOT set DEPLOY_TARGET.
  site: SITE.url,
  base: BASE_PATH,
  trailingSlash: 'ignore',
  integrations: [
    sitemap({
      // Explicit hreflang pairing (see withLocaleLinks above) — Arabic is the
      // default locale (x-default), served at the root; English lives under /en/.
      serialize: withLocaleLinks,
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});

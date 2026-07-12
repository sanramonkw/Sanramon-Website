// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';
import { SITE, ROUTES } from './src/data/site.ts';
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

function withLocaleLinks(item) {
  const url = new URL(item.url);
  const pathname = url.pathname;
  const altPathname = altMap.get(pathname);
  if (!altPathname) return item;

  const isAr = !pathname.startsWith('/en/');
  const arPath = isAr ? pathname : altPathname;
  const enPath = isAr ? altPathname : pathname;

  return {
    ...item,
    links: [
      { lang: 'ar', url: new URL(arPath, SITE.url).href },
      { lang: 'en', url: new URL(enPath, SITE.url).href },
      { lang: 'x-default', url: new URL(arPath, SITE.url).href },
    ],
  };
}

// https://astro.build/config
export default defineConfig({
  site: 'https://sanramonkw.com',
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

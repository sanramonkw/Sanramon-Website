// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  // site: 'https://sanramonkw.com',
  site: 'https://sanramonkw.github.io',
  base: '/Sanramon-Website/',
  trailingSlash: 'ignore',
  integrations: [
    sitemap({
      // Mirror the original bilingual structure for hreflang-aware sitemaps.
      i18n: {
        defaultLocale: 'en',
        locales: { en: 'en', ar: 'ar' },
      },
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});

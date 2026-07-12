export type Lang = 'en' | 'ar';

/**
 * Deploy target switch (env-driven, mirrors `astro.config.mjs`):
 * - default / unset → production, served at the domain root.
 * - `DEPLOY_TARGET=pages` → GitHub Pages review deploy, served under a
 *   project-pages subpath. See DEPLOYMENT.md → "GitHub Pages review deploys".
 */
const IS_PAGES_TARGET = process.env.DEPLOY_TARGET === 'pages';

/** Astro `base` for this build — kept in sync with `astro.config.mjs`. */
export const BASE_PATH = IS_PAGES_TARGET ? '/Sanramon-Website/' : '/';

export const SITE = {
  url: IS_PAGES_TARGET ? 'https://sanramonkw.github.io' : 'https://sanramonkw.com',
  name: {
    en: 'San Ramon General Trading & Cont. Co.',
    ar: 'شركة سان ريمون للتجارة العامة والمقاولات',
  },
  phone: '+965 22204332',
  phoneHref: 'tel:+96522204332',
  email: 'info@sanramonkw.com',
  address: {
    en: ['San Ramon General Trading – Kuwait', 'P.O.Box: 5485', 'Hawalli Code 32085', 'Kuwait.'],
    ar: ['San Ramon General Trading – Kuwait', 'P.O.Box: 5485', 'Hawalli Code 32085', 'Kuwait.'],
  },
  mapUrl: 'https://goo.gl/maps/vzY41EVzRwad5GEW9',
  /** Tunisia St, Hawally — approximate coordinates for the Google Maps listing. */
  geo: { lat: 29.3375, lng: 48.0281 },
  commercialLicense: '2014/3712',
  orderUrl: 'https://srkw.co/en/',
  orderUrlAr: 'https://srkw.co',
  social: {
    facebook: 'https://www.facebook.com/Sanramonkw-115686133222685',
    instagram: 'https://www.instagram.com/sanramonkw/',
    twitter: 'https://twitter.com/sanramonkw',
    twitterHandle: '@sanramonkw',
  },
} as const;

export const T = {
  en: {
    home: 'Home',
    aboutUs: 'About Us',
    brands: 'Brands',
    careers: 'Careers',
    orderNow: 'Order Now',
    langSwitch: 'عربي',
    address: 'Address',
    getInTouch: 'Get in touch',
    viewOnMap: 'View on Google map',
    copyright:
      '© 2026 San Ramon General Trading & Cont. Co., Commercial License: 2014/3712. All rights reserved.',
    top: 'Top',
    readMore: 'Read More',
    gmMessage: 'General Manager’s Message',
  },
  ar: {
    home: 'الصفحة الرئيسية',
    aboutUs: 'معلومات عنا او من نحن',
    brands: 'العلامات التجارية',
    careers: 'وظائف',
    orderNow: 'اطلب الان',
    langSwitch: 'EN',
    address: 'العنوان',
    getInTouch: 'ابقى على تواصل',
    viewOnMap: 'عرض على خريطة جوجل',
    copyright:
      '© 2026 شركة سان ريمون للتجارة العامة والمقاولات, رخصة تجارية: 2014/3712. جميع الحقوق محفوظة.',
    top: 'أعلى',
    readMore: 'قراءة المزيد',
    gmMessage: 'كلمة المدير العام',
  },
} as const;

/**
 * Route map between the English and Arabic versions of each page.
 * Arabic slugs are preserved verbatim from the original WordPress site
 * so existing indexed URLs keep working.
 */
export const AR_SLUGS = {
  about: 'حول-سان-ريمون',
  message: 'كلمة-المدير-العام',
  careers: 'انضم-إلى-فريقنا',
  ourBrands: 'علاماتنا-التجارية',
} as const;

const enc = (s: string) => encodeURI(s);

/**
 * Arabic is the default landing locale site-wide: Arabic pages live at the
 * root (original Arabic slugs preserved), English pages live under `/en/`.
 */
export const ROUTES: { en: string; ar: string }[] = [
  { en: '/en/', ar: '/' },
  { en: '/en/about-sanramon/', ar: `/${enc(AR_SLUGS.about)}/` },
  { en: '/en/message/', ar: `/${enc(AR_SLUGS.message)}/` },
  { en: '/en/careers/', ar: `/${enc(AR_SLUGS.careers)}/` },
  { en: '/en/our-brands/', ar: `/${enc(AR_SLUGS.ourBrands)}/` },
];

export function altPath(path: string, lang: Lang): string | undefined {
  const row = ROUTES.find((r) => r[lang === 'en' ? 'en' : 'ar'] === path);
  return row ? row[lang === 'en' ? 'ar' : 'en'] : undefined;
}

(function () {
  const STORAGE_KEY = 'sr-lang';
  const SUPPORTED = ['en', 'ar'];

  function getLang() {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored && SUPPORTED.includes(stored)) return stored;
    const htmlLang = document.documentElement.lang;
    return htmlLang === 'ar' ? 'ar' : 'en';
  }

  function t(key, lang) {
    if (lang !== 'ar') return null;
    return (window.SR_TRANSLATIONS_AR && window.SR_TRANSLATIONS_AR[key]) || null;
  }

  function cacheEnglish() {
    document.querySelectorAll('[data-i18n], [data-i18n-html]').forEach((el) => {
      if (el.dataset.i18nEn != null) return;
      el.dataset.i18nEn = el.hasAttribute('data-i18n-html')
        ? el.innerHTML
        : el.textContent;
    });
    document.querySelectorAll('[data-i18n-placeholder]').forEach((el) => {
      if (el.dataset.i18nPlaceholderEn != null) return;
      el.dataset.i18nPlaceholderEn = el.placeholder || '';
    });
    document.querySelectorAll('[data-i18n-title]').forEach((el) => {
      if (el.dataset.i18nTitleEn != null) return;
      el.dataset.i18nTitleEn = el.getAttribute('data-i18n-title') || document.title;
    });
    document.querySelectorAll('option[data-i18n]').forEach((el) => {
      if (el.dataset.i18nEn != null) return;
      el.dataset.i18nEn = el.textContent;
    });
  }

  function applyElement(el, lang) {
    const key = el.getAttribute('data-i18n') || el.getAttribute('data-i18n-html');
    if (!key) return;

    if (lang === 'en') {
      if (el.hasAttribute('data-i18n-html')) el.innerHTML = el.dataset.i18nEn || '';
      else el.textContent = el.dataset.i18nEn || '';
      return;
    }

    const val = t(key, lang);
    if (!val) return;
    if (el.hasAttribute('data-i18n-html')) el.innerHTML = val;
    else el.textContent = val;
  }

  function applyLanguage(lang) {
    if (!SUPPORTED.includes(lang)) lang = 'en';
    localStorage.setItem(STORAGE_KEY, lang);

    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    document.body.classList.toggle('lang-ar', lang === 'ar');

    document.querySelectorAll('[data-i18n], [data-i18n-html]').forEach((el) => applyElement(el, lang));

    document.querySelectorAll('[data-i18n-placeholder]').forEach((el) => {
      if (lang === 'en') {
        el.placeholder = el.dataset.i18nPlaceholderEn || '';
        return;
      }
      const val = t(el.getAttribute('data-i18n-placeholder'), lang);
      if (val) el.placeholder = val;
    });

    document.querySelectorAll('option[data-i18n]').forEach((el) => applyElement(el, lang));

    const titleKey = document.body.getAttribute('data-page-title');
    if (titleKey) {
      if (!document.body.dataset.i18nTitleEn) document.body.dataset.i18nTitleEn = document.title;
      document.title = lang === 'ar' ? (t(titleKey, 'ar') || document.body.dataset.i18nTitleEn) : document.body.dataset.i18nTitleEn;
    }

    document.querySelectorAll('.lang-pill').forEach((pill) => {
      pill.classList.toggle('is-en', lang === 'en');
      pill.classList.toggle('is-ar', lang === 'ar');
      pill.setAttribute('aria-label', lang === 'ar' ? 'Switch to English' : 'التبديل إلى العربية');
    });

    document.querySelectorAll('[data-lang-toggle]:not(.lang-pill)').forEach((btn) => {
      btn.textContent = lang === 'ar' ? 'English' : 'عربي';
      btn.setAttribute('aria-label', lang === 'ar' ? 'Switch to English' : 'التبديل إلى العربية');
    });

    document.querySelectorAll('[data-i18n-href-en][data-i18n-href-ar]').forEach((el) => {
      el.href = lang === 'ar' ? el.dataset.i18nHrefAr : el.dataset.i18nHrefEn;
    });

    document.dispatchEvent(new CustomEvent('langchange', { detail: { lang } }));
  }

  function toggleLanguage() {
    applyLanguage(getLang() === 'ar' ? 'en' : 'ar');
  }

  function initLangPills() {
    document.querySelectorAll('.nav-lang[data-lang-toggle]').forEach((btn) => {
      if (btn.classList.contains('lang-pill')) return;

      const pill = document.createElement('button');
      pill.type = 'button';
      pill.className = 'lang-pill';
      pill.dataset.langToggle = '';

      const indicator = document.createElement('span');
      indicator.className = 'lang-pill-indicator';
      indicator.setAttribute('aria-hidden', 'true');

      const en = document.createElement('span');
      en.className = 'lang-pill-label';
      en.dataset.langSet = 'en';
      en.textContent = 'EN';

      const ar = document.createElement('span');
      ar.className = 'lang-pill-label';
      ar.dataset.langSet = 'ar';
      ar.textContent = 'عربي';

      pill.append(indicator, en, ar);
      btn.replaceWith(pill);
    });
  }

  function bindToggles() {
    document.querySelectorAll('[data-lang-toggle]').forEach((btn) => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        toggleLanguage();
      });
    });
  }

  window.SR_I18N = {
    getLang,
    applyLanguage,
    toggleLanguage,
    t: (key) => t(key, getLang()),
  };

  document.addEventListener('DOMContentLoaded', () => {
    cacheEnglish();
    if (document.body.dataset.pageTitle) {
      document.body.dataset.i18nTitleEn = document.title;
    }
    initLangPills();
    bindToggles();
    applyLanguage(getLang());
  });
})();

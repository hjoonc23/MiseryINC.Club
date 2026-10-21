(() => {
  "use strict";
  const config = window.MISERY_CONFIG || {};
  const year = new Date().getFullYear();
  document.querySelectorAll('[data-year]').forEach((node) => { node.textContent = String(year); });

  // Accessible mobile navigation.
  const navToggle = document.querySelector('.nav-toggle');
  const nav = document.querySelector('#main-nav');
  function closeNav() {
    if (!nav || !navToggle) return;
    nav.classList.remove('is-open');
    navToggle.setAttribute('aria-expanded', 'false');
    navToggle.setAttribute('aria-label', 'Open navigation');
  }
  navToggle?.addEventListener('click', () => {
    const shouldOpen = !nav.classList.contains('is-open');
    nav.classList.toggle('is-open', shouldOpen);
    navToggle.setAttribute('aria-expanded', String(shouldOpen));
    navToggle.setAttribute('aria-label', shouldOpen ? 'Close navigation' : 'Open navigation');
  });
  nav?.querySelectorAll('a').forEach((link) => link.addEventListener('click', closeNav));
  document.addEventListener('keydown', (event) => { if (event.key === 'Escape') closeNav(); });
  document.addEventListener('click', (event) => {
    if (nav?.classList.contains('is-open') && !nav.contains(event.target) && !navToggle?.contains(event.target)) closeNav();
  });

  // IMPORTANT: There are no optional cookies, analytics or ads installed.
  // This storage only remembers visitor choices; if optional scripts are introduced,
  // they must be separately gated by fresh, valid consent and updated disclosures.
  const CONSENT_KEY = 'miseryinc-privacy-v1';
  const banner = document.querySelector('#cookie-notice');
  const dialog = document.querySelector('#privacy-dialog');
  const analytics = document.querySelector('#pref-analytics');
  const marketing = document.querySelector('#pref-marketing');
  const readConsent = () => {
    try { return JSON.parse(localStorage.getItem(CONSENT_KEY) || 'null'); }
    catch { return null; }
  };
  const priorChoice = readConsent();
  if (!priorChoice || typeof priorChoice.analytics !== 'boolean' || typeof priorChoice.marketing !== 'boolean') {
    if (banner) banner.hidden = false;
  } else {
    if (analytics) analytics.checked = priorChoice.analytics;
    if (marketing) marketing.checked = priorChoice.marketing;
  }
  function saveConsent(choice) {
    try { localStorage.setItem(CONSENT_KEY, JSON.stringify({ ...choice, savedAt: new Date().toISOString() })); } catch { /* preferences may be unavailable in private mode */ }
    if (banner) banner.hidden = true;
    if (dialog?.open) dialog.close();
  }
  document.querySelectorAll('[data-consent]').forEach((button) => button.addEventListener('click', () => {
    const accept = button.dataset.consent === 'accept';
    saveConsent({ analytics: accept, marketing: accept });
  }));
  document.querySelectorAll('[data-open-preferences]').forEach((button) => button.addEventListener('click', () => {
    const choice = readConsent();
    if (analytics) analytics.checked = !!choice?.analytics;
    if (marketing) marketing.checked = !!choice?.marketing;
    if (typeof dialog?.showModal === 'function') dialog.showModal();
  }));
  document.querySelectorAll('[data-close-preferences]').forEach((button) => button.addEventListener('click', () => dialog?.close()));
  document.querySelector('#save-preferences')?.addEventListener('click', () => saveConsent({ analytics: !!analytics?.checked, marketing: !!marketing?.checked }));

  // Content filters show only real, explicitly labeled *concepts* until publishing starts.
  const filterButtons = Array.from(document.querySelectorAll('[data-filter]'));
  const contentItems = Array.from(document.querySelectorAll('[data-category]'));
  filterButtons.forEach((button) => button.addEventListener('click', () => {
    const filter = button.dataset.filter;
    filterButtons.forEach((item) => {
      const current = item === button;
      item.classList.toggle('is-active', current);
      item.setAttribute('aria-pressed', String(current));
    });
    contentItems.forEach((item) => { item.hidden = filter !== 'all' && item.dataset.category !== filter; });
  }));

  // Configured signup must be a public Google Form AND have an identified operator/contact.
  // Static GitHub Pages cannot receive form submissions on its own.
  const formUrl = typeof config.googleFormUrl === 'string' ? config.googleFormUrl.trim() : '';
  const email = typeof config.contactEmail === 'string' ? config.contactEmail.trim() : '';
  const operator = typeof config.operatorName === 'string' ? config.operatorName.trim() : '';
  let validFormUrl = false;
  try {
    const url = new URL(formUrl);
    validFormUrl = url.protocol === 'https:' && (url.hostname === 'forms.gle' || (url.hostname === 'docs.google.com' && url.pathname.startsWith('/forms/')));
  } catch { /* missing or invalid form URL */ }
  const validEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const hasOperator = operator.length > 1;
  const canCollect = validFormUrl && validEmail && hasOperator;
  const unconfigured = document.querySelector('#join-unconfigured');
  const configured = document.querySelector('#join-configured');
  const formLink = document.querySelector('#google-form-link');
  if (canCollect && unconfigured && configured && formLink) {
    unconfigured.hidden = true;
    configured.hidden = false;
    formLink.href = formUrl;
  }
  document.querySelectorAll('[data-contact]').forEach((node) => {
    if (validEmail) {
      const anchor = document.createElement('a');
      anchor.href = 'mailto:' + email;
      anchor.textContent = email;
      node.replaceChildren(anchor);
    }
  });
  if (hasOperator) document.querySelectorAll('[data-operator-name]').forEach((node) => { node.textContent = operator; });
})();

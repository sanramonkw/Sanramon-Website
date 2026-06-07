const nav = document.getElementById('nav');
if (nav) {
  window.addEventListener('scroll', () => nav.classList.toggle('up', window.scrollY > 60), { passive: true });
}

const hamBtn = document.getElementById('nav-ham');
const mobMenu = document.getElementById('mob-menu');
if (hamBtn && mobMenu) {
  function toggleMobMenu(open) {
    hamBtn.classList.toggle('open', open);
    mobMenu.classList.toggle('open', open);
    mobMenu.setAttribute('aria-hidden', open ? 'false' : 'true');
    document.body.style.overflow = open ? 'hidden' : '';
  }
  hamBtn.addEventListener('click', () => toggleMobMenu(!mobMenu.classList.contains('open')));
  mobMenu.querySelectorAll('.mob-link').forEach(a => a.addEventListener('click', () => toggleMobMenu(false)));
}

const io = new IntersectionObserver(e => e.forEach(x => { if (x.isIntersecting) x.target.classList.add('in'); }), { threshold: 0.1 });
document.querySelectorAll('.reveal').forEach(el => io.observe(el));

const scrollOffset = document.body.classList.contains('page-home') ? 72 : 80;
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const t = document.querySelector(a.getAttribute('href'));
    if (!t) return;
    e.preventDefault();
    window.scrollTo({ top: t.getBoundingClientRect().top + window.scrollY - scrollOffset, behavior: 'smooth' });
  });
});
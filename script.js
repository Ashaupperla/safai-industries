const toggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('.main-nav');
const setMenu = (open) => {
  nav?.classList.toggle('open', open);
  toggle?.setAttribute('aria-expanded', String(open));
  toggle?.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
  if (toggle) toggle.querySelector('span').textContent = open ? '×' : '☰';
};
toggle?.addEventListener('click', () => {
  setMenu(!nav.classList.contains('open'));
});
document.querySelectorAll('.main-nav a').forEach(a => a.addEventListener('click', () => setMenu(false)));
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') setMenu(false);
});
window.addEventListener('resize', () => {
  if (window.innerWidth > 900) setMenu(false);
});

const io = new IntersectionObserver((entries) => {
  entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
}, {threshold: .12});
document.querySelectorAll('.reveal').forEach(el => io.observe(el));

document.getElementById('year').textContent = new Date().getFullYear();

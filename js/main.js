// Mobile menu toggle
const hamburger = document.getElementById('hamburger');
const nav = document.getElementById('nav');
const navOverlay = document.getElementById('nav-overlay');

if (hamburger && nav) {
  const openMenu = () => {
    nav.classList.add('open');
    hamburger.classList.add('active');
    hamburger.setAttribute('aria-expanded', 'true');
    hamburger.setAttribute('aria-label', 'Close menu');
    navOverlay?.classList.add('open');
    document.body.style.overflow = 'hidden';
  };

  const closeMenu = () => {
    nav.classList.remove('open');
    hamburger.classList.remove('active');
    hamburger.setAttribute('aria-expanded', 'false');
    hamburger.setAttribute('aria-label', 'Open menu');
    navOverlay?.classList.remove('open');
    document.body.style.overflow = '';
  };

  hamburger.addEventListener('click', () => {
    nav.classList.contains('open') ? closeMenu() : openMenu();
  });

  // Close menu when a link is clicked
  nav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', closeMenu);
  });

  // Close menu when the backdrop is clicked
  navOverlay?.addEventListener('click', closeMenu);

  // Close menu on Escape
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && nav.classList.contains('open')) {
      closeMenu();
      hamburger.focus();
    }
  });

  // Close menu if resized back to desktop layout
  window.addEventListener('resize', () => {
    if (window.innerWidth > 768 && nav.classList.contains('open')) {
      closeMenu();
    }
  });
}

// Simple form handling – builds a mailto with details
const form = document.getElementById('contact-form');
if (form) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('name')?.value || '';
    const phone = document.getElementById('phone')?.value || '';
    const service = document.getElementById('service')?.value || '';
    const message = document.getElementById('message')?.value || '';

    const body = [
      `Name: ${name}`,
      `Phone: ${phone}`,
      `Service: ${service}`,
      '',
      message
    ].join('\n');

    const mailto = `mailto:precisionwaveco@gmail.com?subject=${encodeURIComponent('Quote Request from Website')}&body=${encodeURIComponent(body)}`;
    window.location.href = mailto;
  });
}

// Sticky header slight style on scroll
const header = document.getElementById('header');
window.addEventListener('scroll', () => {
  if (window.scrollY > 40) {
    header?.classList.add('scrolled');
  } else {
    header?.classList.remove('scrolled');
  }
});

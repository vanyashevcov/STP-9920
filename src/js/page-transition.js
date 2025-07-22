function initPageTransition() {
  const links = document.querySelectorAll('a');
  const body = document.body;

  links.forEach(link => {
    link.addEventListener('click', e => {
      const href = link.getAttribute('href');
      const target = link.getAttribute('target');

      if (
        target === '_blank' ||
        !href ||
        href.startsWith('#') ||
        href.startsWith('mailto:') ||
        href.startsWith('tel:')
      ) {
        return;
      }

      try {
        const url = new URL(link.href);
        if (url.hostname !== window.location.hostname) {
          return; 
        }
      } catch (_) {
      }

      e.preventDefault();

      body.classList.remove('animate__fadeIn');
      body.classList.add('animate__fadeOut');

      setTimeout(() => {
        window.location.href = href;
      }, 200); 
    });
  });
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initPageTransition);
} else {
  initPageTransition();
}

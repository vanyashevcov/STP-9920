import Accordion from 'accordion-js/dist/accordion.min.js';

document.addEventListener('DOMContentLoaded', function () {
  const accordion = new Accordion('#faq-accordion', {
    duration: 400,
    showMultiple: false,
    openOnInit: [0], 
    elementClass: 'ac',
    triggerClass: 'ac-trigger',
    panelClass: 'ac-panel',
    activeClass: 'is-active',
    beforeOpen: function (currentElement) {
      currentElement.style.transition = 'all 0.4s ease';
    },
    beforeClose: function (currentElement) {
      currentElement.style.transition = 'all 0.4s ease';
    },
    onOpen: function (currentElement) {
      const icon = currentElement.querySelector('.ac-header .ac-icon use');
      if (icon) {
        const spritePath = icon.getAttribute('href')?.split('#')[0] || './images/sprite.svg';
        icon.setAttribute('href', `${spritePath}#icon-arrow-up`);
        icon.setAttribute('xlink:href', `${spritePath}#icon-arrow-up`);
      }
    },
    onClose: function (currentElement) {
      const icon = currentElement.querySelector('.ac-header .ac-icon use');
      if (icon) {
        const spritePath = icon.getAttribute('href')?.split('#')[0] || './images/sprite.svg';
        icon.setAttribute('href', `${spritePath}#icon-arrow-down`);
        icon.setAttribute('xlink:href', `${spritePath}#icon-arrow-down`);
      }
    },
  });

  function addScrollAnimation() {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px',
      }
    );

    const accordionItems = document.querySelectorAll('.ac');
    accordionItems.forEach(item => {
      item.style.opacity = '0';
      item.style.transform = 'translateY(20px)';
      item.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
      observer.observe(item);
    });
  }

  if (window.innerWidth <= 1200) {
    addScrollAnimation();
  }

  const triggers = document.querySelectorAll('.ac-trigger');

  triggers.forEach((trigger, index) => {
    trigger.addEventListener('keydown', function (e) {
      switch (e.key) {
        case 'ArrowDown':
          e.preventDefault();
          const nextTrigger = triggers[index + 1];
          if (nextTrigger) nextTrigger.focus();
          break;
        case 'ArrowUp':
          e.preventDefault();
          const prevTrigger = triggers[index - 1];
          if (prevTrigger) prevTrigger.focus();
          break;
        case 'Home':
          e.preventDefault();
          triggers[0].focus();
          break;
        case 'End':
          e.preventDefault();
          triggers[triggers.length - 1].focus();
          break;
      }
    });
  });
});

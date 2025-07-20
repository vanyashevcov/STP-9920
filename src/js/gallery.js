import Swiper from 'swiper/bundle';
import 'swiper/css';

const gallerySwiper = new Swiper('.gallery-swiper', {
  // loop: true,
  slidesPerView: 1,
  spaceBetween: 0,
  breakpoints: {
    1200: {
      slidesPerView: 3,
      spaceBetween: 32,
    },
  },

  pagination: {
    el: '.gallery-swiper-pagination',
    clickable: true,
    renderBullet: (index, className) => {
      return `
        <span class="${className}" data-index=${index}>
          <svg class="bullet-icon">
            <use href="./images/sprite.svg#icon-step"></use>
          </svg>
        </span>
      `;
    },
  },

  navigation: {
    nextEl: '.gallery-swiper-next',
    prevEl: '.gallery-swiper-prev',
  },

  keyboard: {
    enabled: true,
    onlyInViewport: true,
  },
});

gallerySwiper.on('init', () => {
  document
    .querySelectorAll('.swiper-pagination-bullet')
    .forEach((bullet, i) => {
      const useEl = bullet.querySelector('use');
      if (bullet.classList.contains('swiper-pagination-bullet-active')) {
        useEl.setAttribute('href', './images/sprite.svg#icon-step-active');
      } else {
        useEl.setAttribute('href', './images/sprite.svg#icon-step');
      }
    });
});

gallerySwiper.init();

gallerySwiper.on('slideChange', () => {
  document
    .querySelectorAll('.swiper-pagination-bullet')
    .forEach((bullet, i) => {
      const useEl = bullet.querySelector('use');
      if (bullet.classList.contains('swiper-pagination-bullet-active')) {
        useEl.setAttribute('href', './images/sprite.svg#icon-step-active');

        bullet.scrollIntoView({
          behavior: 'smooth',
          inline: 'center',
          block: 'nearest',
        });
      } else {
        useEl.setAttribute('href', './images/sprite.svg#icon-step');
      }
    });
});

gallerySwiper.emit('slideChange');

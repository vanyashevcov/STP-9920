import Swiper from 'swiper/bundle';
import 'swiper/css';
import spritePath from '../images/sprite.svg?url';

const gallerySwiper = new Swiper('.gallery-swiper', {
  loop: true,
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
            <use href="${spritePath}#icon-step"></use>
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

let isFirstLoad = true;

gallerySwiper.on('init', () => {
  document
    .querySelectorAll('.swiper-pagination-bullet')
    .forEach((bullet, i) => {
      const useEl = bullet.querySelector('use');
      if (bullet.classList.contains('swiper-pagination-bullet-active')) {
        useEl.setAttribute('href', `${spritePath}#icon-step-active`);
      } else {
        useEl.setAttribute('href', `${spritePath}#icon-step`);
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
        useEl.setAttribute('href', `${spritePath}#icon-step-active`);
        if (!isFirstLoad) {
          bullet.scrollIntoView({
            behavior: 'smooth',
            inline: 'center',
            block: 'nearest',
          });
        }
      } else {
        useEl.setAttribute('href', `${spritePath}#icon-step`);
      }
    });
  isFirstLoad = false;
});

import Swiper from 'swiper/bundle';
import 'swiper/css';
import spritePath from '../images/sprite.svg?url';

const gallerySwiper = new Swiper('[data-gallery-swiper]', {
  init: false,
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
    el: '[data-gallery-pagination]',
    clickable: true,
    renderBullet: (index, className) => {
      return `
        <span class="${className}" data-index="${index}" data-gallery-bullet>
          <svg class="bullet-icon">
            <use href="${spritePath}#icon-step"></use>
          </svg>
        </span>
      `;
    },
  },

  navigation: {
    nextEl: '[data-gallery-next]',
    prevEl: '[data-gallery-prev]',
  },

  keyboard: {
    enabled: true,
    onlyInViewport: true,
  },
});

let isFirstInit = true;

function updateBullets() {
  const bullets = document.querySelectorAll('[data-gallery-bullet]');
  bullets.forEach(bullet => {
    const useEl = bullet.querySelector('use');
    const bulletIndex = Number(bullet.dataset.index);

    const isActive = bulletIndex === gallerySwiper.realIndex;
    const iconId = isActive ? 'icon-step-active' : 'icon-step';

    useEl.setAttribute('href', `${spritePath}#${iconId}`);
  });
}

gallerySwiper.on('init', () => {
  isFirstInit = true;
  updateBullets();
});
gallerySwiper.on('slideChange', () => {
  isFirstInit = false;
  updateBullets();
});

gallerySwiper.init();

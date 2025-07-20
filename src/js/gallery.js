import Swiper from 'swiper/bundle';
import 'swiper/css';

const updateGalleryPaginationIcons = () => {
  document
    .querySelectorAll('.gallery-swiper-pagination .swiper-pagination-bullet')
    .forEach((bullet) => {
      const useEl = bullet.querySelector('use');
      if (bullet.classList.contains('swiper-pagination-bullet-active')) {
        useEl.setAttribute('href', './images/sprite.svg#icon-step-active');
      } else {
        useEl.setAttribute('href', './images/sprite.svg#icon-step');
      }
    });
};

const gallerySwiper = new Swiper('.gallery-swiper', {
  loop: true,
  loopedSlides: 3,
  slidesPerView: 1,
  slidesPerGroup: 1,
  spaceBetween: 0,
  watchOverflow: true,
  observer: true,
  observeParents: true,
  breakpoints: {
    1200: {
      slidesPerView: 3,
      slidesPerGroup: 1,
      spaceBetween: 32,
    },
  },
  pagination: {
    el: '.gallery-swiper-pagination',
    clickable: true,
    dynamicBullets: false,
    type: 'bullets',
    renderBullet: (index, className) => {
      if (index === 0) {
        return `
          <span class="${className}" data-index=${index}>
            <svg class="bullet-icon">
              <use href="./images/sprite.svg#icon-ornament"></use>
            </svg>
          </span>
        `;
      }
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

gallerySwiper.on('init', updateGalleryPaginationIcons);
gallerySwiper.init();
updateGalleryPaginationIcons();
gallerySwiper.on('slideChange', updateGalleryPaginationIcons); 
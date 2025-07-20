import Swiper from 'swiper/bundle';
import 'swiper/css';

const updateGallery2PaginationIcons = () => {
  document
    .querySelectorAll('.gallery2-swiper-pagination .swiper-pagination-bullet')
    .forEach((bullet) => {
      const useEl = bullet.querySelector('use');
      if (bullet.classList.contains('swiper-pagination-bullet-active')) {
        useEl.setAttribute('href', './images/sprite.svg#icon-step-active');
      } else {
        useEl.setAttribute('href', './images/sprite.svg#icon-step');
      }
    });
};

const gallery2Swiper = new Swiper('.gallery2-swiper', {
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
    el: '.gallery2-swiper-pagination',
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
    nextEl: '.gallery2-swiper-next',
    prevEl: '.gallery2-swiper-prev',
  },
  keyboard: {
    enabled: true,
    onlyInViewport: true,
  },
});

gallery2Swiper.on('init', updateGallery2PaginationIcons);
gallery2Swiper.init();
updateGallery2PaginationIcons();
gallery2Swiper.on('slideChange', updateGallery2PaginationIcons); 
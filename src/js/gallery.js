// import Swiper from 'swiper';
// import 'swiper/css';

// const swiper = new Swiper('.mySwiper', {
//   spaceBetween: 30,
//   effect: 'fade',
//   navigation: {
//     nextEl: '.swiper-button-next',
//     prevEl: '.swiper-button-prev',
//   },
//   pagination: {
//     el: '.swiper-pagination',
//     clickable: true,
//   },
// });

import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

var swiper = new Swiper('.mySwiper', {
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
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

const openBtnEl = document.querySelector('[data-action="open"]');
const closeBtnEl = document.querySelector('[data-action="close"]');
const burgerMenuEl = document.querySelector('[data-visible]');
const menuLinksEl = document.querySelectorAll('.mob-menu-link');

const closeMenu = () => {
  burgerMenuEl.dataset.visible = 'close';
  document.body.style.overflow = '';
};

const openMenu = () => {
  burgerMenuEl.dataset.visible = 'open';
  document.body.style.overflow = 'hidden';
};

openBtnEl.addEventListener('click', openMenu);
closeBtnEl.addEventListener('click', closeMenu);

menuLinksEl.forEach(link => {
  link.addEventListener('click', closeMenu);
});

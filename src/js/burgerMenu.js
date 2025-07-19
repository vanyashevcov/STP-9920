const openBtnEl = document.querySelector('[data-action="open"]');
const closeBtnEl = document.querySelector('[data-action="close"]');
const burgerMenuEl = document.querySelector('[data-visible]');
const menuLinksEl = document.querySelectorAll('.mob-menu-link');

const closeMenu = () => {
  if (burgerMenuEl) {
    burgerMenuEl.dataset.visible = 'close';
  }
  document.body.style.overflow = '';
};

const openMenu = () => {
  if (burgerMenuEl) {
    burgerMenuEl.dataset.visible = 'open';
  }
  document.body.style.overflow = 'hidden';
};

if (openBtnEl) openBtnEl.addEventListener('click', openMenu);
if (closeBtnEl) closeBtnEl.addEventListener('click', closeMenu);

if (menuLinksEl && menuLinksEl.length > 0) {
  menuLinksEl.forEach(link => {
    link.addEventListener('click', closeMenu);
  });
}

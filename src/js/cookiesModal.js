document.addEventListener('DOMContentLoaded', function () {
  const modal = document.querySelector('[data-cookies-modal]');
  const acceptBtn = document.querySelector('[data-cookies-accept]');
  const declineBtn = document.querySelector('[data-cookies-decline]');
  const STORAGE_KEY = 'cookiesConsent';

  if (!localStorage.getItem(STORAGE_KEY)) {
    if (modal) {
      modal.style.display = 'flex';
      document.body.setAttribute('data-cookies-modal-open', '');
      if (window.location.hash) {
        window.scrollTo(0, 0);
      }
    }
  } else {
    if (modal) modal.style.display = 'none';
    document.body.removeAttribute('data-cookies-modal-open');
    return;
  }

  function handleChoice(choice) {
    localStorage.setItem(STORAGE_KEY, choice);
    if (modal) modal.style.display = 'none';
    document.body.removeAttribute('data-cookies-modal-open');
  }

  if (acceptBtn) {
    acceptBtn.addEventListener('click', function () {
      handleChoice('accepted');
    });
  }

  if (declineBtn) {
    declineBtn.addEventListener('click', function () {
      handleChoice('declined');
    });
  }
});

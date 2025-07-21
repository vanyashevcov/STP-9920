document.addEventListener('DOMContentLoaded', function () {
  const modal = document.getElementById('cookiesModal');
  const acceptBtn = document.getElementById('acceptCookies');
  const declineBtn = document.getElementById('declineCookies');
  const STORAGE_KEY = 'cookiesConsent';

  if (!localStorage.getItem(STORAGE_KEY)) {
    if (modal) {
      modal.style.display = 'flex';
      document.body.classList.add('[data-cookies-modal-open]');
      if (window.location.hash) {
        window.scrollTo(0, 0);
      }
    }
  } else {
    if (modal) modal.style.display = 'none';
    document.body.classList.remove('[data-cookies-modal-open]');
    return;
  }

  function handleChoice(choice) {
    localStorage.setItem(STORAGE_KEY, choice);
    if (modal) modal.style.display = 'none';
    document.body.classList.remove('[data-cookies-modal-open]');
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
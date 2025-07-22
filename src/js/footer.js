document.addEventListener('DOMContentLoaded', function () {
  const yearElement = document.querySelector('[data-current-year]');
  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }
});

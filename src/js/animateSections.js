// Додаємо анімацію для секцій через animate.css (анімація лише один раз)
const animatedSections = document.querySelectorAll('section');

const observer = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate__animated', 'animate__fadeInUp');
        observer.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.05,
  }
);

animatedSections.forEach((section) => {
  observer.observe(section);
}); 
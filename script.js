// Animate hero section on page load
window.addEventListener('DOMContentLoaded', () => {
  document.querySelector('.hero-left')?.classList.add('visible');
  document.querySelector('.hero-right')?.classList.add('visible');
});


const serviceCards = document.querySelectorAll('.service-card');

const cardObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry, index) => {
    if (entry.isIntersecting) {
      setTimeout(() => {
        entry.target.classList.add('animate-on-scroll');
        entry.target.classList.add('active');
      }, index * 300);
      cardObserver.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.2
});

serviceCards.forEach(card => cardObserver.observe(card));


// Image Slider on Left Side
let currentSlide = 0;
const slides = document.querySelectorAll(".slide");

function showNextSlide() {
  slides[currentSlide].classList.remove("active");
  currentSlide = (currentSlide + 1) % slides.length;
  slides[currentSlide].classList.add("active");
}

setInterval(showNextSlide, 3000);


  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  }, {
    threshold: 0.1
  });

  document.querySelectorAll('.fade-in-section').forEach(section => {
    observer.observe(section);
  });

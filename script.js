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


const cards = document.querySelectorAll('.card');

  cards.forEach(card => {
    const title = card.querySelector('.card-title');

    title.addEventListener('click', () => {
      // Close all other cards
      cards.forEach(c => {
        if (c !== card) c.classList.remove('active');
      });

      // Toggle only this card
      card.classList.toggle('active');
    });
  });
  
  let current = 0;
const testimonials = document.querySelectorAll(".testimonial");

function showTestimonial(index) {
  testimonials.forEach((t, i) => {
    t.classList.remove("active");
    if (i === index) {
      t.classList.add("active");
    }
  });
}

setInterval(() => {
  current = (current + 1) % testimonials.length;
  showTestimonial(current);
}, 4000); // every 4 seconds


const counters = document.querySelectorAll('.counter');

counters.forEach(counter => {
  const updateCount = () => {
    const target = +counter.getAttribute('data-target');
    const count = +counter.innerText;
    const increment = Math.ceil(target / 100);

    if (count < target) {
      counter.innerText = count + increment;
      setTimeout(updateCount, 30);
    } else {
      counter.innerText = target;
    }
  };

  updateCount();
});

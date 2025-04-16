document.addEventListener('DOMContentLoaded', function() {
  const carouselContainer = document.querySelector('.image-carousel');
  const slideContainer = document.querySelector('.carousel-slide-container');
  const slides = document.querySelectorAll('.carousel-slide');
  const prevButton = document.querySelector('.carousel-control.prev');
  const nextButton = document.querySelector('.carousel-control.next');
  const indicatorsContainer = document.querySelector('.carousel-indicators');
  const indicators = document.querySelectorAll('.indicator');

  let currentIndex = 0;
  let slideWidth = 0;
  let totalSlides = slides.length;

  function updateSlideWidth() {
    if (slides.length > 0) {
      slideWidth = slides[0].offsetWidth;
    } else {
      slideWidth = 0;
    }
  }

  function updateCarousel() {
    updateSlideWidth();
    if (slideContainer) {
      slideContainer.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
    } else {
      console.error('slideContainer is null or undefined!');
    }
    updateIndicators();
  }

  function updateIndicators() {
    indicators.forEach(indicator => indicator.classList.remove('active'));
    if (indicators[currentIndex]) {
      indicators[currentIndex].classList.add('active');
    }
  }

  function goToSlide(index) {
    if (totalSlides === 0) return;

    if (index < 0) {
      currentIndex = totalSlides - 1;
    } else if (index >= totalSlides) {
      currentIndex = 0;
    } else {
      currentIndex = index;
    }
    updateCarousel();
  }

  prevButton.addEventListener('click', () => {
    goToSlide(currentIndex - 1);
  });

  nextButton.addEventListener('click', () => {
    goToSlide(currentIndex + 1);
  });

  indicatorsContainer.addEventListener('click', (e) => {
    if (e.target.classList.contains('indicator')) {
      const index = Array.from(indicators).indexOf(e.target);
      goToSlide(index);
    }
  });

  function initializeCarousel() {
    totalSlides = slides.length;
    updateSlideWidth();
    updateCarousel();
    updateIndicators();
  }

  initializeCarousel();

  window.addEventListener('resize', updateCarousel);
});
let currentSlide = 0;
const slides = document.querySelectorAll('.slide');

function changeSlide(direction) {
    // Hide current slide
    slides[currentSlide].classList.remove('active');
    
    // Calculate new slide index
    currentSlide = (currentSlide + direction + slides.length) % slides.length;
    
    // Show new slide
    slides[currentSlide].classList.add('active');
}

// Optional: Auto-rotate every 5 seconds
setInterval(() => changeSlide(1), 5000);
let slideIndex = 0;

function changeSlide(n) {
    showSlides(slideIndex += n);
}

function showSlides(n) {
    let slides = document.getElementsByClassName("slide");

    // If no slides exist, exit the function to prevent errors.
    if (slides.length === 0) {
        console.warn("Carousel error: No elements with class 'slide' found.");
        return; // Stop if there are no slides to show.
    }

    if (n >= slides.length) {slideIndex = 0}
    if (n < 0) {slideIndex = slides.length - 1}

    for (let i = 0; i < slides.length; i++) {
        slides[i].classList.remove("active");
    }

    slides[slideIndex].classList.add("active");
}

// Wait for the page to load before starting the carousel
document.addEventListener("DOMContentLoaded", () => {
    const prevButton = document.querySelector('.prev');
    const nextButton = document.querySelector('.next');

    // Add event listeners to the arrow buttons for manual navigation.
    if (prevButton && nextButton) {
        prevButton.addEventListener('click', () => changeSlide(-1));
        nextButton.addEventListener('click', () => changeSlide(1));
    } else {
        console.warn("Carousel warning: Arrow buttons not found. Manual navigation will not work.");
    }

    // Display the first slide when the page loads.
    showSlides(slideIndex);

    // Automatically change slide every 6 seconds
    setInterval(() => changeSlide(1), 6000);
});

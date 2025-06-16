// Enhanced carousel functionality
document.addEventListener('DOMContentLoaded', function() {
    const carousel = document.querySelector('.hero-carousel');
    if (!carousel) return; // Only run on pages with carousel

    const slides = Array.from(carousel.querySelectorAll('.carousel-slide'));
    if (slides.length <= 1) return; // Need at least 2 slides

    let currentSlide = 0;
    const slideDuration = 5000; // 5 seconds per slide
    let slideInterval;
    let isTransitioning = false;

    function showSlide(index, direction = 'next') {
        if (isTransitioning) return;
        isTransitioning = true;

        // Remove active class from current slide
        slides[currentSlide].style.opacity = '0';
        slides[currentSlide].classList.remove('active');

        // Update current slide index
        currentSlide = index;

        // Add active class to new slide
        slides[currentSlide].style.opacity = '1';
        slides[currentSlide].classList.add('active');

        // Reset transition lock after animation completes
        setTimeout(() => {
            isTransitioning = false;
        }, 1000); // Match this with CSS transition duration
    }

    function nextSlide() {
        showSlide((currentSlide + 1) % slides.length, 'next');
    }

    function previousSlide() {
        showSlide((currentSlide - 1 + slides.length) % slides.length, 'prev');
    }

    function startSlideshow() {
        if (slideInterval) clearInterval(slideInterval);
        slideInterval = setInterval(nextSlide, slideDuration);
    }

    // Start from first slide
    showSlide(0);
    startSlideshow();

    // Clean up on page change
    window.addEventListener('beforeunload', () => {
        if (slideInterval) clearInterval(slideInterval);
    });
});

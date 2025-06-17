// navigation.js

document.addEventListener('DOMContentLoaded', () => {
    const navbar = document.querySelector('.navbar');
    
    function updateNavbar() {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
            navbar.classList.add('nav-shadow');
        } else {
            navbar.classList.remove('scrolled');
            navbar.classList.remove('nav-shadow');
        }
    }

    // Make navbar transparent initially on all pages
    navbar.classList.add('transparent');
    
    window.addEventListener('scroll', updateNavbar);
    updateNavbar(); // Initial check
});
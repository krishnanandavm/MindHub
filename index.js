document.addEventListener('DOMContentLoaded', () => {
    const burgerIcon = document.querySelector('.burger-menu');
    const navbar = document.querySelector('.navbar');
    const leftBtn = document.querySelector('.left-btn');
    const rightBtn = document.querySelector('.right-btn');
    const servicesWrapper = document.querySelector('.services-wrapper');

    // Toggle the navbar menu
    burgerIcon.addEventListener('click', () => {
        navbar.classList.toggle('active');
    });

    // Smooth scrolling for left button
    if (leftBtn) {
        leftBtn.addEventListener('click', function() {
            servicesWrapper.scrollBy({
                left: -300, // Adjust scroll amount as needed
                behavior: 'smooth'
            });
        });
    }

    
});

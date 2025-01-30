document.addEventListener('DOMContentLoaded', () => {
    const burgerIcon = document.querySelector('.burger-menu');
    const navbar = document.querySelector('.navbar');

    burgerIcon.addEventListener('click', () => {
        navbar.classList.toggle('active');
    });
});
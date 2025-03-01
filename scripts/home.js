// Home Page Specific JavaScript
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.background = '#0056b3';
    } else {
        navbar.style.background = '#007BFF';
    }
});
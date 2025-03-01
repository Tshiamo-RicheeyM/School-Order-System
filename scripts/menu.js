// Menu Page Specific JavaScript
document.querySelectorAll('.menu-item').forEach(item => {
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animation = 'fadeIn 0.5s forwards';
            }
        });
    });
    observer.observe(item);
});
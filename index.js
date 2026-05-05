// Subtle parallax on scroll
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset * 0.02;
    const grain = document.querySelector('.grain');
    if (grain) {
        grain.style.transform = `translateY(${scrolled}px)`;
    }
});

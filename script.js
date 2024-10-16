// JavaScript for content hover effect on all pages
document.querySelectorAll('.content-item').forEach(item => {
    item.addEventListener('mouseover', function() {
        const overlay = this.querySelector('.overlay');
        overlay.style.transform = 'translateX(0)';
    });
    item.addEventListener('mouseout', function() {
        const overlay = this.querySelector('.overlay');
        overlay.style.transform = 'translateX(-100%)';
    });
});

// Mobile Menu Toggle
const menuToggle = document.querySelector('.menu-toggle');
const navMenu = document.querySelector('nav ul');
menuToggle.addEventListener('click', function() {
    navMenu.classList.toggle('open');
});

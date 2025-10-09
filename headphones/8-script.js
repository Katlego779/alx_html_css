// Select elements
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');

// Toggle menu on click
hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('show');
  hamburger.classList.toggle('active');
});
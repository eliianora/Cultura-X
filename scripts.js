// Fonction appelée lorsqu'on clique sur "Discover More"
function discoverMore() {
  window.location.href = 'loginPage.html';
}

document.addEventListener('DOMContentLoaded', function() {
  const navToggle = document.querySelector('.nav-toggle');
  const navLinks = document.querySelector('.nav-links');
  if(navToggle && navLinks) {
    navToggle.addEventListener('click', function() {
      navLinks.classList.toggle('show');
    });
  }
}); 
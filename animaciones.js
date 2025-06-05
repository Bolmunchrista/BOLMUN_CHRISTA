// Animaciones de aparición para imágenes

document.addEventListener('DOMContentLoaded', function () {
  const images = document.querySelectorAll('img.logo, .text-center img, .centrado img');
  images.forEach(img => {
    img.style.opacity = 0;
    img.style.transform = 'translateY(30px)';
    img.style.transition = 'opacity 0.5s ease, transform 0.5s cubic-bezier(0.4,0,0.2,1)';
  });

  function revealOnScroll() {
    images.forEach(img => {
      const rect = img.getBoundingClientRect();
      if (rect.top < window.innerHeight - 40) {
        img.style.opacity = 1;
        img.style.transform = 'translateY(0)';
      }
    });
  }

  window.addEventListener('scroll', revealOnScroll);
  revealOnScroll();
});
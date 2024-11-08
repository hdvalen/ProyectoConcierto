document.addEventListener('DOMContentLoaded', function() {
    // Seleccionamos el carrusel y las flechas
    const carousel = document.querySelector('.carousel');
    const leftArrow = document.querySelector('.left-arrow');
    const rightArrow = document.querySelector('.right-arrow');

    // Función para mover el carrusel hacia la izquierda
    leftArrow.addEventListener('click', function() {
      carousel.scrollBy({
        left: -200, 
        behavior: 'smooth', 
      });
    });

    // Función para mover el carrusel hacia la derecha
    rightArrow.addEventListener('click', function() {
      carousel.scrollBy({
        left: 200, 
        behavior: 'smooth',
      });
    });
  });
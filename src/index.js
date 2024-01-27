// const mostrarMenuBtn = document.getElementById('mostrarMenu');
// const menu = document.getElementById('menu');
// menu.style.display = 'none';

// // Agrega un evento de clic al botón
// mostrarMenuBtn.addEventListener('click', function() {
//     if (menu.style.display == 'none') {
//         // Cambia el estilo del menú para mostrarlo
//         menu.style.display = 'block'; // Puedes usar 'inline' o cualquier otro valor adecuado
//     } else {
//         menu.style.display = 'none';
//     }
// });

document.addEventListener('DOMContentLoaded', function() {
    const elementoADesaparecer = document.getElementById('titulomMi');
    const seccionEspecifica = document.getElementById('cp2');
  
    const observer = new IntersectionObserver(function(entries) {
      // Verifica si la sección específica está en el viewport
      if (entries[0].isIntersecting) {
        elementoADesaparecer.style.display = 'none';
      } else {
        elementoADesaparecer.style.display = 'block';
      }
    });
  
    observer.observe(seccionEspecifica);
  });
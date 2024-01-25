const mostrarMenuBtn = document.getElementById('mostrarMenu');
const menu = document.getElementById('menu');
menu.style.display = 'none';

// Agrega un evento de clic al botón
mostrarMenuBtn.addEventListener('click', function() {
    if (menu.style.display == 'none') {
        // Cambia el estilo del menú para mostrarlo
        menu.style.display = 'block'; // Puedes usar 'inline' o cualquier otro valor adecuado
    } else {
        menu.style.display = 'none';
    }
});
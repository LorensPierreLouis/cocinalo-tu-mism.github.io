const images = document.querySelectorAll('.imagen');
let currentIndex = 0;

function mostrarImagen(index) {
    images.forEach((img, i) => {
        img.classList.remove('visible');
        if (i === index) {
            img.classList.add('visible');
        }
    });
}

function cambiarImagen() {
    currentIndex = (currentIndex + 1) % images.length;
    mostrarImagen(currentIndex);
}

setInterval(cambiarImagen, 4000); // Cambia de imagen cada 3 segundos

// Inicializa la primera imagen
mostrarImagen(currentIndex);
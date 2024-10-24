
import { conexionAPI } from "./APIlocal.js";
import crearCard from "./GET.js";

const searchInput = document.getElementById("inputBuscar");
const searchButton = document.getElementById("botonBuscar");
const listaSolicitudes = document.querySelector("[data-listado]");

// Función para realizar la búsqueda
async function buscarSolicitudes() {
    const query = searchInput.value.toLowerCase(); // Obtiene el valor del input y lo convierte a minúsculas
    listaSolicitudes.innerHTML = "";  // Limpia la lista antes de mostrar los resultados
 
    try {
        const listadoDeAPI = await conexionAPI.buscarFoto(); // Obtiene todas las solicitudes
        const resultados = listadoDeAPI.filter(item => 
            item.nombre.toLowerCase().includes(query) // Filtra los elementos que coinciden con la búsqueda
        );

        resultados.forEach(element => {
            listaSolicitudes.appendChild(crearCard(element.src, element.nombre, element.precio, element.suprimir, element.id));
            
        });

        if (resultados.length === 0) {
            listaSolicitudes.innerHTML = "<p>No se encontraron resultados</p>"; // Mensaje si no hay resultados
        }

    } catch {
        alert("No fue posible cargar las solicitudes");
    }
}

// Agregar el evento al botón de búsqueda
searchButton.addEventListener('click', buscarSolicitudes);

// También puedes permitir que el usuario busque al presionar 'Enter'
searchInput.addEventListener('keypass', (event) => {
    if (event.key === 'Enter') {
        buscarSolicitudes();
    }
});
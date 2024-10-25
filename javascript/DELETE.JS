import { conexionAPI } from "./APIlocal.js";

// Función para manejar la eliminación de una solicitud
async function manejarEliminacion(event) {
    const id = event.target.dataset.id; // Obtiene el ID del botón que fue clickeado

    if (id) {
        try {
            const pregunta= prompt("Ponga 1 si desea eliminar el contenido, 2 de lo contrario ");
            if (pregunta==1){
            await conexionAPI.eliminarSolicitud(id); // Llama a la función para eliminar la solicitud
            event.target.closest('.lista_productos_li').remove(); 
            }// Elimina el elemento de la lista visualmente
             else if(pregunta==2){
            return;
            } else{
             pregunta= prompt("Ponga 1 si desea eliminar el contenido, 2 de lo contrario ");
          }
        } catch (error) {
            console.error("Error al eliminar la solicitud:", error);
        }
    }
}

// Función para agregar el manejador de eventos a los botones de eliminación
function agregarManejadoresDeEliminacion() {
    const botonesEliminar = document.querySelectorAll('.delete-btn');

    botonesEliminar.forEach(boton => {
        boton.addEventListener('click', manejarEliminacion);
        boton.dataset.id = boton.closest('.lista_productos_li').dataset.id; // Agrega el ID al botón
    });
}

// Exportar la función para usarla en el archivo get.js
export { agregarManejadoresDeEliminacion };



  
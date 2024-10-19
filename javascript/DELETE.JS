import { conexionAPI } from "./APIlocal.js";
const botonEliminar = document.getElementById('borrar');


async function manejarEliminacion(id) {
    try {
        const resultado = await conexionAPI.eliminarSolicitud(id);
        console.log("Solicitud eliminada con éxito:", resultado);
        // Aquí puedes añadir lógica adicional para actualizar la UI, etc.
    } catch (error) {
        console.error("Error al eliminar la solicitud:", error);
    }
}
  

botonEliminar.addEventListener('click',id=> manejarEliminacion(id));
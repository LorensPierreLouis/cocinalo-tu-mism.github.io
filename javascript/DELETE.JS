import { conexionAPI } from "./APIlocal.js";


async function manejarEliminacion(id) {
    try {
        const resultado = await conexionAPI.eliminarSolicitud(id);
        console.log("Solicitud eliminada con éxito:", resultado);
        // Aquí puedes añadir lógica adicional para actualizar la UI, etc.
    } catch (error) {
        console.error("Error al eliminar la solicitud:", error);
    }
}

// Ejemplo de ejecución:
const idAEliminar = "src"; // Cambia esto por el id real que necesites eliminar
manejarEliminacion(idAEliminar);

    




  
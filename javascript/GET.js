import { conexionAPI } from "./APIlocal.js";
import { agregarManejadoresDeEliminacion } from "./DELETE.JS"; // Importa la función

const listaSolicitudes = document.querySelector("[data-listado]");

export default function crearCard(src, nombre, precio, suprimir, id) {
    const solicitudes = document.createElement("li");
    solicitudes.className = "lista_productos_li";
    solicitudes.dataset.id = id; // Asigna el ID al elemento

    solicitudes.innerHTML = `
        <img src="${src}" class="listado-imagen">
        <p class="listado-nombre">${nombre}</p>
        <p class="listado-precio">${precio}</p>
        <button class="delete-btn">${suprimir}</button>
    `;
    return solicitudes;
}

async function porCadaSolicitud() {
    try {
        let listadoDeAPI = await conexionAPI.listadoSolicitudes();
        listadoDeAPI.forEach(element => {
            listaSolicitudes.appendChild(crearCard(element.src, element.nombre, element.precio, element.suprimir, element.id));
        });
        agregarManejadoresDeEliminacion(); // Llama a la función para agregar manejadores
    } catch {
        alert("No fue posible cargar la solicitud");
    }
}

porCadaSolicitud();

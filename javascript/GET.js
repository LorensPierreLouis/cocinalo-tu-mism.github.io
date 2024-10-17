import { conexionAPI } from "./APIlocal.js";
const  listaSolicitudes= document.querySelector("[data-listado]");


export default function crearCard(src,nombre,precio,suprimir) {
    const solicitudes=document.createElement("li");
    solicitudes.className="listado_producto-img-descripción";

    solicitudes.innerHTML=`
    <img src="${src}" class="listado-imagen">
    <p class="listado-nombre">${nombre}</p>
    <p class="listado-precio">${precio}</p>
    <span class="delete-btn" onclick="borrarElemento()"> ${suprimir}</span>
  
    `
    return solicitudes;
}


async function porCadaSolicitud() {
    try{
        let listadoDeAPI= await conexionAPI.listadoSolicitudes();
        listadoDeAPI.forEach(element =>  listaSolicitudes
            .appendChild(crearCard(element.src, element.nombre, element.precio, element.suprimir)));
    }catch{
        alert("No fue posible cargar la solicitud")
    }
}

porCadaSolicitud();

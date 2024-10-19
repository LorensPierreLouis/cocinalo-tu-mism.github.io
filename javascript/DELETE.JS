import { conexionAPI } from "./APIlocal.js";
const botonEliminar = document.getElementById('borrar');

async function eliminación() {
    
    await conexionAPI.eliminarElemento(id);


}
  

botonEliminar.addEventListener('click',evento=> eliminación(evento));
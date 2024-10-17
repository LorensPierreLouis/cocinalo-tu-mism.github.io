import { conexionAPI } from "./APIlocal.js";

const form = document.querySelector("[data-formulario-productos]");





async function postear(evento){
    evento.preventDefault();
    const src= document.querySelector("[data-imagen]").value;
    const nombre = document.querySelector("[data-nombre]").value;
    const precio = document.querySelector("[data-precio]").value;
  
    
  

    await conexionAPI.postearSolicitudes(src,nombre,precio);
    alert("Fue registrado exitosamente");


       
    
    
}

form.addEventListener('submit',evento=> postear(evento));
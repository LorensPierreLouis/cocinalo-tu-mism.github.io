
async function listadoSolicitudes(){
    const mostrarListado = await fetch("http://localhost:3001/solicitudes ",{
        method:"GET",
        headers:{
        "Content-type":"application/json"
        }
    });
    
    const mostrarListadoConvertido=await mostrarListado.json();
 
    return mostrarListadoConvertido;
}


async function postearSolicitudes(src,nombre,precio){
    const crear= await fetch("http://localhost:3001/solicitudes",{
    method:"POST",
    headers:{
        "content-type":"application/json"
    },
    body:JSON.stringify({
        src:src,
        nombre:nombre,
        precio:precio,
       suprimir:"Suprimir 🗑️" 
    })
    })
    if(!crear.ok){
        throw new Error("No fue posible subir la foto");
    }
    const crearConvertida = await crear.json();

    return crearConvertida;
}

async function localización(id) {
    const response = await fetch( `http://localhost:3001/solicitudes/${id}`);
    if (response.ok) {
      return true; // El item existe
    } else {
      return false; // El item no existe
    }
  }
async function eliminarSolicitud(id){
    try {
        const contenido = await localización(id); // Verificar si el item existe
        if (!contenido) {
        alert(`El elemento con ID ${id} no existe`);
        return; // Salir de la función si no existe
        }
    
        const response = await fetch(`http://localhost:3001/solicitudes/${id}`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
        },
        });
    
        console.log("la respuesta es: ", response);
    
        if (response.ok) {
        alert(`¿Desea eliminar el contenido?`);
        } else {
        alert(`Error ${response.status}: ${response.statusText}`);
        }
    } catch (error) {
        alert("Hubo un error con la solicitud: " + error);
    }
}



export const conexionAPI={
listadoSolicitudes,postearSolicitudes,eliminarSolicitud
}

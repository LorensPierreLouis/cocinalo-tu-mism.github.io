
async function listadoSolicitudes(){
    const mostrarListado = await fetch("http://localhost:3001/solicitudes",{
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

async function eliminarSolicitud(id){
    const eliminar = await fetch(`http://localhost:3001/solicitudes/${id}`, {
        method: "DELETE",
        headers: {
            "Content-type": "application/json"
        },
        body:JSON.stringify({
           id:id 
        })
    
    });

    if (!eliminar.ok) {
        throw new Error("No fue posible eliminar la solicitud");
    }

    const eliminarConvertido = await eliminar.json();
    return eliminarConvertido;
}
   

  


export const conexionAPI={
    listadoSolicitudes,postearSolicitudes,eliminarSolicitud
}

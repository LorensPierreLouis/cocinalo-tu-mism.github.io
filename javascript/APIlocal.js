
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


async function postearSolicitudes(src,nombre,precio,suprimir){
    const crear= await fetch("http://localhost:3001/solicitudes",{
    method:"POST",
    headers:{
        "Content-type":"application/json"
    },
    body:JSON.stringify({
        src:src,
        nombre:nombre,
        precio:precio,
       suprimir:suprimir
    })
    })
    if(!crear.ok){
        throw new Error("No fue posible subir la foto");
    }
    const crearConvertida = await crear.json();

    return crearConvertida;
}



export const conexionAPI={
    listadoSolicitudes,postearSolicitudes
}

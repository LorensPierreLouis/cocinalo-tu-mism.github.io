
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

    async function eliminarElemento(id) {
        const eliminar= await fetch("http://localhost:3001/solicitudes", {
        method: 'DELETE',
        headers:{
            "content-type":"application/json"
        },
        body:JSON.stringify({
            id:id
        })
        })
        .then(response => {
        if (response.ok) {
            alert('Elemento eliminado correctamente');
            id.remove(); 
        } else {
            alert('Error al eliminar el elemento');
        }
        })
        .catch(error => console.error('Error al eliminar el elemento:', error));

        const eliminarConvertida=eliminar.json();
        return eliminarConvertida;
    }

  


export const conexionAPI={
    listadoSolicitudes,postearSolicitudes, eliminarElemento
}

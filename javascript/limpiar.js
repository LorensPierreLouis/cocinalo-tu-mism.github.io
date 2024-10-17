const nombre = document.getElementById('nombre');
const precio= document.getElementById('precio');
const imagen= document.getElementById('imagen');

const botonLimpiar = document.getElementById('limpiar');

botonLimpiar.addEventListener('click',function() {
    nombre.value = ''; 
    precio.value = '';
    imagen.value = '';
});
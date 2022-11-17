let productos =[];

const objProducto ={
    nombre:'',
    cantidad:''
}

let editando = false;//Variable que valida cuando tiene que agregar o debe actualizar.
const formulario = document.querySelector('#formulario');//Obtenemos el id de las etiquetas.
const nombreInput= document.querySelector('#nombre');
const cantidadInput= document.querySelector('#cantidad');
const btnAgregar= document.querySelector('#btnAgregar');


formulario.addEventListener('submit', validarFormulario);//cuando detecte el submit valida el formulario.

function validarFormulario (event) {
    event.preventDefault();//Este event es para que no se ejecute de forma automatica.
     
    if(nombreInput.value === '' || cantidadInput.value === ''){
        alert('Todos los campos son obligatorios');
        return;
    }

    if (editando){
        //editarProducto();
        editando= false;

    } else {

        objProducto.nombre = nombreInput.value;
        objProducto.cantidad = cantidadInput.value;

        agregarProducto();
        listaProductos.push({...objProducto});

        mostrarProducto();
        
    }

function mostrarProducto() {
    const insumos = document.querySelector ('.insumos');

    listaProductos.forEach(producto => {
        const {nombre, cantidad} = empleado;
        
    });
    
    
    
    



}


}

function agregarInsumos()

let listaProductos =[];

const objProducto ={
    id:'',
    nombre:'',
    cantidad:''
}

let editando = false;//Variable que valida cuando tiene que agregar o debe actualizar.
const formulario = document.querySelector('#formulario');//Obtenemos el id de las etiquetas.
const nombreInput= document.querySelector('#nombre');
const cantidadInput= document.querySelector('#cantidad');
const btnAgregar= document.querySelector('#btnAgregar');


formulario.addEventListener('submit', validarFormulario);//cuando detecte el submit valida el formulario.

function validarFormulario (e) {
    e.preventDefault();//Este event es para que no se ejecute de forma automatica.
     

    //valida que los campos no esten vacios
    if(nombreInput.value === '' || cantidadInput.value === ''){
        alert('Todos los campos son obligatorios');
        return;// Con el return sale de la función.
    }


// Valida si debe editar o agregar los datos.
    if (editando){
        //editarProducto();
        editando= false;

    } else {

        objProducto.nombre = nombreInput.value;
        objProducto.cantidad = cantidadInput.value;

        agregarProducto();
    }
}

function agregarProducto(){

        listaProductos.push({...objProducto});//Por medio del push agregara el objeto producto.
        mostrarProducto();
       
    }

    
function mostrarProducto() {
    const divProductos = document.querySelector ('.div-productos');

    // Recorremos la lista de productos
        listaProductos.forEach(producto => {
        const {id, nombre, cantidad} = producto;

        
        const parrafo = document.createElement('p');
        parrafo.textContent =`${id} - ${nombre} - ${cantidad} -`;
        parrafo.dataset.id = id;// ayuda identifica el elemento a modificar o eliminar.


        const editarBoton = document.createElement('button');
        //editarBoton.onclick = () cargarProducto(producto);
        editarBoton.textContent = 'Editar';
        editarBoton.classList.add('btn', 'btn-editar');
        parrafo.append(editarBoton);

        const eliminarBoton = document.createElement('button');
        //eliminarBoton.onclick = () cargarProducto(producto);
        eliminarBoton.textContent = 'Eliminar';
        eliminarBoton.classList.add('btn', 'btn-eliminar');
        parrafo.append(eliminarBoton);

        const hr = document.createElement('hr');

        divProductos.appendChild(parrafo); //agregar como nodo hijo del contenedor 
        divProductos.appendChild(hr);

    });

}
    
    

    




let listaProductos =[];

const objProducto ={
    id:'',
    nombre:'',
    descripcion:''
}

let editando = false;//Variable que valida cuando tiene que agregar o debe actualizar.

const formulario = document.querySelector('#formulario');//Obtenemos el id de las etiquetas.
const nombreInput= document.querySelector('#nombre');
const descripcionInput= document.querySelector('#descripcion');
const btnAgregar= document.querySelector('#btnAgregar');


formulario.addEventListener('submit', validarFormulario);//cuando detecte el submit valida el formulario.

function validarFormulario (e) {
    e.preventDefault();//Este event es para que no se ejecute de forma automatica.
     

    //valida que los campos no esten vacios
    if(nombreInput.value === '' || descripcionInput.value === ''){
        alert('Todos los campos son obligatorios');
        return;// Con el return sale de la función.
    }


// Valida si debe editar o agregar los datos.
    if (editando){
        editarProducto();
        editando= false;

    } else {
        objProducto.id =Date.now();//Se genera el id del producto
        objProducto.nombre = nombreInput.value;
        objProducto.descripcion = descripcionInput.value;

        agregarProducto();
    }
}

function agregarProducto(){
        
            listaProductos.push({...objProducto});//Por medio del push agregara el objeto producto.
            localStorage.setItem("listaProductos", JSON.stringify(listaProductos))// agrega al local storage
        
            mostrarProducto();//muestra los datos en pantalla
            formulario.reset();//limpia los campos del formulario una vez presionado el boton agregar
            limpiarObjeto();
}
     
     
    

 function limpiarObjeto(){
        objProducto.id = '';
        objProducto.nombre = '';
        objProducto.descripcion = '';
}


function mostrarProducto() {

    limpiarHTML();

    const divProductos = document.querySelector ('.div-productos');

    // Recorremos la lista de productos
        listaProductos.forEach(producto => {
        const {id, nombre, descripcion} = producto;

        
        const parrafo = document.createElement('p');
        parrafo.textContent =`${id} - ${nombre} - ${descripcion} -`;
        parrafo.dataset.id = id;// ayuda identificar el elemento a modificar o eliminar.


        const editarBoton = document.createElement('button');
        editarBoton.onclick = () => cargarProducto(producto);
        editarBoton.textContent = 'Editar';
        editarBoton.classList.add('btn', 'btn-editar', 'btn-dark');
        parrafo.append(editarBoton);

        const eliminarBoton = document.createElement('button');
        eliminarBoton.onclick = () => eliminarProducto(id);
        eliminarBoton.textContent = 'Eliminar';
        eliminarBoton.classList.add('btn', 'btn-eliminar', 'btn-danger');
        parrafo.append(eliminarBoton);

        const hr = document.createElement('hr');

        divProductos.appendChild(parrafo); //agregar como nodo hijo del contenedor 
        divProductos.appendChild(hr);

    });

}

function cargarProducto(producto){
    const {id, nombre, descripcion} = producto;

    nombreInput.value = nombre;
    descripcionInput.value = descripcion;
    objProducto.id = id;//Mantiene el identificador del producto.

    formulario.querySelector('button[type="submit"]').textContent = "Actualizar";//cambiamos el texto del botón de agregar a actualizar

    editando = true;
}


function editarProducto() {
    
    objProducto.nombre = nombreInput.value;
    objProducto.descripcion = descripcionInput.value;

    listaProductos.map(producto =>{
      if(producto.id === objProducto.id) {
        producto.id = objProducto.id;
        producto.nombre = objProducto.nombre;
        producto.descripcion = objProducto.descripcion;

      }
    });

    localStorage.setItem("listaProductos", JSON.stringify(listaProductos))

    //actualiza los datos del formulario
    limpiarHTML();
    mostrarProducto();

    formulario.reset();
    formulario.querySelector ('button[type="submit"]').textContent ="Agregar";//Vuelve el botón de actualizar a agregar

    editando = false;

}

function eliminarProducto(id) {
    listaProductos = listaProductos.filter(producto => producto.id !== id);// Nos filtrara todos los elementos que no sean iguales al ID que ingreso el usuario.
    limpiarHTML();
    mostrarProducto();
    localStorage.clear();
    
}


function limpiarHTML(){
    const divProductos =document.querySelector('.div-productos')//elimina todo el contenido de un elemento
    while(divProductos.firstChild){
        divProductos.removeChild(divProductos.firstChild)
    }
}


    
    

    




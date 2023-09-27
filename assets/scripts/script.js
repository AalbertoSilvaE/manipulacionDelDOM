/*

  DOM (Document Object Model / Modelo de Objetos dek Documento)

  Cuando creamos paginas que usan HTML + CSS estamos crando paginas estaticas (por que no tienen interactividad), cuando agregamos JS nuestras paginas se convierten en sitios dinamicos (tienen interactividad).

  El navegador lee el documento html de arriba a abajo, de izquierda a derecha (renderizacion).

  Para que una pagina se renderice correctamente, se toma en cuenta el contenido, el peso de las imagenes, la conexion a internet, etc.

  Cuando el documento se renderiza, se crea un "arbol"(DOM), tiene muchas ramas que son las etiquetas y cada uno de los elementos que tenemos dentro de estast etiquetas se consideran "hojas" (nodos).

  cuando hablamso del DOM y entendemos que se representa como un árbol con rama sy hojas, entendemos que cada una de estas ramas y hojas es un nodo.

  Qué es un nodo?
  Representacion mas básica de lo que existe en un DOM, puede ser un elemento o etiqueta, puede ser un atributo, puede ser un texto, incluso un comentario.

    - Document : Nodo raiz, a partir del cual se derivan los demas nodos. Es el objeto a partir del cual se puede acceder a cualquier elemento dentro de el. Todos los nodos derivan de este.

    - Element: Son nodos definidos por etiquetas html (div, h1, p , im, meta, head, script, etc) ya sea que se vean o no se vean (etiquetas que interpreta el navegador).

    -Text: el texto que hay dentro de un elemento se considera un nodo, con la caracteristica que es un nodo hijo.

    - Atribbutes : Los atributos de las etiquetas tambien se convierten en nodos. Son nodos que estan asociados a un elemento y se pueden considerar tambien nodos hijos.

    - Comment : Los comentarios tambien son un nodo por que forma parte del documento.
    
    Para que utilizamos JS en un DOM?
        -Agregar elemntos HTML
        -Modificar elementos en HTML- Borrar elemento sn HTML


*/

// Comenzamos a trabajar con los nodos de mi documento

//1. Paso guardar los elementos HTML en variables de JS (let, var ,const)

/* Metodos de seleccion de elementos: Permiten traer una etiqueta de HTML y guardarla para su uso posterior

        - METODOS TRADICIONALES 
          - getElementByID (trae un elemento por ID)
          -getElementsByTagName
          -getElementByClassName

*/

//Aqui obtengo un elemento por id
const nombrePaciente = document.getElementById("nombrePaciente");

console.log(nombrePaciente);

//aqui obtengo varios elementos por clase
const columnas = document.getElementsByClassName("col");

console.log(columnas);

//Aqui obtengo varios elementos por etiqueta
const inputs = document.getElementsByTagName("input");

console.log(inputs);


/*
Metodos actuales

La unica diferencia entre el querySelector y el getElement, es que tenemos que especificar el tipo de selector que usaremos (. para las clases, # para los id)

- document,querySlector
- document.querySelectorAll

*/

//Aqui obtengo un elemento por el selector #
let containerPadre = document.querySelector("#containerPadre");
console.log(containerPadre);


//Aqui obtengo varios elementos por el selector .
let containers = document.querySelectorAll(".container");
console.log(containers);


/*
Metodos para modificar elementos

  - innerHTML: Esta propiedad nos permite acceder y modificar el contenido de nuestro elemento. Asignamos una cadena de texto y podemos modificar o elminar el texto. (ya existe un texto)


  - textContent: Cambiar o recuperar el contenido dentro de un elemento. Podemos modificar o eliminar el texto (crear un texto nuevo)
  


*/


//Modificando el texto de un h1 con innerHTML
let titulo = document.getElementById("titulo");

titulo.innerHTML = "Nuevo texto de mi tutulo";


//Creando un nuevo texto con innerHTML
let mensajeConfirmacion = document.getElementById("mensajeConfirmacion");
mensajeConfirmacion.innerHTML = "<p>Mensaje de confirmacion</p>";


/*

Crear elementos

    - Crear elementos
      - createElement
      - createTextNode
      - createComment

    - poner el elemento
       -append
       -appendiChild      

*/    

// Creando un elemento con createElement
let imagen = document.createElement("img");

// Crar los atributos de un elmento
imagen.src = "https://soyunperro.com/wp-content/uploads/perrocontento.jpg";

imagen.alt = "Foto de perrito feliz";


//Ob
mensajeConfirmacion.appendChild(imagen);
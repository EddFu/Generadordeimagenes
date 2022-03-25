import {registerImg} from "./lazy"

//crear 1 imagen
//agregar #imagen

//variables para el mathfloor
const minimum = 1;
const maxium = 122;

//mathfloor
const randomImage = () => Math.floor(Math.random() * (maxium - minimum)) + minimum

//funcion para creacion del nodo

const crearNodeimg = () => {
    //se crea el div donde ira insertada la imagen
    const container = document.createElement("div")
    container.className = "container-img";
  
    //se crea la imagen
    const imagen = document.createElement("img")
    imagen.className = "mx-auto";
    imagen.width = "320";
    imagen.style.borderRadius = "5px";
    imagen.dataset.src = `https://randomfox.ca/images/${randomImage()}.jpg`; //utilizamos los template literal para insertar la funcion de random y generar imagenes aleatorias

    //aqui mandamos a insertar la imagen dentro del div
    container.appendChild(imagen)

    //finalmente retornamos el container con todo dentro
    return container;
}

// const nuevaImagen = crearNodeimg();

//añadimos los id de los elementos de html
const insertNode = document.querySelector("#images");
const imgGenerator = document.querySelector("#imgGenerator");

//creamos la funcion para renderizar imagenes cada vez que se le de click al boton

const addImg = () => {
    const newImage = crearNodeimg();
    insertNode.appendChild(newImage);
    registerImg(newImage);
}

//agregamos el listener
imgGenerator.addEventListener("click", addImg);


//boton borrar imagenes
const borrarImagenes = document.querySelector("#imgCleaner");

//funcion flecha para borrar las imagenes

const removeImgs = () => {
    //forma mas corta
    // insertNode.innerHTML = ''

    [...insertNode.childNodes].forEach(child => {
        child.remove();
    })
}


//event listener del boton de borrar
borrarImagenes.addEventListener("click", removeImgs);



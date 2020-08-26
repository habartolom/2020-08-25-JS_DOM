/* Método para mostrar mensajes */
function mensajeAlert(params) {
    alert("Hola mundo!!!");
}

/* Prompt */
function cajitaDeTexto(params) {
    var nombre = prompt("Ingrese su nombre");
    document.write('<h1>Su nombre es ' + nombre + '</h1>');
}

/* Confirm */
function confirmar(){
    var respuesta = confirm("Está seguro que desea eliminar el archivo?");
    if (respuesta) {
        alert("Archivo eliminado correctamente!!");
    } else {
        alert("Archivo NO eliminado");
    }
}

/* Consola */
function consola(){
    console.log("Soy tu mejor amigo para los errores");
}

var imagen = document.getElementById("imagen");

imagen.addEventListener("dblclick", ()=>{
    /* Modificamos el CSS */
    imagen.style.width = "1000px"
    imagen.style.border = "5px solid black"
});

/* Mouse */
var boxCaja = document.getElementById("box");
boxCaja.addEventListener("mouseenter", ()=>{
    box.classList.replace("box", "cambio1");
});

boxCaja.addEventListener("mouseleave",()=>{
    box.classList.replace("cambio1", "box");
});

boxCaja.addEventListener("mousemove", ()=>{
    console.log("El mouse se está moviendo");
})

boxCaja.addEventListener("mousedown", ()=>{
    console.log("Has dado click dentro del div");
})

boxCaja.addEventListener("mouseup", ()=>{
    console.log("Has levantado el click dentro del div");
})

/* TECLADO */

var teclado = document.getElementById("teclado");

/*teclado.addEventListener("keydown", ()=>{
    console.log("Has oprimido una tecla");
})

teclado.addEventListener("keypress", ()=>{
    console.log("Tienes la tecla sostenida");
})*/

teclado.addEventListener("keyup", (e)=>{
    console.log(e.key);

    var letra = e.key.toLowerCase();

    if(letra == "w")
        console.log("Vas hacia adelante");
    else if(letra =="a")
        console.log("Vas hacia la izquierda");
    else if(letra =="s")
        console.log("Vas hacia atrás");
    else if(letra =="d")
        console.log("Vas hacia la derecha");
})


/* Objeto evento */

var padre = document.getElementById("padre");

padre.addEventListener("click", (e)=>{
    console.log(e.target.textContent);
    /*e.target.style.background = "red";*/

    e.target.classList.add("color");
})


/* CREAR ELEMENTOS DENTRO DE UN NODO O ETIQUETA */

var lista = document.getElementById("lista");
var agregar = document.getElementById("agregar");

agregar.addEventListener("click", ()=>{
    /* Trae el texto dentro del input */
    var texto = document.getElementById("texto").value;

    /* Creo etiqueta HTML */
    var etiqueta = document.createElement("li");

    /* Ingreso en la etiqueta el texto del input */
    etiqueta.textContent = texto;

    lista.appendChild(etiqueta);
})
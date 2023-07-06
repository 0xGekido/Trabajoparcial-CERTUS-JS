/* Referencia a los botones Agregar al carrito */
let botones = document.querySelectorAll("article > button");

/* Bucle repetitivo */
for (let i = 0; i < botones.length; i++) {
    /* Agregar el escucha de evento a los botones */
    botones[i].addEventListener("click", agregarCarrito, false);
}

/* Definir función */
function agregarCarrito(e) {

    /* Si está la imagen de carrito vacio se borra */
    if (document.querySelector("#carritoVacio")) {
        document.querySelector("#carritoVacio").remove();
        document.querySelector("#carrito > figcaption").remove();
    }

    /* Obtener el elemento padre donde se hizo clic */
    let elementoBoton = e.target;
    let elementoPadre = elementoBoton.parentElement;

    /* Sacar información */
    let titulo = elementoPadre.querySelector("h3").innerHTML;
    let parrafo = elementoPadre.querySelector("p").innerHTML;

    /* Agregar la información al carrito */
    let nuevoelemento = document.createElement("div");
    
    nuevoelemento.innerHTML = "<div><h3>"+titulo+"</h3><p>"+parrafo+"</p></div>";
    document.querySelector("#carrito").append(nuevoelemento);

    /* Aviso */
    alert("Se agregó correctamente")
}
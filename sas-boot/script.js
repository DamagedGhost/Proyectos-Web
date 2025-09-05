añadirProducto();

function añadirProducto() {

    // declaración de variables que agarran los elementos del DOM, como precio y carrito
    let precio = document.getElementById("price1");
    let carrito = document.getElementById("carrito");
    let carritoItems = [];

    // evento click para agregar el producto al carrito, y mostrar alerta
    // TODO: Falta implementar funcion, no detecta el click
    precio.addEventListener("click", function () {
        carritoItems.push(precio.textContent);
        alert("Has seleccionado el producto con precio: " + precio.textContent);
    });

    // evento click para mostrar los productos en el carrito, o alerta si está vacío
    carrito.addEventListener("click", function () {
        if (carritoItems.length === 0) {
            alert("Tu carrito está vacío.");
        } else {
            alert("Productos en tu carrito:\n" + carritoItems.join("\n"));
        }
    });
}

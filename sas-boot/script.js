añadirProducto();

function añadirProducto() {
    let precio = document.getElementById("price1");
    let carrito = document.getElementById("carrito");
    let carritoItems = [];

    precio.addEventListener("click", function () {
        carritoItems.push(precio.textContent);
        alert("Has seleccionado el producto con precio: " + precio.textContent);
    });

    carrito.addEventListener("click", function () {
        if (carritoItems.length === 0) {
            alert("Tu carrito está vacío.");
        } else {
            alert("Productos en tu carrito:\n" + carritoItems.join("\n"));
        }
    });
}

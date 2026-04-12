let total = 0;
let precio;

do {
    precio = prompt("Ingresa el precio del producto (0 para terminar):");
    precio = parseFloat(precio);

    if (!isNaN(precio) && precio > 0) {
        total += precio;
    }

} while (precio !== 0);

if (total > 100) {
    total = total * 0.1; // Aplica un descuento del 10%
    alert("Se aplicó descuento del 10%");
}

alert("Total a pagar: $" + total);
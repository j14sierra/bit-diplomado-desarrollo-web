let compras = [];

for (let i = 0; i < 5; i++) {
    let producto = prompt("Ingresa un producto:");
    compras.push(producto);
}

document.write("<h3>Lista de compras:</h3>");
for (let i = 0; i < compras.length; i++) {
    document.write(compras[i] + "<br>");
}
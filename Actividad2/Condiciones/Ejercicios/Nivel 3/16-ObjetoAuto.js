    let auto = {
        marca: "Toyota",
        modelo: "Corolla",
        anio: 2020
    };

const nuevoAnio = prompt("Ingresa el nuevo año del auto:");

if (!isNaN(nuevoAnio)) {
    auto.anio = parseInt(nuevoAnio);
}

document.write("<h3>Auto actualizado:</h3>");
document.write("Marca: " + auto.marca + "<br>");
document.write("Modelo: " + auto.modelo + "<br>");
document.write("Año: " + auto.anio);
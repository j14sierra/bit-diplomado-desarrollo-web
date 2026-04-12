const nombres = ["MadesiGrow", "Vale", "Cami", "Laura", "Johan"];
const buscar = prompt("Ingresa un nombre a buscar:");
let encontrado = false;

for (let i = 0; i < nombres.length; i++) {
    if (nombres[i].toLowerCase() === buscar.toLowerCase()) {
        encontrado = true;
        break;
    }
}

if (encontrado) {
    alert("El nombre está en la lista");
} else {
    alert("El nombre NO está en la lista");
}
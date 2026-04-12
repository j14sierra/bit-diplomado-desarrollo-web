let numeros = [104, 120, 4307, 25, 33];

const nuevoValor = parseInt(prompt("Ingresa el nuevo número:"));
const posicion = parseInt(prompt("Ingresa la posición (0 a 4):"));

if (posicion >= 0 && posicion < numeros.length && !isNaN(nuevoValor)) {
    numeros[posicion] = nuevoValor;
    alert("Array actualizado: " + numeros.join(", "));
} else {
    alert("Datos inválidos");
}
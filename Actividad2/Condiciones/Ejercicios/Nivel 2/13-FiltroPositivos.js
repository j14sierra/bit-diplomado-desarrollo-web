// Con Do While
let num;

do {
    num = parseFloat(prompt("Ingresa un número (negativo para salir):"));
} while (num >= 0);

alert("Ingresaste un número negativo, fin del programa");


// Con While
while (true) {
    num = parseFloat(prompt("Ingresa un número (negativo para salir):"));
    if (num < 0) {
        break;
    }   
}
alert("Ingresaste un número negativo, fin del programa");



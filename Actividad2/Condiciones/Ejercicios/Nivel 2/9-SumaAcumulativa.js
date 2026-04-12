// Con For
let n = parseInt(prompt("Ingresa un número:"));
let suma = 0;

for (let i = 1; i <= n; i++) {
    suma += i;
}

alert("La suma es: " + suma);

// Con While
n = parseInt(prompt("Ingresa un número:"));
suma = 0;
let i = 1;

while (i <= n) {
    suma += i;
    i++;
}

alert("La suma es: " + suma);

// Con Do While
n = parseInt(prompt("Ingresa un número:"));
suma = 0;
i = 1;
do {
    suma += i;
    i++;
} while (i <= n);

alert("La suma es: " + suma);


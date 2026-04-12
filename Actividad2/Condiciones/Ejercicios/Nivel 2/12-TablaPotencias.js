// Con For

let num = parseInt(prompt("Ingresa un número:"));

for (let i = 1; i <= 5; i++) {
    document.write(num + "^" + i + " = " + (num ** i) + "<br>");
}

// Con While
num = parseInt(prompt("Ingresa un número:"));
let i = 1;
while (i <= 5) {
    document.write(num + "^" + i + " = " + (num ** i) + "<br>");
    i++;
}

// Con Do While
num = parseInt(prompt("Ingresa un número:"));
i = 1;  
do {
    document.write(num + "^" + i + " = " + (num ** i) + "<br>");
    i++;
} while (i <= 5);

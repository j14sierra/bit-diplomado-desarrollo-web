const numero = prompt("Ingresa un número:");

if (isNaN(numero) || numero === "") {
    alert("Ingresa un número válido");
} else {
    numero = parseInt(numero);
    if (numero % 2 === 0) {
        alert("El número es PAR");
    } else {
        alert("El número es IMPAR");
    }
}
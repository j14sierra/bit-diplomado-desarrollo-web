const dolares = parseFloat(prompt("Ingresa el valor en dólares:"));
const moneda = prompt("Convertir a: euros, pesos, soles").toLowerCase();

if (isNaN(dolares)) {
    alert("Ingresa un valor válido");
} else {
    let resultado;

    switch (moneda) {
        case "euros":
            resultado = dolares * 0.92;
            break;
        case "pesos":
            resultado = dolares * 4000;
            break;
        case "soles":
            resultado = dolares * 3.7;
            break;
        default:
            alert("Moneda no válida");
    }

    if (resultado !== undefined) {
        alert("Resultado: " + resultado);
    }
}
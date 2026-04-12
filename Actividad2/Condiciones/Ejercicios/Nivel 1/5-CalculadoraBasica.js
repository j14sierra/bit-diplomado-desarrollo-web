const num1 = parseFloat(prompt("Ingresa el primer número:"));
const num2 = parseFloat(prompt("Ingresa el segundo número:"));
const operacion = prompt("Elige operación: suma, resta, mult, div").toLowerCase();

if (isNaN(num1) || isNaN(num2)) {
    alert("Debes ingresar números válidos");
} else {
    let resultado;

    switch (operacion) {
        case "suma":
            resultado = num1 + num2;
            break;
        case "resta":
            resultado = num1 - num2;
            break;
        case "mult":
            resultado = num1 * num2;
            break;
        case "div":
            if (num2 === 0) {
                alert("No se puede dividir entre 0");
                break;
            }
            resultado = num1 / num2;
            break;
        default:
            alert("Operación no válida");
    }

    if (resultado !== undefined) {
        alert("Resultado: " + resultado);
    }
}
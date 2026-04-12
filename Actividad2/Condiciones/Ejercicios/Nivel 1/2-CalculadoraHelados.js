const precioBase = 5;
const topping = prompt("Elige un topping: Oreo, KitKat o Brownie").toLowerCase();
let precioFinal = precioBase;

switch (topping) {
    case "oreo":
        precioFinal += 2;
        break;
    case "kitkat":
        precioFinal += 3;
        break;
    case "brownie":
        precioFinal += 4;
        break;
    default:
        alert("Topping no válido, solo se cobra el helado base");
}

alert("El precio total es: $" + precioFinal);
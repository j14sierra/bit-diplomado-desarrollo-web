const edad = prompt("Ingresa tu edad:");

if (isNaN(edad) || edad === "" || edad === null || edad < 0) {
    alert("Por favor ingresa un número válido");
} else {
    edad = parseInt(edad);
    if (edad < 18) {
        alert("Acceso denegado");
    } else {
        alert("Bienvenido");
    }
}
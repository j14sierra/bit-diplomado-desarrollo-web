let opcion;

do {
    opcion = prompt(
        "1. Saludar\n2. Despedirse\n3. Salir\nElige una opción:"
    );

    switch (opcion) {
        case "1":
            alert("Hola");
            break;
        case "2":
            alert("Adiós");
            break;
        case "3":
            alert("Saliendo...");
            break;
        default:
            alert("Opción no válida");
    }

} while (opcion !== "3");
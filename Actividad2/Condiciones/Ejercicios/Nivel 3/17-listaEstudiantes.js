let estudiantes = [];

for (let i = 0; i < 3; i++) {
    const nombre = prompt("Nombre del estudiante:");
    const nota = parseFloat(prompt("Nota del estudiante:"));

    estudiantes.push({
        nombre: nombre,
        nota: nota
    });
}

document.write("<h3>Lista de estudiantes:</h3>");

for (let i = 0; i < estudiantes.length; i++) {
    document.write(
        estudiantes[i].nombre + " - Nota: " + estudiantes[i].nota + "<br>"
    );
}
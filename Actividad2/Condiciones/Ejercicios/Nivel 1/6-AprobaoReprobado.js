const nota1 = parseFloat(prompt("Ingresa la primera nota:"));
const nota2 = parseFloat(prompt("Ingresa la segunda nota:"));
const nota3 = parseFloat(prompt("Ingresa la tercera nota:"));

if (isNaN(nota1) || isNaN(nota2) || isNaN(nota3)) {
    alert("Ingresa notas válidas");
} else {
    const promedio = (nota1 + nota2 + nota3) / 3;

    if (promedio >= 6) {
        alert("Aprobado con promedio: " + promedio);
    } else {
        alert("Reprobado con promedio: " + promedio);
    }
}
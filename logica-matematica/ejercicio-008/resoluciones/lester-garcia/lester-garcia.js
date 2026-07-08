let calificaciones = [9, 8, 10, 9, 7];

let patron = "";

for (let i = 0; i < calificaciones.length; i++) {
    if (calificaciones[i] >= 9) {
        patron += "A";
    } else if (calificaciones[i] >= 7) {
        patron += "B";
    } else {
        patron += "C";
    }
}

let categoria = "";

if (patron.includes("AAA")) {
    categoria = "excelente";
} else {
    categoria = "recomendada";
}

let explicacion = "se genero un patron de puntuacion clasificando cada calificacion segun las reglas establecidas.";

console.log("patron:", patron);
console.log("categoria:", categoria);
console.log("explicacion:", explicacion);
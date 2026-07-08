const peleadores = [
    { nombre: "Carlos", categoria: "Profesional", lesionado: false },
    { nombre: "Miguel", categoria: "Amateur", lesionado: false },
    { nombre: "Andrés", categoria: "Profesional", lesionado: true },
    { nombre: "Luis", categoria: "Amateur", lesionado: false }
];

const listaEntrenamiento = [];

for (let i = 0; i < peleadores.length; i++) {
    if (
        peleadores[i].categoria === "Profesional" &&
        !peleadores[i].lesionado
    ) {
        listaEntrenamiento.push(peleadores[i].nombre);
    }
}

let motivo = "";

if (listaEntrenamiento.length > 0) {
    motivo = "Solo se organizaron los peleadores profesionales que pueden entrenar.";
} else {
    motivo = "No hay peleadores que cumplan las condiciones.";
}

console.log("listaEntrenamiento:", listaEntrenamiento);
console.log("motivo:", motivo);
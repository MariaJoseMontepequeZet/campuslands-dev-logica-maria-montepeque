const turnos = [
    { soldador: "Ana", turno: "Mañana", disponible: false },
    { soldador: "Luis", turno: "Tarde", disponible: true },
    { soldador: "Carlos", turno: "Noche", disponible: true }
];

let asignacion = "";
let motivo = "";

for (let i = 0; i < turnos.length; i++) {
    if (turnos[i].disponible) {
        asignacion = `${turnos[i].soldador} - ${turnos[i].turno}`;
        motivo = "Es el primer soldador disponible para cubrir el turno.";
        break;
    }
}

if (asignacion === "") {
    asignacion = "Sin asignación";
    motivo = "No hay soldadores disponibles.";
}

console.log("asignacion:", asignacion);
console.log("motivo:", motivo);
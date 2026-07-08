const escenas = [
    ["Modelado", "Completado"],
    ["Texturizado", "En progreso"],
    ["Renderizado", "Pendiente"]
];

let escenaPendiente = "";
let motivo = "";

for (let i = 0; i < escenas.length; i++) {
    if (escenas[i][1] === "Pendiente") {
        escenaPendiente = escenas[i][0];
        motivo = "Es la primera etapa que aún no ha sido realizada.";
        break;
    }
}

console.log("escena:", escenaPendiente);
console.log("motivo:", motivo);
const animaciones = [
    ["Personaje", "Completada"],
    ["Escenario", "En proceso"],
    ["Iluminación", "Completada"],
    ["Texturas", "Pendiente"],
    ["Render Final", "Pendiente"]
];

function mostrarEstadoAnimaciones(animaciones) {

    console.log("=== ESTADO DE LA ANIMACIÓN 3D ===");

    for (let i = 0; i < animaciones.length; i++) {
        console.log(`Elemento: ${animaciones[i][0]}`);
        console.log(`Estado: ${animaciones[i][1]}`);
        console.log("----------------------------");
    }

}

mostrarEstadoAnimaciones(animaciones);
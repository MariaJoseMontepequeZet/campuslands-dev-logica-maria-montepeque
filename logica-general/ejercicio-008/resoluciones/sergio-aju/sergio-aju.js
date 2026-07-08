
function recomendarPelicula(edad, prefiereEfectos) {
    if (edad < 13) {
        return "Accion: Recomendar 'Viajes espaciales animados'. Motivo: Clasificación apta para todo público.";
    }

    // Si es mayor de 13, decidimos por el gusto en efectos
    if (prefiereEfectos === true) {
        return "Accion: Recomendar 'Cine de Acción Cyberpunk'. Motivo: Alta carga visual y efectos especiales intensos.";
    } else {
        return "Accion: Recomendar 'Sci-Fi Filosófico (Distopía)'. Motivo: Enfoque en la trama y dilemas sociales.";
    }
}

// Probando mi lógica
console.log(recomendarPelicula(10, true)); // Caso borde: menor de edad
console.log(recomendarPelicula(25, true)); // Caso normal: adulto que ama efectos
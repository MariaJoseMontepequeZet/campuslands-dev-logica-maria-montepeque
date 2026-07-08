function validarLanzamiento(pelicula) {
    // Paso 1: Validar fecha (No estrenar peliculas con mas de 20 años sin restaurar)
    const anioActual = 2026;
    if (anioActual - pelicula.anio > 20 && !pelicula.restaurada) {
        return { estado: "Bloqueado", motivo: "La película requiere proceso de restauración." };
    }

    // Paso 2: Validar clasificación (Censura para menores)
    if (pelicula.clasificacion === "R" || pelicula.clasificacion === "NC-17") {
        return { estado: "Restringido", motivo: "Contenido no apto para todo público." };
    }

    // Paso 3: Validar aspectos técnicos
    if (!pelicula.tieneEfectosEspeciales) {
        return { estado: "Pendiente", motivo: "Se requiere añadir efectos especiales para el estándar actual." };
    }

    // Paso 4: Aprobado
    return { estado: "Aprobado", motivo: "Lista para estreno en salas." };
}

// Pruebas
const p1 = { titulo: "Cyber Punk 2077", anio: 2025, clasificacion: "PG-13", tieneEfectosEspeciales: true };
const p2 = { titulo: "Retro Classic", anio: 1990, clasificacion: "PG", tieneEfectosEspeciales: true, restaurada: false };

console.log("Caso Normal:", validarLanzamiento(p1));
console.log("Caso Borde:", validarLanzamiento(p2));
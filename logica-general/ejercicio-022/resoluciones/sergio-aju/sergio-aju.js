function validarPartido(nombreEquipo, golesFavor, golesContra, tarjetasRojas) {
    // Regla 1: Validar que los goles no sean negativos
    if (golesFavor < 0 || golesContra < 0) {
        return { estado: "Rechazado", motivo: "Los goles no pueden ser negativos." };
    }
    // Regla 2: Un equipo con más de 3 tarjetas rojas en un partido es descalificado automáticamente
    if (tarjetasRojas > 3) {
        return { estado: "Rechazado", motivo: "Exceso de tarjetas rojas. Conducta antideportiva." };
    }
    // Regla 3: Si los datos son correctos, el partido se procesa
    return { 
        estado: "Aceptado", 
        motivo: "Datos validados correctamente. Partido registrado en el ranking." 
    };
}

// Pruebas
console.log("Caso Normal:", validarPartido("Equipo A", 3, 1, 0));
console.log("Caso Borde:", validarPartido("Equipo B", 0, 0, 4));
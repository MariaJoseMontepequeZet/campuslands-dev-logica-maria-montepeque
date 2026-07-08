function verificarEstadoEquipo(nombre, puntos, sancion) {
    if (sancion) {
        return `El equipo ${nombre} no puede participar: está sancionado.`;
    }
    if (puntos <= 0) {
        return `El equipo ${nombre} está inactivo por falta de puntos.`;
    }
    return `El equipo ${nombre} puede participar en el ranking.`;
}

console.log(verificarEstadoEquipo("Los Tigres", 15, false));
console.log(verificarEstadoEquipo("Fénix", 0, true));
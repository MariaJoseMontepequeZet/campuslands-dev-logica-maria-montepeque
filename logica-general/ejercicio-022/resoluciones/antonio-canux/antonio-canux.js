//Ejercicio 022 - Clasificación por reglas

// Entradas: Recibimos un objeto 'equipo' con su puntuación, diferencia de goles y sanciones.
function clasificarEquipo(equipo) {
    // Regla 1: Sanciones disciplinarias.
    if (equipo.tarjetasRojas >= 3) {
        return {
            accion: "Descalificado del torneo",
            motivo: "El equipo ha acumulado el límite máximo de tarjetas rojas permitidas por el reglamento."
        };
    }

    // Regla 2: Clasificación por puntos para ascenso/descenso.
    let liga = "";
    if (equipo.puntos >= 25) {
        liga = "Liga Mayor";
    } else if (equipo.puntos >= 15) {
        liga = "Liga de Ascenso";
    } else {
        liga = "Liga Amateur";
    }

    // Regla 3: Bono por rendimiento ofensivo.
    let bono = "";
    let diferenciaGoles = equipo.golesFavor - equipo.golesContra;
    
    if (diferenciaGoles >= 15) {
        bono = " + Clasificación a Copa de Campeones por diferencia de goles.";
    }

    return {
        accion: `Asignado a ${liga}${bono}`,
        motivo: "El equipo ha sido clasificado exitosamente en base a sus puntos y fair play."
    };
}

// --- PRUEBAS ---
console.log("=== PRUEBA 1: Caso Normal ===");
const equipoNormal = { 
    nombre: "Campus FC", 
    capitan: "Brayan Segura", 
    puntos: 28, 
    golesFavor: 30, 
    golesContra: 10, 
    tarjetasRojas: 1 
};
console.log(clasificarEquipo(equipoNormal));


console.log("\n=== PRUEBA 2: Caso Borde ===");
const equipoBorde = { 
    nombre: "Dev Strikers", 
    capitan: "Gabriel Josué Ramos Nájera", 
    puntos: 30, 
    golesFavor: 25, 
    golesContra: 5, 
    tarjetasRojas: 4 
};
console.log(clasificarEquipo(equipoBorde));
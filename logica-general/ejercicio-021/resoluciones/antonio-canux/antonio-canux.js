//Ejercicio 021 - Clasificación por reglas

// Entradas: Recibimos un objeto 'jugador' cons sus respectivos datos
function evaluarMatchmaking(jugador) {
    
    // Regla 1: Revisar si la cuenta tiene restricciones de jugabilidad.
    if (jugador.estado === "baneado") {
        return {
            accion: "bloquear emparejamiento",
            motivo: "la regla prioriza aislar jugadores baneados antes de buscar partida."
        };
    }

    // Regla 2 : Revisar la estabilidad de la conexión de nuetro jugador.
    if (jugador.ping > 120) {
        return {
            accion: "pausar emparejamiento",
            motivo: "el ping es demasiado alto para garantizar una partida competitiva justa."
        };
    }

    // Regla 3: Clasificación de rangos si las validaciones anteriores pasan.
    let rango = "";
    if (jugador.copas >= 2000) {
        rango = "Mítico";
    } else if (jugador.copas >= 1000) {
        rango = "Leyenda";
    } else {
        rango = "Guerrero";
    }

    // Salida para un jugador apto
    return {
        accion: `emparejar en rango ${rango}`,
        motivo: "el jugador cumple las condiciones de seguridad y tiene conexión estable."
    };
}

// --- PRUEBAS ---
console.log("=== PRUEBA 1: Caso Normal ===");
const jugadorNormal = { nombre: "GamerPro", estado: "activo", ping: 45, copas: 2100 };
console.log(evaluarMatchmaking(jugadorNormal));


console.log("\n=== PRUEBA 2: Caso Límite ===");
// Esta prueba nos demuestra que se prioriza el estado del jugador antes que sis estadísticas
const jugadorBorde = { nombre: "ToxicPlayer", estado: "baneado", ping: 20, copas: 5000 };
console.log(evaluarMatchmaking(jugadorBorde));
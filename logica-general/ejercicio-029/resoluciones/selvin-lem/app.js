// simulacion de estados combinada para peliculas de miedo
function transicionBase(estado, prioridad) {
  if (estado === "pendiente") {
    return prioridad === "alta" ? "bloqueado" : "aprobado";
  }
  return estado;
}

function contarBloqueadosPrevios(estadoFinalParcial) {
  return estadoFinalParcial.filter((e) => e === "bloqueado").length;
}

function simularEstadosCombinado(items, prioridad, regla) {
  if (!Array.isArray(items) || items.length === 0) {
    return { estadoFinal: [], historial: [], motivo: "no hay items para simular." };
  }

  const reglaMinuscula = typeof regla === "string" ? regla.toLowerCase() : "";
  const reglaFuerzaAprobacion = reglaMinuscula.includes("forzar aprobacion");

  const estadoFinal = [];
  const historial = [];

  for (let i = 0; i < items.length; i++) {
    const estadoInicial = items[i];

    let estadoNuevo;

    if (estadoInicial !== "pendiente") {
      estadoNuevo = estadoInicial;
    } else if (reglaFuerzaAprobacion) {
      estadoNuevo = "aprobado";
    } else if (contarBloqueadosPrevios(estadoFinal) >= 2) {
      estadoNuevo = "pendiente"; // congelado: sistema saturado de riesgo
    } else {
      estadoNuevo = transicionBase(estadoInicial, prioridad);
    }

    if (estadoNuevo !== estadoInicial) {
      historial.push({ item: i, de: estadoInicial, a: estadoNuevo });
    }

    estadoFinal.push(estadoNuevo);
  }

  let motivo = "los pendientes transicionaron segun la prioridad declarada.";
  if (reglaFuerzaAprobacion) {
    motivo = "la regla forzo aprobacion directa de todos los pendientes, sin importar la prioridad.";
  }

  return { estadoFinal, historial, motivo };
}

// pruebas
console.log(simularEstadosCombinado(["aprobado", "pendiente", "bloqueado"], "alta", "revisar bloqueados primero"));
// caso normal: pendiente transiciona a bloqueado por prioridad alta

console.log(simularEstadosCombinado([], "alta", "revisar bloqueados primero"));
// caso borde: { estadoFinal: [], historial: [], motivo: 'no hay items para simular.' }

console.log(simularEstadosCombinado(["bloqueado", "bloqueado", "pendiente"], "alta", "revisar saturacion"));
// caso especial: ya hay 2 bloqueados antes del pendiente -> el pendiente se congela, no transiciona

console.log(simularEstadosCombinado(["pendiente", "pendiente"], "alta", "forzar aprobacion de todos"));
// caso especial: regla fuerza aprobacion -> ambos pendientes pasan a aprobado, ignorando la prioridad alta
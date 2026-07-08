// deteccion de inconsistencias combinada para playlist musical
const ESTADOS_VALIDOS = ["aprobado", "pendiente", "bloqueado"];

function detectarEstadosInvalidos(items) {
  const encontrados = [];
  for (let i = 0; i < items.length; i++) {
    if (!ESTADOS_VALIDOS.includes(items[i])) {
      encontrados.push(`item en posicion ${i} ("${items[i]}") no es un estado valido.`);
    }
  }
  return encontrados;
}

function detectarDuplicados(items) {
  const encontrados = [];
  const vistos = new Set();
  for (const item of items) {
    if (vistos.has(item)) {
      encontrados.push(`item "${item}" esta duplicado en la lista.`);
    }
    vistos.add(item);
  }
  return encontrados;
}

function detectarPrioridadSinRiesgo(items, prioridad) {
  const hayRiesgo = items.includes("bloqueado") || items.includes("pendiente");
  if (prioridad === "alta" && !hayRiesgo) {
    return ["prioridad alta declarada pero no hay items en riesgo (bloqueado/pendiente)."];
  }
  return [];
}

function detectarReglaContradictoria(items, regla) {
  if (typeof regla !== "string" || regla.trim() === "") return [];
  const reglaMinuscula = regla.toLowerCase();
  const estadoMencionado = ESTADOS_VALIDOS.find((estado) => reglaMinuscula.includes(estado));
  if (estadoMencionado && !items.includes(estadoMencionado)) {
    return [`la regla menciona "${estadoMencionado}" pero ningun item tiene ese estado.`];
  }
  return [];
}

function detectarInconsistenciasCombinado(items, prioridad, regla) {
  if (!Array.isArray(items) || items.length === 0) {
    return { inconsistencias: ["items vacio o invalido."], gravedad: "alta", motivo: "no hay datos para evaluar consistencia." };
  }

  const gruposDetectores = [
    detectarEstadosInvalidos(items),
    detectarDuplicados(items),
    detectarPrioridadSinRiesgo(items, prioridad),
    detectarReglaContradictoria(items, regla),
  ];

  const inconsistencias = gruposDetectores.flat();
  const tiposConProblema = gruposDetectores.filter((grupo) => grupo.length > 0).length;

  let gravedad;
  if (tiposConProblema >= 2) {
    gravedad = "alta";
  } else if (tiposConProblema === 1) {
    gravedad = "media";
  } else {
    gravedad = "ninguna";
  }

  return {
    inconsistencias,
    gravedad,
    motivo: gravedad === "ninguna"
      ? "los datos son consistentes con las reglas del sistema."
      : `se encontraron inconsistencias en ${tiposConProblema} tipo(s) de regla distintos.`,
  };
}

// pruebas
console.log(detectarInconsistenciasCombinado(["aprobado", "pendiente", "bloqueado"], "alta", "revisar bloqueados primero"));
// caso normal: { inconsistencias: [], gravedad: 'ninguna', motivo: 'los datos son consistentes con las reglas del sistema.' }

console.log(detectarInconsistenciasCombinado([], "alta", "revisar bloqueados primero"));
// caso borde: { inconsistencias: ['items vacio o invalido.'], gravedad: 'alta', motivo: 'no hay datos para evaluar consistencia.' }

console.log(detectarInconsistenciasCombinado(["aprobado", "aprobado"], "alta", "revisar bloqueados primero"));
// caso especial: duplicado + prioridad alta sin riesgo + regla menciona "bloqueado" sin que exista -> 3 tipos de problema, gravedad "alta"
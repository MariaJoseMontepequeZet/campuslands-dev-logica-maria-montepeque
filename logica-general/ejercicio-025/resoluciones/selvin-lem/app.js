// ordenamiento de prioridades combinado para taller mecanico
const PESO_BASE = { bloqueado: 0, pendiente: 1, aprobado: 2 };
const PESO_INVERTIDO = { aprobado: 0, pendiente: 1, bloqueado: 2 };

function ordenarPrioridadesCombinado(items, prioridad, regla) {
  if (!Array.isArray(items) || items.length === 0) {
    return { ordenados: [], motivo: "no hay items para ordenar." };
  }

  const reglaMinuscula = typeof regla === "string" ? regla.toLowerCase() : "";
  const reglaPideAprobadosPrimero = reglaMinuscula.includes("aprobados primero");
  const prioridadAlta = prioridad === "alta";
  const tablaPeso = reglaPideAprobadosPrimero ? PESO_INVERTIDO : PESO_BASE;

  const conIndice = items.map((item, indiceOriginal) => ({ item, indiceOriginal }));

  conIndice.sort((a, b) => {
    const pesoA = tablaPeso[a.item] ?? 99;
    const pesoB = tablaPeso[b.item] ?? 99;

    if (pesoA !== pesoB) return pesoA - pesoB;

    // empate por peso: si ambos son bloqueado y la prioridad es alta,
    // el criterio secundario invierte el orden original (el ultimo reportado va primero)
    if (a.item === "bloqueado" && b.item === "bloqueado" && prioridadAlta) {
      return b.indiceOriginal - a.indiceOriginal;
    }

    // empate normal: conserva el orden original
    return a.indiceOriginal - b.indiceOriginal;
  });

  let motivo = "la regla prioriza riesgos antes de tareas normales, en caso de empate se conserva el orden original.";
  if (reglaPideAprobadosPrimero) {
    motivo = "la regla invierte el orden base: aprobados primero, bloqueados al final.";
  }
  if (prioridadAlta) {
    motivo += " ademas, entre bloqueados empatados, prioridad alta invierte su orden interno (el ultimo reportado va primero).";
  }

  return { ordenados: conIndice.map((x) => x.item), motivo };
}

// pruebas
console.log(ordenarPrioridadesCombinado(["aprobado", "pendiente", "bloqueado"], "alta", "revisar bloqueados primero"));
// caso normal: ["bloqueado", "pendiente", "aprobado"]

console.log(ordenarPrioridadesCombinado([], "alta", "revisar bloqueados primero"));
// caso borde: { ordenados: [], motivo: 'no hay items para ordenar.' }

console.log(ordenarPrioridadesCombinado(["bloqueado", "pendiente", "bloqueado"], "alta", "orden por riesgo"));
// caso especial: empate entre dos bloqueados con prioridad alta -> se invierte su orden interno (indice 2 antes que indice 0)

console.log(ordenarPrioridadesCombinado(["bloqueado", "aprobado", "pendiente"], "media", "aprobados primero en el reporte"));
// caso especial: regla invierte la tabla de pesos -> ["aprobado", "pendiente", "bloqueado"]
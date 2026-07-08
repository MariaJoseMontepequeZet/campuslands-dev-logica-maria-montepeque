// organizacion de listas combinada para kickboxing
const GRUPOS_BASE = ["bloqueado", "pendiente", "aprobado"];

function agruparPorEstado(items) {
  const grupos = { bloqueado: [], pendiente: [], aprobado: [], desconocido: [] };
  for (const item of items) {
    const clave = GRUPOS_BASE.includes(item) ? item : "desconocido";
    grupos[clave].push(item);
  }
  return grupos;
}

function grupoDesbalanceado(grupos, total) {
  for (const clave in grupos) {
    if (clave === "desconocido") continue;
    if (grupos[clave].length / total > 0.6) return clave;
  }
  return null;
}

function organizarListaCombinado(items, prioridad, regla) {
  if (!Array.isArray(items) || items.length === 0) {
    return { grupos: {}, alertas: [], motivo: "no hay items para organizar." };
  }

  const reglaMinuscula = typeof regla === "string" ? regla.toLowerCase() : "";
  const reglaPideCompactar = reglaMinuscula.includes("compactar");

  const grupos = agruparPorEstado(items);

  if (reglaPideCompactar && grupos.desconocido.length > 0) {
    grupos.pendiente = grupos.pendiente.concat(grupos.desconocido);
    grupos.desconocido = [];
  }

  const alertas = [];

  const clavesDesbalance = grupoDesbalanceado(grupos, items.length);
  if (clavesDesbalance) {
    alertas.push(`el grupo "${clavesDesbalance}" concentra mas del 60% de los items, revisar carga desbalanceada.`);
  }

  if (prioridad === "alta" && grupos.bloqueado.length === 0) {
    alertas.push("prioridad alta declarada pero el grupo bloqueado esta vacio.");
  }

  return {
    grupos,
    alertas,
    motivo: alertas.length > 0
      ? "los items se organizaron por categoria y se detectaron casos especiales a revisar."
      : "los items se organizaron por categoria sin casos especiales detectados.",
  };
}

// pruebas
console.log(organizarListaCombinado(["aprobado", "pendiente", "bloqueado"], "alta", "revisar bloqueados primero"));
// caso normal: grupos balanceados, sin alertas

console.log(organizarListaCombinado([], "alta", "revisar bloqueados primero"));
// caso borde: { grupos: {}, alertas: [], motivo: 'no hay items para organizar.' }

console.log(organizarListaCombinado(["aprobado", "aprobado", "aprobado", "pendiente"], "alta", "compactar reporte"));
// caso especial: aprobado concentra 75% -> alerta desbalance; prioridad alta sin bloqueados -> alerta adicional
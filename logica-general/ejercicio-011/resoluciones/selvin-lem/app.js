// organizacion de listas por categoria para kickboxing
const GRUPOS_BASE = ["bloqueado", "pendiente", "aprobado"];

function organizarLista(items, prioridad, regla) {
  if (!Array.isArray(items) || items.length === 0) {
    return { grupos: {}, resumen: {}, motivo: "no hay items para organizar." };
  }

  const grupos = { bloqueado: [], pendiente: [], aprobado: [], desconocido: [] };

  for (let i = 0; i < items.length; i++) {
    const item = items[i];
    const clave = GRUPOS_BASE.includes(item) ? item : "desconocido";
    grupos[clave].push(item);
  }

  const resumen = {};
  for (const clave in grupos) {
    resumen[clave] = grupos[clave].length;
  }

  return {
    grupos,
    resumen,
    motivo: "los items se organizaron por categoria usando un ciclo y un acumulador por grupo.",
  };
}

// pruebas
console.log(organizarLista(["aprobado", "pendiente", "bloqueado"], "alta", "revisar bloqueados primero"));
// caso normal: grupos con 1 item cada uno, resumen { bloqueado: 1, pendiente: 1, aprobado: 1, desconocido: 0 }

console.log(organizarLista([], "alta", "revisar bloqueados primero"));
// caso borde: { grupos: {}, resumen: {}, motivo: 'no hay items para organizar.' }

console.log(organizarLista(["aprobado", "lesionado", "bloqueado", "bloqueado"], "media", "agrupar por estado"));
// caso borde: incluye item desconocido y grupo bloqueado con 2 items
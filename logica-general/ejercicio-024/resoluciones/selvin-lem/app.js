// filtro combinado de inventario de motos por condiciones
const FILTROS_POR_PRIORIDAD = {
  alta: ["bloqueado", "pendiente"],
  media: ["bloqueado"],
  baja: [],
};

function filtrarItemsCombinado(items, prioridad, regla) {
  if (!Array.isArray(items) || items.length === 0) {
    return { filtrados: [], excluidos: [], motivo: "no hay items para filtrar." };
  }

  const todosBloqueados = items.every((item) => item === "bloqueado");
  if (todosBloqueados) {
    return { filtrados: [...items], excluidos: [], motivo: "todos los items estan bloqueados, no hay nada que discriminar." };
  }

  const lotePequeno = items.length <= 2;
  let criterio = FILTROS_POR_PRIORIDAD[prioridad];

  if (criterio === undefined) {
    return { filtrados: [], excluidos: [...items], motivo: `prioridad "${prioridad}" no reconocida, no se aplico filtro.` };
  }

  if (lotePequeno && prioridad === "baja") {
    criterio = ["bloqueado"];
  }

  const reglaMinuscula = typeof regla === "string" ? regla.toLowerCase() : "";
  const reglaExcluyeAprobado = reglaMinuscula.includes("excluir") && reglaMinuscula.includes("aprobado");

  const filtrados = [];
  const excluidos = [];

  for (const item of items) {
    const pasaCriterioBase = criterio.length === 0 || criterio.includes(item);
    const debeExcluirsePorRegla = reglaExcluyeAprobado && item === "aprobado";

    if (pasaCriterioBase && !debeExcluirsePorRegla) {
      filtrados.push(item);
    } else {
      excluidos.push(item);
    }
  }

  let motivo = "la regla prioriza riesgos antes de tareas normales.";
  if (lotePequeno && prioridad === "baja") {
    motivo = "lote pequeño: se aplico filtro de bloqueado aunque la prioridad era baja.";
  }
  if (reglaExcluyeAprobado) {
    motivo += " ademas, la regla exigio excluir aprobados explicitamente.";
  }

  return { filtrados, excluidos, motivo };
}

// pruebas
console.log(filtrarItemsCombinado(["aprobado", "pendiente", "bloqueado"], "alta", "revisar bloqueados primero"));
// caso normal: filtrados ["pendiente", "bloqueado"], excluidos ["aprobado"]

console.log(filtrarItemsCombinado([], "media", "revisar"));
// caso borde: { filtrados: [], excluidos: [], motivo: 'no hay items para filtrar.' }

console.log(filtrarItemsCombinado(["aprobado", "bloqueado"], "baja", "excluir aprobados del reporte"));
// caso especial: lotePequeno + prioridad baja -> filtra bloqueado igual; ademas regla excluye aprobado -> filtrados ["bloqueado"], excluidos ["aprobado"]

console.log(filtrarItemsCombinado(["bloqueado", "bloqueado", "bloqueado"], "baja", "sin filtro"));
// caso especial: todosBloqueados -> filtrados = items completos, excluidos vacio
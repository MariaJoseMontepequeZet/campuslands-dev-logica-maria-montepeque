// clasificacion por reglas combinadas para videojuegos competitivos
function clasificarPorReglas(items, prioridad, regla) {
  if (!Array.isArray(items) || items.length === 0) {
    return { clasificacion: "sin datos", accion: "sin accion", motivo: "no hay items para clasificar." };
  }

  const totalBloqueados = items.filter((i) => i === "bloqueado").length;
  const hayBloqueado = totalBloqueados > 0;
  const mayoriaBloqueada = totalBloqueados > items.length / 2;
  const prioridadAlta = prioridad === "alta";
  const todosIguales = items.every((i) => i === items[0]);

  // condicion 1: caso especial critico combinado (mayoria + prioridad)
  if (mayoriaBloqueada && prioridadAlta) {
    return {
      clasificacion: "critico global",
      accion: "detener y escalar",
      motivo: `mas de la mitad de los items (${totalBloqueados}/${items.length}) estan bloqueados y la prioridad es alta.`,
    };
  }

  // condicion 2: riesgo puntual con prioridad alta
  if (hayBloqueado && prioridadAlta) {
    return {
      clasificacion: "riesgo puntual alto",
      accion: "revisar bloqueado con urgencia",
      motivo: "hay bloqueados sin ser mayoria, pero la prioridad alta exige revision urgente.",
    };
  }

  // condicion 3: riesgo puntual sin prioridad alta
  if (hayBloqueado) {
    return {
      clasificacion: "riesgo puntual",
      accion: "revisar bloqueado",
      motivo: "hay bloqueados en la lista, se revisan sin urgencia extrema.",
    };
  }

  // condicion 4 y 5: caso especial de lote homogeneo sin riesgo
  if (todosIguales) {
    if (items[0] === "aprobado") {
      return { clasificacion: "lote limpio", accion: "sin accion", motivo: "todos los items estan aprobados." };
    }
    if (items[0] === "pendiente") {
      return { clasificacion: "lote en espera", accion: "monitorear lote", motivo: "todos los items estan pendientes." };
    }
  }

  // condicion 6: mezcla sin riesgo (aprobado + pendiente, sin bloqueado)
  return { clasificacion: "mixto sin riesgo", accion: "revisar normal", motivo: "mezcla de estados sin ningun bloqueado presente." };
}

// pruebas
console.log(clasificarPorReglas(["aprobado", "pendiente", "bloqueado"], "alta", "revisar bloqueados primero"));
// caso normal: 1 bloqueado de 3 (no mayoria) + prioridad alta -> "riesgo puntual alto"

console.log(clasificarPorReglas([], "alta", "revisar bloqueados primero"));
// caso borde: { clasificacion: 'sin datos', accion: 'sin accion', motivo: 'no hay items para clasificar.' }

console.log(clasificarPorReglas(["bloqueado", "bloqueado", "pendiente"], "alta", "escalar riesgos"));
// caso borde: 2 de 3 bloqueados (mayoria) + prioridad alta -> "critico global"

console.log(clasificarPorReglas(["pendiente", "pendiente"], "media", "lote homogeneo"));
// caso especial adicional: todosIguales + pendiente, sin bloqueado -> "lote en espera"
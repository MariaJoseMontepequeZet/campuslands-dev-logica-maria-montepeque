// resolucion de casos combinada para paracaidismo
function contarPorCategoria(items) {
  const conteos = { bloqueado: 0, pendiente: 0, aprobado: 0 };
  for (const item of items) {
    if (conteos[item] !== undefined) conteos[item]++;
  }
  return conteos;
}

function calcularProporcionRiesgo(conteos, total) {
  if (total === 0) return 0;
  return (conteos.bloqueado + conteos.pendiente) / total;
}

function resolverCasoCombinado(items, prioridad, regla) {
  if (!Array.isArray(items) || items.length === 0) {
    return { veredicto: "caso sin datos", factores: [], motivo: "no hay items para resolver el caso." };
  }

  const conteos = contarPorCategoria(items);
  const totalValidos = conteos.bloqueado + conteos.pendiente + conteos.aprobado;

  if (totalValidos === 0) {
    return { veredicto: "caso sin datos", factores: [], motivo: "ningun item coincide con estados conocidos." };
  }

  const reglaMinuscula = typeof regla === "string" ? regla.toLowerCase() : "";
  const reglaPideCierre = reglaMinuscula.includes("cerrar caso");
  const proporcionRiesgo = calcularProporcionRiesgo(conteos, totalValidos);

  const factores = [];

  // caso especial: multiples bloqueos escala el caso sin importar prioridad
  if (conteos.bloqueado >= 2) {
    factores.push("multiples bloqueos detectados (2 o mas).");
    return { veredicto: "caso critico", factores, motivo: "la cantidad de bloqueados por si sola escala el caso a critico." };
  }

  // caso critico por proporcion de riesgo + prioridad alta
  if (proporcionRiesgo >= 0.5 && prioridad === "alta") {
    factores.push(`proporcion de riesgo ${(proporcionRiesgo * 100).toFixed(0)}% con prioridad alta.`);
    return { veredicto: "caso critico", factores, motivo: "la mitad o mas del lote esta en riesgo y la prioridad es alta." };
  }

  // instruccion explicita de cierre, solo valida si no hay bloqueados
  if (reglaPideCierre && conteos.bloqueado === 0) {
    factores.push('la regla pide "cerrar caso" y no hay bloqueados.');
    return { veredicto: "caso cerrado", factores, motivo: "la instruccion explicita de cierre se aplica porque no hay bloqueados que la contradigan." };
  }

  if (conteos.bloqueado > 0) {
    factores.push("hay al menos un bloqueado, sin cumplir condiciones de escalamiento.");
    return { veredicto: "caso en revision", factores, motivo: "hay bloqueados pero no se cumplen las condiciones para escalar a critico." };
  }

  if (conteos.pendiente > 0) {
    factores.push("hay pendientes sin bloqueados.");
    return { veredicto: "caso pendiente", factores, motivo: "no hay bloqueados, pero existen pendientes por resolver." };
  }

  factores.push("todos los items estan aprobados.");
  return { veredicto: "caso cerrado", factores, motivo: "todos los items estan aprobados, no requiere accion." };
}

// pruebas
console.log(resolverCasoCombinado(["aprobado", "pendiente", "bloqueado"], "alta", "revisar bloqueados primero"));
// caso normal: proporcion riesgo 2/3 (67%) + prioridad alta -> caso critico

console.log(resolverCasoCombinado([], "alta", "revisar bloqueados primero"));
// caso borde: { veredicto: 'caso sin datos', factores: [], motivo: 'no hay items para resolver el caso.' }

console.log(resolverCasoCombinado(["bloqueado", "bloqueado", "aprobado"], "media", "revisar multiples bloqueos"));
// caso especial: 2 bloqueados -> caso critico directo, sin importar prioridad media

console.log(resolverCasoCombinado(["pendiente", "aprobado"], "media", "cerrar caso ya que no hay riesgo real"));
// caso especial: regla pide cerrar caso, sin bloqueados -> caso cerrado, aunque haya un pendiente
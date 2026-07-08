// comparacion de opciones combinada para pingpong
const ORDEN_DESEMPATE = ["bloqueado", "pendiente", "aprobado"];

function contarPorCategoria(items) {
  const conteos = { bloqueado: 0, pendiente: 0, aprobado: 0 };
  for (const item of items) {
    if (conteos[item] !== undefined) conteos[item]++;
  }
  return conteos;
}

function hayEmpateEntreDosOMas(conteos) {
  const max = Math.max(conteos.bloqueado, conteos.pendiente, conteos.aprobado);
  if (max === 0) return false;
  const categoriasConMax = ORDEN_DESEMPATE.filter((c) => conteos[c] === max);
  return categoriasConMax.length >= 2;
}

function extraerGanadorForzado(regla) {
  if (typeof regla !== "string") return null;
  const reglaMinuscula = regla.toLowerCase();
  if (!reglaMinuscula.includes("forzar ganador")) return null;
  return ORDEN_DESEMPATE.find((estado) => reglaMinuscula.includes(estado)) ?? null;
}

function compararOpcionesCombinado(items, prioridad, regla) {
  if (!Array.isArray(items) || items.length === 0) {
    return { conteos: {}, ganador: null, empateDetectado: false, motivo: "no hay items para comparar." };
  }

  const conteos = contarPorCategoria(items);
  const totalValidos = conteos.bloqueado + conteos.pendiente + conteos.aprobado;

  if (totalValidos === 0) {
    return { conteos, ganador: null, empateDetectado: false, motivo: "ningun item coincide con categorias conocidas." };
  }

  const ganadorForzado = extraerGanadorForzado(regla);
  if (ganadorForzado) {
    return {
      conteos,
      ganador: ganadorForzado,
      empateDetectado: false,
      motivo: `la regla forzo explicitamente a "${ganadorForzado}" como ganador, sin importar los conteos.`,
    };
  }

  const empateDetectado = hayEmpateEntreDosOMas(conteos);

  if (empateDetectado && prioridad !== "alta") {
    return {
      conteos,
      ganador: null,
      empateDetectado: true,
      motivo: "hay empate entre dos o mas categorias y la prioridad no es alta, no se resuelve automaticamente.",
    };
  }

  let ganador = null;
  let maxConteo = -1;
  for (const categoria of ORDEN_DESEMPATE) {
    if (conteos[categoria] > maxConteo) {
      maxConteo = conteos[categoria];
      ganador = categoria;
    }
  }

  return {
    conteos,
    ganador,
    empateDetectado,
    motivo: empateDetectado
      ? `empate detectado, pero la prioridad alta activa el desempate automatico por mayor riesgo, ganador "${ganador}".`
      : `la categoria "${ganador}" predomina con ${maxConteo} item(s).`,
  };
}

// pruebas
console.log(compararOpcionesCombinado(["aprobado", "pendiente", "bloqueado"], "alta", "revisar bloqueados primero"));
// caso normal: empate 1-1-1, prioridad alta -> desempate automatico, ganador "bloqueado", empateDetectado true

console.log(compararOpcionesCombinado([], "alta", "revisar bloqueados primero"));
// caso borde: { conteos: {}, ganador: null, empateDetectado: false, motivo: 'no hay items para comparar.' }

console.log(compararOpcionesCombinado(["aprobado", "pendiente"], "media", "comparar sin forzar"));
// caso especial: empate 1-1, prioridad no alta -> ganador null, empateDetectado true, sin resolver

console.log(compararOpcionesCombinado(["aprobado", "aprobado"], "media", "forzar ganador bloqueado"));
// caso especial: la regla fuerza "bloqueado" como ganador aunque no aparezca ni una vez en items
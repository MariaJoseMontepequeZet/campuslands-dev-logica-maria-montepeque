// comparacion de opciones para pingpong (conteo y comparacion por categoria)
const ORDEN_DESEMPATE = ["bloqueado", "pendiente", "aprobado"];

function compararOpciones(items, prioridad, regla) {
  if (!Array.isArray(items) || items.length === 0) {
    return { conteos: {}, ganador: null, motivo: "no hay items para comparar." };
  }

  const conteos = { bloqueado: 0, pendiente: 0, aprobado: 0 };

  for (let i = 0; i < items.length; i++) {
    const item = items[i];
    if (conteos[item] !== undefined) {
      conteos[item]++;
    }
  }

  let ganador = null;
  let maxConteo = -1;

  for (const categoria of ORDEN_DESEMPATE) {
    if (conteos[categoria] > maxConteo) {
      maxConteo = conteos[categoria];
      ganador = categoria;
    }
  }

  if (maxConteo === 0) {
    return { conteos, ganador: null, motivo: "ningun item coincide con categorias conocidas." };
  }

  return {
    conteos,
    ganador,
    motivo: `la categoria "${ganador}" predomina con ${maxConteo} item(s); en caso de empate se prioriza el mayor riesgo.`,
  };
}

// pruebas
console.log(compararOpciones(["aprobado", "pendiente", "bloqueado"], "alta", "revisar bloqueados primero"));
// caso normal: empate 1-1-1, ganador "bloqueado" por desempate de riesgo

console.log(compararOpciones([], "alta", "revisar bloqueados primero"));
// caso borde: { conteos: {}, ganador: null, motivo: 'no hay items para comparar.' }

console.log(compararOpciones(["aprobado", "aprobado", "pendiente"], "media", "comparar categorias"));
// caso borde: aprobado gana 2 contra 1
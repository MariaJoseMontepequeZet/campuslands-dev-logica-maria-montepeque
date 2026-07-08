// matrices simples combinadas para animacion 3D
const ESTADOS_VALIDOS = ["aprobado", "pendiente", "bloqueado"];

function contarFila(fila) {
  const conteo = { bloqueado: 0, pendiente: 0, aprobado: 0 };
  for (const estado of fila) {
    if (conteo[estado] !== undefined) conteo[estado]++;
  }
  return conteo;
}

function detectarColumnasCriticas(matriz) {
  const filasValidas = matriz.filter((f) => Array.isArray(f) && f.length > 0);
  if (filasValidas.length === 0) return [];

  const maxColumnas = Math.max(...filasValidas.map((f) => f.length));
  const columnasCriticas = [];

  for (let c = 0; c < maxColumnas; c++) {
    const todasBloqueadas = filasValidas.every((fila) => fila[c] === "bloqueado");
    if (todasBloqueadas) columnasCriticas.push(c);
  }
  return columnasCriticas;
}

function procesarMatrizCombinado(matriz, prioridad, regla) {
  if (!Array.isArray(matriz) || matriz.length === 0) {
    return { resultadoPorFila: [], columnasCriticas: [], motivo: "no hay matriz para procesar." };
  }

  const reglaMinuscula = typeof regla === "string" ? regla.toLowerCase() : "";
  const reglaIgnoraFilasCortas = reglaMinuscula.includes("ignorar filas cortas");
  const columnasCriticas = detectarColumnasCriticas(matriz);
  const prioridadAlta = prioridad === "alta";

  const resultadoPorFila = [];

  for (let f = 0; f < matriz.length; f++) {
    const fila = matriz[f];

    if (reglaIgnoraFilasCortas && (!Array.isArray(fila) || fila.length < 2)) {
      continue; // se omite del resultado
    }

    if (!Array.isArray(fila) || fila.length === 0) {
      resultadoPorFila.push({ fila: f, conteo: { bloqueado: 0, pendiente: 0, aprobado: 0 }, accion: "fila sin datos validos" });
      continue;
    }

    const conteo = contarFila(fila);
    const filaTieneColumnaCritica = columnasCriticas.some((c) => fila[c] === "bloqueado");

    let accion;
    if (conteo.bloqueado > 0 && filaTieneColumnaCritica && prioridadAlta) {
      accion = "detener animacion";
    } else if (conteo.bloqueado > 0) {
      accion = "revisar fila";
    } else if (conteo.pendiente > 0) {
      accion = "monitorear fila";
    } else if (conteo.aprobado > 0) {
      accion = "fila lista";
    } else {
      accion = "fila sin datos validos";
    }

    resultadoPorFila.push({ fila: f, conteo, accion });
  }

  return {
    resultadoPorFila,
    columnasCriticas,
    motivo: columnasCriticas.length > 0
      ? `se detectaron ${columnasCriticas.length} columna(s) con bloqueo sistemico en todas las filas.`
      : "no se detectaron columnas con bloqueo sistemico.",
  };
}

// pruebas
console.log(procesarMatrizCombinado(
  [["bloqueado", "pendiente"], ["bloqueado", "aprobado"]],
  "alta",
  "revisar bloqueados primero"
));
// caso normal: columna 0 es critica (bloqueado en todas las filas), prioridad alta -> ambas filas "detener animacion"

console.log(procesarMatrizCombinado([], "alta", "revisar bloqueados primero"));
// caso borde: { resultadoPorFila: [], columnasCriticas: [], motivo: 'no hay matriz para procesar.' }

console.log(procesarMatrizCombinado(
  [["aprobado"], ["bloqueado", "pendiente", "aprobado"]],
  "media",
  "ignorar filas cortas del reporte"
));
// caso especial: fila 0 tiene 1 elemento -> se ignora por la regla; solo se procesa fila 1
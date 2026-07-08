// matrices simples para animacion 3D (capas y frames)
const ESTADOS_VALIDOS = ["aprobado", "pendiente", "bloqueado"];

function procesarMatriz(matriz, prioridad, regla) {
  if (!Array.isArray(matriz) || matriz.length === 0) {
    return { resultadoPorFila: [], totalGeneral: { bloqueado: 0, pendiente: 0, aprobado: 0 }, motivo: "no hay matriz para procesar." };
  }

  const resultadoPorFila = [];
  const totalGeneral = { bloqueado: 0, pendiente: 0, aprobado: 0 };

  for (let f = 0; f < matriz.length; f++) {
    const fila = matriz[f];
    const conteoFila = { bloqueado: 0, pendiente: 0, aprobado: 0 };

    if (!Array.isArray(fila) || fila.length === 0) {
      resultadoPorFila.push({ fila: f, conteo: conteoFila, accion: "fila sin datos validos" });
      continue;
    }

    for (let c = 0; c < fila.length; c++) {
      const estado = fila[c];
      if (ESTADOS_VALIDOS.includes(estado)) {
        conteoFila[estado]++;
        totalGeneral[estado]++;
      }
    }

    let accion;
    if (conteoFila.bloqueado > 0) {
      accion = "revisar fila";
    } else if (conteoFila.pendiente > 0) {
      accion = "monitorear fila";
    } else if (conteoFila.aprobado > 0) {
      accion = "fila lista";
    } else {
      accion = "fila sin datos validos";
    }

    resultadoPorFila.push({ fila: f, conteo: conteoFila, accion });
  }

  return {
    resultadoPorFila,
    totalGeneral,
    motivo: "se recorrio la matriz fila por fila y columna por columna, acumulando conteos por estado.",
  };
}

// pruebas
console.log(procesarMatriz(
  [["aprobado", "pendiente", "bloqueado"], ["aprobado", "aprobado"]],
  "alta",
  "revisar bloqueados primero"
));
// caso normal: fila 0 -> revisar fila (1 bloqueado), fila 1 -> fila lista

console.log(procesarMatriz([], "alta", "revisar bloqueados primero"));
// caso borde: { resultadoPorFila: [], totalGeneral: { bloqueado: 0, pendiente: 0, aprobado: 0 }, motivo: 'no hay matriz para procesar.' }

console.log(procesarMatriz([[], ["pendiente", "pendiente"]], "media", "chequeo de filas"));
// caso borde: fila 0 vacia -> fila sin datos validos; fila 1 -> monitorear fila
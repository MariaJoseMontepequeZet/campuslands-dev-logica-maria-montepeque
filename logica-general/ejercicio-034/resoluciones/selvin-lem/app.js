// diagnostico de errores combinado para gestion de tatuajes
const ESTADOS_VALIDOS = ["aprobado", "pendiente", "bloqueado"];
const PRIORIDADES_VALIDAS = ["alta", "media", "baja"];

function detectarEstadoInvalido(items) {
  const errores = [];
  for (let i = 0; i < items.length; i++) {
    if (!ESTADOS_VALIDOS.includes(items[i])) {
      errores.push(`item en posicion ${i} ("${items[i]}") tiene estado invalido.`);
    }
  }
  return errores;
}

function detectarPrioridadInvalida(prioridad) {
  return PRIORIDADES_VALIDAS.includes(prioridad) ? [] : [`prioridad "${prioridad}" es invalida.`];
}

function detectarPatronAlternado(items) {
  if (items.length < 4) return false;
  const estadosUnicos = new Set(items);
  if (estadosUnicos.size !== 2) return false;
  for (let i = 1; i < items.length; i++) {
    if (items[i] === items[i - 1]) return false;
  }
  return true;
}

function diagnosticarErroresCombinado(items, prioridad, regla) {
  if (!Array.isArray(items) || items.length === 0) {
    return { errores: ["items vacio o invalido."], severidad: "alta", causaRaiz: "datos de entrada corruptos", motivo: "no hay items para diagnosticar." };
  }

  const erroresEstado = detectarEstadoInvalido(items);
  const erroresPrioridad = detectarPrioridadInvalida(prioridad);
  const errores = [...erroresEstado, ...erroresPrioridad];

  const reglaMinuscula = typeof regla === "string" ? regla.toLowerCase() : "";
  const reglaPideIgnorarPatron = reglaMinuscula.includes("ignorar patron");
  const patronAlternado = detectarPatronAlternado(items);

  if (patronAlternado && !reglaPideIgnorarPatron) {
    errores.push("se detecto un patron alternado sospechoso (posibles datos generados automaticamente).");
  }

  if (errores.length === 0) {
    return { errores: [], severidad: "ninguna", causaRaiz: "ninguna", motivo: "no se detectaron errores en los datos." };
  }

  let severidad;
  let causaRaiz;

  if (erroresEstado.length > 0 && erroresPrioridad.length > 0) {
    severidad = "alta";
    causaRaiz = "doble falla simultanea: estado y prioridad invalidos a la vez";
  } else if (erroresEstado.length > 0) {
    severidad = "media";
    causaRaiz = "errores puntuales de estado";
  } else if (erroresPrioridad.length > 0) {
    severidad = "media";
    causaRaiz = "configuracion de prioridad incorrecta";
  } else {
    severidad = "media";
    causaRaiz = "patron de datos sospechoso";
  }

  return { errores, severidad, causaRaiz, motivo: "se combinaron varios detectores para determinar severidad y causa raiz." };
}

// pruebas
console.log(diagnosticarErroresCombinado(["aprobado", "pendiente", "bloqueado"], "alta", "revisar bloqueados primero"));
// caso normal: { errores: [], severidad: 'ninguna', causaRaiz: 'ninguna', motivo: 'no se detectaron errores en los datos.' }

console.log(diagnosticarErroresCombinado([], "alta", "revisar bloqueados primero"));
// caso borde: { errores: ['items vacio o invalido.'], severidad: 'alta', causaRaiz: 'datos de entrada corruptos', motivo: 'no hay items para diagnosticar.' }

console.log(diagnosticarErroresCombinado(["bloqueado", "pendiente", "bloqueado", "pendiente"], "media", "revisar patron"));
// caso especial: patron alternado detectado -> severidad media, causaRaiz "patron de datos sospechoso"

console.log(diagnosticarErroresCombinado(["bloqueado", "pendiente", "bloqueado", "pendiente"], "media", "ignorar patron detectado"));
// caso especial: mismo patron pero regla pide ignorarlo -> sin errores, severidad "ninguna"
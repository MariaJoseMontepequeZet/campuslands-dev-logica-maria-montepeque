// flujo paso a paso combinado para peliculas de ciencia ficcion
const ACCION_POR_ESTADO = { bloqueado: "detener flujo", pendiente: "esperar", aprobado: "avanzar" };

function accionPorEstado(estado) {
  return ACCION_POR_ESTADO[estado] ?? null;
}

function contarPendientesConsecutivos(items, desde) {
  let contador = 0;
  for (let i = desde; i < items.length && items[i] === "pendiente"; i++) {
    contador++;
  }
  return contador;
}

function ejecutarFlujoCombinado(items, prioridad, regla) {
  if (!Array.isArray(items) || items.length === 0) {
    return { pasos: [], reintentos: [], motivo: "no hay items para procesar el flujo." };
  }

  const reglaMinuscula = typeof regla === "string" ? regla.toLowerCase() : "";
  const reglaPermiteContinuar = reglaMinuscula.includes("continuar pese a bloqueo");

  const pasos = [];
  const reintentos = [];

  for (let i = 0; i < items.length; i++) {
    const item = items[i];
    const accion = accionPorEstado(item);

    if (!accion) {
      pasos.push({ paso: i + 1, item, accion: "omitir", detalle: "estado no reconocido." });
      continue;
    }

    if (item === "pendiente") {
      const consecutivos = contarPendientesConsecutivos(items, i);
      if (consecutivos >= 2) {
        reintentos.push({ desde: i, cantidad: consecutivos });
        pasos.push({ paso: i + 1, item, accion: "reintento agrupado", detalle: `${consecutivos} pendientes consecutivos detectados.` });
        i += consecutivos - 1;
        continue;
      }
    }

    pasos.push({ paso: i + 1, item, accion, detalle: `item procesado como ${item}.` });

    if (item === "bloqueado") {
      if (prioridad === "alta") {
        reintentos.length = 0;
        pasos.push({ paso: i + 2, item: null, accion: "flujo detenido", detalle: "prioridad alta: se descartan reintentos pendientes." });
        break;
      }
      if (!reglaPermiteContinuar) {
        pasos.push({ paso: i + 2, item: null, accion: "flujo detenido", detalle: "un bloqueado interrumpe el flujo." });
        break;
      }
      pasos.push({ paso: i + 2, item: null, accion: "continuar pese a bloqueo", detalle: "la regla permite seguir aunque haya bloqueo." });
    }
  }

  return { pasos, reintentos, motivo: "el flujo combina deteccion de reintentos agrupados con reglas especiales de prioridad y continuidad." };
}

// pruebas
console.log(ejecutarFlujoCombinado(["aprobado", "pendiente", "bloqueado"], "alta", "revisar bloqueados primero"));
// caso normal: avanzar -> esperar -> detener flujo (prioridad alta descarta reintentos) -> flujo detenido

console.log(ejecutarFlujoCombinado([], "alta", "revisar bloqueados primero"));
// caso borde: { pasos: [], reintentos: [], motivo: 'no hay items para procesar el flujo.' }

console.log(ejecutarFlujoCombinado(["pendiente", "pendiente", "bloqueado"], "media", "continuar pese a bloqueo si es necesario"));
// caso especial: 2 pendientes consecutivos -> reintento agrupado; bloqueado con regla que permite continuar -> no se detiene
// sistema de turnos combinado para taller de soldadura
const TURNOS = ["mañana", "tarde", "noche"];
const LIMITE_SATURACION = 2;

function turnoConMenosBloqueados(bloqueadosPorTurno) {
  return TURNOS.reduce((min, t) => (bloqueadosPorTurno[t] < bloqueadosPorTurno[min] ? t : min), TURNOS[0]);
}

function extraerTurnoFijo(regla) {
  if (typeof regla !== "string") return null;
  const reglaMinuscula = regla.toLowerCase();
  const match = reglaMinuscula.match(/fijar en (mañana|tarde|noche)/);
  return match ? match[1] : null;
}

function asignarTurnosCombinado(items, prioridad, regla) {
  if (!Array.isArray(items) || items.length === 0) {
    return { asignaciones: [], turnoActual: null, rebalanceos: [], motivo: "no hay items para asignar turnos." };
  }

  const turnoFijo = extraerTurnoFijo(regla);
  const asignaciones = [];
  const rebalanceos = [];
  const bloqueadosPorTurno = { "mañana": 0, "tarde": 0, "noche": 0 };

  for (let i = 0; i < items.length; i++) {
    const item = items[i];

    if (item === "bloqueado" && turnoFijo) {
      asignaciones.push({ item, turno: turnoFijo });
      bloqueadosPorTurno[turnoFijo]++;
      continue;
    }

    let turno = TURNOS[i % TURNOS.length];

    if (item === "bloqueado" && bloqueadosPorTurno[turno] >= LIMITE_SATURACION) {
      const turnoAlterno = turnoConMenosBloqueados(bloqueadosPorTurno);
      rebalanceos.push({ item: i, turnoOriginal: turno, turnoReasignado: turnoAlterno, motivo: `turno "${turno}" saturado (>= ${LIMITE_SATURACION} bloqueados).` });
      turno = turnoAlterno;
    }

    asignaciones.push({ item, turno });
    if (item === "bloqueado") bloqueadosPorTurno[turno]++;
  }

  let turnoActual = null;
  let maxBloqueados = 0;
  for (const t of TURNOS) {
    if (bloqueadosPorTurno[t] > maxBloqueados) {
      maxBloqueados = bloqueadosPorTurno[t];
      turnoActual = t;
    }
  }

  const motivo = turnoFijo
    ? `todos los bloqueados se fijaron en el turno "${turnoFijo}" por instruccion de la regla.`
    : rebalanceos.length > 0
      ? `se realizaron ${rebalanceos.length} rebalanceo(s) por saturacion de turno.`
      : "la rotacion se aplico sin necesidad de rebalanceos.";

  return { asignaciones, turnoActual, rebalanceos, motivo };
}

// pruebas
console.log(asignarTurnosCombinado(["aprobado", "pendiente", "bloqueado"], "alta", "revisar bloqueados primero"));
// caso normal: sin saturacion, un bloqueado en noche -> turnoActual "noche"

console.log(asignarTurnosCombinado([], "alta", "revisar bloqueados primero"));
// caso borde: { asignaciones: [], turnoActual: null, rebalanceos: [], motivo: 'no hay items para asignar turnos.' }

console.log(asignarTurnosCombinado(
  ["bloqueado", "aprobado", "pendiente", "bloqueado", "aprobado", "pendiente", "bloqueado"],
  "media",
  "distribuir carga"
));
// caso especial: items 0, 3 y 6 son bloqueados y caen todos en "mañana" -> el tercero se rebalancea a otro turno

console.log(asignarTurnosCombinado(["bloqueado", "bloqueado"], "media", "fijar en tarde"));
// caso especial: la regla fija todos los bloqueados en "tarde", sin importar la rotacion
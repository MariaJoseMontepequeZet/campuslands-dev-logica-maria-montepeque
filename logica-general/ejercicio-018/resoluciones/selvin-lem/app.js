// sistema de turnos para taller de soldadura
const TURNOS = ["mañana", "tarde", "noche"];

function asignarTurnos(items, prioridad, regla) {
  if (!Array.isArray(items) || items.length === 0) {
    return { asignaciones: [], turnoActual: null, motivo: "no hay items para asignar turnos." };
  }

  const asignaciones = [];
  const bloqueadosPorTurno = { "mañana": 0, "tarde": 0, "noche": 0 };

  for (let i = 0; i < items.length; i++) {
    const item = items[i];
    const turno = TURNOS[i % TURNOS.length];
    asignaciones.push({ item, turno });

    if (item === "bloqueado") {
      bloqueadosPorTurno[turno]++;
    }
  }

  let turnoActual = null;
  let maxBloqueados = 0;

  for (const turno of TURNOS) {
    if (bloqueadosPorTurno[turno] > maxBloqueados) {
      maxBloqueados = bloqueadosPorTurno[turno];
      turnoActual = turno;
    }
  }

  const motivo = turnoActual
    ? `el turno "${turnoActual}" tiene la mayor carga de bloqueados (${maxBloqueados}) y requiere prioridad de atencion.`
    : "ningun turno presenta items bloqueados.";

  return { asignaciones, turnoActual, motivo };
}

// pruebas
console.log(asignarTurnos(["aprobado", "pendiente", "bloqueado"], "alta", "revisar bloqueados primero"));
// caso normal: item 0 mañana, item 1 tarde, item 2 (bloqueado) noche -> turnoActual "noche"

console.log(asignarTurnos([], "alta", "revisar bloqueados primero"));
// caso borde: { asignaciones: [], turnoActual: null, motivo: 'no hay items para asignar turnos.' }

console.log(asignarTurnos(["bloqueado", "aprobado", "pendiente", "bloqueado"], "media", "distribuir carga"));
// caso borde: item 0 (bloqueado) mañana, item 3 (bloqueado) mañana -> turnoActual "mañana" con 2 bloqueados
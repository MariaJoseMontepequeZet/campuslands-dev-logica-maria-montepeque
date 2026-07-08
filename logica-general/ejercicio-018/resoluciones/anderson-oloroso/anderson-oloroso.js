const estacionesSoldadura = [
  { idEstacion: 1, tipo: "MIG", temperaturaActual: 180, piezasCompletadas: 4 },
  { idEstacion: 2, tipo: "TIG", temperaturaActual: 240, piezasCompletadas: 5 },
  { idEstacion: 3, tipo: "MIG", temperaturaActual: 150, piezasCompletadas: 3 }
];

function gestionarTurnoSoldadura(estaciones) {
  if (!estaciones || estaciones.length === 0) {
    return { accion: "Suspender turno", motivo: "No hay estaciones asignadas para el turno actual." };
  }

  let totalPiezasTurno = 0;
  let estacionesEnRiesgo = [];

  for (let i = 0; i < estaciones.length; i++) {
    const estacion = estaciones[i];
    totalPiezasTurno += estacion.piezasCompletadas;

    if (estacion.temperaturaActual > 200) {
      estacionesEnRiesgo.push(`Estación ${estacion.idEstacion} (${estacion.tipo})`);
    }
  }

  const requiereMantenimiento = estacionesEnRiesgo.length > 0;
  const cuotaAlcanzada = totalPiezasTurno >= 10;

  let estadoTurno = cuotaAlcanzada && !requiereMantenimiento;

  let detalleRiesgos = requiereMantenimiento
    ? `Estaciones sobrecalentadas: [${estacionesEnRiesgo.join(", ")}]`
    : "Todas las máquinas operan en rangos térmicos seguros";

  return {
    accion: estadoTurno
      ? `Turno Exitoso -> Producción Total: ${totalPiezasTurno} piezas. Proceder con el cierre estándar.`
      : `Turno con Novedades -> Producción Total: ${totalPiezasTurno} piezas. Aplicar protocolo de contingencia.`,

    motivo: requiereMantenimiento && !cuotaAlcanzada
      ? `Fallo crítico: Producción insuficiente para el turno y riesgo de avería por alta temperatura. ${detalleRiesgos}.`
      : requiereMantenimiento
        ? `Parada técnica obligatoria: Producción alcanzada, pero se detectaron estaciones sobrecalentadas. ${detalleRiesgos}.`
        : `Cuota no alcanzada: Las máquinas están seguras pero la producción quedó por debajo del umbral mínimo de 10 piezas.`
  };
}

console.log(gestionarTurnoSoldadura(estacionesSoldadura));
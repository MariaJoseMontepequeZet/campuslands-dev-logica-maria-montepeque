function calcularPresupuestoViaje(viaje) {
  const {
    destino,
    transporte,
    alojamiento,
    alimentacion,
    actividades
  } = viaje;

  const gastos = [
    transporte,
    alojamiento,
    alimentacion,
    actividades
  ];

  if (gastos.some(gasto => gasto < 0)) {
    return {
      estado: "Error",
      motivo: "Los gastos no pueden tener valores negativos."
    };
  }

  const costoExacto = gastos.reduce(
    (total, gasto) => total + gasto,
    0
  );

  const costoRedondeado = Math.round(costoExacto);

  const diferenciaRedondeo = Number(
    (costoRedondeado - costoExacto).toFixed(2)
  );

  const costoPorPersona = Number(
    (costoRedondeado / 2).toFixed(2)
  );

  return {
    destino,
    costoExacto: Number(costoExacto.toFixed(2)),
    costoRedondeado,
    diferenciaRedondeo,
    costoEstimadoPorPersona: costoPorPersona
  };
}

const viaje = {
  destino: "Paris",
  transporte: 450.75,
  alojamiento: 800.45,
  alimentacion: 320.30,
  actividades: 129.80
};

console.log(calcularPresupuestoViaje(viaje));
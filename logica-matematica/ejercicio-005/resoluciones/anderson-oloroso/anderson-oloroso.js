function evaluarTallerMecanico(vehiculos) {
  if (!Array.isArray(vehiculos) || vehiculos.length === 0) {
    return {
      estado: "Error",
      motivo: "No existen vehículos registrados en el taller."
    };
  }

  const vehiculosValidos = vehiculos.filter(vehiculo =>
    vehiculo.horasTrabajo >= 0 &&
    vehiculo.repuestos >= 0 &&
    vehiculo.prioridad >= 1 &&
    vehiculo.prioridad <= 5
  );

  if (vehiculosValidos.length === 0) {
    return {
      estado: "Error",
      motivo: "No existen vehículos con datos válidos."
    };
  }

  const vehiculoMenorTiempo = vehiculosValidos.reduce(
    (menor, vehiculo) =>
      vehiculo.horasTrabajo < menor.horasTrabajo
        ? vehiculo
        : menor
  );

  const vehiculosPendientes = vehiculosValidos.filter(
    vehiculo => vehiculo.horasTrabajo > 10
  );

  const promedioHoras = Number(
    (
      vehiculosValidos.reduce(
        (total, vehiculo) => total + vehiculo.horasTrabajo,
        0
      ) / vehiculosValidos.length
    ).toFixed(2)
  );

  return {
    totalVehiculos: vehiculosValidos.length,
    reparacionMasRapida: vehiculoMenorTiempo.vehiculo,
    minimoHorasTrabajo: vehiculoMenorTiempo.horasTrabajo,
    vehiculosPendientes: vehiculosPendientes.length,
    promedioHorasTrabajo: promedioHoras
  };
}

const vehiculos = [
  {
    vehiculo: "Toyota Corolla",
    horasTrabajo: 8,
    repuestos: 3,
    prioridad: 3
  },
  {
    vehiculo: "Mazda CX5",
    horasTrabajo: 15,
    repuestos: 5,
    prioridad: 5
  },
  {
    vehiculo: "Kia Rio",
    horasTrabajo: 5,
    repuestos: 2,
    prioridad: 2
  }
];

console.log(evaluarTallerMecanico(vehiculos));
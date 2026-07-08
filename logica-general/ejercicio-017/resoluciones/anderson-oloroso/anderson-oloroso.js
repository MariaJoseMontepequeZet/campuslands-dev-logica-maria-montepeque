const habitacionesPropuestas = [
  { nombre: "Sala Principal", area: 25, ventanas: 3 },
  { nombre: "Dormitorio A", area: 12, ventanas: 1 },
  { nombre: "Cocina", area: 15, ventanas: 2 },
  { nombre: "Baño", area: 5, ventanas: 0 }
];

function validarPlanoArquitectura(habitaciones) {
  if (!habitaciones || habitaciones.length === 0) {
    return { accion: "Rechazar plano", motivo: "El plano no contiene habitaciones registradas." };
  }

  let areaTotal = 0;
  let totalVentanas = 0;
  let habitacionesDeficientes = [];

  for (let i = 0; i < habitaciones.length; i++) {
    const hab = habitaciones[i];
    areaTotal += hab.area;
    totalVentanas += hab.ventanas;

    const ratioVentanaArea = hab.ventanas / hab.area;
    if (ratioVentanaArea < 0.1) {
      habitacionesDeficientes.push(hab.nombre);
    }
  }

  const cumpleAreaMax = areaTotal <= 60;
  const cumpleIluminacion = habitacionesDeficientes.length === 0;

  let estructuraValida = cumpleAreaMax && cumpleIluminacion;

  let detalleDeficiencias = habitacionesDeficientes.length > 0 
    ? `Habitaciones sin luz suficiente: [${habitacionesDeficientes.join(", ")}]`
    : "Todas las estancias cumplen iluminación";

  return {
    accion: estructuraValida
      ? `Aprobar Plano Técnico -> Área Total: ${areaTotal}m², Ventanas Totales: ${totalVentanas}`
      : `Rechazar Plano Técnico -> Área Total: ${areaTotal}m², Ventanas Totales: ${totalVentanas}`,

    motivo: !cumpleAreaMax && !cumpleIluminacion
      ? `Fuera de límites: El área excede la cota máxima permitida (60m²) y existen fallas de diseño. ${detalleDeficiencias}.`
      : !cumpleAreaMax
        ? `Fuera de límites: El área total construida excede la cota máxima permitida de 60m².`
        : `Fallo de diseño: No se cumple la norma de iluminación natural (mínimo 10% del área en ventanas). ${detalleDeficiencias}.`
  };
}

console.log(validarPlanoArquitectura(habitacionesPropuestas));
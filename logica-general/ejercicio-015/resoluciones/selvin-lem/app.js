// reglas de negocio para tarifas de dibujo digital
const TARIFA_BASE = { bloqueado: 50, pendiente: 20, aprobado: 0 };
const RECARGO_PRIORIDAD_ALTA = 0.2;
const LIMITE_PRESUPUESTO = 100;

function aplicarReglasNegocio(items, prioridad, regla) {
  if (!Array.isArray(items) || items.length === 0) {
    return { 
        cargosPorItem: [], 
        totalCosto: 0, 
        accion: "sin datos", 
        motivo: "no hay items para calcular tarifas." };
  }

  const cargosPorItem = [];
  let totalCosto = 0;

  for (let i = 0; i < items.length; i++) {
    const item = items[i];
    const tarifa = TARIFA_BASE[item] ?? 0;
    cargosPorItem.push({ item, tarifa });
    totalCosto += tarifa;
  }

  if (prioridad === "alta") {
    totalCosto += totalCosto * RECARGO_PRIORIDAD_ALTA;
  }

  const accion = totalCosto > LIMITE_PRESUPUESTO
    ? "requiere aprobacion de presupuesto"
    : "dentro de presupuesto normal";

  return {
    cargosPorItem,
    totalCosto,
    accion,
    motivo: `se acumulo tarifa por estado y se aplico recargo del 20% si la prioridad es alta.`,
  };
}

// pruebas
console.log(aplicarReglasNegocio(["aprobado", "pendiente", "bloqueado"], "alta", "revisar bloqueados primero"));
// caso normal: tarifas 0+20+50=70, recargo alta 20% -> totalCosto 84, accion "dentro de presupuesto normal"

console.log(aplicarReglasNegocio([], "alta", "revisar bloqueados primero"));
// caso borde: { cargosPorItem: [], totalCosto: 0, accion: 'sin datos', motivo: 'no hay items para calcular tarifas.' }

console.log(aplicarReglasNegocio(["bloqueado", "bloqueado", "pendiente"], "alta", "presupuesto alto"));
// caso borde: tarifas 50+50+20=120, recargo alta 20% -> totalCosto 144, accion "requiere aprobacion de presupuesto"
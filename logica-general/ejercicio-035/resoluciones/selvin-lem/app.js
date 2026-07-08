// reglas de negocio combinadas para tarifas de dibujo digital
const TARIFA_BASE = { bloqueado: 50, pendiente: 20, aprobado: 0 };
const RECARGO_PRIORIDAD_ALTA = 0.2;
const DESCUENTO_VOLUMEN = 0.1;
const LIMITE_PRESUPUESTO = 100;
const TOPE_MAXIMO = 150;

function tarifaBase(estado) {
  return TARIFA_BASE[estado] ?? 0;
}

function calcularSubtotal(items) {
  return items.reduce((total, item) => total + tarifaBase(item), 0);
}

function aplicarReglasNegocioCombinado(items, prioridad, regla) {
  if (!Array.isArray(items) || items.length === 0) {
    return { cargosPorItem: [], totalCosto: 0, descuentosAplicados: [], accion: "sin datos", motivo: "no hay items para calcular tarifas." };
  }

  const cargosPorItem = items.map((item) => ({ item, tarifa: tarifaBase(item) }));
  let totalCosto = calcularSubtotal(items);
  const descuentosAplicados = [];

  const volumenAlto = items.length >= 5;
  if (volumenAlto) {
    const descuento = totalCosto * DESCUENTO_VOLUMEN;
    totalCosto -= descuento;
    descuentosAplicados.push(`descuento por volumen (10%) aplicado sobre ${items.length} items: -${descuento.toFixed(2)}.`);
  }

  if (prioridad === "alta") {
    const recargo = totalCosto * RECARGO_PRIORIDAD_ALTA;
    totalCosto += recargo;
    descuentosAplicados.push(`recargo por prioridad alta (20%) aplicado sobre el total tras descuento: +${recargo.toFixed(2)}.`);
  }

  const reglaMinuscula = typeof regla === "string" ? regla.toLowerCase() : "";
  const reglaPideTopeMaximo = reglaMinuscula.includes("tope maximo");
  if (reglaPideTopeMaximo && totalCosto > TOPE_MAXIMO) {
    descuentosAplicados.push(`tope maximo aplicado: se recorto de ${totalCosto.toFixed(2)} a ${TOPE_MAXIMO}.`);
    totalCosto = TOPE_MAXIMO;
  }

  const accion = totalCosto > LIMITE_PRESUPUESTO
    ? "requiere aprobacion de presupuesto"
    : "dentro de presupuesto normal";

  return {
    cargosPorItem,
    totalCosto: Number(totalCosto.toFixed(2)),
    descuentosAplicados,
    accion,
    motivo: "se calculo tarifa base y se aplicaron ajustes en orden: descuento por volumen, recargo por prioridad, tope maximo si aplica.",
  };
}

// pruebas
console.log(aplicarReglasNegocioCombinado(["aprobado", "pendiente", "bloqueado"], "alta", "revisar bloqueados primero"));
// caso normal: subtotal 70, sin volumen alto (3 items), recargo alta 20% -> totalCosto 84

console.log(aplicarReglasNegocioCombinado([], "alta", "revisar bloqueados primero"));
// caso borde: { cargosPorItem: [], totalCosto: 0, descuentosAplicados: [], accion: 'sin datos', motivo: '...' }

console.log(aplicarReglasNegocioCombinado(
  ["bloqueado", "bloqueado", "bloqueado", "pendiente", "pendiente"],
  "alta",
  "aplicar tope maximo al total"
));
// caso especial: subtotal 190, volumen alto (5 items) -> descuento 10% = 171, recargo alta 20% = 205.2, tope maximo -> totalCosto 150
// inventario logico para formulas quimicas (stock con entradas y transferencias)
function procesarInventario(items, prioridad, regla) {
  if (!Array.isArray(items) || items.length === 0) {
    return { stock: { aprobado: 0, pendiente: 0, bloqueado: 0 }, movimientos: [], motivo: "no hay items para procesar el inventario." };
  }

  const stock = { aprobado: 0, pendiente: 0, bloqueado: 0 };
  const movimientos = [];

  for (let i = 0; i < items.length; i++) {
    const item = items[i];

    if (item === "aprobado") {
      stock.aprobado++;
      movimientos.push({ paso: i, tipo: "entrada", estado: "aprobado" });
    } else if (item === "pendiente") {
      stock.pendiente++;
      movimientos.push({ paso: i, tipo: "entrada", estado: "pendiente" });
    } else if (item === "bloqueado") {
      if (stock.pendiente > 0) {
        stock.pendiente--;
        stock.bloqueado++;
        movimientos.push({ paso: i, tipo: "transferencia", de: "pendiente", a: "bloqueado" });
      } else {
        movimientos.push({ paso: i, tipo: "invalido", detalle: "no hay pendiente disponible para transferir a bloqueado." });
      }
    } else {
      movimientos.push({ paso: i, tipo: "invalido", detalle: `estado "${item}" no reconocido.` });
    }
  }

  return {
    stock,
    movimientos,
    motivo: "el stock se actualizo por entradas directas y transferencias de pendiente a bloqueado.",
  };
}

// pruebas
console.log(procesarInventario(["aprobado", "pendiente", "bloqueado"], "alta", "revisar bloqueados primero"));
// caso normal: pendiente entra, luego se transfiere a bloqueado -> stock { aprobado: 1, pendiente: 0, bloqueado: 1 }

console.log(procesarInventario([], "alta", "revisar bloqueados primero"));
// caso borde: { stock: { aprobado: 0, pendiente: 0, bloqueado: 0 }, movimientos: [], motivo: 'no hay items para procesar el inventario.' }

console.log(procesarInventario(["bloqueado", "bloqueado"], "media", "transferir sin stock previo"));
// caso borde: sin pendiente disponible -> ambos movimientos quedan como "invalido"
// inventario logico combinado para formulas quimicas
const CAPACIDAD_MAXIMA = 3;

function registrarEntrada(stock, estado) {
  if (stock[estado] >= CAPACIDAD_MAXIMA) return false;
  stock[estado]++;
  return true;
}

function transferir(stock, de, a) {
  if (stock[de] <= 0) return false;
  if (stock[a] >= CAPACIDAD_MAXIMA) return false;
  stock[de]--;
  stock[a]++;
  return true;
}

function liberarReversaEmergencia(stock) {
  if (stock.bloqueado <= 0) return false;
  stock.bloqueado--;
  stock.pendiente++;
  return true;
}

function procesarInventarioCombinado(items, prioridad, regla) {
  if (!Array.isArray(items) || items.length === 0) {
    return { stock: { aprobado: 0, pendiente: 0, bloqueado: 0 }, movimientos: [], alertas: [], motivo: "no hay items para procesar el inventario." };
  }

  const reglaMinuscula = typeof regla === "string" ? regla.toLowerCase() : "";
  const reglaPideReiniciar = reglaMinuscula.includes("reiniciar stock");

  const stock = { aprobado: 0, pendiente: 0, bloqueado: 0 };
  const movimientos = [];
  const alertas = [];

  for (let i = 0; i < items.length; i++) {
    const item = items[i];

    if (item === "aprobado" || item === "pendiente") {
      const exito = registrarEntrada(stock, item);
      movimientos.push(exito
        ? { paso: i, tipo: "entrada", estado: item }
        : { paso: i, tipo: "invalido", detalle: `capacidad maxima alcanzada para "${item}".` });
      continue;
    }

    if (item === "bloqueado") {
      if (stock.bloqueado >= CAPACIDAD_MAXIMA && prioridad === "alta") {
        const liberado = liberarReversaEmergencia(stock);
        if (liberado) {
          alertas.push(`reversa de emergencia: se libero 1 bloqueado a pendiente para hacer espacio (prioridad alta).`);
        }
      }

      const exito = transferir(stock, "pendiente", "bloqueado");
      movimientos.push(exito
        ? { paso: i, tipo: "transferencia", de: "pendiente", a: "bloqueado" }
        : { paso: i, tipo: "invalido", detalle: "no hay pendiente disponible o capacidad maxima alcanzada." });
      continue;
    }

    movimientos.push({ paso: i, tipo: "invalido", detalle: `estado "${item}" no reconocido.` });
  }

  return {
    stock,
    movimientos,
    alertas,
    motivo: reglaPideReiniciar
      ? "el stock inicio en cero segun la instruccion 'reiniciar stock' de la regla."
      : "el stock se actualizo respetando capacidad maxima por estado y reversas de emergencia si aplicaron.",
  };
}

// pruebas
console.log(procesarInventarioCombinado(["aprobado", "pendiente", "bloqueado"], "alta", "revisar bloqueados primero"));
// caso normal: sin saturacion -> stock { aprobado: 1, pendiente: 0, bloqueado: 1 }

console.log(procesarInventarioCombinado([], "alta", "revisar bloqueados primero"));
// caso borde: { stock: { aprobado: 0, pendiente: 0, bloqueado: 0 }, movimientos: [], alertas: [], motivo: '...' }

console.log(procesarInventarioCombinado(
  ["pendiente", "pendiente", "pendiente", "pendiente", "bloqueado", "bloqueado", "bloqueado", "bloqueado"],
  "alta",
  "gestionar saturacion"
));
// caso especial: 4to pendiente rechazado por capacidad; al 4to bloqueado, con bloqueado ya en 3, se activa reversa de emergencia
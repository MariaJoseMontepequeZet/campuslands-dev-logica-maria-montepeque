// lectura de instrucciones para viajes y turismo
const PALABRAS_CLAVE = ["bloqueado", "pendiente", "aprobado"];

function interpretarRegla(items, prioridad, regla) {
  if (typeof regla !== "string" || regla.trim() === "") {
    return { instruccionInterpretada: null, accion: "sin accion", motivo: "la regla esta vacia o no es texto valido." };
  }

  const reglaMinuscula = regla.toLowerCase();
  const palabraEncontrada = PALABRAS_CLAVE.find((palabra) => reglaMinuscula.includes(palabra));

  if (!palabraEncontrada) {
    return { instruccionInterpretada: regla, accion: "instruccion no reconocida", motivo: "la regla no menciona ningun estado conocido." };
  }

  if (!Array.isArray(items) || items.length === 0) {
    return { instruccionInterpretada: regla, accion: "sin datos", motivo: "la regla se interpreto pero no hay items para aplicarla." };
  }

  const itemsCoincidentes = items.filter((item) => item === palabraEncontrada);

  return {
    instruccionInterpretada: regla,
    accion: itemsCoincidentes.length > 0
      ? `aplicar sobre ${itemsCoincidentes.length} item(s) en estado ${palabraEncontrada}`
      : `ningun item en estado ${palabraEncontrada}`,
    motivo: `la regla pide enfocarse en items con estado "${palabraEncontrada}".`,
  };
}

// pruebas
console.log(interpretarRegla(["aprobado", "pendiente", "bloqueado"], "alta", "revisar bloqueados primero"));
// caso normal: accion sobre 1 item en estado bloqueado

console.log(interpretarRegla(["aprobado", "pendiente"], "alta", ""));
// caso borde: regla vacia -> sin accion

console.log(interpretarRegla(["aprobado", "aprobado"], "media", "verificar cronograma de vuelos"));
// caso borde: regla sin palabra clave conocida -> instruccion no reconocida
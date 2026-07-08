// lectura de instrucciones combinada para viajes y turismo
const PALABRAS_CLAVE = ["bloqueado", "pendiente", "aprobado"];

function extraerPalabrasClave(regla) {
  if (typeof regla !== "string") return [];
  const reglaMinuscula = regla.toLowerCase();
  return PALABRAS_CLAVE.filter((palabra) => reglaMinuscula.includes(palabra));
}

function extraerConector(regla) {
  if (typeof regla !== "string") return null;
  const reglaMinuscula = regla.toLowerCase();
  if (/\by\b/.test(reglaMinuscula)) return "y";
  if (/\bo\b/.test(reglaMinuscula)) return "o";
  return null;
}

function interpretarReglaCombinado(items, prioridad, regla) {
  if (typeof regla !== "string" || regla.trim() === "") {
    return { instruccionesDetectadas: [], accionFinal: "sin accion", motivo: "la regla esta vacia o no es texto valido." };
  }

  const palabras = extraerPalabrasClave(regla);

  if (palabras.length === 0) {
    return { instruccionesDetectadas: [], accionFinal: "instruccion no reconocida", motivo: "la regla no menciona ningun estado conocido." };
  }

  if (!Array.isArray(items) || items.length === 0) {
    return { instruccionesDetectadas: palabras, accionFinal: "sin datos", motivo: "la regla se interpreto pero no hay items para aplicarla." };
  }

  const conector = extraerConector(regla);

  if (palabras.length >= 2 && conector === "y") {
    const todosPresentes = palabras.every((palabra) => items.includes(palabra));
    return {
      instruccionesDetectadas: palabras,
      accionFinal: todosPresentes ? `aplicar sobre estados combinados: ${palabras.join(" y ")}` : "instruccion incumplida",
      motivo: todosPresentes
        ? "todos los estados exigidos por el conector 'y' estan presentes en items."
        : "el conector 'y' exige que todos los estados mencionados esten presentes, pero falta al menos uno.",
    };
  }

  const algunoPresente = palabras.filter((palabra) => items.includes(palabra));
  return {
    instruccionesDetectadas: palabras,
    accionFinal: algunoPresente.length > 0
      ? `aplicar sobre estado(s) presente(s): ${algunoPresente.join(", ")}`
      : "ningun estado mencionado esta presente en items",
    motivo: palabras.length >= 2
      ? "conector 'o' (o implicito): basta con que uno de los estados mencionados este presente."
      : `la regla pide enfocarse en items con estado "${palabras[0]}".`,
  };
}

// pruebas
console.log(interpretarReglaCombinado(["aprobado", "pendiente", "bloqueado"], "alta", "revisar bloqueados primero"));
// caso normal: 1 palabra clave "bloqueado", presente -> aplicar sobre bloqueado

console.log(interpretarReglaCombinado(["aprobado", "pendiente"], "alta", ""));
// caso borde: regla vacia -> sin accion

console.log(interpretarReglaCombinado(["aprobado", "pendiente"], "media", "revisar bloqueado y pendiente"));
// caso especial: conector "y" con 2 palabras, falta "bloqueado" en items -> instruccion incumplida

console.log(interpretarReglaCombinado(["pendiente"], "media", "revisar bloqueado o pendiente"));
// caso especial: conector "o", basta con que "pendiente" este presente -> aplicar sobre pendiente
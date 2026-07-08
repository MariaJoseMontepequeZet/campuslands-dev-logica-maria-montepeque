// validacion de datos combinada para ranking de futbol sala
const ESTADOS_VALIDOS = ["aprobado", "pendiente", "bloqueado"];
const PRIORIDADES_VALIDAS = ["alta", "media", "baja"];

function validarDatosCombinado(items, prioridad, regla) {
  const errores = [];
  const advertencias = [];

  const itemsEsArregloValido = Array.isArray(items) && items.length > 0;
  if (!itemsEsArregloValido) {
    errores.push("items debe ser un arreglo no vacio.");
  }

  if (!PRIORIDADES_VALIDAS.includes(prioridad)) {
    errores.push(`prioridad "${prioridad}" no es valida.`);
  }

  if (typeof regla !== "string" || regla.trim() === "") {
    errores.push("regla debe ser un texto no vacio.");
  }

  if (itemsEsArregloValido) {
    items.forEach((item, i) => {
      if (!ESTADOS_VALIDOS.includes(item)) {
        errores.push(`item en posicion ${i} ("${item}") no es un estado valido.`);
      }
      if (i > 0 && items[i - 1] === item) {
        advertencias.push(`item "${item}" esta duplicado de forma consecutiva en las posiciones ${i - 1} y ${i}.`);
      }
    });

    const hayRiesgo = items.includes("bloqueado") || items.includes("pendiente");
    if (prioridad === "alta" && !hayRiesgo) {
      advertencias.push("prioridad alta declarada pero no hay items en riesgo (bloqueado/pendiente).");
    }
  }

  if (typeof regla === "string" && regla.trim() !== "") {
    const reglaMinuscula = regla.toLowerCase();
    const mencionaEstado = ESTADOS_VALIDOS.some((estado) => reglaMinuscula.includes(estado));
    if (!mencionaEstado) {
      advertencias.push("la regla no menciona ningun estado conocido, se aplicara sin contexto claro.");
    }
  }

  return {
    valido: errores.length === 0,
    errores,
    advertencias,
    motivo: errores.length === 0
      ? (advertencias.length === 0
        ? "los datos cumplen todas las reglas sin casos especiales."
        : "los datos son validos pero se detectaron casos especiales a revisar.")
      : "los datos no cumplen una o mas reglas de validacion.",
  };
}

// pruebas
console.log(validarDatosCombinado(["aprobado", "pendiente", "bloqueado"], "alta", "revisar bloqueados primero"));
// caso normal: { valido: true, errores: [], advertencias: [], motivo: 'los datos cumplen todas las reglas sin casos especiales.' }

console.log(validarDatosCombinado([], "media", ""));
// caso borde: dos errores, valido false

console.log(validarDatosCombinado(["aprobado", "aprobado", "aprobado"], "alta", "chequear jugadores"));
// caso especial: duplicados consecutivos + prioridad alta sin riesgo + regla sin estado mencionado -> valido true, tres advertencias
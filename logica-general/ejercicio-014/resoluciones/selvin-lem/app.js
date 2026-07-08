// diagnostico de errores para gestion de tatuajes
const ESTADOS_VALIDOS = ["aprobado", "pendiente", "bloqueado"];
const PRIORIDADES_VALIDAS = ["alta", "media", "baja"];

function diagnosticarErrores(items, prioridad, regla) {
  if (!Array.isArray(items) || items.length === 0) {
    return { 
        errores: ["items vacio o invalido."], 
        causaRaiz: "datos de entrada corruptos", 
        motivo: "no hay items para diagnosticar." };
  }

  const errores = [];
  let contadorEstadoInvalido = 0;

  for (let i = 0; i < items.length; i++) {
    const item = items[i];
    if (!ESTADOS_VALIDOS.includes(item)) {
      errores.push(`item en posicion ${i} ("${item}") tiene estado invalido.`);
      contadorEstadoInvalido++;
    }
  }

  const prioridadInvalida = !PRIORIDADES_VALIDAS.includes(prioridad);
  if (prioridadInvalida) {
    errores.push(`prioridad "${prioridad}" es invalida.`);
  }

  if (errores.length === 0) {
    return { 
        errores: [], 
        causaRaiz: "ninguna", 
        motivo: "no se detectaron errores en los datos." 
    };
  }

  let causaRaiz;
  if (contadorEstadoInvalido > 0 && contadorEstadoInvalido >= items.length / 2) {
    causaRaiz = "datos de entrada corruptos";
  } else if (contadorEstadoInvalido === 0 && prioridadInvalida) {
    causaRaiz = "configuracion de prioridad incorrecta";
  } else {
    causaRaiz = "errores puntuales de estado";
  }

  return {
    errores,
    causaRaiz,
    motivo: "se acumularon errores por cada item o campo invalido y se determino la causa raiz segun su frecuencia.",
  };
}

// pruebas
console.log(diagnosticarErrores(["aprobado", "pendiente", "bloqueado"], "alta", "revisar bloqueados primero"));
// caso normal: { errores: [], causaRaiz: 'ninguna', motivo: 'no se detectaron errores en los datos.' }

console.log(diagnosticarErrores([], "alta", "revisar bloqueados primero"));
// caso borde: { errores: ['items vacio o invalido.'], causaRaiz: 'datos de entrada corruptos', motivo: 'no hay items para diagnosticar.' }

console.log(diagnosticarErrores(["tatuado", "cicatrizando", "aprobado"], "urgente", "revisar"));
// caso borde: 2 de 3 items invalidos + prioridad invalida -> causaRaiz "datos de entrada corruptos"
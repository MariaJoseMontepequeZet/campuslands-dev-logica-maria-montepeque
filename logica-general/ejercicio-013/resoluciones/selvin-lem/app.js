// resolucion de casos para paracaidismo (conteo + condicionales combinadas)
function resolverCaso(items, prioridad, regla) {
  if (!Array.isArray(items) || items.length === 0) {
    return { veredicto: "caso sin datos", detalle: {}, motivo: "no hay items para resolver el caso." };
  }

  const conteos = { bloqueado: 0, pendiente: 0, aprobado: 0 };

  for (let i = 0; i < items.length; i++) {
    const item = items[i];
    if (conteos[item] !== undefined) {
      conteos[item]++;
    }
  }

  const totalValidos = conteos.bloqueado + conteos.pendiente + conteos.aprobado;

  if (totalValidos === 0) {
    return { veredicto: "caso sin datos", detalle: conteos, motivo: "ningun item coincide con estados conocidos." };
  }

  let veredicto;
  let motivo;

  if (conteos.bloqueado > 0 && prioridad === "alta") {
    veredicto = "caso critico";
    motivo = "hay bloqueados y la prioridad alta exige resolucion inmediata.";
  } else if (conteos.bloqueado > 0) {
    veredicto = "caso en revision";
    motivo = "hay bloqueados pero la prioridad no es alta, se revisa sin urgencia extrema.";
  } else if (conteos.pendiente > 0) {
    veredicto = "caso pendiente";
    motivo = "no hay bloqueados, pero existen pendientes por resolver.";
  } else {
    veredicto = "caso cerrado";
    motivo = "todos los items estan aprobados, no requiere accion.";
  }

  return { veredicto, detalle: conteos, motivo };
}

// pruebas
console.log(resolverCaso(["aprobado", "pendiente", "bloqueado"], "alta", "revisar bloqueados primero"));
// caso normal: veredicto "caso critico"

console.log(resolverCaso([], "alta", "revisar bloqueados primero"));
// caso borde: veredicto "caso sin datos"

console.log(resolverCaso(["aprobado", "aprobado"], "media", "cerrar caso"));
// caso borde: veredicto "caso cerrado"
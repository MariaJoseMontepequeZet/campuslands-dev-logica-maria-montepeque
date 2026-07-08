const reactivosDisponibles = [
  { elemento: "H", cantidadAtomos: 5 },
  { elemento: "O", cantidadAtomos: 2 },
  { elemento: "C", cantidadAtomos: 1 }
];

function verificarSintesisAgua(inventario) {
  if (!inventario || inventario.length === 0) {
    return { accion: "Abortar proceso", motivo: "El inventario de reactivos está vacío." };
  }

  let atomosHidrogeno = 0;
  let atomosOxigeno = 0;

  for (let i = 0; i < inventario.length; i++) {
    const reactivo = inventario[i];
    if (reactivo.elemento === "H") {
      atomosHidrogeno = reactivo.cantidadAtomos;
    } else if (reactivo.elemento === "O") {
      atomosOxigeno = reactivo.cantidadAtomos;
    }
  }

  const moleculasPosiblesPorH = Math.floor(atomosHidrogeno / 2);
  const moleculasPosiblesPorO = Math.floor(atomosOxigeno / 1);

  const maxMoleculasAgua = Math.min(moleculasPosiblesPorH, moleculasPosiblesPorO);

  const puedeSintetizar = maxMoleculasAgua > 0;

  const sobranteH = atomosHidrogeno - (maxMoleculasAgua * 2);
  const sobranteO = atomosOxigeno - (maxMoleculasAgua * 1);

  return {
    accion: puedeSintetizar
      ? `Sintetizar -> ${maxMoleculasAgua} molécula(s) de Agua (H2O)`
      : "Rechazar síntesis -> Elementos insuficientes",

    motivo: puedeSintetizar
      ? `Reactivo limitante procesado con éxito. Sobrantes en almacén: [H: ${sobranteH}, O: ${sobranteO}].`
      : `No se cuenta con el ratio estricto de estequiometría (2:1). Átomos actuales: [H: ${atomosHidrogeno}, O: ${atomosOxigeno}].`
  };
}

console.log(verificarSintesisAgua(reactivosDisponibles));
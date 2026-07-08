function validarFormulaQuimica(formula) {
  const {
    nombre,
    elementos
  } = formula;

  if (
    !nombre ||
    !Array.isArray(elementos) ||
    elementos.length === 0
  ) {
    return {
      estado: "Error",
      motivo: "La fórmula debe contener un nombre y elementos registrados."
    };
  }

  let cantidadAtomos = 0;
  let masaMolecular = 0;

  for (const elemento of elementos) {
    const {
      simbolo,
      cantidad,
      masaAtomica
    } = elemento;

    if (
      cantidad <= 0 ||
      masaAtomica <= 0 ||
      !Number.isInteger(cantidad)
    ) {
      return {
        estado: "Error",
        motivo: "Las cantidades y masas atómicas deben ser valores positivos."
      };
    }

    cantidadAtomos += cantidad;
    masaMolecular += cantidad * masaAtomica;
  }

  const formulaValida = cantidadAtomos > 0 && masaMolecular > 0;

  return {
    formula: nombre,
    cantidadAtomos,
    masaMolecular: Number(masaMolecular.toFixed(2)),
    estadoValidacion: formulaValida
      ? "Formula valida"
      : "Formula invalida"
  };
}

const formula = {
  nombre: "H2O",
  elementos: [
    {
      simbolo: "H",
      cantidad: 2,
      masaAtomica: 1.008
    },
    {
      simbolo: "O",
      cantidad: 1,
      masaAtomica: 16
    }
  ]
};

console.log(validarFormulaQuimica(formula));
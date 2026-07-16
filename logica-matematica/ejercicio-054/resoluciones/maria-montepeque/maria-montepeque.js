// Ejercicio 054 - Areas y perimetros

function calcularFigura(figura) {
  const { tipo } = figura;

  switch (tipo) {
    case "circulo": {
      const { radio } = figura;
      return { area: Math.PI * radio ** 2, perimetro: 2 * Math.PI * radio };
    }
    case "rectangulo": {
      const { base, altura } = figura;
      return { area: base * altura, perimetro: 2 * (base + altura) };
    }
    case "triangulo": {
      const { base, altura, lados } = figura;
      const perimetro = lados.reduce((acumulado, lado) => acumulado + lado, 0);
      return { area: (base * altura) / 2, perimetro };
    }
    default:
      return null;
  }
}

const CATEGORIAS_TAMANO = [
  { limite: 50, nombre: "pequeno", tarifa: 20 },
  { limite: 150, nombre: "mediano", tarifa: 15 },
  { limite: Infinity, nombre: "grande", tarifa: 10 },
];

function clasificarTamano(areaTotal) {
  return CATEGORIAS_TAMANO.find((categoria) => areaTotal <= categoria.limite);
}

function analizarTatuajes(figuras) {
  if (!Array.isArray(figuras) || figuras.length === 0) {
    return {
      area_total: 0,
      perimetro_total: 0,
      clasificacion: "sin_figuras",
      precio_total: 0,
      figuras_invalidas: 0,
      detalle: [],
    };
  }

  const detalle = [];
  let areaTotal = 0;
  let perimetroTotal = 0;
  let figurasInvalidas = 0;

  for (const figura of figuras) {
    const resultado = calcularFigura(figura);

    if (!resultado) {
      figurasInvalidas += 1;
      continue;
    }

    areaTotal += resultado.area;
    perimetroTotal += resultado.perimetro;
    detalle.push({
      tipo: figura.tipo,
      area: Number(resultado.area.toFixed(2)),
      perimetro: Number(resultado.perimetro.toFixed(2)),
    });
  }

  const categoria = clasificarTamano(areaTotal);
  const precioTotal = Number((areaTotal * categoria.tarifa).toFixed(2));

  return {
    area_total: Number(areaTotal.toFixed(2)),
    perimetro_total: Number(perimetroTotal.toFixed(2)),
    clasificacion: categoria.nombre,
    precio_total: precioTotal,
    figuras_invalidas: figurasInvalidas,
    detalle,
  };
}

module.exports = { analizarTatuajes };

if (require.main === module) {
  console.log("Caso normal:");
  console.log(
    JSON.stringify(
      analizarTatuajes([
        { tipo: "circulo", radio: 3 },
        { tipo: "rectangulo", base: 4, altura: 6 },
        { tipo: "triangulo", base: 4, altura: 6, lados: [4, 5, 6] },
      ]),
      null,
      2
    )
  );

  console.log("\nCaso borde (lista vacia):");
  console.log(JSON.stringify(analizarTatuajes([]), null, 2));

  console.log("\nCaso con figura invalida:");
  console.log(
    JSON.stringify(
      analizarTatuajes([
        { tipo: "circulo", radio: 10 },
        { tipo: "estrella", puntas: 5 },
      ]),
      null,
      2
    )
  );
}
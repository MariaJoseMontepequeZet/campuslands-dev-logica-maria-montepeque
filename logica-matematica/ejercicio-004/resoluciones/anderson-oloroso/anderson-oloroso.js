function analizarInventarioMotos(motos) {
  if (!Array.isArray(motos) || motos.length === 0) {
    return {
      estado: "Error",
      motivo: "El inventario debe contener al menos una moto."
    };
  }

  const motosValidas = motos.filter(moto =>
    moto.precio > 0 &&
    moto.cilindraje > 0 &&
    moto.anio > 0
  );

  if (motosValidas.length === 0) {
    return {
      estado: "Error",
      motivo: "No existen motos con datos válidos."
    };
  }

  const motoMayorPrecio = motosValidas.reduce((mayor, moto) =>
    moto.precio > mayor.precio ? moto : mayor
  );

  const rangoPrecios = {
    economicas: motosValidas.filter(moto => moto.precio < 5000).length,
    gamaMedia: motosValidas.filter(
      moto => moto.precio >= 5000 && moto.precio <= 10000
    ).length,
    premium: motosValidas.filter(moto => moto.precio > 10000).length
  };

  const promedioCilindraje = Number(
    (
      motosValidas.reduce(
        (total, moto) => total + moto.cilindraje,
        0
      ) / motosValidas.length
    ).toFixed(2)
  );

  return {
    totalMotos: motosValidas.length,
    motoMasCostosa: motoMayorPrecio.modelo,
    precioMaximo: motoMayorPrecio.precio,
    rangoPrecios,
    promedioCilindraje
  };
}

const inventario = [
  {
    modelo: "Honda CB500",
    precio: 6500,
    cilindraje: 500,
    anio: 2024
  },
  {
    modelo: "Yamaha R1",
    precio: 18000,
    cilindraje: 1000,
    anio: 2023
  },
  {
    modelo: "Suzuki GN125",
    precio: 3000,
    cilindraje: 125,
    anio: 2022
  }
];

console.log(analizarInventarioMotos(inventario));
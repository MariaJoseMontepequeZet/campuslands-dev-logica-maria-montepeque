function buscarAutos(autos, filtro = {}) {
  const { marca, modelo } = filtro;

  return autos.filter((auto) => {
    if (marca && auto.marca !== marca) return false;
    if (modelo && auto.modelo !== modelo) return false;
    return true;
  });
}

const autos = [
  { marca: "Ferrari", modelo: "LaFerrari" },
  { marca: "Lamborghini", modelo: "Aventador" },
  { marca: "Ferrari", modelo: "F8" },
];

console.log(buscarAutos(autos, { marca: "Ferrari" }));

console.log(buscarAutos(autos, { modelo: "Aventador" }));


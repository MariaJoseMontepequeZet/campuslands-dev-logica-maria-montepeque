const inventario_motos = [
  {marca: "Yamaha",
  modelo: "XJ6",
  cilindrada: "600cc",
  marchas: 6,
  },
  {
    marca: "Honda",
    modelo: "CB650R",
    cilindrada: "649cc",
    marchas: 6
  },
  {
    marca: "Kawasaki",
    modelo: "Ninja 400",
    cilindrada: "399cc",
    marchas: 6
  },
];

if (inventario_motos.length > 0){
  console.log("Si tenemos inventario de motos")
} else {
  console.log("No Tenemos inventario")
}
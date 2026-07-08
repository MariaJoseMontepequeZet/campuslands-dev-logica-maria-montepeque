const filtrarInventario = (inventario) => {
    return inventario.map(moto => {
        let categoria = "Estándar";
        
        if (moto.cilindraje > 600) {
            categoria = "Alta Gama";
        } else if (moto.cilindraje <= 200 && moto.precio < 5000) {
            categoria = "Económica";
        } else if (moto.estado === "usada" && moto.precio < 3000) {
            categoria = "Oportunidad";
        }
        
        return { ...moto, categoria };
    });
};

const stock = [
    { marca: "Yamaha", cilindraje: 700, estado: "nueva", precio: 12000 },
    { marca: "Honda", cilindraje: 150, estado: "nueva", precio: 2500 },
    { marca: "Suzuki", cilindraje: 250, estado: "usada", precio: 2000 }
];

console.log(filtrarInventario(stock));
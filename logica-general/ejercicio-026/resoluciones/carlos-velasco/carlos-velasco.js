const buscarAutos = (inventario, criterioPotencia, marcaBusqueda) => {
    const resultados = inventario.filter(auto => 
        auto.marca.toLowerCase() === marcaBusqueda.toLowerCase() &&
        auto.potencia >= criterioPotencia &&
        auto.disponible === true
    );

    if (resultados.length === 0) {
        return { encontrado: false, mensaje: "No se encontraron autos con esos criterios." };
    }

    return { encontrado: true, autos: resultados };
};

const garage = [
    { marca: "Bugatti", modelo: "Chiron", potencia: 1500, disponible: true },
    { marca: "Koenigsegg", modelo: "Jesko", potencia: 1600, disponible: false },
    { marca: "Bugatti", modelo: "Veyron", potencia: 1000, disponible: true }
];

console.log(buscarAutos(garage, 1200, "Bugatti")); 
console.log(buscarAutos(garage, 1000, "Koenigsegg")); 
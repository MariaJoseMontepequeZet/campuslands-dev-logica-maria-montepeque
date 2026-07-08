
function buscarHiperdeportivo(inventario, criterio, valor) {
    const resultados = inventario.filter(auto => auto[criterio] === valor);
    
    if (resultados.length > 0) {
        return { 
            estado: "encontrado", 
            datos: resultados, 
            motivo: `Se encontraron ${resultados.length} vehículo(s) bajo el criterio ${criterio}.` 
        };
    } else {
        return { 
            estado: "no encontrado", 
            datos: [], 
            motivo: "No hay vehículos que coincidan con los parámetros de búsqueda." 
        };
    }
}

const stock = [
    { modelo: "Bugatti Chiron", marca: "Bugatti", velocidad: 490 },
    { modelo: "Rimac Nevera", marca: "Rimac", velocidad: 412 },
    { modelo: "Koenigsegg Jesko", marca: "Koenigsegg", velocidad: 480 }
];

console.log(buscarHiperdeportivo(stock, "marca", "Bugatti")); 
console.log(buscarHiperdeportivo(stock, "marca", "Ferrari")); 
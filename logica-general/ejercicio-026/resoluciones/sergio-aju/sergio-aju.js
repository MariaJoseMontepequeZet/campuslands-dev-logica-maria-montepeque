const catalogo = [
    { marca: "Bugatti", modelo: "Chiron", hp: 1500 },
    { marca: "Koenigsegg", modelo: "Jesko", hp: 1600 },
    { marca: "Rimac", modelo: "Nevera", hp: 1900 },
    { marca: "Ferrari", modelo: "SF90", hp: 986 }
];

function buscarHiperdeportivo(autos, marca) {
    // Regla 1: Buscar el auto por marca
    const encontrado = autos.find(auto => auto.marca.toLowerCase() === marca.toLowerCase());

    // Regla 2: Validar si existe
    if (!encontrado) {
        return { accion: "No encontrado", motivo: "La marca solicitada no está en el catálogo." };
    }

    // Regla 3: Validar criterio de hiperdeportivo (>= 1000 hp)
    if (encontrado.hp >= 1000) {
        return { accion: "Verificado", motivo: `El modelo ${encontrado.modelo} cumple con los estándares hiperdeportivos.` };
    } else {
        return { accion: "Descartado", motivo: "El vehículo no alcanza los 1000 HP necesarios." };
    }
}

// Pruebas
console.log("Caso Normal:", buscarHiperdeportivo(catalogo, "Bugatti"));
console.log("Caso Borde:", buscarHiperdeportivo(catalogo, "Ferrari"));
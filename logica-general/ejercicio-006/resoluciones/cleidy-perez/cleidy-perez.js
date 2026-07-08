function buscarAutoHiperdeportivo(autos, modeloBuscado) {
    if (!autos || autos.length === 0 || !modeloBuscado) {
        return "Error: Faltan datos para realizar la búsqueda.";
    }

    const modeloNormalizado = modeloBuscado.trim().toLowerCase();


    for (let i = 0; i < autos.length; i++) {
        const autoActual = autos[i];

        if (autoActual.modelo.toLowerCase() === modeloNormalizado) {
            
    
            if (autoActual.enExhibicion === true) {
                return `Acción: Agendar cita para ver el ${autoActual.modelo}. Motivo: El auto está disponible en el showroom principal.`;
            } else {
                return `Acción: Esperar traslado. Motivo: El ${autoActual.modelo} existe pero está en bodega privada.`;
            }
        }
    }
    return "Acción: Ofrecer catálogo alternativo. Motivo: El auto no se encuentra en el inventario.";
}

const inventarioAutos = [
    { modelo: "Chiron", marca: "Bugatti", enExhibicion: true },
    { modelo: "Jesko", marca: "Koenigsegg", enExhibicion: false },
    { modelo: "Nevera", marca: "Rimac", enExhibicion: true }
];

console.log("--- Caso Normal (Encontrado y en Exhibición) ---");
console.log(buscarAutoHiperdeportivo(inventarioAutos, "Chiron"));

console.log("\n--- Caso Normal 2 (Encontrado pero en Bodega) ---");
console.log(buscarAutoHiperdeportivo(inventarioAutos, "Jesko"));

console.log("\n--- Caso Borde (Auto no existente en la lista) ---");
console.log(buscarAutoHiperdeportivo(inventarioAutos, "Ferrari"));
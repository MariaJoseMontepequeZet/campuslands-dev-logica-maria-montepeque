const autosHiperdeportivos = [
    { marca: "Bugatti", modelo: "Chiron", velocidad: 420 },
    { marca: "Koenigsegg", modelo: "Jesko", velocidad: 483 },
    { marca: "McLaren", modelo: "Speedtail", velocidad: 403 },
    { marca: "Rimac", modelo: "Nevera", velocidad: 412 },
    { marca: "Pagani", modelo: "Huayra", velocidad: 383 }
];

function buscarAuto(autos) {

    if (!autos || autos.length === 0) {
        console.log("No hay autos registrados.");
        return;
    }

    const modeloBuscado = "Jesko";

    const autoEncontrado = autos.find(
        auto => auto.modelo === modeloBuscado
    );

    if (autoEncontrado) {
        console.log("Auto encontrado:");
        console.log(autoEncontrado);
    } else {
        console.log("El auto no existe en el inventario.");
    }
}

buscarAuto(autosHiperdeportivos);
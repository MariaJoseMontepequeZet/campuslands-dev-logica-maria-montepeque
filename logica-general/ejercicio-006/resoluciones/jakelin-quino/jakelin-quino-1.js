function buscarHiperdeportivo(inventario, nombreBuscado) {
    if (inventario.length === 0) {
        return { encontrado: false, mensaje: "El inventario está vacío." };
    }
    const autoEncontrado = inventario.find(auto => auto.toLowerCase() === nombreBuscado.toLowerCase());
    if (autoEncontrado) {
        return { encontrado: true, mensaje: `El ${autoEncontrado} está disponible en el inventario.` };
    } else {
        return { encontrado: false, mensaje: "El modelo buscado no se encuentra disponible." };
    }
}

const misAutos = ["Bugatti Chiron", "Koenigsegg Jesko", "Rimac Nevera"];

console.log(buscarHiperdeportivo(misAutos, "Rimac Nevera"));
console.log(buscarHiperdeportivo(misAutos, "Ferrari F40"));
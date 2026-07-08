// Logica general 006 - Busqueda de elementos
// Autos hiperdeportivos

// Entradas
const autos = [
    {
        marca: "Bugatti",
        modelo: "Chiron",
        velocidadMaxima: 420
    },
    {
        marca: "Koenigsegg",
        modelo: "Jesko",
        velocidadMaxima: 483
    },
    {
        marca: "Pagani",
        modelo: "Huayra",
        velocidadMaxima: 383
    },
    {
        marca: "Rimac",
        modelo: "Nevera",
        velocidadMaxima: 412
    }
];

// Funcion para buscar un auto por marca
function buscarAuto(lista, marcaBuscada) {

    if (!Array.isArray(lista) || lista.length === 0) {
        return "No hay autos registrados.";
    }

    const auto = lista.find(
        item => item.marca.toLowerCase() === marcaBuscada.toLowerCase()
    );

    if (!auto) {
        return "Auto no encontrado.";
    }

    return auto;
}

// Prueba normal
console.log("Prueba 1:");
console.log(buscarAuto(autos, "Bugatti"));

// Caso borde
console.log("\nPrueba 2 - Caso borde:");
console.log(buscarAuto(autos, "Ferrari"));
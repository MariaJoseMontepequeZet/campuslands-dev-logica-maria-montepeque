// Logica general 005 - Ordenamiento de prioridades
// Taller mecanico

// Entradas
const vehiculos = [
    {
        placa: "P123ABC",
        problema: "Cambio de aceite",
        prioridad: 3
    },
    {
        placa: "P456DEF",
        problema: "Frenos dañados",
        prioridad: 1
    },
    {
        placa: "P789GHI",
        problema: "Revision general",
        prioridad: 2
    }
];

// Funcion para ordenar por prioridad
function ordenarPrioridades(lista) {

    if (!Array.isArray(lista) || lista.length === 0) {
        return "No hay vehiculos registrados.";
    }

    return lista.sort((a, b) => a.prioridad - b.prioridad);
}

// Prueba normal
console.log("Prueba 1:");
console.log(ordenarPrioridades(vehiculos));

// Caso borde
console.log("\nPrueba 2 - Caso borde:");
console.log(ordenarPrioridades([]));
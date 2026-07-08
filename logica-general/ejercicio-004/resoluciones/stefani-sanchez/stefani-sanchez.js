// Logica general 004 - Filtros por condiciones
// Inventario de motos

// Entradas
const motos = [
    {
        marca: "Yamaha",
        modelo: "FZ",
        cilindrada: 150,
        disponible: true
    },
    {
        marca: "Honda",
        modelo: "CB190R",
        cilindrada: 190,
        disponible: false
    },
    {
        marca: "Suzuki",
        modelo: "Gixxer",
        cilindrada: 155,
        disponible: true
    },
    {
        marca: "AKT",
        modelo: "NKD",
        cilindrada: 125,
        disponible: true
    }
];

// Funcion para filtrar motos
function filtrarMotos(lista, cilindradaMinima) {

    if (!Array.isArray(lista) || lista.length === 0) {
        return "No hay motos registradas.";
    }

    const resultado = lista.filter(moto =>
        moto.disponible &&
        moto.cilindrada >= cilindradaMinima
    );

    if (resultado.length === 0) {
        return "No se encontraron motos que cumplan las condiciones.";
    }

    return resultado;
}

// Prueba normal
console.log("Prueba 1:");
console.log(filtrarMotos(motos, 150));

// Caso borde
console.log("\nPrueba 2 - Caso borde:");
console.log(filtrarMotos([], 150));
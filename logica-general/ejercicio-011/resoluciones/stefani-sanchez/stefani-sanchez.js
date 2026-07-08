// Logica general 011 - Organizacion de listas
// Kickboxing

// Entradas
const peleadores = [
    { nombre: "Carlos", categoria: "Peso Ligero" },
    { nombre: "Ana", categoria: "Peso Pluma" },
    { nombre: "Luis", categoria: "Peso Ligero" },
    { nombre: "Maria", categoria: "Peso Medio" },
    { nombre: "Jose", categoria: "Peso Pluma" }
];

// Funcion para organizar peleadores por categoria
function organizarCategorias(lista) {

    if (!Array.isArray(lista) || lista.length === 0) {
        return "No hay peleadores registrados.";
    }

    const categorias = {};

    for (const peleador of lista) {

        if (!categorias[peleador.categoria]) {
            categorias[peleador.categoria] = [];
        }

        categorias[peleador.categoria].push(peleador.nombre);
    }

    return categorias;
}

// Prueba normal
console.log("Prueba 1:");
console.log(organizarCategorias(peleadores));

// Caso borde
console.log("\nPrueba 2 - Caso borde:");
console.log(organizarCategorias([]));
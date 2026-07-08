let catalogo = [
    "Interstellar",
    "The Matrix",
    "Blade Runner 2049",
    "Arrival",
    "Dune"
];

let peliculaBuscada = "Dune";

console.log("Iniciando búsqueda...");

if (catalogo.includes(peliculaBuscada)) {
    console.log("Película encontrada.");
    console.log("Título:", peliculaBuscada);
    console.log("Estado: Disponible.");
} else {
    console.log("La película no se encuentra en el catálogo.");
}

console.log("Proceso finalizado.");
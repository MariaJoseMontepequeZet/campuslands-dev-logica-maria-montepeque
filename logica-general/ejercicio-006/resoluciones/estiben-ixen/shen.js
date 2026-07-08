/**
 * Busca autos hiperdeportivos en el catálogo según criterios técnicos.
 */
function buscarHiperdeportivos(catalogo, velocidadMinima, marcaFiltro = null) {
    return catalogo.filter(auto => {
        const cumpleVelocidad = auto.velocidadMaxima >= velocidadMinima;
        const cumpleMarca = marcaFiltro ? auto.marca === marcaFiltro : true;
        return cumpleVelocidad && cumpleMarca;
    });
}

// --- Base de Datos (Catálogo) ---
const catalogoAutos = [
    { modelo: "Bugatti Chiron", marca: "Bugatti", velocidadMaxima: 440 },
    { modelo: "Koenigsegg Jesko", marca: "Koenigsegg", velocidadMaxima: 480 },
    { modelo: "Rimac Nevera", marca: "Rimac", velocidadMaxima: 412 },
    { modelo: "Pagani Huayra", marca: "Pagani", velocidadMaxima: 380 }
];

// --- Pruebas ---
console.log("--- Búsqueda de Hiperdeportivos (Velocidad > 400 km/h) ---");
const resultados = buscarHiperdeportivos(catalogoAutos, 400);

if (resultados.length > 0) {
    console.table(resultados);
} else {
    console.log("No se encontraron vehículos con esos criterios.");
}
/**
 * Filtra y clasifica el inventario de motos.
 */
function clasificarMoto(moto) {
    // Regla 1: Filtro de disponibilidad
    if (!moto.disponible) {
        return { modelo: moto.modelo, estado: "NO DISPONIBLE" };
    }

    // Clasificación basada en reglas
    let categoria = "";
    if (moto.cilindraje > 500) {
        categoria = "ALTA GAMA";
    } else if (moto.precio < 5000) {
        categoria = "ECONÓMICA";
    } else {
        categoria = "URBANA";
    }

    return { 
        modelo: moto.modelo, 
        categoria: categoria, 
        precio: moto.precio 
    };
}

// --- Casos de Prueba ---
const inventario = [
    { modelo: "Yamaha R6", cilindraje: 600, precio: 12000, disponible: true },
    { modelo: "Honda Navi", cilindraje: 110, precio: 2500, disponible: true },
    { modelo: "Suzuki Gixxer", cilindraje: 150, precio: 6000, disponible: true },
    { modelo: "Kawasaki Z900", cilindraje: 900, precio: 10000, disponible: false } // Caso borde
];

console.log("--- Reporte de Inventario ---");
inventario.forEach(m => console.log(clasificarMoto(m)));
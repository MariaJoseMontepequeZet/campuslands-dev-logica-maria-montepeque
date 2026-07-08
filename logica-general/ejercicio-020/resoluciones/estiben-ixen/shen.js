/**
 * Evalúa los productos para determinar cuáles formarán parte del menú del día.
 */
function seleccionarMenu(menuPropuesto) {
    return menuPropuesto.map(prod => {
        const ganancia = prod.precioVenta - prod.costoInsumos;
        
        // Aplicación de Reglas de Negocio
        const esRentable = ganancia > 5;
        const esRapido = prod.tiempoPrep <= 15;

        if (esRentable && esRapido) {
            return { ...prod, categoria: "ESTRELLA", margen: ganancia };
        } else {
            return { ...prod, categoria: "DESCARTAR", margen: ganancia };
        }
    });
}

// --- Dataset ---
const menu = [
    { nombre: "Hot Dog Especial", precioVenta: 12, costoInsumos: 4, tiempoPrep: 8 },
    { nombre: "Hamburguesa Gourmet", precioVenta: 20, costoInsumos: 16, tiempoPrep: 20 },
    { nombre: "Tacos de Pastor", precioVenta: 10, costoInsumos: 3, tiempoPrep: 12 }
];

console.table(seleccionarMenu(menu));
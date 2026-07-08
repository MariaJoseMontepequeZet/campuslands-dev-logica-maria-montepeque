function configurarExportacion(uso) {
    switch (uso.toLowerCase()) {
        case "impresion":
            return { formato: "PDF", dpi: 300, motivo: "Alta calidad para medios físicos." };
        case "web":
            return { formato: "PNG", dpi: 72, motivo: "Ligero y optimizado para pantallas." };
        default:
            return { error: "Uso no reconocido", sugerencia: "Indique 'impresion' o 'web'." };
    }
}

console.log(configurarExportacion("impresion")); 
console.log(configurarExportacion("web"));       
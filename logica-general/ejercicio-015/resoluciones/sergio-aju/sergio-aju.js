function calcularPrecioComision(datosComision) {
    const { tipoArte, complejidad, derechosComerciales } = datosComision;
    
    // Precio base según el tipo de arte
    let precio = 0;
    
    // Paso 1: Definir precio base
    if (tipoArte === "boceto") {
        precio = 20;
    } else if (tipoArte === "ilustracion") {
        precio = 50;
    } else if (tipoArte === "pintura") {
        precio = 100;
    } else {
        return { error: "Tipo de arte no reconocido." };
    }

    // Paso 2: Ajuste por complejidad
    if (complejidad === "alta") {
        precio = precio + 30; // Se cobra un extra por trabajo detallado
    }

    // Paso 3: Regla de negocio - Derechos Comerciales
    // Si el cliente quiere derechos comerciales, el precio se duplica
    if (derechosComerciales === true) {
        precio = precio * 2;
    }

    // Paso 4: Construir reporte final
    let reporte = {
        tipo: tipoArte,
        precioFinal: precio,
        moneda: "USD",
        comercial: derechosComerciales ? "Sí incluido" : "No incluido"
    };

    return reporte;
}

// --- Pruebas del sistema ---

// Caso normal: Ilustración estándar
console.log("Prueba 1:", calcularPrecioComision({
    tipoArte: "ilustracion", 
    complejidad: "media", 
    derechosComerciales: false
}));

// Caso borde: Pintura compleja con derechos comerciales (¡Es caro!)
console.log("Prueba 2:", calcularPrecioComision({
    tipoArte: "pintura", 
    complejidad: "alta", 
    derechosComerciales: true
}));
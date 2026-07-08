function filtrarInventario(modelo, cilindrada, estado) {
    // Regla 1: Si está vendida, no mostrar
    if (estado !== "disponible") {
        return { accion: "Ocultar", motivo: "La moto ya no está en inventario." };
    }

    // Regla 2: Filtro por cilindrada (categorización)
    if (cilindrada >= 600) {
        return { accion: "Mostrar en segmento: Alto Rendimiento", motivo: "Moto de alta cilindrada." };
    } else if (cilindrada >= 250) {
        return { accion: "Mostrar en segmento: Urbano/Deportivo", motivo: "Moto de cilindrada media." };
    } else {
        return { accion: "Mostrar en segmento: Económico", motivo: "Moto de baja cilindrada." };
    }
}

// Pruebas
console.log("Caso Normal:", filtrarInventario("Honda CB500", 500, "disponible"));
console.log("Caso Borde:", filtrarInventario("Yamaha R1", 1000, "vendida"));
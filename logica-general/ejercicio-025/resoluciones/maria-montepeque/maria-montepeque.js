//Gestiona la reposición de inventario en taller usando umbrales.

const gestionarInventario = (stockActual, min, max) => {
    // 1. Normalización y Validación Robusta
    const s = Number(stockActual);
    const m = Number(min);
    const x = Number(max);

    if (![s, m, x].every(Number.isFinite)) {
        return { estado: "Error", mensaje: "Entradas no válidas: todos los valores deben ser números finitos." };
    }
    
    if (x <= m) {
        return { estado: "Error", mensaje: "Configuración inválida: El límite máximo debe superar al mínimo." };
    }

    // 2. Lógica de negocio
    if (s < m) {
        return {
            accion: "Comprar",
            cantidad: x - s,
            razon: `Stock actual (${s}) por debajo del mínimo (${m}).`
        };
    }

    return {
        accion: "Esperar",
        cantidad: 0,
        razon: "Stock dentro de los niveles operativos permitidos."
    };
};

console.log(gestionarInventario(5, 10, 50)); 
console.log(gestionarInventario(20, 10, 50));
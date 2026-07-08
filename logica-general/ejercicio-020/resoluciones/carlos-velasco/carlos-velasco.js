const seleccionarMenu = (presupuesto, hambre) => {
    if (hambre > 8 && presupuesto >= 15) {
        return { 
            seleccion: "Combo especial", 
            motivo: "Nivel de hambre alto y presupuesto suficiente para el combo premium." 
        };
    }
    if (hambre <= 8 && presupuesto >= 10) {
        return { 
            seleccion: "Menú básico", 
            motivo: "Satisfacción estándar con presupuesto equilibrado." 
        };
    }
    if (presupuesto < 10 && presupuesto > 0) {
        return { 
            seleccion: "Opción económica", 
            motivo: "Presupuesto limitado, sugerencia de plato del día." 
        };
    }
    return { 
        seleccion: "Sin opción", 
        motivo: "Presupuesto insuficiente para cualquier menú disponible." 
    };
};
console.log(seleccionarMenu(20, 9)); 
console.log(seleccionarMenu(5, 5));  
const evaluarCondicionesSalto = (clima) => {
    if (clima.velocidadViento > 30) {
        return { 
            accion: "Salto cancelado", 
            motivo: "Viento demasiado fuerte para un salto seguro." 
        };
    }
    if (clima.visibilidad < 5) {
        return { 
            accion: "Salto cancelado", 
            motivo: "La visibilidad es insuficiente por condiciones climáticas." 
        };
    }
    return { 
        accion: "Salto autorizado", 
        motivo: "Condiciones climáticas óptimas para el salto." 
    };
};

console.log(evaluarCondicionesSalto({ velocidadViento: 15, visibilidad: 10 })); 
console.log(evaluarCondicionesSalto({ velocidadViento: 40, visibilidad: 10 })); 
function evaluarSalto(velocidadViento, altitud, paracaidasOK) {
    if (velocidadViento > 30) {
        return { permiso: false, motivo: "Viento demasiado fuerte para saltar." };
    }    
    if (altitud < 1000) {
        return { permiso: false, motivo: "Altitud insuficiente para abrir paracaídas." };
    }
    if (!paracaidasOK) {
        return { permiso: false, motivo: "Equipo no verificado. Inspección obligatoria." };
    }
    return { permiso: true, motivo: "Condiciones óptimas. ¡Proceder con el salto!" };
}

console.log(evaluarSalto(15, 2000, true));
console.log(evaluarSalto(45, 2000, true));
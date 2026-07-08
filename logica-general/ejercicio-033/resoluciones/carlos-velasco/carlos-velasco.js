const evaluarSalto = (altitud, velocidadViento, estadoParacaidas) => {
    if (!estadoParacaidas) {
        return { accion: "Activar reserva", motivo: "Fallo detectado en paracaídas principal." };
    }

    if (velocidadViento > 50) {
        return { accion: "Salto cancelado", motivo: "Vientos superiores al límite de seguridad." };
    }

    if (altitud > 500) {
        return { accion: "Apertura estándar", motivo: "Altitud óptima para maniobras." };
    } else if (altitud > 150) {
        return { accion: "Apertura de emergencia", motivo: "Zona de baja altura; desplegar inmediatamente." };
    } else {
        return { accion: "Alerta crítica", motivo: "Altura insuficiente para despliegue seguro." };
    }
};

console.log(evaluarSalto(600, 20, true)); 
console.log(evaluarSalto(100, 10, true)); 
const procesarReserva = (reserva) => {
    if (!reserva.hotelDisponibilidad) {
        return { accion: "Rechazada", motivo: "El hotel no tiene disponibilidad actual." };
    }
    
    if (!reserva.documentosValidos) {
        return { accion: "Rechazada", motivo: "La documentación del viajero no es válida." };
    }

    return { accion: "Confirmada", motivo: "Reserva exitosa, disfrute su viaje." };
};

console.log(procesarReserva({ hotelDisponibilidad: true, documentosValidos: true }));  
console.log(procesarReserva({ hotelDisponibilidad: true, documentosValidos: false })); 
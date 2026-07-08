function validarReserva(destino, temporada, tienePasaporte) {
    if (destino === "internacional" && !tienePasaporte) {
        return { reserva: "Denegada", motivo: "Se requiere pasaporte vigente para destinos internacionales." };
    }
    if (temporada === "alta" && destino === "nacional") {
        return { reserva: "Pendiente", motivo: "Destino nacional en temporada alta: sujeto a disponibilidad." };
    }
    return { reserva: "Aprobada", motivo: "Reserva confirmada exitosamente." };
}

console.log(validarReserva("internacional", "baja", true));
console.log(validarReserva("internacional", "baja", false));
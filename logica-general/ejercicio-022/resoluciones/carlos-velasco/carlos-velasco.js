const validarJugador = (jugador) => {
    if (jugador.tieneLesion) {
        return { estado: "Rechazado", motivo: "No apto por lesión." };
    }

    if (jugador.edad < 18) {
        return { estado: "Rechazado", motivo: "Menor de edad, requiere autorización de tutor." };
    }

    if (jugador.tarjetasRojas >= 3) {
        return { estado: "Rechazado", motivo: "Inhabilitado por acumulación de tarjetas rojas." };
    }

    return { estado: "Aprobado", motivo: "Jugador apto para el torneo." };
};

console.log(validarJugador({ nombre: "Juan", edad: 25, tieneLesion: false, tarjetasRojas: 1 })); 
console.log(validarJugador({ nombre: "Pedro", edad: 17, tieneLesion: false, tarjetasRojas: 0 })); 
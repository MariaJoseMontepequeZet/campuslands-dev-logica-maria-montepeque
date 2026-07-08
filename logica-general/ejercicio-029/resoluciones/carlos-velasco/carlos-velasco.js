const determinarEstado = (personaje) => {
    if (personaje.estaEscondido) {
        return { estado: "A salvo", accion: "Mantener silencio." };
    }
    if (personaje.monstruoCerca) {
        if (personaje.tieneArma) {
            return { estado: "Defensa exitosa", accion: "El monstruo retrocede." };
        } else if (personaje.energia < 20) {
            return { estado: "Atrapado", accion: "Demasiado cansado para correr." };
        } else {
            return { estado: "Huida desesperada", accion: "Correr hacia la salida." };
        }
    }
    return { estado: "Explorando", accion: "Buscar suministros." };
};

console.log(determinarEstado({ energia: 10, tieneArma: false, estaEscondido: false, monstruoCerca: true })); 
console.log(determinarEstado({ energia: 50, tieneArma: true, estaEscondido: false, monstruoCerca: true }));  
const validarPartido = (partido) => {
    if (partido.golesFavor < 0 || partido.golesContra < 0) {
        return "Registro rechazado: Los goles no pueden ser negativos.";
    }
    if (partido.tarjetasRojas > 3) {
        return "Registro rechazado: Número de tarjetas rojas inválido.";
    }
    const resultado = partido.golesFavor > partido.golesContra ? "Victoria" : 
                      partido.golesFavor === partido.golesContra ? "Empate" : "Derrota";
    return `Registro aceptado: ${resultado} con ${partido.golesFavor}-${partido.golesContra}.`;
};

console.log(validarPartido({ golesFavor: 3, golesContra: 1, tarjetasRojas: 0 })); 
console.log(validarPartido({ golesFavor: -1, golesContra: 2, tarjetasRojas: 0 })); 
const gestionarTurnoSoldadura = (operario, soldadura, hora) => {
    let turno = "";
    let esViable = false;

    if (hora >= 6 && hora <= 14) {
        turno = "Mañana";
        esViable = true; 
    } else if (hora > 14 && hora <= 22) {
        turno = "Tarde";
        esViable = (soldadura === "MIG" || soldadura === "Electrodo");
    } else {
        turno = "Noche";
        esViable = (soldadura === "TIG");
    }

    return {
        operario: operario,
        turno: turno,
        accion: esViable ? "Tarea autorizada" : "Tarea denegada",
        motivo: esViable ? "Procedimiento compatible." : "Tipo de soldadura no permitida en este horario."
    };
};

console.log(gestionarTurnoSoldadura("Juan", "TIG", 23)); 
console.log(gestionarTurnoSoldadura("Ana", "TIG", 16)); 
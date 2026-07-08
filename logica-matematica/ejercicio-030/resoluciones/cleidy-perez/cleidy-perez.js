const viajesTurismo = [
    { destino: "Antigua Guatemala", dias: 3 },
    { destino: "Tikal", dias: 5 },
    { destino: "Lago de Atitlán", dias: 4 },
    { destino: "Semuc Champey", dias: 6 },
    { destino: "Monterrico", dias: 2 }
];

function lecturaDeInstrucciones(viajes) {

    if (!viajes || viajes.length === 0) {
        console.log("No hay viajes registrados.");
        return;
    }

    let viajesLargos = 0;

    console.log("----- Instrucciones de viajes -----");

    for (let i = 0; i < viajes.length; i++) {

        console.log(
            "Destino: " +
            viajes[i].destino +
            " - Duración: " +
            viajes[i].dias +
            " días"
        );

        if (viajes[i].dias >= 5) {
            viajesLargos++;
        }
    }

    console.log("Cantidad de viajes de 5 días o más:", viajesLargos);
}

lecturaDeInstrucciones(viajesTurismo);
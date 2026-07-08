const soldadores = [
    { id: 1, nombre: "Juan", turno: "Mañana" },
    { id: 2, nombre: "María", turno: "Tarde" },
    { id: 3, nombre: "Carlos", turno: "Mañana" }
];

function revisarTurnos(soldadores) {

    if (!soldadores || soldadores.length === 0) {
        console.log("No hay soldadores registrados.");
        return;
    }

    let turnoManana = 0;
    let turnoTarde = 0;

    for (let i = 0; i < soldadores.length; i++) {

        if (soldadores[i].turno === "Mañana") {
            console.log(`${soldadores[i].nombre}: Turno de mañana`);
            turnoManana++;
        } else {
            console.log(`${soldadores[i].nombre}: Turno de tarde`);
            turnoTarde++;
        }
    }

    console.log("---------------------");
    console.log("Total turno mañana:", turnoManana);
    console.log("Total turno tarde:", turnoTarde);
}

revisarTurnos(soldadores);
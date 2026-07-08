const dibujos = [
    { id: 1, nombre: "Paisaje", capas: 8 },
    { id: 2, nombre: "Retrato", capas: 3 },
    { id: 3, nombre: "Logo", capas: 6 }
];

function revisarDibujos(dibujos) {

    if (!dibujos || dibujos.length === 0) {
        console.log("No hay dibujos para revisar.");
        return;
    }

    let aprobados = 0;

    for (let i = 0; i < dibujos.length; i++) {

        if (dibujos[i].capas >= 5) {
            console.log(`${dibujos[i].nombre}: Cumple las reglas.`);
            aprobados++;
        } else {
            console.log(`${dibujos[i].nombre}: No cumple las reglas.`);
        }
    }

    console.log("--------------------");
    console.log("Total de dibujos aprobados:", aprobados);
}

revisarDibujos(dibujos);
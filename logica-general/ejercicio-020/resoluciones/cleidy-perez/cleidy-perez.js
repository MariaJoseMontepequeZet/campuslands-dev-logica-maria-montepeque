const comidas = [
    { id: 1, nombre: "Hamburguesa", precio: 45 },
    { id: 2, nombre: "Tacos", precio: 30 },
    { id: 3, nombre: "Pizza", precio: 60 }
];

function seleccionarComida(comidas) {

    if (!comidas || comidas.length === 0) {
        console.log("No hay comidas disponibles.");
        return;
    }

    let opcionesEconomicas = 0;

    for (let i = 0; i < comidas.length; i++) {

        if (comidas[i].precio <= 40) {
            console.log(`${comidas[i].nombre}: Opción económica`);
            opcionesEconomicas++;
        } else {
            console.log(`${comidas[i].nombre}: Opción premium`);
        }
    }

    console.log("--------------------");
    console.log("Total de opciones económicas:", opcionesEconomicas);
}

seleccionarComida(comidas);
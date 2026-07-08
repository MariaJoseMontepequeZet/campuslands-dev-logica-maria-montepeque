const dibujos = [
    { id: 1, nombre: "Paisaje", distancia: 120, tiempo: 4 },
    { id: 2, nombre: "Retrato", distancia: 90, tiempo: 3 },
    { id: 3, nombre: "Anime", distancia: 150, tiempo: 5 }
];

function calcularVelocidad(dibujos) {

    if (!dibujos || dibujos.length === 0) {
        console.log("No hay dibujos registrados.");
        return;
    }

    let velocidadTotal = 0;

    for (let i = 0; i < dibujos.length; i++) {

        let velocidad = dibujos[i].distancia / dibujos[i].tiempo;
        velocidadTotal += velocidad;

        if (velocidad >= 30) {
            console.log(`${dibujos[i].nombre}: Velocidad alta (${velocidad} px/min)`);
        } else {
            console.log(`${dibujos[i].nombre}: Velocidad baja (${velocidad} px/min)`);
        }
    }

    let promedio = velocidadTotal / dibujos.length;

    console.log("----------------------");
    console.log("Velocidad promedio:", promedio.toFixed(2), "px/min");
}

calcularVelocidad(dibujos);
const autosHiperdeportivos = [
    { marca: "Bugatti", modelo: "Chiron", velocidad: 420 },
    { marca: "Koenigsegg", modelo: "Jesko", velocidad: 483 },
    { marca: "Rimac", modelo: "Nevera", velocidad: 412 },
    { marca: "McLaren", modelo: "Speedtail", velocidad: 403 },
    { marca: "Pagani", modelo: "Huayra", velocidad: 383 }
];


function analizarAutos(autos) {

    if (!autos || autos.length === 0) {
        console.log("No hay autos registrados.");
        return;
    }

    let sumaVelocidad = 0;
    let autosRapidos = [];

    // Acumulador y ciclo para sumar velocidades
    for (let i = 0; i < autos.length; i++) {

        sumaVelocidad += autos[i].velocidad;

        // Regla: autos con más de 400 km/h
        if (autos[i].velocidad > 400) {
            autosRapidos.push(autos[i]);
        }
    }

    // Cálculo numérico del promedio
    let promedioVelocidad = sumaVelocidad / autos.length;


    console.log("----- Autos hiperdeportivos -----");

    console.log("\nAutos con más de 400 km/h:");

    for (let i = 0; i < autosRapidos.length; i++) {

        let velocidadMph = autosRapidos[i].velocidad * 0.621371;

        console.log(
            autosRapidos[i].marca,
            autosRapidos[i].modelo,
            "-",
            autosRapidos[i].velocidad + " km/h",
            "-",
            velocidadMph.toFixed(2) + " mph"
        );
    }


    console.log(
        "\nPromedio de velocidad:",
        promedioVelocidad.toFixed(2) + " km/h"
    );

}


analizarAutos(autosHiperdeportivos);
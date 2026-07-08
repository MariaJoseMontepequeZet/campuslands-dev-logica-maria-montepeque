const estudiantes = [
    { id: 1, nombre: "Juan", puntaje: 70 },
    { id: 2, nombre: "María", puntaje: 85 },
    { id: 3, nombre: "Carlos", puntaje: 95 }
];

function normalizarPuntajes(estudiantes) {

    if (!estudiantes || estudiantes.length === 0) {
        console.log("No hay puntajes para normalizar.");
        return;
    }

    let total = 0;

    for (let i = 0; i < estudiantes.length; i++) {

        let puntajeNormalizado = (estudiantes[i].puntaje / 100) * 10;
        total += puntajeNormalizado;

        if (puntajeNormalizado >= 8) {
            console.log(`${estudiantes[i].nombre}: ${puntajeNormalizado.toFixed(1)} - Alto`);
        } else {
            console.log(`${estudiantes[i].nombre}: ${puntajeNormalizado.toFixed(1)} - Medio`);
        }
    }

    let promedio = total / estudiantes.length;

    console.log("--------------------");
    console.log("Promedio normalizado:", promedio.toFixed(1));
}

normalizarPuntajes(estudiantes);
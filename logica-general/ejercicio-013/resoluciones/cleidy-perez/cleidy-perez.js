const participantes = [
    { id: 1, nombre: "Juan", edad: 22, peso: 75, certificadoMedico: true },
    { id: 2, nombre: "María", edad: 17, peso: 60, certificadoMedico: true },
    { id: 3, nombre: "Carlos", edad: 30, peso: 95, certificadoMedico: false },
    { id: 4, nombre: "Ana", edad: 25, peso: 68, certificadoMedico: true }
];

function evaluarSalto(participantes) {
    if (!participantes || participantes.length === 0) {
        console.log("No hay participantes registrados.");
        return;
    }
    let aprobados = 0;
    for (let i = 0; i < participantes.length; i++) {

        console.log(`Participante: ${participantes[i].nombre}`);
        if (
            participantes[i].edad >= 18 &&
            participantes[i].peso <= 90 &&
            participantes[i].certificadoMedico
        ) {
            console.log("Puede realizar el salto.");
            aprobados++;
        } else {
            console.log("No puede realizar el salto.");
        }

        console.log("---------------------");
    }
    console.log("Total de participantes aprobados:", aprobados);
}

evaluarSalto(participantes);
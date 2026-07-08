const participantes = [
    {
        nombre: "Carlos",
        edad: 25,
        peso: 75,
        certificadoMedico: true
    },
    {
        nombre: "Laura",
        edad: 17,
        peso: 60,
        certificadoMedico: true
    },
    {
        nombre: "Miguel",
        edad: 30,
        peso: 95,
        certificadoMedico: false
    },
    {
        nombre: "Sofía",
        edad: 22,
        peso: 68,
        certificadoMedico: true
    },
    {
        nombre: "Andrés",
        edad: 28,
        peso: 82,
        certificadoMedico: false
    }
];

function evaluarParticipantes(participantes) {

    participantes.forEach(participante => {

        if (participante.edad >= 18 && participante.certificadoMedico) {
            console.log(`${participante.nombre}: Apto para realizar el salto.`);
        } else if (participante.edad < 18) {
            console.log(`${participante.nombre}: No puede participar por ser menor de edad.`);
        } else {
            console.log(`${participante.nombre}: Debe presentar un certificado médico válido.`);
        }

    });

}

evaluarParticipantes(participantes);
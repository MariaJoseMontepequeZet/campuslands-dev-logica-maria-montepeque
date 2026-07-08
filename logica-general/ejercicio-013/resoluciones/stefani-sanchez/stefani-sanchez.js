// Logica general 013 - Resolucion de casos
// Paracaidismo

// Entradas
const participantes = [
    { nombre: "Carlos", edad: 25, certificadoMedico: true },
    { nombre: "Ana", edad: 17, certificadoMedico: true },
    { nombre: "Luis", edad: 30, certificadoMedico: false }
];

// Funcion para resolver cada caso
function evaluarParticipantes(lista) {

    if (!Array.isArray(lista) || lista.length === 0) {
        return "No hay participantes registrados.";
    }

    const resultados = [];

    for (const participante of lista) {

        if (participante.edad < 18) {
            resultados.push(`${participante.nombre}: No puede participar por ser menor de edad.`);
        } else if (!participante.certificadoMedico) {
            resultados.push(`${participante.nombre}: No puede participar porque no presenta certificado medico.`);
        } else {
            resultados.push(`${participante.nombre}: Puede participar.`);
        }
    }

    return resultados;
}

// Prueba normal
console.log("Prueba 1:");
console.log(evaluarParticipantes(participantes));

// Caso borde
console.log("\nPrueba 2 - Caso borde:");
console.log(evaluarParticipantes([]));
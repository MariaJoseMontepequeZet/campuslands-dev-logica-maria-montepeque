// Logica general 014 - Diagnostico de errores
// Tatuajes

// Entradas
const solicitudes = [
    { cliente: "Carlos", edad: 22, consentimiento: true },
    { cliente: "Ana", edad: 16, consentimiento: true },
    { cliente: "Luis", edad: 25, consentimiento: false }
];

// Funcion para diagnosticar errores
function diagnosticarSolicitudes(lista) {

    if (!Array.isArray(lista) || lista.length === 0) {
        return "No hay solicitudes registradas.";
    }

    const resultados = [];

    for (const solicitud of lista) {

        if (solicitud.edad < 18) {
            resultados.push(`${solicitud.cliente}: Error - Cliente menor de edad.`);
        } else if (!solicitud.consentimiento) {
            resultados.push(`${solicitud.cliente}: Error - Falta el consentimiento informado.`);
        } else {
            resultados.push(`${solicitud.cliente}: Solicitud aprobada.`);
        }
    }

    return resultados;
}

// Prueba normal
console.log("Prueba 1:");
console.log(diagnosticarSolicitudes(solicitudes));

// Caso borde
console.log("\nPrueba 2 - Caso borde:");
console.log(diagnosticarSolicitudes([]));
function diagnosticarSesion(cliente) {
    // 1. Diagnóstico de edad (Menores de 18 no se tatúan)
    if (cliente.edad < 18) {
        return { apto: false, diagnostico: "Rechazado: El cliente debe ser mayor de edad." };
    }

    // 2. Diagnóstico de salud (Piel irritada)
    if (cliente.pielIrritada === true) {
        return { apto: false, diagnostico: "Rechazado: La piel presenta irritación, riesgo de infección." };
    }

    // 3. Diagnóstico de conducta (Consumo de alcohol)
    if (cliente.consumoAlcohol === true) {
        return { apto: false, diagnostico: "Rechazado: El cliente ha consumido alcohol, riesgo de sangrado excesivo." };
    }

    // Si pasa todas las reglas, está apto
    return { apto: true, diagnostico: "Aprobado: El cliente cumple con todas las normas de seguridad." };
}

// --- Pruebas del sistema ---

// Cliente normal
const cliente1 = { nombre: "Carlos", edad: 25, pielIrritada: false, consumoAlcohol: false };
console.log("Diagnóstico Cliente 1:", diagnosticarSesion(cliente1));

// Caso borde: Consumo de alcohol
const cliente2 = { nombre: "Maria", edad: 22, pielIrritada: false, consumoAlcohol: true };
console.log("Diagnóstico Cliente 2:", diagnosticarSesion(cliente2));
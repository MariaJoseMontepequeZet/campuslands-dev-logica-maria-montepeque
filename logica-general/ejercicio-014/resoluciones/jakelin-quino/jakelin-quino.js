function diagnosticarAptitud(edad, alcoholConsumido, tieneInfeccion) {
    if (edad < 18) {
        return { apto: false, motivo: "Cliente menor de edad, prohibido tatuar." };
    }    
    if (alcoholConsumido) {
        return { apto: false, motivo: "El cliente ha consumido alcohol, riesgo de sangrado elevado." };
    }
    if (tieneInfeccion) {
        return { apto: false, motivo: "Infección detectada en la zona, riesgo sanitario alto." };
    }
    return { apto: true, motivo: "Cliente apto para el procedimiento." };
}

console.log(diagnosticarAptitud(25, false, false));
console.log(diagnosticarAptitud(20, true, false)); 
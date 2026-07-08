function validarAlmacenamiento(reactivo, cantidad, esPeligroso) {
    if (cantidad <= 0) {
        return { estado: "Reabastecer", motivo: "Stock insuficiente para el reactivo." };
    }
    if (esPeligroso && cantidad > 50) {
        return { estado: "Alerta", motivo: "Exceso de reactivo peligroso. Riesgo de seguridad." };
    }
    return { estado: "OK", motivo: "Almacenamiento seguro." };
}

console.log(validarAlmacenamiento("Ácido Sulfúrico", 20, true));
console.log(validarAlmacenamiento("Ácido Sulfúrico", 60, true)); 
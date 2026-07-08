const asignarSoldador = (soldador, complejidad) => {
    if (soldador.fatiga > 80) {
        return { asignado: false, motivo: "Soldador requiere descanso (fatiga alta)." };
    }
    
    if (soldador.nivelCertificacion < complejidad) {
        return { asignado: false, motivo: "Nivel de certificación insuficiente." };
    }
    
    return { asignado: true, motivo: `Soldador ${soldador.nombre} asignado con éxito.` };
};

console.log(asignarSoldador({ nombre: "Pedro", nivelCertificacion: 4, fatiga: 20 }, 3));
console.log(asignarSoldador({ nombre: "Ana", nivelCertificacion: 2, fatiga: 90 }, 3));
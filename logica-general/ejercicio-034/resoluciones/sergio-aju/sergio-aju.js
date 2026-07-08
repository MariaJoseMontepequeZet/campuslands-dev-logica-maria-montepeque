function diagnosticarEstacion(insumos) {
    if (insumos.agujasVencidas) {
        return { estado: "DETENIDO", error: "Agujas vencidas: Riesgo biológico." };
    }
    
    if (!insumos.tieneTinta || !insumos.tieneGuantes) {
        return { estado: "DETENIDO", error: "Faltan insumos básicos." };
    }

    return { estado: "APROBADO", error: "Ninguno" };
}
const estacion1 = { agujasVencidas: false, tieneTinta: true, tieneGuantes: true };
const estacion2 = { agujasVencidas: true, tieneTinta: true, tieneGuantes: true };

console.log(diagnosticarEstacion(estacion1)); 
console.log(diagnosticarEstacion(estacion2)); 
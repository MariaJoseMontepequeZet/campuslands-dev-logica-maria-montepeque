function asignarTurno(material, esEspecializado) {
    if (material === "aluminio" && !esEspecializado) {
        return { asignado: false, razon: "Se requiere operario especializado para aluminio." };
    }
    
    return { asignado: true, razon: "Turno asignado correctamente." };
}
console.log(asignarTurno("aluminio", false)); 
console.log(asignarTurno("acero", false));    
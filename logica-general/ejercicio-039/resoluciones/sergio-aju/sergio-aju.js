function asignarTurno(material, esEspecializado) {
    if (material === "aluminio" && !esEspecializado) {
        return { 
            asignado: false, 
            razon: "Se requiere operario especializado para trabajar con aluminio." 
        };
    }
    
    if (material === "acero" || (material === "aluminio" && esEspecializado)) {
        return { 
            asignado: true, 
            razon: "Turno asignado correctamente a operario habilitado." 
        };
    }

    return { asignado: false, razon: "Material no reconocido en el sistema." };
}
console.log(asignarTurno("aluminio", false)); 
console.log(asignarTurno("acero", false));    
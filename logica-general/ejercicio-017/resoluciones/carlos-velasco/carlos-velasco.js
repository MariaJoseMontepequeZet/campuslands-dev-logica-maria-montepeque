const asignarLicencia = (usuario, proyecto) => {
    if (usuario === "Empresa") {
        return { licencia: "Licencia Enterprise", motivo: "Acceso corporativo ilimitado." };
    }
    if (usuario === "Estudiante") {
        return proyecto === "Básico" 
            ? { licencia: "Licencia Educativa", motivo: "Acceso para formación." }
            : { licencia: "Licencia Limitada", motivo: "Uso avanzado con restricciones." };
    }
    if (usuario === "Profesional") {
        return proyecto === "Básico"
            ? { licencia: "Licencia Estándar", motivo: "Acceso para trabajo freelance." }
            : { licencia: "Licencia Pro", motivo: "Acceso total para proyectos avanzados." };
    }
    return { licencia: "Denegada", motivo: "Tipo de usuario no reconocido." };
};
console.log(asignarLicencia("Estudiante", "Avanzado")); 
console.log(asignarLicencia("Empresa", "Básico"));    
function determinarLicencia(area, zona) {
    if (zona === "rural") {
        return "Licencia Especial Rural";
    }
    
    if (zona === "urbana") {
        return area < 50 ? "Licencia Básica" : "Licencia Completa";
    }

    return "Zona no definida";
}
console.log(determinarLicencia(30, "urbana")); 
console.log(determinarLicencia(100, "rural"));  
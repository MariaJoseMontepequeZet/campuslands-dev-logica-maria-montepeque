function filtrarMoto(moto) {
    if (moto.estado === "averiada") {
        return "Resultado: No apta. Motivo: Moto reportada con daños.";
    }
    
    if (moto.kilometraje >= 5000) {
        return "Resultado: Requiere mantenimiento. Motivo: Alcanzó el límite de 5000 km, debe pasar a revisión.";
    }
    
    if (moto.estado === "ok" && moto.kilometraje < 5000) {
        return "Resultado: Disponible para venta. Motivo: Estado correcto y kilometraje dentro del rango permitido.";
    }
    
    return "Resultado: Estado desconocido. Motivo: Verifique los datos de la ficha técnica.";
}

// Pruebas
console.log(filtrarMoto({modelo: "Yamaha MT-07", estado: "ok", kilometraje: 2000}));
console.log(filtrarMoto({modelo: "Honda CB500", estado: "ok", kilometraje: 5000}));
console.log(filtrarMoto({modelo: "Suzuki GSX", estado: "averiada", kilometraje: 100}));
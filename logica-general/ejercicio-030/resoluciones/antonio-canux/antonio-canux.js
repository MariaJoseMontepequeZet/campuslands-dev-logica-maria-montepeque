// Ejercicio 030 - Viajes y Turismo

function validarIngresoTurista(haLeidoInstrucciones, traeMascota, tipoCamara) {
    let acceso = false;
    let instruccionFinal = "";

    if (haLeidoInstrucciones === false) {
        acceso = false;
        instruccionFinal = "Proceso detenido: El turista debe leer y aceptar el reglamento interno antes de continuar.";
    }
    else if (traeMascota === true) {
        acceso = false;
        instruccionFinal = "Ingreso denegado: Por preservación del patrimonio, no se permiten mascotas en el Palacio Nacional de la Cultura.";
    }
    else if (tipoCamara === "profesional") {
        acceso = true;
        instruccionFinal = "Acceso permitido condicionado: Debe pasar por administración para llenar el formulario de equipo fotográfico profesional.";
    }
    else {
        acceso = true;
        instruccionFinal = "Acceso estándar permitido. Proceda a la sala de espera para el inicio del recorrido guiado.";
    }

    return { 
        accesoPermitido: acceso, 
        indicacion: instruccionFinal 
    };
}

// Pruebas

console.log("--- Prueba: Caso Normal (Turista estándar) ---");
console.log(validarIngresoTurista(true, false, "celular"));

console.log("\n--- Prueba: Caso Borde (No leyó instrucciones) ---");
console.log(validarIngresoTurista(false, false, "celular"));

console.log("\n--- Prueba: Caso Restricción Condicionada (Cámara profesional) ---");
console.log(validarIngresoTurista(true, false, "profesional"));
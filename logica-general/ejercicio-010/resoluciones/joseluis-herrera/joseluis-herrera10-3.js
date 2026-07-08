console.log("Instrucciones para abordar: 1. Pasaporte -> 2. Equipaje -> 3. Pase de abordaje\n");

let pasaporte_valido = false;
let equipaje_ok = false;
let pase_listo = false;

let instruccion_actual = 1;
let proceso_activo = true;

while (proceso_activo) {
    switch (instruccion_actual) {
        case 1:
            console.log("Verificación de documentos.");
            let respuesta = prompt("¿Cuenta con pasaporte vigente con más de 6 meses de validez? (si/no): ").toLowerCase();
            if (respuesta === "si") {
                console.log("Pasaporte aprobado.");
                pasaporte_valido = true;
                instruccion_actual = 2;
            } else {
                console.log("No cumple la instrucción 1. Debe renovar su pasaporte en ventanilla.");
                proceso_activo = false;
            }
            break;

        case 2:
            console.log("\nControl de equipaje de mano.");
            let peso = parseFloat(prompt("Ingrese el peso de su equipaje de mano en kilos: "));
            if (peso <= 10.0) {
                console.log("Equipaje aprobado dentro del límite permitido.");
                equipaje_ok = true;
                instruccion_actual = 3;
            } else {
                console.log("El equipaje excede los 10kg permitidos.");
                let accion = prompt("¿Desea pagar equipaje extra en bodega o retirar artículos? (pagar/retirar): ").toLowerCase();
                if (accion === "pagar") {
                    console.log(" Multa pagada. Equipaje aprobado.");
                    equipaje_ok = true;
                    instruccion_actual = 3;
                } else {
                    console.log(" Regrese cuando su equipaje cumpla el peso.");
                    proceso_activo = false;
                }
            }
            break;

        case 3:
            console.log("\nGeneración de pase de abordaje.");
            let confirmar = prompt("¿Desea confirmar su asiento en la ventana o pasillo? (ventana/pasillo): ").toLowerCase();
            if (confirmar === "ventana" || confirmar === "pasillo") {
                console.log(` Asiento asignado en ${confirmar}.`);
                pase_listo = true;
                proceso_activo = false;
            } else {
                console.log("Entrada no válida. Intente de nuevo.");
            }
            break;
    }
}

if (pasaporte_valido && equipaje_ok && pase_listo) {
    console.log("\n ¡Todas las instrucciones completadas con éxito! Buen viaje.");
} else {
    console.log("\n Proceso cancelado. No se completó la lectura de instrucciones.");
}
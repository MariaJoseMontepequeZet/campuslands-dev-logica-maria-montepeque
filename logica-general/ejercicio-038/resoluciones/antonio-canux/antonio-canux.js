// Ejercicio de Lógica 038 - Temática Soldadura

function asignarTurnoSoldadura(certificacion, turno) {
    const nivelCertificacion = certificacion.toLowerCase();
    const tipoTurno = turno.toLowerCase();

    if (tipoTurno === "nocturno") {
        if (nivelCertificacion === "avanzada") {
            return {
                autorizado: true,
                tarea: "Reparación de tuberías de alta presión",
                motivo: "Certificación avanzada validada. Apto para trabajos nocturnos de alta exigencia."
            };
        } else {
            return {
                autorizado: false,
                tarea: "ninguna",
                motivo: "El turno nocturno exige certificación avanzada obligatoria debido a la supervisión reducida."
            };
        }
    } 
    else if (tipoTurno === "diurno") {
        if (nivelCertificacion === "avanzada") {
            return {
                autorizado: true,
                tarea: "Ensamblaje de chasis pesado",
                motivo: "Certificación avanzada en turno diurno, asignado a estructuras de alta complejidad."
            };
        } else if (nivelCertificacion === "basica") {
            return {
                autorizado: true,
                tarea: "Soldadura de estructuras estándar",
                motivo: "Certificación básica validada. Apto para operar en turno diurno con supervisión habitual."
            };
        } else {
            return {
                autorizado: false,
                tarea: "ninguna",
                motivo: `El nivel de certificación '${certificacion}' no es válido en el sistema.`
            };
        }
    } 
    else {
        return {
            autorizado: false,
            tarea: "ninguna",
            motivo: `El turno '${turno}' no existe. Los turnos válidos son 'diurno' o 'nocturno'.`
        };
    }
}

// Pruebas
// 1. CASO NORMAL
console.log("--- Ejecutando Caso Normal ---");
const resultadoNormal = asignarTurnoSoldadura("basica", "diurno");
console.log(resultadoNormal);

// 2. CASO BORDE
console.log("\n--- Ejecutando Caso Borde (Falta de requisitos para el turno) ---");
const resultadoBorde = asignarTurnoSoldadura("basica", "nocturno");
console.log(resultadoBorde);
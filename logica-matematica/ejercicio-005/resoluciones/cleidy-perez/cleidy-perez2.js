const mecanicosDelMes=[
    {nombre: "Carlos", horasTrabajadas: 45, puntuacionBase:82},
    {nombre: "Jose", horasTrabajadas: 38, puntuacionBase: 86}
]

function evaluarReparacionesTaller(mecanicos, limiteMinimoHoras) {
  
    if (!mecanicos || mecanicos.length === 0 || limiteMinimoHoras <= 0) return [];

    const BONO_EFICIENCIA = 5;
    const PENALIZACION_RETRASO = 2;
    const resultados = [];


    for (let i = 0; i < mecanicos.length; i++) {
        const mecanico = mecanicos[i];
        
       
        const cumpleMinimo = mecanico.horasTrabajadas >= limiteMinimoHoras;
        
        
        let puntuacionFinal = mecanico.puntuacionBase;
        if (cumpleMinimo) {
            puntuacionFinal += BONO_EFICIENCIA;
        } else {
            puntuacionFinal -= PENALIZACION_RETRASO;
        }


        const clasificacion = puntuacionFinal >= 85 ? "Excelente" : "Regular";

        resultados.push({
            nombre: mecanico.nombre,
            horasTrabajadas: mecanico.horasTrabajadas,
            puntuacionFinal: puntuacionFinal,
            clasificacion: clasificacion
        });
    }

  
    return resultados;
}



console.log("--- Caso Normal ---");
console.log(evaluarReparacionesTaller(mecanicosDelMes, 40));

console.log("\n--- Caso Borde (Datos vacíos o límite inválido) ---");
console.log(evaluarReparacionesTaller([], 40));
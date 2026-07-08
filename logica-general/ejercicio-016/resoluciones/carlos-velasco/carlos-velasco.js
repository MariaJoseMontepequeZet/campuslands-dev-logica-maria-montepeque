const analizarEscena = (matriz) => {
    let estado = "Escena balanceada";
    let advertencias = [];

    for (let fila of matriz) {
        for (let valor of fila) {
            if (valor > 80) advertencias.push("Sobreexposición");
            if (valor < 10) advertencias.push("Subexposición");
        }
    }
    if (advertencias.length > 0) {
        return { 
            estado: "Alerta", 
            detalles: [...new Set(advertencias)]
        };
    }
    return { estado: estado, detalles: "Valores dentro del rango óptimo." };
};

const escenarioNormal = [[50, 60], [40, 70]];
const escenarioExtremo = [[90, 50], [5, 60]];

console.log(analizarEscena(escenarioNormal)); 
console.log(analizarEscena(escenarioExtremo));
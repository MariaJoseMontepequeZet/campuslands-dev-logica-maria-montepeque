const ordenesDelDia=[
    {placa: "2345", falla:"frenos desgastoados", prioridad: "alta", tiempoEstimadoHoras: 4 },
    {placa: "3456", falla: "cambio de aceite", prioridad: "baja", tiempoEstimadoHoras: 1},
    {placa: "7869", falla: "fuga de gasolina crítica", prioridad:"critico", tiempoEstimadoHoras: 5}
];

function ordenarPrioridades(carros){
    if(!carros || carros.length === 0){
        return[];
    }
    const listaCarros=[...carros];
    const mapaPrioridad={
        "critico":3,
        "alta": 2,
        "media": 1,
        "baja":0
    };
    listaOrdenada.sort((a,b)=> {
        const pesoA=mapaPrioridad[a.prioridad.toLowerCase()] || 0;
        const pesoB=mapaPrioridad[b.prioridad.toLowerCase()] || 0;

        if (pesoB !== pesoA) return pesoB - pesoA;

        return a.tiempoEstimadoHoras - b.tiempoEstimadoHoras;
    });

    return listaOrdenada.map((v, i)=>({
        posicionAtencion: i+1,
        placa:v.placa,
        prioridad:v.prioridad,
        tiempoEstimadoHoras: v.tiempoEstimadoHoras,
        accion: `Asignar a Bahia #${i+1}`,
        motivo: `Prioridad '${v.prioridad}' con tiempod de ${v.tiempoEstimadoHoras}h.`
    }));
}

console.log("--- Caso Normal ---");
console.log(ordenarPrioridades(ordenesDelDia));
console.log("\n--- Caso Borde ---");
console.log(ordenarPrioridades([]));
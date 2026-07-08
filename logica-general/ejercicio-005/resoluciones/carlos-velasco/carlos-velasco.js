const ordenarTrabajos = (ordenes) => {
    const pesos = { "Emergencia": 1, "Mantenimiento": 2, "Estética": 3 };
    
    const ordenado = [...ordenes].sort((a, b) => pesos[a.tipo] - pesos[b.tipo]);
    const siguiente = ordenado[0];

    return {
        siguiente_tarea: siguiente.descripcion,
        motivo: `Prioridad nivel ${pesos[siguiente.tipo]} asignada por tratarse de ${siguiente.tipo}.`
    };
};
const listaTrabajos = [
    { descripcion: "Cambio de aceite", tipo: "Mantenimiento" },
    { descripcion: "Reparación de frenos", tipo: "Emergencia" }
];

console.log(ordenarTrabajos(listaTrabajos));
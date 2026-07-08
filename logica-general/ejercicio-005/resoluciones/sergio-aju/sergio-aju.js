const prioridades = { "emergencia": 3, "preventiva": 2, "baja": 1 };


function ordenarTaller(lista) {
    return lista.sort((a, b) => prioridades[b.urgencia] - prioridades[a.urgencia]);
}

const trabajos = [
    {tarea: "Pintura", urgencia: "baja"},
    {tarea: "Frenos", urgencia: "emergencia"},
    {tarea: "Aceite", urgencia: "preventiva"}
];


console.log(ordenarTaller(trabajos));

const peleadores = [
    {
        nombre: "Carlos Ramírez",
        categoria: "Peso Ligero",
        victorias: 12
    },
    {
        nombre: "Luis Torres",
        categoria: "Peso Welter",
        victorias: 18
    },
    {
        nombre: "Andrés Gómez",
        categoria: "Peso Medio",
        victorias: 15
    },
    {
        nombre: "Miguel Herrera",
        categoria: "Peso Pesado",
        victorias: 10
    },
    {
        nombre: "Juan Pérez",
        categoria: "Peso Pluma",
        victorias: 20
    }
];

function organizarLista(peleadores) {

    peleadores.sort((a, b) => b.victorias - a.victorias);

    console.log("=== RANKING DE PELEADORES ===");

    peleadores.forEach((peleador, indice) => {
        console.log(`${indice + 1}. ${peleador.nombre} - ${peleador.categoria} (${peleador.victorias} victorias)`);
    });

}

organizarLista(peleadores);
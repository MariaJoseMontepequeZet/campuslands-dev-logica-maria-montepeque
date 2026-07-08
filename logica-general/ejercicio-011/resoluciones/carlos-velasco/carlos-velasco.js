const organizarTorneo = (peleadores) => {
    return peleadores.reduce((acc, peleador) => {
        const cat = peleador.categoria;
        if (!acc[cat]) acc[cat] = [];
        acc[cat].push(peleador.nombre);
        return acc;
    }, {});
};

const lista = [
    { nombre: "Juan", categoria: "Pluma" },
    { nombre: "Pedro", categoria: "Pesado" },
    { nombre: "Luis", categoria: "Pluma" }
];

console.log(organizarTorneo(lista));
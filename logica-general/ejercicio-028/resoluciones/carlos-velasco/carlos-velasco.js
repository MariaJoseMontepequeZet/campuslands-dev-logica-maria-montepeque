const ordenarPeliculas = (peliculas, preferencia) => {
    if (peliculas.length === 0) return { error: "No hay películas para ordenar." };

    let listaOrdenada = [...peliculas];

    if (preferencia === "lanzamiento") {
        listaOrdenada.sort((a, b) => a.anio - b.anio);
    } else {
        listaOrdenada.sort((a, b) => a.ordenCronologico - b.ordenCronologico);
    }

    return {
        secuencia: listaOrdenada.map(p => p.titulo),
        motivo: `Ordenado por preferencia de ${preferencia}.`
    };
};

const saga = [
    { titulo: "Star Wars: Episodio IV", anio: 1977, ordenCronologico: 4 },
    { titulo: "Star Wars: Episodio I", anio: 1999, ordenCronologico: 1 }
];

console.log(ordenarPeliculas(saga, "lanzamiento")); 
console.log(ordenarPeliculas(saga, "cronologico")); 
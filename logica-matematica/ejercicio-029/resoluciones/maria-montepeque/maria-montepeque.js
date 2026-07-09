//Analizador de sustos: Categoriza películas basadas en divisibilidad.

const analizarPeliculasMiedo = (puntajes) => {
    if (!puntajes || puntajes.length === 0) return "No hay datos.";

    return puntajes.map(p => {
        let categoria;
        if (p % 3 === 0) {
            categoria = "Terror Puro";
        } else if (p % 2 === 0) {
            categoria = "Suspenso";
        } else {
            categoria = "Clásico";
        }
        return { puntaje: p, categoria: categoria };
    });
};

// Prueba
console.log(analizarPeliculasMiedo([3, 4, 5, 6, 9]));
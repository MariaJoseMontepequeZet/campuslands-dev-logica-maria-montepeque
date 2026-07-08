/**
 * Clasifica y ordena a los peleadores según peso y experiencia.
 */
function organizarPeleadores(listaPeleadores) {
    // 1. Clasificar en categorías
    const categorias = { "Pluma": [], "Medio": [], "Pesado": [] };

    listaPeleadores.forEach(p => {
        if (p.peso < 65) categorias.Pluma.push(p);
        else if (p.peso <= 80) categorias.Medio.push(p);
        else categorias.Pesado.push(p);
    });

    // 2. Ordenar por experiencia (descendente) dentro de cada categoría
    Object.keys(categorias).forEach(cat => {
        categorias[cat].sort((a, b) => b.experiencia - a.experiencia);
    });

    return categorias;
}

// --- Dataset ---
const peleadores = [
    { nombre: "Alex", peso: 70, experiencia: 5 },
    { nombre: "Bruno", peso: 60, experiencia: 8 },
    { nombre: "Carlos", peso: 90, experiencia: 2 },
    { nombre: "Dani", peso: 75, experiencia: 10 }
];

const ranking = organizarPeleadores(peleadores);

console.log(JSON.stringify(ranking, null, 2));
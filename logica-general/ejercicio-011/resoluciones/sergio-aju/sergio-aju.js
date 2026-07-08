/**
 * Clasificador de peleadores de kickboxing
 */
function organizarCategorias(peleadores) {
    let catalogo = {
        pluma: [],
        welter: [],
        pesado: []
    };

    for (let i = 0; i < peleadores.length; i++) {
        let p = peleadores[i];
        
        // Regla: Clasificar por peso
        if (p.peso < 60) {
            catalogo.pluma.push(p.nombre);
        } else if (p.peso >= 60 && p.peso < 80) {
            catalogo.welter.push(p.nombre);
        } else {
            catalogo.pesado.push(p.nombre);
        }
    }
    
    return catalogo;
}

// Pruebas
const listaPeleadores = [
    { nombre: "Alex", peso: 55 },
    { nombre: "Bruno", peso: 70 },
    { nombre: "Carlos", peso: 95 }
];

console.log(organizarCategorias(listaPeleadores));
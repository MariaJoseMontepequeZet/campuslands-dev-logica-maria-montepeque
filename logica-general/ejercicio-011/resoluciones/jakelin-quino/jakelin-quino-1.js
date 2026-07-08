function organizarPeleadores(peleadores) {
    let categorias = {
        pluma: [],
        pesado: []
    };
    for (let peleador of peleadores) {
        if (peleador.peso < 70) {
            categorias.pluma.push(peleador.nombre);
        } else {
            categorias.pesado.push(peleador.nombre);
        }
    }
    return categorias;
}

const listaPeleadores = [
    { nombre: "Juan", peso: 65 },
    { nombre: "Pedro", peso: 90 },
    { nombre: "Luis", peso: 68 }
];

console.log(organizarPeleadores(listaPeleadores));
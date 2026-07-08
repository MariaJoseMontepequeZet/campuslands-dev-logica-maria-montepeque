const buscarAutoExclusivo = (autos, nombreBusqueda, velocidadMinima) => {
    const autoEncontrado = autos.find(a => a.nombre.toLowerCase() === nombreBusqueda.toLowerCase());

    if (!autoEncontrado) {
        return { accion: "No encontrado", motivo: "El modelo no existe en la base de datos." };
    }
    if (autoEncontrado.velocidadMaxima >= velocidadMinima) {
        return { accion: "Apto para el catálogo", motivo: `Supera los ${velocidadMinima} km/h.` };
    } else {
        return { accion: "Fuera de rango", motivo: "No alcanza la velocidad requerida." };
    }
};

const catalogo = [
    { nombre: "Bugatti Chiron", velocidadMaxima: 490 },
    { nombre: "Rimac Nevera", velocidadMaxima: 412 }
];

console.log(buscarAutoExclusivo(catalogo, "Bugatti Chiron", 450));
console.log(buscarAutoExclusivo(catalogo, "Toyota Corolla", 400));
const recomendarPelicula = (usuario, pelicula) => {
    if (pelicula.subgenero !== usuario.preferencia) {
        return { 
            accion: "No recomendada", 
            motivo: "El subgénero no coincide con tus intereses." 
        };
    }

    if (pelicula.costoAlquiler > usuario.presupuesto) {
        return { 
            accion: "Recomendación fuera de presupuesto", 
            motivo: "El costo de alquiler excede tu presupuesto actual." 
        };
    }

    return { 
        accion: "Recomendada para ver", 
        motivo: "La película coincide con tus gustos y está dentro de tu presupuesto." 
    };
};

const usuario = { preferencia: "Cyberpunk", presupuesto: 5 };
console.log(recomendarPelicula(usuario, { subgenero: "Cyberpunk", costoAlquiler: 3 })); 
console.log(recomendarPelicula(usuario, { subgenero: "Cyberpunk", costoAlquiler: 10 }));
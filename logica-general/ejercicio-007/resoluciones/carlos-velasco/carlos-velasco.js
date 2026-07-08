const validarCancion = (cancion) => {
    let estado = "Válida";
    let observacion = "Sin errores";

    if (cancion.duracionSegundos < 30) {
        estado = "Inconsistente";
        observacion = "Archivo demasiado corto (posible error de descarga).";
    } else if (cancion.genero === "" || cancion.genero === "desconocido") {
        estado = "Requiere atención";
        observacion = "Género musical no especificado.";
    } else if (cancion.duracionSegundos > 600) {
        estado = "Advertencia";
        observacion = "Duración inusual (posible mix o podcast).";
    }

    return { titulo: cancion.titulo, estado, observacion };
};

console.log(validarCancion({ titulo: "Bohemian Rhapsody", duracionSegundos: 354, genero: "Rock" })); 
console.log(validarCancion({ titulo: "Intro", duracionSegundos: 10, genero: "Pop" }));         
function procesarAccesoPelicula(titulo, esEstreno, edadUsuario) {
    if (edadUsuario < 13) {
        return { permiso: false, motivo: "Edad insuficiente para contenido de ciencia ficción." };
    }
    if (esEstreno) {
        if (edadUsuario < 18) {
            return { permiso: false, motivo: "Acceso denegado: Se requiere ser mayor de 18 para estrenos." };
        }
        return { permiso: true, motivo: "Acceso concedido al estreno." };
    }
    return { permiso: true, motivo: `Acceso concedido a la película ${titulo}.` };
}

console.log(procesarAccesoPelicula("Interstellar", false, 20));
console.log(procesarAccesoPelicula("Dune: Parte 2", true, 16)); 
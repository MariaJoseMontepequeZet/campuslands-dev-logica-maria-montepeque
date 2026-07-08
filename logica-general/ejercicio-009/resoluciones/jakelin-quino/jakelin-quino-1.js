function cambiarEstadoPelicula(estadoActual, accion) {
    if (estadoActual === "por publicar" && accion === "publicar") {
        return { nuevoEstado: "publicada", mensaje: "La película ahora es visible al público." };
    }
    if (estadoActual === "publicada" && accion === "archivar") {
        return { nuevoEstado: "archivada", mensaje: "La película ha sido retirada del catálogo." };
    }
    if (estadoActual === "archivada" && accion === "publicar") {
        return { nuevoEstado: "publicada", mensaje: "La película ha sido republicada con éxito." };
    }
    return { nuevoEstado: estadoActual, mensaje: "Acción no permitida para el estado actual." };
}

console.log(cambiarEstadoPelicula("por publicar", "publicar"));
console.log(cambiarEstadoPelicula("por publicar", "archivar"));
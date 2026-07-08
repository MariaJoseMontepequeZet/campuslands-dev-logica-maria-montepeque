const validarArte = (archivo) => {
    const formatosValidos = ["jpg", "png", "psd"];

    if (!formatosValidos.includes(archivo.formato)) {
        return { estado: "Rechazado", motivo: "Formato no compatible." };
    }

    if (archivo.tamanoMB > 50) {
        return { estado: "Rechazado", motivo: "El archivo supera los 50MB." };
    }

    if (archivo.resolucionDPI < 72) {
        return { estado: "Rechazado", motivo: "Resolución insuficiente." };
    }

    return { estado: "Aprobado", motivo: "Archivo listo para publicación." };
};

console.log(validarArte({ formato: "png", resolucionDPI: 300, tamanoMB: 10 }));
console.log(validarArte({ formato: "pdf", resolucionDPI: 300, tamanoMB: 5 }));
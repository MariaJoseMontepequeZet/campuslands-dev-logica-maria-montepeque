const validarDiseno = (archivo) => {
    if (archivo.dpi < 300) {
        return { estado: "Rechazado", motivo: "Resolución insuficiente (mínimo 300 DPI)." };
    }
    
    if (archivo.perfilColor !== "CMYK") {
        return { estado: "Rechazado", motivo: "El perfil de color debe ser CMYK para impresión." };
    }

    if (archivo.formato === "JPG") {
        return { estado: "Aprobado con advertencia", motivo: "Formato JPG aceptado, pero se recomienda TIFF para evitar pérdida de calidad." };
    }

    return { estado: "Aprobado", motivo: "El archivo cumple con todos los estándares de impresión." };
};

console.log(validarDiseno({ dpi: 300, formato: "TIFF", perfilColor: "CMYK" }));
console.log(validarDiseno({ dpi: 150, formato: "PNG", perfilColor: "RGB" }));  
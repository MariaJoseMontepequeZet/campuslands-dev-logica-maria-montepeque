function filtrarMoto(marca, cilindraje, estado) {
    if (estado !== "disponible") {
        return { accion: "Descartar", motivo: "La moto no se encuentra en inventario disponible." };
    }
    if (cilindraje > 600) {
        return { accion: "Mostrar en vitrina premium", motivo: "Moto de alto rendimiento." };
    }
    return { accion: "Mostrar en inventario general", motivo: "Moto apta para el catálogo estándar." };
}

console.log(filtrarMoto("Yamaha", 900, "disponible"));
console.log(filtrarMoto("Honda", 250, "vendida"));
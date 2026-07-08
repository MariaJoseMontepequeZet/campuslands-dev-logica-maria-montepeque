const ordenarTaller = (vehiculos) => {
    return vehiculos.sort((a, b) => {
        const obtenerPeso = (v) => {
            if (v.gravedad === "alta") return 3;
            if (v.gravedad === "media" && v.esClienteFrecuente) return 2;
            return 1;
        };
        return obtenerPeso(b) - obtenerPeso(a);
    });
};

const fila = [
    { modelo: "Sedan", gravedad: "media", esClienteFrecuente: false },
    { modelo: "Camioneta", gravedad: "alta", esClienteFrecuente: false },
    { modelo: "Moto", gravedad: "media", esClienteFrecuente: true }
];

console.log(ordenarTaller(fila));
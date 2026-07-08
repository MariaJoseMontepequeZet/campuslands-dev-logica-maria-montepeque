const analizarInventario = (inventario) => {
    if (inventario.length === 0) return "Inventario vacío";

    const kms = inventario.map(m => m.kilometraje);
    const maxKms = Math.max(...kms);
    const motoMax = inventario.find(m => m.kilometraje === maxKms);
    const sumaKms = kms.reduce((a, b) => a + b, 0);
    const promedio = sumaKms / inventario.length;
    const estado = promedio > 8000 ? "Alerta de Mantenimiento Masivo" : "Inventario Estable";

    return {
        moto_mas_usada: motoMax.modelo,
        promedio_km: promedio.toFixed(2),
        estado_inventario: estado
    };
};

const flota = [
    { modelo: "Yamaha MT-07", kilometraje: 12000 },
    { modelo: "Honda CB500", kilometraje: 4000 }
];

console.log(analizarInventario(flota));
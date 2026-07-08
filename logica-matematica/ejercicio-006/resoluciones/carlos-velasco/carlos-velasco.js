const convertirVelocidad = (auto) => {
    const factorMphAKmh = 1.60934;
    const velocidadKmh = auto.velocidadMph * factorMphAKmh;

    let categoria = "";

    if (velocidadKmh >= 400) {
        categoria = "Hiperdeportivo de élite";
    } else if (velocidadKmh >= 300) {
        categoria = "Deportivo de alto rendimiento";
    } else {
        categoria = "Deportivo estándar";
    }

    return {
        modelo: auto.nombre,
        velocidad_kmh: velocidadKmh.toFixed(2),
        categoria: categoria
    };
};

console.log(convertirVelocidad({ nombre: "Bugatti Chiron", velocidadMph: 261 })); 
console.log(convertirVelocidad({ nombre: "Auto Prueba", velocidadMph: 150 }));    
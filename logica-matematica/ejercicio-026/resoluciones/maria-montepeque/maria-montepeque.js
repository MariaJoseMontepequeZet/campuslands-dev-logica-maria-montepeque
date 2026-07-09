//Convierte velocidad de mph a km/h y clasifica el desempeño del motor.

function analizarVelocidad(velocidadMph, modelo) {
    if (typeof velocidadMph !== 'number' || velocidadMph < 0) {
        return { error: "Entrada inválida. Ingrese una velocidad positiva." };
    }

    const FACTOR_CONVERSION = 1.60934;
    const velocidadKmh = velocidadMph * FACTOR_CONVERSION;
    
    let categoria = "";
    if (velocidadKmh >= 400) {
        categoria = "Hiperdeportivo de élite";
    } else if (velocidadKmh >= 300) {
        categoria = "Superdeportivo avanzado";
    } else {
        categoria = "Deportivo estándar";
    }

    return {
        modelo: modelo,
        velocidadKmh: velocidadKmh.toFixed(2),
        categoria: categoria
    };
}

// Pruebas
console.log(analizarVelocidad(250, "Bugatti Chiron"));
console.log(analizarVelocidad(-10, "Error Test"));    
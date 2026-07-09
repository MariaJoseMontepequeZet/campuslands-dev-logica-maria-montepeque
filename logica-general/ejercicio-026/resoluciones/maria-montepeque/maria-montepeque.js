///Busca el primer auto que cumple con la velocidad mínima requerida 
function buscarAutoPorVelocidad(inventario, velocidadMinima) {
    // 1. Guardrail: Validación de entrada
    const vMin = Number(velocidadMinima);
    if (!Array.isArray(inventario) || inventario.length === 0 || !Number.isFinite(vMin)) {
        return { encontrado: false, mensaje: "El inventario es inválido o la velocidad mínima no es numérica." };
    }

    // 2. Proceso: Búsqueda segura con verificación de existencia de propiedad
    const autoEncontrado = inventario.find(auto => 
        auto && 
        typeof auto.velocidadMaxima === 'number' && 
        auto.velocidadMaxima >= vMin
    );

    // 3. Salida estructurada
    return autoEncontrado 
        ? {
            encontrado: true,
            auto: autoEncontrado,
            mensaje: `Vehículo apto: ${autoEncontrado.modelo || 'Desconocido'} (${autoEncontrado.velocidadMaxima} km/h)`
        }
        : {
            encontrado: false,
            mensaje: `Ningún vehículo alcanza los ${vMin} km/h.`
        };
}

// Ejemplo de prueba
const inventario = [
    { modelo: "Bugatti Chiron", velocidadMaxima: 420 },
    { modelo: "Rimac Nevera", velocidadMaxima: 412 },
    { modelo: "Auto Dañado" }
];

console.log(buscarAutoPorVelocidad(inventario, 415));
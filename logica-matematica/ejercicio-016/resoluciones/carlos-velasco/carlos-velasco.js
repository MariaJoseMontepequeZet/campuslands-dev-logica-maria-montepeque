const calcularPresupuestoAnimacion = (frames, costoFrame, descVolumen) => {
    const costoBase = frames * costoFrame;
    let ahorro = 0;
    if (frames > 500) {
        ahorro = costoBase * descVolumen;
    }
    
    const costoFinal = costoBase - ahorro;

    return {
        presupuesto_total: `$${costoFinal.toFixed(2)}`,
        ahorro_aplicado: `$${ahorro.toFixed(2)}`,
        explicacion: frames > 500 
            ? `Se aplicó un ${descVolumen * 100}% de descuento por volumen.` 
            : "No aplica descuento por volumen (mínimo 500 frames)."
    };
};

console.log(calcularPresupuestoAnimacion(600, 10, 0.1)); 
console.log(calcularPresupuestoAnimacion(200, 10, 0.1)); 
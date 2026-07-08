    const calcularProbabilidadPunto = (servicio, devolucion) => {
        if (servicio < 0 || servicio > 1 || devolucion < 0 || devolucion > 1) {
            return "Error: Los valores deben estar entre 0 y 1.";
        }

        const probabilidad = servicio * devolucion;
        const porcentaje = (probabilidad * 100).toFixed(2);

        let clasificacion = "";
        if (probabilidad > 0.70) clasificacion = "Probabilidad alta";
        else if (probabilidad >= 0.40) clasificacion = "Probabilidad media";
        else clasificacion = "Probabilidad baja";

        return {
            probabilidad_porcentaje: `${porcentaje}%`,
            clasificacion: clasificacion,
            explicacion: `Multiplicando efectividad de servicio (${servicio}) por devolución (${devolucion}).`
        };
    };
    console.log(calcularProbabilidadPunto(0.9, 0.85)); 
    console.log(calcularProbabilidadPunto(0.5, 0.3)); 
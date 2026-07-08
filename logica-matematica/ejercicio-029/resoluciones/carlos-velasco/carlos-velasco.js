const gestionarSeguridad = (habitaciones, numeroClave) => {
    if (!habitaciones || habitaciones.length === 0) return "No hay habitaciones.";

    const alarmas = habitaciones.filter(p => p > 0 && p % numeroClave === 0).length;

    const estado = alarmas >= 2 ? "Alerta total" : "Seguro";

    return {
        alarmas_activas: alarmas,
        estado_seguridad: estado,
        explicacion: `Se detectaron ${alarmas} habitaciones con ocupación múltiplo de ${numeroClave}.`
    };
};
console.log(gestionarSeguridad([4, 8, 3, 5], 4)); 
console.log(gestionarSeguridad([1, 7, 3, 5], 2)); 
const organizarPersonajes = (total, capacidad) => {
    if (capacidad <= 0) return "La capacidad debe ser mayor a 0.";

    const habitacionesLlenas = Math.floor(total / capacidad);
    const residuo = total % capacidad;

    return {
        habitaciones_completas: habitacionesLlenas,
        personas_en_habitacion_extra: residuo,
        estado: residuo === 0 ? "Distribución equilibrada" : "Distribución con excedente",
        explicacion: residuo === 0 
            ? "Todos los personajes están en grupos completos." 
            : `Hay ${residuo} persona(s) que requieren una habitación adicional.`
    };
};

console.log(organizarPersonajes(20, 5)); 
console.log(organizarPersonajes(22, 5)); 
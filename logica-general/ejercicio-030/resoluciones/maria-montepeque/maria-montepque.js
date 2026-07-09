//Gestor de itinerarios turísticos

const gestionarItinerario = (actividades, preferencia) => {
    // 1. Validación
    if (!actividades || actividades.length === 0) {
        return { error: "Itinerario vacío." };
    }

    // 2. Lógica de selección según la preferencia
    let seleccion = "";
    let motivo = "";

    if (preferencia === "aventura") {
        seleccion = actividades.find(a => a.tipo === "extremo") || "ninguna";
        motivo = "Buscamos adrenalina.";
    } else if (preferencia === "relax") {
        seleccion = actividades.find(a => a.tipo === "tranquilo") || "ninguna";
        motivo = "Buscamos descanso.";
    } else {
        seleccion = actividades[0].nombre;
        motivo = "Opción predeterminada.";
    }

    return {
        actividad_elegida: seleccion.nombre || seleccion,
        motivo: motivo
    };
};

// Ejemplo de uso
const miItinerario = [
    { nombre: "Trekking", tipo: "extremo" },
    { nombre: "Yoga en playa", tipo: "tranquilo" }
];

console.log(gestionarItinerario(miItinerario, "aventura"));
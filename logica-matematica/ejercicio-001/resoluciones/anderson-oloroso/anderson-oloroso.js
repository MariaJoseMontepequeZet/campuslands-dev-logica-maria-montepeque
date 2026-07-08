function calcularRendimiento(jugador) {
  const {
    nombre,
    victorias,
    derrotas,
    eliminaciones,
    asistencias
  } = jugador;

  if (
    victorias < 0 ||
    derrotas < 0 ||
    eliminaciones < 0 ||
    asistencias < 0
  ) {
    return {
      estado: "Error",
      motivo: "Las estadísticas no pueden contener valores negativos."
    };
  }

  const puntaje =
    (victorias * 100) +
    (eliminaciones * 10) +
    (asistencias * 5) -
    (derrotas * 30);

  return {
    jugador: nombre,
    puntaje,
    categoria:
      puntaje >= 300
        ? "Competidor Elite"
        : "Competidor en Desarrollo"
  };
}

const jugador = {
  nombre: "Shadow",
  victorias: 3,
  derrotas: 1,
  eliminaciones: 12,
  asistencias: 8
};

console.log(calcularRendimiento(jugador));
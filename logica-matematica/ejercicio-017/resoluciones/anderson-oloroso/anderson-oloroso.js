function calcularRankingArquitectura(proyectos) {
  if (!Array.isArray(proyectos) || proyectos.length === 0) {
    return {
      estado: "Error",
      motivo: "Debe existir al menos un proyecto registrado."
    };
  }

  let puntajeTotal = 0;
  let proyectoMayorPuntaje = proyectos[0];

  for (const proyecto of proyectos) {
    const {
      calidad,
      innovacion,
      eficiencia
    } = proyecto;

    if (
      calidad < 0 ||
      innovacion < 0 ||
      eficiencia < 0 ||
      calidad > 100 ||
      innovacion > 100 ||
      eficiencia > 100
    ) {
      return {
        estado: "Error",
        motivo: "Las estadísticas deben estar entre 0 y 100."
      };
    }

    const puntaje =
      (calidad * 0.4) +
      (innovacion * 0.35) +
      (eficiencia * 0.25);

    proyecto.puntajeFinal = Number(puntaje.toFixed(2));

    puntajeTotal += puntaje;

    if (
      proyecto.puntajeFinal >
      proyectoMayorPuntaje.puntajeFinal
    ) {
      proyectoMayorPuntaje = proyecto;
    }
  }

  const promedioRanking = Number(
    (puntajeTotal / proyectos.length).toFixed(2)
  );

  return {
    proyectosEvaluados: proyectos.length,
    promedioRanking,
    mejorProyecto: proyectoMayorPuntaje.nombre,
    mejorPuntaje: proyectoMayorPuntaje.puntajeFinal
  };
}

const proyectos = [
  {
    nombre: "Torre Moderna",
    calidad: 90,
    innovacion: 85,
    eficiencia: 80
  },
  {
    nombre: "Casa Inteligente",
    calidad: 75,
    innovacion: 95,
    eficiencia: 90
  },
  {
    nombre: "Centro Cultural",
    calidad: 88,
    innovacion: 70,
    eficiencia: 85
  }
];

console.log(calcularRankingArquitectura(proyectos));
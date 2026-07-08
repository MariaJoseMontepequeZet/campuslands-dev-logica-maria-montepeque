const saltadorNoApto = {
  nombre: "Luis",
  edad: 30,
  peso: 120,
  certificacionMedica: false,
  cursoBasico: true,
  velocidadViento: 35
};

function verificarAptitud(saltador) {

  if (!saltador || typeof saltador !== "object") {
    return { error: "Datos de saltador inválidos" };
  }

  const motivosRechazo = [];

  const reglas = [
    {
      nombre: "Edad mínima",
      validar: () => saltador.edad >= 18,
      motivo: `Edad insuficiente: ${saltador.edad} años (mínimo 18)`
    },
    {
      nombre: "Peso permitido",
      validar: () => saltador.peso >= 40 && saltador.peso <= 110,
      motivo: `Peso fuera de rango: ${saltador.peso} kg (permitido 40-110 kg)`
    },
    {
      nombre: "Certificación médica",
      validar: () => saltador.certificacionMedica === true,
      motivo: "No cuenta con certificación médica vigente"
    },
    {
      nombre: "Curso básico",
      validar: () => saltador.cursoBasico === true,
      motivo: "No ha completado el curso básico de paracaidismo"
    },
    {
      nombre: "Velocidad del viento",
      validar: () => saltador.velocidadViento < 30,
      motivo: `Viento demasiado fuerte: ${saltador.velocidadViento} km/h (máximo 29 km/h)`
    }
  ];

  for (const regla of reglas) {
    if (!regla.validar()) {
      motivosRechazo.push(regla.motivo);
    }
  }

  if (motivosRechazo.length === 0) {
    return {
      resultado: "APTO",
      nombre: saltador.nombre,
      detalle: `${saltador.nombre} cumple todos los requisitos de seguridad`,
      motivosRechazo: []
    };
  } else {
    return {
      resultado: "NO APTO",
      nombre: saltador.nombre,
      detalle: `${saltador.nombre} no cumple con ${motivosRechazo.length} requisito(s)`,
      motivosRechazo: motivosRechazo
    };
  }
}

console.log(verificarAptitud(saltadorNoApto));
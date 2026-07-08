function convertirDatosHiperdeportivo(auto) {
  const {
    modelo,
    velocidadKmH,
    potenciaHP,
    pesoKg
  } = auto;

  if (
    velocidadKmH < 0 ||
    potenciaHP < 0 ||
    pesoKg <= 0
  ) {
    return {
      estado: "Error",
      motivo: "Los datos del vehículo deben ser valores válidos."
    };
  }

  const velocidadMS = Number((velocidadKmH / 3.6).toFixed(2));

  const potenciaKW = Number((potenciaHP * 0.7457).toFixed(2));

  const pesoLibras = Number((pesoKg * 2.20462).toFixed(2));

  return {
    modelo,
    conversiones: {
      velocidad: `${velocidadMS} m/s`,
      potencia: `${potenciaKW} kW`,
      peso: `${pesoLibras} lb`
    }
  };
}

const auto = {
  modelo: "Ferrari SF90 Stradale",
  velocidadKmH: 340,
  potenciaHP: 986,
  pesoKg: 1570
};

console.log(convertirDatosHiperdeportivo(auto));
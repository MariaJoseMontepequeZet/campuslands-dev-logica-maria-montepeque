function calcularDisenoTatuaje(diseno) {
  const {
    nombre,
    tipo,
    medidas
  } = diseno;

  if (!medidas || medidas.length === 0) {
    return {
      estado: "Error",
      motivo: "Debe ingresar las medidas del tatuaje."
    };
  }

  let area;
  let perimetro;

  if (tipo === "rectangulo") {
    const { ancho, alto } = medidas;

    if (ancho <= 0 || alto <= 0) {
      return {
        estado: "Error",
        motivo: "Las medidas deben ser valores positivos."
      };
    }

    area = ancho * alto;
    perimetro = 2 * (ancho + alto);

  } else if (tipo === "circulo") {
    const { radio } = medidas;

    if (radio <= 0) {
      return {
        estado: "Error",
        motivo: "El radio debe ser mayor que cero."
      };
    }

    area = Math.PI * Math.pow(radio, 2);
    perimetro = 2 * Math.PI * radio;

  } else {
    return {
      estado: "Error",
      motivo: "Tipo de tatuaje no soportado."
    };
  }

  return {
    nombreDiseno: nombre,
    tipo,
    area: Number(area.toFixed(2)),
    perimetro: Number(perimetro.toFixed(2))
  };
}

const tatuaje = {
  nombre: "Dragon Tribal",
  tipo: "rectangulo",
  medidas: {
    ancho: 15,
    alto: 8
  }
};

console.log(calcularDisenoTatuaje(tatuaje));
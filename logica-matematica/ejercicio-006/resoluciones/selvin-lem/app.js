function calcularConversionVelocidad(participantes, bono, penalizacion) {
  if (!Array.isArray(participantes) || participantes.length === 0) {
    return { error: "participantes vacio o invalido" };
  }
  const ordenado = [...participantes].sort((a, b) => a - b);
  const n = ordenado.length;
  const mid = Math.floor(n / 2);
  const mediana = n % 2 === 0 ? (ordenado[mid - 1] + ordenado[mid]) / 2 : ordenado[mid];

  const FACTOR_KMH_A_MPH = 0.621371;
  const velocidad_mph = Math.round(mediana * FACTOR_KMH_A_MPH * 100) / 100;

  const puntaje_final = Math.round(mediana) + bono - penalizacion;

  let clasificacion;
  if (velocidad_mph >= 13) clasificacion = "competitivo";
  else if (velocidad_mph >= 8) clasificacion = "intermedio";
  else clasificacion = "principiante";

  return {
    velocidad_mph,
    puntaje_final,
    clasificacion,
    explicacion: "se convirtio la mediana de km/h a mph, y se calculo el puntaje final sumando el bono y restando la penalizacion."
  };
}

// prueba normal (ejemplo)
console.log(calcularConversionVelocidad([12, 18, 25, 30], 8, 3));
// { velocidad_mph: 13.36, puntaje_final: 27, clasificacion: 'competitivo', ... }

// prueba caso borde (velocidad baja)
console.log(calcularConversionVelocidad([5, 6, 7], 0, 0));
// { velocidad_mph: 3.73, puntaje_final: 6, clasificacion: 'principiante', ... }

// prueba caso borde (array vacio)
console.log(calcularConversionVelocidad([], 5, 5));
// { error: 'participantes vacio o invalido' }
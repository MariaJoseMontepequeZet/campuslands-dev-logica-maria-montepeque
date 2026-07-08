function calcularPatronPuntuacion(participantes, bono, penalizacion) {
  if (!Array.isArray(participantes) || participantes.length === 0) {
    return { error: "participantes vacio o invalido" };
  }
  const n = participantes.length;
  const promedio = participantes.reduce((a, b) => a + b, 0) / n;
  const picos = participantes.filter((p) => p > promedio).length;
  const proporcion_picos = picos / n;

  const ordenado = [...participantes].sort((a, b) => a - b);
  const mid = Math.floor(n / 2);
  const mediana = n % 2 === 0 ? (ordenado[mid - 1] + ordenado[mid]) / 2 : ordenado[mid];
  const puntaje_final = Math.round(mediana) + bono - penalizacion;

  let clasificacion;
  if (proporcion_picos >= 0.5) clasificacion = "competitivo";
  else if (proporcion_picos >= 0.25) clasificacion = "intermedio";
  else clasificacion = "principiante";

  return {
    picos,
    proporcion_picos: Math.round(proporcion_picos * 100) / 100,
    puntaje_final,
    clasificacion,
    explicacion: "se conto cuantas puntuaciones superan el promedio (picos) para identificar el patron, y se calculo el puntaje final sumando el bono y restando la penalizacion."
  };
}

// prueba normal (ejemplo)
console.log(calcularPatronPuntuacion([12, 18, 25, 30], 8, 3));
// { picos: 2, proporcion_picos: 0.5, puntaje_final: 27, clasificacion: 'competitivo', ... }

// prueba caso borde (sin picos, todos iguales)
console.log(calcularPatronPuntuacion([10, 10, 10], 0, 0));
// { picos: 0, proporcion_picos: 0, puntaje_final: 10, clasificacion: 'principiante', ... }

// prueba caso borde (array vacio)
console.log(calcularPatronPuntuacion([], 5, 5));
// { error: 'participantes vacio o invalido' }
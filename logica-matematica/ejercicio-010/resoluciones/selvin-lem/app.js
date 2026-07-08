function calcularRedondeoPrecision(participantes, bono, penalizacion) {
  if (!Array.isArray(participantes) || participantes.length === 0) {
    return { error: "participantes vacio o invalido" };
  }
  const n = participantes.length;
  const promedio_exacto = participantes.reduce((a, b) => a + b, 0) / n;
  const promedio_redondeado = Math.round(promedio_exacto);
  const error_redondeo = Math.abs(promedio_exacto - promedio_redondeado);

  const ordenado = [...participantes].sort((a, b) => a - b);
  const mid = Math.floor(n / 2);
  const mediana = n % 2 === 0 ? (ordenado[mid - 1] + ordenado[mid]) / 2 : ordenado[mid];
  const puntaje_final = Math.round(mediana) + bono - penalizacion;

  let clasificacion;
  if (error_redondeo <= 0.25) clasificacion = "competitivo";
  else if (error_redondeo <= 0.4) clasificacion = "intermedio";
  else clasificacion = "principiante";

  return {
    promedio_exacto: Math.round(promedio_exacto * 100) / 100,
    promedio_redondeado,
    error_redondeo: Math.round(error_redondeo * 100) / 100,
    puntaje_final,
    clasificacion,
    explicacion: "se comparo el promedio exacto contra el promedio redondeado para medir el error de precision, y se calculo el puntaje final sumando el bono y restando la penalizacion."
  };
}

// prueba normal (ejemplo)
console.log(calcularRedondeoPrecision([12, 18, 25, 30], 8, 3));
// { promedio_exacto: 21.25, promedio_redondeado: 21, error_redondeo: 0.25, puntaje_final: 27, clasificacion: 'competitivo', ... }

// prueba caso borde (error de redondeo maximo, 0.5)
console.log(calcularRedondeoPrecision([10, 11], 0, 0));
// promedio_exacto: 10.5, promedio_redondeado: 10 o 11, error_redondeo: 0.5 -> principiante

// prueba caso borde (array vacio)
console.log(calcularRedondeoPrecision([], 5, 5));
// { error: 'participantes vacio o invalido' }
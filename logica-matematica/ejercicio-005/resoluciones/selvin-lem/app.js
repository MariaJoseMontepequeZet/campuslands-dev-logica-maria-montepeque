function calcularLimiteMinimo(participantes, bono, penalizacion) {
  if (!Array.isArray(participantes) || participantes.length === 0) {
    return { error: "participantes vacio o invalido" };
  }
  const minimo = Math.min(...participantes);
  const margen_seguridad = minimo - penalizacion;

  const ordenado = [...participantes].sort((a, b) => a - b);
  const n = ordenado.length;
  const mid = Math.floor(n / 2);
  const mediana = n % 2 === 0 ? (ordenado[mid - 1] + ordenado[mid]) / 2 : ordenado[mid];
  const puntaje_final = Math.round(mediana) + bono - penalizacion;

  let clasificacion;
  if (margen_seguridad >= bono) clasificacion = "competitivo";
  else if (margen_seguridad >= bono * 0.5) clasificacion = "intermedio";
  else clasificacion = "principiante";

  return {
    minimo,
    margen_seguridad,
    puntaje_final,
    clasificacion,
    explicacion: "se calculo el minimo del taller, se le resto la penalizacion para obtener el margen de seguridad, y se comparo contra el bono como limite exigido."
  };
}

// prueba normal (ejemplo)
console.log(calcularLimiteMinimo([12, 18, 25, 30], 8, 3));
// { minimo: 12, margen_seguridad: 9, puntaje_final: 27, clasificacion: 'competitivo', ... }

// prueba caso borde (minimo igual a la penalizacion, margen 0)
console.log(calcularLimiteMinimo([3, 10, 14], 5, 3));
// { minimo: 3, margen_seguridad: 0, puntaje_final: 9, clasificacion: 'principiante', ... }

// prueba caso borde (array vacio)
console.log(calcularLimiteMinimo([], 5, 5));
// { error: 'participantes vacio o invalido' }
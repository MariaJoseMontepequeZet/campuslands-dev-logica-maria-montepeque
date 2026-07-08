function calcularSecuencia(participantes, bono, penalizacion) {
  if (!Array.isArray(participantes) || participantes.length < 2) {
    return { error: "se necesitan al menos 2 elementos en participantes" };
  }
  const diferencias = [];
  for (let i = 1; i < participantes.length; i++) {
    diferencias.push(participantes[i] - participantes[i - 1]);
  }
  const diferencia_promedio =
    diferencias.reduce((a, b) => a + b, 0) / diferencias.length;
  const variabilidad =
    diferencias.reduce((acc, d) => acc + Math.abs(d - diferencia_promedio), 0) /
    diferencias.length;

  const ordenado = [...participantes].sort((a, b) => a - b);
  const n = ordenado.length;
  const mid = Math.floor(n / 2);
  const mediana = n % 2 === 0 ? (ordenado[mid - 1] + ordenado[mid]) / 2 : ordenado[mid];
  const puntaje_final = Math.round(mediana) + bono - penalizacion;

  let clasificacion;
  if (variabilidad <= 1) clasificacion = "competitivo";
  else if (variabilidad <= 3) clasificacion = "intermedio";
  else clasificacion = "principiante";

  return {
    diferencia_promedio: Math.round(diferencia_promedio * 100) / 100,
    variabilidad: Math.round(variabilidad * 100) / 100,
    puntaje_final,
    clasificacion,
    explicacion: "se calcularon las diferencias entre elementos consecutivos para medir que tan regular es la secuencia, y se comparo la variabilidad contra limites fijos."
  };
}

// prueba normal (ejemplo)
console.log(calcularSecuencia([12, 18, 25, 30], 8, 3));
// { diferencia_promedio: 6, variabilidad: 0.67, puntaje_final: 27, clasificacion: 'competitivo', ... }

// prueba caso borde (secuencia irregular)
console.log(calcularSecuencia([5, 40, 6, 50], 0, 0));
// diferencias: [35, -34, 44] -> alta variabilidad -> principiante

// prueba caso borde (menos de 2 elementos)
console.log(calcularSecuencia([10], 5, 5));
// { error: 'se necesitan al menos 2 elementos en participantes' }
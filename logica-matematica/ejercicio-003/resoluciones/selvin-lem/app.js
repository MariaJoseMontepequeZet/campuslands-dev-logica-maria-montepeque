function calcularPromedioMediana(participantes, bono, penalizacion) {
  if (!Array.isArray(participantes) || participantes.length === 0) {
    return { error: "participantes vacio o invalido" };
  }
  const n = participantes.length;
  const promedio = participantes.reduce((a, b) => a + b, 0) / n;

  const ordenado = [...participantes].sort((a, b) => a - b);
  const mid = Math.floor(n / 2);
  const mediana = n % 2 === 0 ? (ordenado[mid - 1] + ordenado[mid]) / 2 : ordenado[mid];

  const puntaje_final = Math.round(mediana) + bono - penalizacion;

  let clasificacion;
  if (puntaje_final >= promedio) clasificacion = "competitivo";
  else if (puntaje_final >= promedio * 0.7) clasificacion = "intermedio";
  else clasificacion = "principiante";

  return {
    promedio: Math.round(promedio * 100) / 100,
    mediana,
    puntaje_final,
    clasificacion,
    explicacion: "se calculo la mediana para el puntaje base, se sumo el bono y resto la penalizacion; se comparo contra el promedio del grupo para clasificar."
  };
}

// prueba normal (ejemplo)
console.log(calcularPromedioMediana([12, 18, 25, 30], 8, 3));
// { promedio: 21.25, mediana: 21.5, puntaje_final: 27, clasificacion: 'competitivo', ... }

// prueba caso borde (numeros iguales)
console.log(calcularPromedioMediana([20, 20, 20], 0, 0));
// { promedio: 20, mediana: 20, puntaje_final: 20, clasificacion: 'competitivo', ... }

// prueba caso borde (array vacio)
console.log(calcularPromedioMediana([], 5, 5));
// { error: 'participantes vacio o invalido' }
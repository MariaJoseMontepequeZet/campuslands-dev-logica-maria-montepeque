function calcularPuntaje(participantes, bono, penalizacion) {
  if (!Array.isArray(participantes) || participantes.length === 0) {
    return { error: "participantes vacio o invalido" };
  }
  const ordenado = [...participantes].sort((a, b) => a - b);
  const n = ordenado.length;
  const mid = Math.floor(n / 2);
  const mediana = n % 2 === 0 ? (ordenado[mid - 1] + ordenado[mid]) / 2 : ordenado[mid];
  const puntaje_final = Math.round(mediana) + bono - penalizacion;

  let clasificacion;
  if (puntaje_final >= 25) clasificacion = "competitivo";
  else if (puntaje_final >= 15) clasificacion = "intermedio";
  else clasificacion = "principiante";

  return {
    puntaje_final,
    clasificacion,
    explicacion: "se calculo la mediana de los participantes, se sumo el bono y se resto la penalizacion segun las reglas."
  };
}

// prueba normal (ejemplo)
console.log(calcularPuntaje([12, 18, 25, 30], 8, 3));
// { puntaje_final: 27, clasificacion: 'competitivo', ... }

// prueba caso borde (un solo participante)
console.log(calcularPuntaje([10], 0, 0));
// { puntaje_final: 10, clasificacion: 'principiante', ... }

// prueba caso borde (array vacio)
console.log(calcularPuntaje([], 5, 5));
// { error: 'participantes vacio o invalido' }
function calcularDivisibilidad(participantes, bono, penalizacion) {
  if (!Array.isArray(participantes) || participantes.length === 0) {
    return { error: "participantes vacio o invalido" };
  }
  const n = participantes.length;
  const DIVISOR = 3;
  const divisibles_entre_3 = participantes.filter((p) => p % DIVISOR === 0).length;
  const proporcion_divisibles = divisibles_entre_3 / n;

  const ordenado = [...participantes].sort((a, b) => a - b);
  const mid = Math.floor(n / 2);
  const mediana = n % 2 === 0 ? (ordenado[mid - 1] + ordenado[mid]) / 2 : ordenado[mid];
  const puntaje_final = Math.round(mediana) + bono - penalizacion;

  let clasificacion;
  if (proporcion_divisibles >= 0.5) clasificacion = "competitivo";
  else if (proporcion_divisibles >= 0.25) clasificacion = "intermedio";
  else clasificacion = "principiante";

  return {
    divisibles_entre_3,
    proporcion_divisibles: Math.round(proporcion_divisibles * 100) / 100,
    puntaje_final,
    clasificacion,
    explicacion: "se conto cuantas duraciones son divisibles entre 3 usando el operador modulo, y se calculo el puntaje final sumando el bono y restando la penalizacion."
  };
}

// prueba normal (ejemplo)
console.log(calcularDivisibilidad([12, 18, 25, 30], 8, 3));
// { divisibles_entre_3: 3, proporcion_divisibles: 0.75, puntaje_final: 27, clasificacion: 'competitivo', ... }

// prueba caso borde (ninguno divisible)
console.log(calcularDivisibilidad([7, 8, 10], 0, 0));
// { divisibles_entre_3: 0, proporcion_divisibles: 0, puntaje_final: 8, clasificacion: 'principiante', ... }

// prueba caso borde (array vacio)
console.log(calcularDivisibilidad([], 5, 5));
// { error: 'participantes vacio o invalido' }
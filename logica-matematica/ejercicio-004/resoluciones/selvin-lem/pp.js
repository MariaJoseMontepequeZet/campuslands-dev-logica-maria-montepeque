function calcularRangoMaximo(participantes, bono, penalizacion) {
  if (!Array.isArray(participantes) || participantes.length === 0) {
    return { error: "participantes vacio o invalido" };
  }
  const maximo = Math.max(...participantes);
  const minimo = Math.min(...participantes);
  const rango = maximo - minimo;

  const ordenado = [...participantes].sort((a, b) => a - b);
  const n = ordenado.length;
  const mid = Math.floor(n / 2);
  const mediana = n % 2 === 0 ? (ordenado[mid - 1] + ordenado[mid]) / 2 : ordenado[mid];

  const puntaje_final = Math.round(mediana) + bono - penalizacion;

  let clasificacion;
  if (puntaje_final >= rango) clasificacion = "competitivo";
  else if (puntaje_final >= rango * 0.5) clasificacion = "intermedio";
  else clasificacion = "principiante";

  return {
    maximo,
    minimo,
    rango,
    puntaje_final,
    clasificacion,
    explicacion: "se calculo el rango entre el maximo y minimo del inventario, y se comparo contra el puntaje final (mediana + bono - penalizacion) para clasificar."
  };
}

// prueba normal (ejemplo)
console.log(calcularRangoMaximo([12, 18, 25, 30], 8, 3));
// { maximo: 30, minimo: 12, rango: 18, puntaje_final: 27, clasificacion: 'competitivo', ... }

// prueba caso borde (todos iguales, rango 0)
console.log(calcularRangoMaximo([15, 15, 15], 0, 0));
// { maximo: 15, minimo: 15, rango: 0, puntaje_final: 15, clasificacion: 'competitivo', ... }

// prueba caso borde (array vacio)
console.log(calcularRangoMaximo([], 5, 5));
// { error: 'participantes vacio o invalido' }
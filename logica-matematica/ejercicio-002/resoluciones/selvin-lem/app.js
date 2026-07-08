function calcularRendimiento(participantes, bono, penalizacion) {
  if (!Array.isArray(participantes) || participantes.length === 0) {
    return { error: "participantes vacio o invalido" };
  }
  const ordenado = [...participantes].sort((a, b) => a - b);
  const n = ordenado.length;
  const mid = Math.floor(n / 2);
  const mediana = n % 2 === 0 ? (ordenado[mid - 1] + ordenado[mid]) / 2 : ordenado[mid];
  const puntaje_final = Math.round(mediana) + bono - penalizacion;

  const maximo = Math.max(...ordenado);
  const porcentaje_rendimiento = maximo === 0 ? 0 : Math.round((puntaje_final / maximo) * 100);

  let clasificacion;
  if (porcentaje_rendimiento >= 80) clasificacion = "competitivo";
  else if (porcentaje_rendimiento >= 50) clasificacion = "intermedio";
  else clasificacion = "principiante";

  return {
    puntaje_final,
    porcentaje_rendimiento,
    clasificacion,
    explicacion: "se calculo la mediana, se sumo el bono y resto la penalizacion; luego se saco el porcentaje frente al maximo del grupo."
  };
}

// prueba normal (ejemplo)
console.log(calcularRendimiento([12, 18, 25, 30], 8, 3));
// { puntaje_final: 27, porcentaje_rendimiento: 90, clasificacion: 'competitivo', ... }

// prueba caso borde (participante unico, bono/penalizacion en 0)
console.log(calcularRendimiento([15], 0, 0));
// { puntaje_final: 15, porcentaje_rendimiento: 100, clasificacion: 'competitivo', ... }

// prueba caso borde (array vacio)
console.log(calcularRendimiento([], 5, 5));
// { error: 'participantes vacio o invalido' }
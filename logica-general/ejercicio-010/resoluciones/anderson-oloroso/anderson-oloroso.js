function filtrarViajes(destinos, { presupuesto, tiempoDisponible } = {}) {
  const resultado = [];

  for (const d of destinos) {
    // Regla 1: costo <= presupuesto
    if (d.costo > presupuesto) continue;

    // Regla 2: dias <= tiempoDisponible
    if (d.dias > tiempoDisponible) continue;

    resultado.push(d);
  }

  // Regla 3: ordenar (costo asc, luego dias asc)
  resultado.sort((a, b) => {
    if (a.costo !== b.costo) return a.costo - b.costo;
    return a.dias - b.dias;
  });

  return resultado;
}

// Ejemplo funcional
const destinos = [
  { nombre: "Isla", costo: 1200, dias: 5 },
  { nombre: "Ciudad", costo: 800, dias: 3 },
  { nombre: "Montaña", costo: 800, dias: 4 },
  { nombre: "Playa", costo: 1500, dias: 4 },
];

const solucion = filtrarViajes(destinos, { presupuesto: 1000, tiempoDisponible: 4 });
console.log(solucion);
// Esperado: [
//   { nombre: "Ciudad", costo: 800, dias: 3 },
//   { nombre: "Montaña", costo: 800, dias: 4 }
// ]

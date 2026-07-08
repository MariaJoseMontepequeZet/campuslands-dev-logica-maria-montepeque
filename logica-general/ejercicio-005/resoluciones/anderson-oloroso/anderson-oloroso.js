const tickets = [
  { id: "A", prioridad: "alta", placa: "F458HNK" },
  { id: "B", prioridad: "baja", placa: "B488HJY" },
  { id: "C", prioridad: "media", placa: "A123XYZ" },
];

function ordenarTickets(tickets) {
  const orden = { alta: 0, media: 1, baja: 2 }; // alta primero

  return [...tickets].sort((a, b) => {
    return orden[a.prioridad] - orden[b.prioridad];
  });
}

const resultado = ordenarTickets(tickets);
console.log(resultado);
console.log(resultado.map(t => t.id)); // esperado: ["A","C","B"]

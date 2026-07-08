const inventarioTaller = [
  { repuesto: "Aceite 20W50", stock: 15, minimoPermitido: 5 },
  { repuesto: "Pastillas de freno", stock: 3, minimoPermitido: 6 },
  { repuesto: "Filtro de aire", stock: 8, minimoPermitido: 4 },
  { repuesto: "Bujías", stock: 2, minimoPermitido: 10 },
  { repuesto: "Amortiguadores", stock: 0, minimoPermitido: 2 }
];

let repuestoMenosStock = inventarioTaller[0] || null;
let alertasReabastecimiento = 0;

for (let i = 0; i < inventarioTaller.length; i++) {
  let item = inventarioTaller[i];

  if (item.stock < repuestoMenosStock.stock) {
    repuestoMenosStock = item;
  }

  if (item.stock <= item.minimoPermitido) {
    alertasReabastecimiento++;
  }
}

console.log("Repuesto con menor stock:", repuestoMenosStock ? repuestoMenosStock.repuesto : "Ninguno");
console.log(`Alertas críticas por límite mínimo: ${alertasReabastecimiento}`);
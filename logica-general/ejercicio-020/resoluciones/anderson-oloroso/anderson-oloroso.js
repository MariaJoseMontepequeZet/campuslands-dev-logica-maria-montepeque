const carritoPedidos = [
  { plato: "Hamburguesa Callejera", categoria: "Comida Rápida", precio: 8, distanciaKM: 2 },
  { plato: "Tacos de Asada", categoria: "Tradicional", precio: 6, distanciaKM: 1.5 },
  { plato: "Hot Dog Gigante", categoria: "Comida Rápida", precio: 5, distanciaKM: 4.5 },
  { plato: "Gringas de Pollo", categoria: "Tradicional", precio: 7, distanciaKM: 3.2 }
];

function seleccionarEstrategiaEnvio(pedidos) {
  if (!pedidos || pedidos.length === 0) {
    return { accion: "Cancelar despacho", motivo: "El carrito de pedidos urbanos está vacío." };
  }

  let costoTotalPlatos = 0;
  let maximaDistancia = 0;

  for (let i = 0; i < pedidos.length; i++) {
    const pedido = pedidos[i];
    costoTotalPlatos += pedido.precio;

    if (pedido.distanciaKM > maximaDistancia) {
      maximaDistancia = pedido.distanciaKM;
    }
  }

  const aplicaEnvioGratis = costoTotalPlatos >= 20;
  const esDistanciaCritica = maximaDistancia > 4.0;

  let costoEnvio = 0;
  let tipoTransporte = "Ninguno";

  if (aplicaEnvioGratis && !esDistanciaCritica) {
    costoEnvio = 0;
    tipoTransporte = "Bicicleta (Eco)";
  } else if (esDistanciaCritica) {
    costoEnvio = 5;
    tipoTransporte = "Motocicleta (Express)";
  } else {
    costoEnvio = 2;
    tipoTransporte = "Bicicleta (Standard)";
  }

  const granTotal = costoTotalPlatos + costoEnvio;

  return {
    accion: `Despachar Pedido -> Logística: Enviar en ${tipoTransporte}`,
    motivo: esDistanciaCritica
      ? `Distancia crítica detectada (${maximaDistancia}KM > 4KM). Tarifa fija de envío aplicada: $${costoEnvio}. Total a cobrar: $${granTotal}.`
      : aplicaEnvioGratis
        ? `Promoción alcanzada: Consumo mayor o igual a $20 ($${costoTotalPlatos}). Envío gratuito dentro del radio seguro. Total a cobrar: $${granTotal}.`
        : `Consumo estándar ($${costoTotalPlatos}). Envío base de $${costoEnvio} dentro del radio seguro. Total a cobrar: $${granTotal}.`
  };
}

console.log(seleccionarEstrategiaEnvio(carritoPedidos));
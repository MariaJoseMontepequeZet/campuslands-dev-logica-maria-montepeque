function simularPedidoComidaUrbana(pedido) {
  const {
    cliente,
    productos,
    cantidadPersonas
  } = pedido;

  if (
    !Array.isArray(productos) ||
    productos.length === 0 ||
    cantidadPersonas <= 0
  ) {
    return {
      estado: "Error",
      motivo: "El pedido debe tener productos y una cantidad válida de personas."
    };
  }

  let subtotal = 0;
  let cantidadTotalProductos = 0;

  for (const producto of productos) {
    const {
      nombre,
      precio,
      cantidad
    } = producto;

    if (precio <= 0 || cantidad <= 0) {
      return {
        estado: "Error",
        motivo: "Los precios y cantidades deben ser positivos."
      };
    }

    subtotal += precio * cantidad;
    cantidadTotalProductos += cantidad;
  }

  let descuento = 0;

  if (cantidadTotalProductos >= 10) {
    descuento = 0.15;
  } else if (cantidadTotalProductos >= 5) {
    descuento = 0.10;
  }

  const valorDescuento = Number(
    (subtotal * descuento).toFixed(2)
  );

  const totalFinal = Number(
    (subtotal - valorDescuento).toFixed(2)
  );

  const costoPorPersona = Number(
    (totalFinal / cantidadPersonas).toFixed(2)
  );

  return {
    cliente,
    productosComprados: cantidadTotalProductos,
    subtotal: Number(subtotal.toFixed(2)),
    descuentoAplicado: `${descuento * 100}%`,
    totalFinal,
    costoPorPersona
  };
}

const pedido = {
  cliente: "Carlos",
  cantidadPersonas: 4,
  productos: [
    {
      nombre: "Hamburguesa",
      precio: 12,
      cantidad: 4
    },
    {
      nombre: "Papas fritas",
      precio: 5,
      cantidad: 6
    }
  ]
};

console.log(simularPedidoComidaUrbana(pedido));
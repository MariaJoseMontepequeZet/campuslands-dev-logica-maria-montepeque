# Plantilla de solucion

## Analisis

- **Entrada:**
  - Un objeto (`Object`) que representa un pedido de comida urbana.
  - El objeto contiene:
    - `cliente`: persona que realiza el pedido.
    - `cantidadPersonas`: cantidad de personas que compartirán el pedido.
    - `productos`: lista de productos solicitados.
  - Cada producto contiene:
    - `nombre`: nombre del alimento.
    - `precio`: valor individual del producto.
    - `cantidad`: número de unidades solicitadas.

- **Proceso:**
  - Validar que existan productos y que la cantidad de personas sea válida.
  - Recorrer los productos mediante un ciclo.
  - Calcular el subtotal utilizando:

    \[
    Subtotal = Precio \times Cantidad
    \]

  - Acumular la cantidad total de productos comprados.
  - Aplicar descuentos según la cantidad adquirida.
  - Calcular el total final:

    \[
    Total = Subtotal - Descuento
    \]

  - Dividir el costo final entre las personas para obtener el valor individual.

- **Salida:**
  - Un objeto con:
    - Cliente.
    - Cantidad total de productos.
    - Subtotal del pedido.
    - Descuento aplicado.
    - Total final.
    - Costo por persona.

## Reglas identificadas

1. El pedido debe contener al menos un producto y una cantidad válida de personas.
2. Los precios y cantidades de los productos deben ser valores positivos.
3. El costo de cada producto se calcula mediante:

\[
CostoProducto = Precio \times Cantidad
\]

4. Los descuentos se aplican según la cantidad total de productos:
   - 10 o más productos → **15% de descuento**.
   - Entre 5 y 9 productos → **10% de descuento**.
   - Menos de 5 productos → **sin descuento**.

5. El costo final se obtiene mediante:

\[
TotalFinal = Subtotal - (Subtotal \times Descuento)
\]

6. El costo individual se calcula dividiendo el total final entre la cantidad de personas.

## Pruebas

### Caso normal

Entrada:

```javascript
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
```

Resultado esperado:

```javascript
{
  cliente: "Carlos",
  productosComprados: 10,
  subtotal: 78,
  descuentoAplicado: "15%",
  totalFinal: 66.3,
  costoPorPersona: 16.58
}
```

### Caso borde

Entrada:

```javascript
const pedido = {
  cliente: "Ana",
  cantidadPersonas: 0,
  productos: [
    {
      nombre: "Hot Dog",
      precio: 8,
      cantidad: 2
    }
  ]
};
```

Resultado esperado:

```javascript
{
  estado: "Error",
  motivo: "El pedido debe tener productos y una cantidad válida de personas."
}
```

## Explicacion final

La solución simula el proceso de compra de un negocio de comida urbana aplicando fórmulas y reglas comerciales. Primero valida que los datos del pedido sean correctos para evitar cálculos inválidos.

Después recorre cada producto utilizando acumuladores para calcular el costo total y la cantidad de unidades compradas. Con base en esa cantidad aplica descuentos por volumen, simulando promociones comunes en negocios de comida.

Finalmente calcula el valor total del pedido y cuánto debe pagar cada persona. El algoritmo utiliza ciclos, condicionales y operaciones matemáticas para transformar información de una orden de comida en un resultado verificable.
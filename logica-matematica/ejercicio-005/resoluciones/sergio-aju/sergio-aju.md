# Plantilla de solucion

## Analisis

- **Entrada:** `stock` (cantidad actual) y `limiteMinimo` (umbral para realizar pedidos).
- **Proceso:** Comparamos el stock actual contra el límite definido. Si el stock es menor, calculamos la diferencia y generamos una alerta.
- **Salida:** Un objeto que indica el estado del inventario, un mensaje explicativo y la cantidad de unidades que faltan para llegar al mínimo.

## Reglas identificadas

1. **Límite Mínimo:** Si la cantidad de repuestos es inferior al umbral, el sistema debe marcar una alerta.
2. **Cálculo de Reabastecimiento:** La diferencia (`limiteMinimo - stock`) nos dice exactamente cuánto pedir para estar seguros.
3. **Estado OK:** Si el stock es igual o mayor al mínimo, no se requiere acción.

## Pruebas

### Caso normal

**Entrada:** `stock: 3, limiteMinimo: 5`

**Resultado esperado:**
```json
{
  "estado": "ALERTA",
  "mensaje": "Stock insuficiente, realizar pedido.",
  "faltante": 2
}
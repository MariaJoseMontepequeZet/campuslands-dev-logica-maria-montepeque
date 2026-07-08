# Plantilla de solucion

## Autor:

Sergio Ajú

## Analisis

- **Entrada:** Un objeto `pedido` con `tienePrisa` (booleano) y `cantidadItems` (número).
- **Proceso:** Se aplica una estrategia de filtrado donde la urgencia del cliente tiene peso absoluto sobre el volumen del pedido.
- **Salida:** Un objeto con el nivel de `prioridad` y la `accion` a tomar por el cocinero.

## Reglas identificadas

1. **Prioridad Urgente:** La urgencia del cliente es el factor decisivo número uno.
2. **Prioridad por Volumen:** Los pedidos grandes (>= 5 ítems) son procesados después de los urgentes pero antes que los pedidos pequeños y comunes.
3. **Flujo Estándar:** Los pedidos sin prisa y pequeños se manejan con el sistema FIFO (First In, First Out).

## Pruebas

### Caso normal

**Entrada:** `pedido: { tienePrisa: false, cantidadItems: 8 }`

**Resultado esperado:**
```json
{
  "prioridad": "MEDIA",
  "accion": "Preparar tras urgentes."
}
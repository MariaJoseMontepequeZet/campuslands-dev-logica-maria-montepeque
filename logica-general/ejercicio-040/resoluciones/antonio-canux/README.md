# Ejercicio de Lógica 040 - Temática Comida Urbana

**Camper:** Antonio Canux

## Analisis

- Entrada: 
  - `presupuesto`: Un número que representa la cantidad de dinero que tiene el cliente.
  - `esVegetariano`: Un valor booleano (`true`/`false`) que indica si el cliente tiene una restricción alimenticia de no comer carne.
- Proceso: El algoritmo aplica un patrón de filtrado en embudo (estrategia de selección). Primero descarta las opciones del menú que rompen la dieta del cliente. Luego, descarta las opciones que el cliente no puede pagar. Finalmente, de las opciones restantes, selecciona la más costosa para maximizar el valor del ticket de venta.
- Salida: Un objeto indicando el `estado` de la selección, un `mensaje` descriptivo, la `sugerencia` del combo elegido y el `vuelto` (cambio) que se le debe entregar al cliente.

## Reglas identificadas

1. Regla dietética: Si el cliente es vegetariano, las opciones que contienen carne quedan absolutamente descartadas. Si no es vegetariano, puede consumir cualquier producto del menú.
2. Regla financiera: Ningún combo sugerido puede tener un precio superior al presupuesto actual del cliente.
3. Estrategia de negocio: La sugerencia principal siempre debe ser el ítem más caro que el cliente pueda permitirse comprar (maximización de ingresos).

## Pruebas

### Caso normal

Entrada (Presupuesto de $15 y restricción vegetariana):
```javascript
presupuesto: 15
esVegetariano: true
```

Resultado esperado:

```javascript
{
  estado: 'sugerencia_exitosa',
  mensaje: "La mejor opción para el cliente es 'Hamburguesa de Lentejas + Papas Rústicas'.",
  sugerencia: 'Hamburguesa de Lentejas + Papas Rústicas',
  vuelto: 1
}
```

### Caso borde
Entrada (Presupuesto de $5, sin restricciones. El ítem más barato del menú cuesta $8):

```javascript
presupuesto: 5
esVegetariano: false
```

Resultado esperado:

```javascript
{
  estado: 'sin_sugerencia',
  mensaje: 'El presupuesto no es suficiente para ninguna opción válida según las preferencias.',
  sugerencia: null,
  vuelto: 5
}
```

## Explicación final
Esta solución modela una excelente estrategia de selección porque reduce el conjunto de datos paso a paso antes de tomar una decisión. En lugar de iterar manualmente con un ciclo complejo evaluando múltiples condiciones a la vez, aprovecha los métodos de los arreglos en JavaScript (.filter() y .sort()). Al filtrar primero, reducimos la cantidad de datos que necesitan ser ordenados. Al ordenar de mayor a menor precio (b.precio - a.precio), garantizamos que el índice [0] de nuestro embudo final sea matemáticamente la mejor opción de venta posible para el negocio, respetando todas las restricciones del cliente.
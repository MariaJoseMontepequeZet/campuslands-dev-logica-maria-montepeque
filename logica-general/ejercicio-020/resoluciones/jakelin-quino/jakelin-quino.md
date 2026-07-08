# Analisis

- **Entrada:** `presupuesto` (number), `nivelHambre` (string).
- **Proceso:** Utilizamos una estrategia de selección por "escalones" (if/else if), donde se evalúa primero la opción de mayor valor y se desciende hasta encontrar la que encaja con el presupuesto y necesidad del cliente.
- **Salida:** Un objeto con el `combo` seleccionado, el `precio` y una `nota` explicativa.

## Reglas identificadas

1. **Regla de Saciedad:** Si el presupuesto es alto y el hambre es alta, se prioriza el combo de mayor volumen.
2. **Regla de Asequibilidad:** El sistema siempre intenta ofrecer la mejor opción posible según el presupuesto disponible.
3. **Regla de Validación:** Si el presupuesto es menor al costo mínimo (5), se rechaza la compra.

## Pruebas

### Caso normal

**Entrada:** presupuesto: 20, nivelHambre: "alto"

**Resultado esperado:** { combo: "Combo Familiar", precio: 15, nota: "Ideal para saciar hambre extrema." }

### Caso borde

**Entrada:** presupuesto: 3, nivelHambre: "bajo"

**Resultado esperado:** { combo: null, precio: 0, nota: "Presupuesto insuficiente para cualquier combo." }

## Explicacion final

Al ordenar las reglas de mayor a menor costo, garantizamos que el cliente reciba la mejor propuesta posible según lo que puede pagar. Esta técnica es la base de los sistemas de recomendación en e-commerce.
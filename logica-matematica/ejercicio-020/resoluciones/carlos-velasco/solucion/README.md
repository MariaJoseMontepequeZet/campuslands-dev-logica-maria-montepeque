# Plantilla de solución

## Analisis

* **Entrada**: `numPedidos` (cantidad), `tiempoBase` (minutos por plato) y `factorAgilidad` (multiplicador de eficiencia).
* **Proceso**: Cálculo del tiempo total mediante el producto de los tres parámetros, seguido de una categorización jerárquica basada en umbrales de tiempo.
* **Salida**: Un objeto que muestra el `tiempo_estimado` formateado, la `clasificacion` obtenida y una `explicacion` del cálculo realizado.

## Reglas identificadas

1. El tiempo total se calcula multiplicando: `numPedidos` * `tiempoBase` * `factorAgilidad`.
2. Si el tiempo total es menor o igual a 15, se clasifica como "Servicio Express".
3. Si el tiempo total es mayor a 15 pero menor o igual a 40, es "Servicio Estándar"; si supera los 40, es "Alta Demanda".

## Pruebas

### Caso normal

* **Entrada**: `numPedidos: 5, tiempoBase: 2, factorAgilidad: 0.8`
* **Resultado esperado**: `{ tiempo_estimado: "8.0 minutos", clasificacion: "Servicio Express", explicacion: "Para 5 pedidos con 2 min/plato y factor 0.8." }`

### Caso borde

* **Entrada**: `numPedidos: 10, tiempoBase: 5, factorAgilidad: 1.2`
* **Resultado esperado**: `{ tiempo_estimado: "60.0 minutos", clasificacion: "Alta Demanda", explicacion: "Para 10 pedidos con 5 min/plato y factor 1.2." }`

## Explicacion final

La solución funciona mediante la aplicación de una fórmula aritmética simple que integra variables operativas reales, permitiendo ajustar los tiempos según la eficiencia (factor de agilidad). El uso de estructuras condicionales `if-else` permite mapear el resultado numérico a una categoría cualitativa que resulta útil para la gestión logística. Además, el formateo con `.toFixed(1)` asegura una presentación de datos profesional y consistente para el usuario final.

## Sugerencia

Verifica cada operación con cálculos manuales antes de confiar en el código:

* **Caso `numPedidos: 5, tiempoBase: 2, factorAgilidad: 0.8` (Cálculo manual)**:
* Cálculo: $5 \times 2 \times 0.8 = 10 \times 0.8 = 8.0$.
* Comparación: $8.0 \le 15$ = `Servicio Express`.
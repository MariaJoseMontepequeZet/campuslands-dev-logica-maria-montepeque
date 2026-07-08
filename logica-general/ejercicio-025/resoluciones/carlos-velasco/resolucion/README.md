# Plantilla de solución

## Analisis

* **Entrada**: Un arreglo `vehiculos` donde cada objeto tiene `modelo`, `gravedad` y `esClienteFrecuente`.
* **Proceso**: Asignación de un valor de peso a cada vehículo basándose en su nivel de gravedad y lealtad del cliente, seguido de un ordenamiento descendente basado en dichos pesos.
* **Salida**: Un nuevo arreglo ordenado con la misma estructura que la entrada.

## Reglas identificadas

1. Gravedad "alta" tiene la máxima prioridad (Peso 3).
2. Gravedad "media" con `esClienteFrecuente: true` tiene prioridad secundaria (Peso 2).
3. Cualquier otro caso (como gravedad "media" sin ser frecuente o gravedad "baja") tiene la menor prioridad (Peso 1).

## Pruebas

### Caso normal

* **Entrada**: `[{ modelo: "Sedan", gravedad: "media", esClienteFrecuente: false }, { modelo: "Camioneta", gravedad: "alta", esClienteFrecuente: false }]`
* **Resultado esperado**: `[{ modelo: "Camioneta", gravedad: "alta", esClienteFrecuente: false }, { modelo: "Sedan", gravedad: "media", esClienteFrecuente: false }]`

### Caso borde

* **Entrada**: `[{ modelo: "Moto", gravedad: "media", esClienteFrecuente: true }, { modelo: "Sedan", gravedad: "media", esClienteFrecuente: false }]`
* **Resultado esperado**: `[{ modelo: "Moto", gravedad: "media", esClienteFrecuente: true }, { modelo: "Sedan", gravedad: "media", esClienteFrecuente: false }]`

## Explicacion final

La solución funciona mediante una función auxiliar `obtenerPeso` que traduce las reglas de negocio (gravedad y lealtad) en una escala numérica simple. Al usar el método `.sort()` comparando estos pesos de forma descendente, el algoritmo garantiza que los elementos de mayor urgencia siempre desplacen a los de menor urgencia hacia el final del arreglo. Esta aproximación es altamente eficiente, ya que reduce una lógica condicional compuesta a una simple comparación matemática durante la ordenación.

## Sugerencia

Convierte cada regla del problema en una condicion clara antes de programar:

* **Regla 1 (Crítica)**: `v.gravedad === "alta"`
* **Regla 2 (Prioritaria)**: `v.gravedad === "media" && v.esClienteFrecuente`
* **Regla 3 (Base)**: `else` (cualquier otro valor)
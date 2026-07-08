# Plantilla de solución

## Analisis

* **Entrada**: Un arreglo `peleadores` donde cada elemento es un objeto con propiedades `nombre`, `peso` y `experiencia`.
* **Proceso**: Emparejamiento iterativo de peleadores mediante la comparación de restricciones de peso ($\Delta \le 5$) y experiencia ($\Delta \le 1$), priorizando siempre la pareja con la menor diferencia de experiencia disponible.
* **Salida**: Un arreglo de objetos que detalla los combates formados o indica si un peleador no encontró un rival compatible.

## Reglas identificadas

1. Dos peleadores solo pueden enfrentarse si la diferencia absoluta de su peso es menor o igual a 5.
2. La diferencia absoluta de experiencia entre dos peleadores debe ser menor o igual a 1 para ser considerados compatibles.
3. Si un peleador no encuentra a nadie que cumpla ambos criterios, debe marcarse como "Sin rival compatible" para evitar emparejamientos inválidos.

## Pruebas

### Caso normal

* **Entrada**: `peleadores: [{ nombre: "Alex", peso: 70, experiencia: 3 }, { nombre: "Ben", peso: 72, experiencia: 4 }]`
* **Resultado esperado**: `[{ combate: "Alex vs Ben" }]`

### Caso borde

* **Entrada**: `peleadores: [{ nombre: "Alex", peso: 70, experiencia: 3 }, { nombre: "Cloe", peso: 90, experiencia: 5 }]`
* **Resultado esperado**: `[{ combate: "Alex vs [Sin rival compatible]" }, { combate: "Cloe vs [Sin rival compatible]" }]`

## Explicacion final

La solución funciona mediante un algoritmo codicioso (*greedy algorithm*) que procesa la lista de peleadores uno a uno. Al iterar sobre los peleadores restantes, el código busca activamente la pareja que minimice la diferencia de experiencia, garantizando encuentros más equitativos. El uso de `splice` para eliminar a los peleadores ya emparejados evita que un mismo individuo sea asignado a múltiples combates, manteniendo la integridad del proceso de organización.

## Sugerencia

Convierte cada regla del problema en una condición clara antes de programar:

* **Regla 1 (Peso)**: `Math.abs(p1.peso - p2.peso) <= 5`
* **Regla 2 (Experiencia)**: `Math.abs(p1.experiencia - p2.experiencia) <= 1`
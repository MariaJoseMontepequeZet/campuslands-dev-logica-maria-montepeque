# Plantilla de solucion

## Analisis

- **Entrada:** Matriz bidimensional que representa una cuadrícula de píxeles (0 o 1).
- **Proceso:** Iteración mediante ciclos anidados para contabilizar elementos activos y validación contra un umbral de calidad del 50%.
- **Salida:** Objeto con el diagnóstico detallado de la textura (total, activos y estado de renderizado).

## Reglas identificadas

1. **Conteo:** Identificación de píxeles encendidos (1).
2. **Validación:** El estándar de calidad requiere > 50% de densidad de píxeles.
3. **Integridad:** El análisis debe ser exhaustivo sobre toda la estructura de la matriz.

## Pruebas

### Caso normal

**Entrada:** `[[1, 0, 1], [0, 1, 0], [1, 0, 1]]`

**Resultado esperado:** `{totalPixeles: 9, activos: 5, porcentaje: "55.56%", listaParaRender: true}`

### Caso borde

**Entrada:** `[[0, 0, 0], [0, 0, 0], [0, 0, 0]]`

**Resultado esperado:** `{totalPixeles: 9, activos: 0, porcentaje: "0.00%", listaParaRender: false}`

## Explicacion final

La solución implementa una lógica de recorrido matricial estándar. El uso de ciclos anidados garantiza que cada coordenada `(i, j)` de la matriz sea analizada. Este enfoque es altamente legible y permite escalar el algoritmo a matrices de cualquier tamaño simplemente ajustando la entrada, cumpliendo así con las reglas de negocio de verificación de texturas 3D.

## Sugerencia

Convierte cada regla del problema en una condicion clara antes de programar. Para optimizar, podrías detener el ciclo tempranamente si la cantidad de píxeles activos ya supera el 50% antes de terminar de recorrer toda la matriz.
# Plantilla de solución

## Analisis

* **Entrada**: Un *array* de números (`bpmList`) que representa los pulsos por minuto de las canciones en una lista de reproducción.
* **Proceso**: Iteración a través de la lista comparando la diferencia absoluta entre canciones consecutivas. Si alguna diferencia supera los 20 BPM, se marca una bandera de detección.
* **Salida**: Un objeto que indica el estado de la lista ("Playlist armónica" o "Salto brusco detectado") y una explicación del resultado.

## Reglas identificadas

1. Si la lista tiene menos de dos canciones, no es posible realizar el análisis.
2. Un cambio se considera "brusco" si la diferencia absoluta entre dos canciones contiguas es estrictamente mayor a 20 BPM.
3. El análisis debe detenerse inmediatamente (salida temprana) al encontrar el primer cambio brusco para optimizar el rendimiento.

## Pruebas

### Caso normal

* **Entrada**: `[120, 125, 130]`
* **Resultado esperado**: `{ estado: "Playlist armónica", explicacion: "La transición de ritmos es suave y constante." }`

### Caso borde

* **Entrada**: `[120, 150, 125]`
* **Resultado esperado**: `{ estado: "Salto brusco detectado", explicacion: "Hay cambios de ritmo mayores a 20 BPM." }`

## Explicacion final

La solución es eficiente porque utiliza un **bucle `for` con salida temprana (`break`)**, lo que garantiza que el procesamiento se detenga en cuanto se detecta una inconsistencia, ahorrando ciclos de CPU. El uso de `Math.abs()` es fundamental para estandarizar la comparación de diferencias, permitiendo que el algoritmo funcione correctamente independientemente de si el tempo aumenta o disminuye entre canciones.

## Sugerencia

Verifica cada operación con cálculos manuales antes de confiar en el código:

* **Caso `[120, 150, 125]` (Cálculo manual)**:
* Comparación 1: $|120 - 150| = 30$. Como $30 > 20$, se detecta el **Salto brusco**.
* Resultado: Se detiene el proceso y se marca como **Salto brusco detectado**.
# Plantilla de solución

## Analisis

* **Entrada**: `totalTrazos` (número), `trazosPorMinuto` (número) y `factorComplejidad` (número).
* **Proceso**: Validación de velocidad, cálculo del tiempo total mediante la fórmula de volumen de trabajo y clasificación de la escala del proyecto según el tiempo resultante.
* **Salida**: Un objeto que contiene el `tiempo_total_minutos` (string formateado), la `clasificacion` del proyecto y una `explicacion` del cálculo.

## Reglas identificadas

1. Si `trazosPorMinuto` es menor o igual a 0, se retorna un error por velocidad inválida.
2. El tiempo total se calcula dividiendo los trazos totales entre la velocidad y multiplicando por el factor de complejidad.
3. Si el tiempo final es mayor a 480 minutos, se clasifica como "Proyecto de gran escala"; de lo contrario, es "Proyecto estándar".

## Pruebas

### Caso normal

* **Entrada**: `totalTrazos: 1000, trazosPorMinuto: 50, factorComplejidad: 1.5`
* **Resultado esperado**: `{ tiempo_total_minutos: "30.00", clasificacion: "Proyecto estándar", explicacion: "Calculado con 1000 trazos a 50 t/min y factor de 1.5." }`

### Caso borde

* **Entrada**: `totalTrazos: 200, trazosPorMinuto: 100, factorComplejidad: 1.0`
* **Resultado esperado**: `{ tiempo_total_minutos: "2.00", clasificacion: "Proyecto estándar", explicacion: "Calculado con 200 trazos a 100 t/min y factor de 1." }`

## Explicacion final

La solución funciona aplicando una fórmula de rendimiento proporcional donde el volumen de trabajo (trazos) se ve afectado por la capacidad técnica del artista (velocidad) y ajustado por la naturaleza específica del diseño (complejidad). Al clasificar el resultado final, el código proporciona una guía clara sobre la carga de trabajo, permitiendo al usuario anticipar la escala del proyecto.

## Sugerencia

Verifica cada operación con cálculos manuales antes de confiar en el código:

* **Ejemplo manual** (`1000, 50, 1.5`):
* Tiempo base: $1000 / 50 = 20$.
* Tiempo final: $20 \times 1.5 = 30.00$.
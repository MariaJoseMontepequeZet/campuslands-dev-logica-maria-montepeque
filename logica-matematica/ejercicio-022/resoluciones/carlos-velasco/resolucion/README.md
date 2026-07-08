# Plantilla de solución

## Analisis

* **Entrada**: `jugados` (número total de partidos), `ganados` (victorias) y `empatados` (empates).
* **Proceso**: Cálculo de puntos ponderados (1 punto por victoria, 0.5 por empate), determinación del porcentaje de efectividad sobre el total de juegos y categorización mediante umbrales.
* **Salida**: Un objeto que muestra el `porcentaje_efectividad` formateado, la `clasificacion` obtenida y una `explicacion` descriptiva.

## Reglas identificadas

1. Si el número de partidos `jugados` es 0, se debe retornar un error.
2. El cálculo de efectividad se basa en la fórmula: $puntos = ganados + (empatados \times 0.5)$; porcentaje $= (puntos / jugados) \times 100$.
3. La clasificación se define por umbrales: $\ge 80\%$ (Élite), $\ge 50\%$ (Competitivo), en otro caso (En desarrollo).

## Pruebas

### Caso normal

* **Entrada**: `jugados: 10, ganados: 8, empatados: 2`
* **Resultado esperado**: `{ porcentaje_efectividad: "90.00%", clasificacion: "Elite", explicacion: "Basado en 8 victorias y 2 empates de 10 juegos." }`

### Caso borde

* **Entrada**: `jugados: 10, ganados: 2, empatados: 2`
* **Resultado esperado**: `{ porcentaje_efectividad: "30.00%", clasificacion: "En desarrollo", explicacion: "Basado en 2 victorias y 2 empates de 10 juegos." }`

## Explicacion final

La solución funciona aplicando una ponderación realista al rendimiento deportivo, donde el empate aporta un valor parcial frente a la victoria. Al normalizar estos puntos sobre el total de partidos, obtenemos una métrica precisa del rendimiento. El uso de `toFixed(2)` garantiza que el reporte visual sea estandarizado, y la estructura condicional permite asignar etiquetas cualitativas claras, facilitando la interpretación del estado del jugador o equipo de manera automática.

## Sugerencia

Verifica cada operación con cálculos manuales antes de confiar en el código:

* **Caso `jugados: 10, ganados: 2, empatados: 2` (Cálculo manual)**:
* Puntos: $2 + (2 \times 0.5) = 2 + 1 = 3$.
* Porcentaje: $(3 / 10) \times 100 = 30.00\%$.
* Categoría: $30.00 < 50$ = `En desarrollo`.
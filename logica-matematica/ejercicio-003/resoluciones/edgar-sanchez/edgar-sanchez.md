# Plantilla de solucion

## Analisis
El problema se diseñó para encontrar el indicador de rendimiento central de un jugador de Esports en un torneo corto, calculando la mediana de sus puntuaciones obtenidas. La mediana es ideal en este contexto porque evita que una partida excepcionalmente buena o mala distorsione la métrica real del participante.

- Entrada: Una lista de números enteros o flotantes que representan las puntuaciones obtenidas en las rondas del torneo.
- Proceso: Ordenar la lista de puntuaciones de menor a mayor. Calcular el tamaño de la lista; si es impar, tomar el valor del elemento central. Si es par, promediar los dos elementos centrales.
- Salida: Un número de tipo flotante o entero que representa la mediana de las puntuaciones.

## Reglas identificadas
1. Ordenamiento Obligatorio: La lista debe ordenarse numéricamente antes de cualquier cálculo para ubicar correctamente los valores posicionales.
2. Bifurcación por Paridad: El algoritmo debe comprobar si el total de rondas es par o impar para aplicar el método de selección o promedio correspondiente.
3. Lista no Vacía: Si la lista no contiene datos, la función debe controlar el caso retornando 0.0 para evitar errores de índice.

## Pruebas

### Caso normal
Entrada: puntuacionesRondas = [2400, 1800, 3500, 2900, 2100]
Resultado esperado: 2400.0

### Caso borde
Entrada: puntuacionesRondas = []
Resultado esperado: 0.0

## Explicacion final
La solución funciona porque organiza de forma secuencial los datos de rendimiento y encuentra la puntuación central exacta, aislando valores extremos.
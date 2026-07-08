# Plantilla de solucion

## Analisis
El problema se diseñó para evaluar el rendimiento técnico de los jugadores en un torneo de eSports a través de métricas estadísticas combinadas (el promedio y la mediana de bajas o *kills* por partida). En el análisis de datos competitivo, calcular tanto el promedio como la mediana es crucial para entender si el desempeño de un jugador es consistente o si estuvo influenciado por una sola partida excepcional (un dato atípico).

- Entrada: Una lista de números enteros que representan las bajas (*kills*) obtenidas por el jugador en cada partida del torneo.
- Proceso: 
  1. Validar si la lista contiene datos.
  2. Calcular el promedio aritmético sumando todas las bajas y dividiéndolas entre el total de partidas.
  3. Calcular la mediana ordenando la lista de menor a mayor: si el número de partidas es impar, seleccionar el elemento central; si es par, promediar los dos elementos del centro.
- Salida: Un objeto que contiene el promedio (flotante) y la mediana (flotante) del rendimiento del jugador.

## Reglas identificadas
1. Cálculo de Mediana Estricto: La lista debe ordenarse numéricamente antes de extraer la mediana. Si la longitud ($N$) es impar, la posición es $\frac{N-1}{2}$. Si es par, se promedian los valores en las posiciones $\frac{N}{2} - 1$ y $\frac{N}{2}$.
2. Control de Historial Vacío: Si el jugador no ha disputado ninguna partida (lista vacía), el promedio y la mediana deben establecerse automáticamente en 0.0 para evitar excepciones lógicas de división por cero.
3. Formateo Uniforme: Ambos resultados estadísticos finales deben redondearse a dos posiciones decimales para ser integrados correctamente en la base de datos de estadísticas globales del torneo.

## Pruebas

### Caso normal (Número impar de partidas)
Entrada: bajasPorPartida = [4, 12, 7, 5, 9]  *(Ordenado: [4, 5, 7, 9, 12])*
Resultado esperado: { "promedioBajas": 7.4, "medianaBajas": 7.0 }

### Caso par (Número par de partidas)
Entrada: bajasPorPartida = [3, 8, 5, 10]  *(Ordenado: [3, 5, 8, 10] -> Mediana: (5+8)/2)*
Resultado esperado: { "promedioBajas": 6.5, "medianaBajas": 6.5 }

### Caso borde
Entrada: bajasPorPartida = []
Resultado esperado: { "promedioBajas": 0.0, "medianaBajas": 0.0 }

## Explicacion final
La solución funciona porque realiza un ordenamiento previo indispensable para la mediana, aplica las condiciones de paridad de longitud y calcula la media aritmética controlando las colecciones vacías.
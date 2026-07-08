# Plantilla de solucion

## Analisis
El problema se diseñó para evaluar el rendimiento de un equipo en el ranking de fútbol sala mediante el cálculo de la proporción de puntos obtenidos frente a los puntos posibles (efectividad), aplicando condiciones especiales según el rendimiento en casa o de visitante. Este análisis permite a la liga clasificar a los clubes basándose en métricas relativas de eficiencia en lugar de únicamente puntos absolutos.

- Entrada: Partidos ganados (entero), partidos empatados (entero), partidos jugados totales (entero) y un indicador de si los partidos fueron mayoritariamente de visitante (booleano).
- Proceso:
  1. Validar si la cantidad de partidos jugados es consistente con la suma de ganados y empatados.
  2. Calcular los puntos totales obtenidos (3 puntos por victoria, 1 por empate) y los puntos máximos posibles (3 puntos por cada partido jugado).
  3. Calcular el porcentaje de efectividad. Si el indicador de visitante es `true` y la efectividad supera el 50%, se aplica una bonificación proporcional en el ranking del (+5%).
- Salida: Un objeto con el porcentaje de efectividad final calculado y una clasificación de rendimiento en texto.

## Reglas identificadas
1. Sistema de Puntuación Estándar: Cada victoria otorga 3 puntos y cada empate otorga 1 punto. Los partidos perdidos aportan 0 puntos.
2. Bonificación por Localía/Visitante: Jugar fuera de casa implica mayor dificultad. Si `esVisitante` es `true` y la efectividad base es mayor o igual al 50%, se le añade un bono fijo de 5.0 puntos porcentuales al resultado final (sin superar el 100%).
3. Consistencia de Datos Absolutos: Si los partidos jugados son cero, o la suma de partidos ganados y empatados supera los partidos jugados, el sistema invalida la operación devolviendo 0.0% de efectividad y una etiqueta de "Inconsistente".

## Pruebas

### Caso normal (Visitante con bonificación)
Entrada: ganados = 3, empatados = 1, jugados = 5, esVisitante = true
Puntos ganados: 10. Puntos posibles: 15. Efectividad base: 66.67%. 
Resultado esperado: { "porcentajeEfectividad": 71.67, "rendimiento": "Excelente" }

### Caso borde (Datos incoherentes)
Entrada: ganados = 4, empatados = 2, jugados = 5, esVisitante = false
Resultado esperado: { "porcentajeEfectividad": 0.0, "rendimiento": "Inconsistente" }

## Explicacion final
La solución funciona porque valida matemáticamente la coherencia de los datos del torneo, evalúa las proporciones mediante la fórmula de rendimiento deportivo y compensa con lógica condicional el mérito de los resultados obtenidos fuera de casa.
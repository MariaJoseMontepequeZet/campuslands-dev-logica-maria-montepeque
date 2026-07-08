# Plantilla de solucion

## Analisis
El problema se diseñó para evaluar el rendimiento de un equipo de fútbol sala calculando el porcentaje de efectividad de puntos obtenidos frente a los puntos posibles en un torneo competitivo. Esto permite estandarizar el rendimiento de los equipos en el ranking general sin importar cuántos partidos hayan disputado.

- Entrada: Cantidad de partidos ganados (entero), cantidad de partidos empatados (entero), cantidad de partidos jugados (entero).
- Proceso: Multiplicar los partidos jugados por tres para determinar el puntaje máximo posible. Calcular los puntos acumulados reales sumando tres puntos por cada victoria y un punto por cada empate. Dividir los puntos reales entre los puntos posibles y multiplicar por cien para obtener el porcentaje de efectividad.
- Salida: Un número de tipo flotante que representa el porcentaje de efectividad del equipo en el ranking.

## Reglas identificadas
1. Ponderación de Torneo Estándar: Cada victoria equivale estrictamente a 3 puntos, cada empate equivale a 1 punto y las derrotas equivalen a 0 puntos.
2. Evitar División por Cero: Si el equipo no ha disputado ningún partido (partidos jugados igual a cero), el sistema detiene la operación y retorna 0.0 de efectividad.
3. Precisión de Porcentaje: El resultado del porcentaje final debe devolverse redondeado a dos cifras decimales para mantener la claridad en el ranking.

## Pruebas

### Caso normal
Entrada: partidosGanados = 5, partidosEmpatados = 2, partidosJugados = 8
Resultado esperado: 70.83

### Caso borde
Entrada: partidosGanados = 0, partidosEmpatados = 0, partidosJugados = 0
Resultado esperado: 0.0

## Explicacion final
La solución funciona porque unifica las variables del torneo bajo una métrica porcentual proporcional y bloquea de manera lógica errores matemáticos en equipos que no han debutado.
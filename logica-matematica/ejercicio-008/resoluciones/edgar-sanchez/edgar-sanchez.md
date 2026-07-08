# Plantilla de solucion

## Analisis
El problema se diseñó para identificar patrones de puntuación en reseñas de películas de ciencia ficción. Se busca analizar la consistencia de las calificaciones de la crítica especializada calculando la desviación absoluta respecto a una puntuación de referencia esperada y determinar si existe una tendencia uniforme o si los patrones de votación están dispersos.

- Entrada: Una lista de calificaciones numéricas flotantes otorgadas a una película y una puntuación de referencia ideal (flotante).
- Proceso: Iterar sobre la lista de calificaciones acumulando la diferencia absoluta entre cada calificación y el valor de referencia. Dividir este acumulado entre el total de calificaciones para obtener la desviación promedio.
- Salida: Un número flotante que representa la desviación promedio del patrón de votación.

## Reglas identificadas
1. Desviación Absoluta Estricta: La diferencia entre la puntuación y la referencia siempre debe ser positiva ($|calificacion - referencia|$), usando el valor absoluto matemático.
2. Control de Lista Vacía: Si no se registran calificaciones para la película, la desviación promedio debe establecerse automáticamente en 0.0 para evitar divisiones inválidas.
3. Precisión de Métrica: El resultado final de la desviación promedio debe entregarse redondeado a dos cifras decimales para estandarizar los reportes analíticos.

## Pruebas

### Caso normal
Entrada: calificacionesPelicula = [8.5, 7.0, 9.0], puntuacionReferencia = 8.0
Resultado esperado: 0.67

### Caso borde
Entrada: calificacionesPelicula = [], puntuacionReferencia = 8.0
Resultado esperado: 0.0

## Explicacion final
La solución funciona porque cuantifica linealmente la dispersión de las calificaciones abstrayendo las diferencias negativas mediante el valor absoluto matemático.
# Plantilla de solucion

## Analisis
El problema se diseñó para evaluar y clasificar los renders de un proyecto de arquitectura 3D en un sistema de ranking interno del estudio. A partir de una lista de puntuaciones asignadas por un comité de diseño a diferentes maquetas virtuales, se requiere determinar el rendimiento general calculando el promedio de los puntajes y contando cuántos de ellos superan una nota de corte estandarizada para avanzar a la fase de presentación con el cliente.

- Entrada: Una lista de números flotantes o enteros que representan las calificaciones de los diseños y una puntuación de corte (flotante) mínima requerida.
- Proceso: Iterar sobre la lista de calificaciones para sumar todos los valores y contar cuántos elementos son estrictamente mayores o iguales al puntaje de corte. Dividir la suma total entre el número de elementos para obtener el promedio general.
- Salida: Un objeto que contiene el promedio de las puntuaciones de la lista y la cantidad de diseños que lograron clasificar en el ranking.

## Reglas identificadas
1. Filtro de Clasificación Efectiva: Un diseño de arquitectura 3D avanza en el ranking únicamente si su puntuación individual es mayor o igual ($\geq$) al puntaje de corte establecido.
2. Control de Lista Sin Registros: Si la lista de puntuaciones está vacía, el promedio se establece en 0.0 y los diseños clasificados en 0 para evitar divisiones inválidas o fallos de ejecución.
3. Precisión de la Nota Promedio: El valor del promedio final debe ser redondeado a dos posiciones decimales para mantener una métrica de ranking uniforme.

## Pruebas

### Caso normal
Entrada: puntuacionesDisenos = [8.5, 9.2, 6.8, 7.5, 9.0], puntajeCorte = 8.0
Resultado esperado: { "promedioGeneral": 8.2, "disenosClasificados": 3 }

### Caso borde
Entrada: puntuacionesDisenos = [], puntajeCorte = 8.0
Resultado esperado: { "promedioGeneral": 0.0, "disenosClasificados": 0 }

## Explicacion final
La solución funciona porque procesa en un único ciclo lineal la acumulación aritmética para el promedio estadístico y la validación lógica condicional frente a la nota de corte del estudio.
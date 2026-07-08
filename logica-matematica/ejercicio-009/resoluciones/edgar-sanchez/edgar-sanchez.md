# Plantilla de solucion

## Analisis
El problema se concibió para automatizar la organización de los horarios en un maratón nocturno de películas de miedo. Utilizando el operador de módulo y divisibilidad, se busca agrupar la duración total de los metrajes en bloques exactos de tiempo y determinar si el tiempo remanente (residuo) es cero para asegurar transiciones sin retrasos entre salas.

- Entrada: Duración de la película en minutos (entero) y la duración estándar del bloque de la sala en minutos (entero).
- Proceso: Calcular la cantidad de bloques completos dividiendo la duración de la película entre el tamaño del bloque. Evaluar mediante la operación de módulo (`%`) si existe un remanente de minutos e identificar si dicho residuo es divisible de forma exacta.
- Salida: Un objeto que contiene el número de bloques completos utilizados y un indicador booleano que confirma si la asignación del tiempo es exacta (sin minutos sobrantes).

## Reglas identificadas
1. Divisibilidad Exacta: La asignación de tiempo se considera exacta (`true`) únicamente si el residuo de la operación módulo entre la duración de la película y el bloque es estrictamente cero.
2. División Entera Absoluta: El cálculo de bloques completos debe truncarse al entero inferior más cercano mediante una división entera para omitir fracciones de tiempo.
3. Control de Bloque Nulo: Si el tamaño del bloque estándar es menor o igual a cero, el sistema detiene la operación y retorna cero bloques con una asignación falsa para prevenir excepciones matemáticas.

## Pruebas

### Caso normal
Entrada: duracionPeliculaMinutos = 120, bloqueSalaMinutos = 30
Resultado esperado: { "bloquesCompletos": 4, "asignacionExacta": true }

### Caso borde
Entrada: duracionPeliculaMinutos = 105, bloqueSalaMinutos = 0
Resultado esperado: { "bloquesCompletos": 0, "asignacionExacta": false }

## Explicacion final
La solución funciona porque utiliza aritmética de congruencia (módulo) para validar la exactitud de los intervalos de tiempo y divide de forma entera las unidades.
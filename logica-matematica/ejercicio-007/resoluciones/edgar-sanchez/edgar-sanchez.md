# Plantilla de solucion

## Analisis
El problema se diseñó para optimizar el orden de reproducción de una playlist musical mediante la validación secuencial de los identificadores de pista. Se busca identificar si las canciones siguen una numeración consecutiva ascendente exacta y calcular el tiempo acumulado total para garantizar una transición fluida y sin saltos en los índices del sistema.

- Entrada: Una lista de objetos que representan canciones, donde cada objeto contiene el identificador numérico de pista (entero) y la duración en segundos (entero).
- Proceso: Iterar sobre la lista de canciones comparando el identificador actual con el anterior para asegurar que se incremente exactamente en uno. Simultáneamente, acumular la duración de todas las canciones.
- Salida: Un objeto que contiene el tiempo total de reproducción en segundos y un indicador booleano que confirma si la secuencia de pistas es válida o está rota.

## Reglas identificadas
1. Secuencia Consecutiva Estricta: Cada identificador de pista posterior debe ser exactamente igual al identificador anterior más uno ($id_{actual} == id_{anterior} + 1$).
2. Validación de Inicio: El primer elemento establece la base de la secuencia; si la lista está vacía, se considera una secuencia inválida por defecto y el tiempo total es cero.
3. Acumulación Lineal: La duración total de la playlist se calcula mediante la suma continua de los segundos de cada canción, sin importar si la secuencia se rompe más adelante.

## Pruebas

### Caso normal
Entrada: listaCanciones = [{ "pista": 1, "duracion": 180 }, { "pista": 2, "duracion": 210 }, { "pista": 3, "duracion": 195 }]
Resultado esperado: { "duracionTotalSegundos": 585, "secuenciaCorrecta": true }

### Caso borde
Entrada: listaCanciones = []
Resultado esperado: { "duracionTotalSegundos": 0, "secuenciaCorrecta": false }

## Explicacion final
La solución funciona porque verifica de manera lineal la continuidad algebraica de los identificadores e integra aritméticamente la duración total del bloque musical.
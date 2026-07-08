# Plantilla de solucion

## Analisis
El problema se pensó para unificar los criterios de rendimiento de autos hiperdeportivos internacionales, automatizando la conversión de unidades de velocidad desde millas por hora (mph) a kilómetros por hora (km/h) y determinando si el vehículo es capaz de romper la barrera mítica de velocidad para ser clasificado como un "Cazador de Récords".

- Entrada: El modelo del auto (texto) y su velocidad máxima medida en millas por hora (flotante).
- Proceso: Multiplicar la velocidad en millas por hora por el factor de conversión internacional estándar (1.60934) para obtener su equivalencia en kilómetros por hora. Evaluar si el resultado es igual o superior a los 400 km/h para asignarle un estatus de rendimiento especial.
- Salida: Un objeto que contiene la velocidad convertida a kilómetros por hora y un indicador booleano de estatus de récord.

## Reglas identificadas
1. Factor de Conversión Preciso: Se debe utilizar estrictamente el valor de equivalencia de 1.60934 para transformar millas a kilómetros de forma exacta.
2. Umbral de Rendimiento: Un vehículo se considera "Cazador de Récords" (verdadero) únicamente si su velocidad final calculada es igual o mayor a 400.0 km/h.
3. Consistencia Numérica: El valor resultante en kilómetros por hora debe devolverse redondeado a dos cifras decimales para la correcta lectura en la ficha técnica.

## Pruebas

### Caso normal
Entrada: modeloAuto = "Chiron Super Sport", velocidadMph = 304.7
Resultado esperado: { "velocidadKmh": 490.36, "cazadorDeRecords": true }

### Caso borde
Entrada: modeloAuto = "Prototipo Urbano", velocidadMph = 0.0
Resultado esperado: { "velocidadKmh": 0.0, "cazadorDeRecords": false }

## Explicacion final
La solución funciona porque aplica un factor de conversión métrico exacto e implementa una validación lógica condicional sobre el límite de velocidad establecido.
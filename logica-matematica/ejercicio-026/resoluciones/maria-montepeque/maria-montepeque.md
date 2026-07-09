# Lógica Matemática 026 - Conversión de Unidades (Autos Hiperdeportivos)

## Análisis del Problema
El objetivo es desarrollar un sistema de conversión de unidades para el sector de autos hiperdeportivos, donde se requiere transformar la velocidad de millas por hora (mph) a kilómetros por hora (km/h) y clasificar el rendimiento del motor según rangos de velocidad preestablecidos.

* **Entrada**: 
    * `velocidadMph` (número): Velocidad del vehículo en millas por hora.
    * `modelo` (string): Nombre del modelo del auto.
* **Proceso**: 
    * Conversión: Se multiplica el valor de entrada por el factor `1.60934`.
    * Clasificación: Se evalúa el resultado en km/h para asignar una categoría de rendimiento.
* **Salida**: Un objeto JSON que contiene el modelo, la velocidad convertida a 2 decimales y la categoría de rendimiento.

## Reglas Identificadas
1. **Validación de Datos**: La entrada debe ser un número positivo; de lo contrario, el sistema debe retornar un mensaje de error.
2. **Factor de Conversión**: Se utiliza la constante estándar `1.60934`.
3. **Rangos de Clasificación**:
    * **Hiperdeportivo de élite**: Velocidad ≥ 400 km/h.
    * **Superdeportivo avanzado**: Velocidad entre 300 km/h y 399 km/h.
    * **Deportivo estándar**: Velocidad menor a 300 km/h.

## Pruebas Realizadas

### Caso Normal
* **Entrada**: `analizarVelocidad(250, "Bugatti Chiron")`
* **Resultado Esperado**: `{ modelo: "Bugatti Chiron", velocidadKmh: "402.34", categoria: "Hiperdeportivo de élite" }`

### Caso Borde
* **Entrada**: `analizarVelocidad(-10, "Test Error")`
* **Resultado Esperado**: `{ error: "Entrada inválida. Ingrese una velocidad positiva." }`

## Explicación Técnica
La solución emplea una función modular que separa la lógica de transformación matemática de la lógica de negocio (categorización). Se utiliza `.toFixed(2)` para asegurar que el reporte de velocidad sea consistente y legible. El enfoque asegura que, ante cualquier dato de entrada inválido, el sistema retorne una respuesta controlada en lugar de fallar silenciosamente.

## Sugerencia de Validación
Antes de ejecutar el código, verifica manualmente la conversión:
* `250 mph * 1.60934 = 402.335`. 
* Al redondear a dos decimales, obtenemos `402.34 km/h`, lo que confirma el rango de "Hiperdeportivo de élite".

---
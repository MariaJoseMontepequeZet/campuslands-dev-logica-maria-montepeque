# Plantilla de solución

## Analisis

* **Entrada**: Un objeto `cancion` que contiene `titulo` (string), `duracionSegundos` (number) y `genero` (string).
* **Proceso**: Evaluación de la integridad de los metadatos mediante una estructura de control jerárquica que compara la duración y el género contra umbrales de validación predefinidos.
* **Salida**: Un objeto que resume el `titulo`, el `estado` de validación y una `observacion` detallada del resultado.

## Reglas identificadas

1. Si la duración es menor a 30 segundos, el estado es "Inconsistente".
2. Si el género está vacío o es "desconocido", el estado es "Requiere atención".
3. Si la duración es mayor a 600 segundos, el estado es "Advertencia".

## Pruebas

### Caso normal

* **Entrada**: `{ titulo: "Bohemian Rhapsody", duracionSegundos: 354, genero: "Rock" }`
* **Resultado esperado**: `{ titulo: "Bohemian Rhapsody", estado: "Válida", observacion: "Sin errores" }`

### Caso borde

* **Entrada**: `{ titulo: "Intro", duracionSegundos: 10, genero: "Pop" }`
* **Resultado esperado**: `{ titulo: "Intro", estado: "Inconsistente", observacion: "Archivo demasiado corto (posible error de descarga)." }`

## Explicacion final

La solución funciona porque implementa una **lógica de cascada** donde las condiciones más críticas (como errores de descarga) se evalúan primero. Al asignar valores por defecto ("Válida" y "Sin errores"), el código simplifica la estructura, ya que solo necesita modificar estos valores si se detecta alguna anomalía, lo cual mejora la legibilidad y el mantenimiento del script.

## Sugerencia

Convierte cada regla del problema en una condición clara antes de programar:

* **Regla 1 (Corto)**: `duracionSegundos < 30`
* **Regla 2 (Falta género)**: `genero === "" || genero === "desconocido"`
* **Regla 3 (Muy largo)**: `duracionSegundos > 600`
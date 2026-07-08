# Plantilla de solucion

## Analisis

- Entrada:
  - Matriz:
    [
      ["Modelado", "Completado"],
      ["Texturizado", "En progreso"],
      ["Renderizado", "Pendiente"]
    ]

- Proceso:
  - Recorrer la matriz fila por fila.
  - Revisar el estado de cada etapa.
  - Identificar la primera etapa cuyo estado sea "Pendiente".

- Salida:
  - escena: Renderizado
  - motivo: Es la primera etapa que aún no ha sido realizada.

## Reglas identificadas

1. Cada fila de la matriz representa una etapa de la animación y su estado.
2. Se debe recorrer la matriz en orden.
3. La primera etapa con estado "Pendiente" será el resultado.
4. Si no existen etapas pendientes, se puede indicar que todo el proyecto está completo.

## Pruebas

### Caso normal

Entrada:

[
  ["Modelado", "Completado"],
  ["Texturizado", "En progreso"],
  ["Renderizado", "Pendiente"]
]

Resultado esperado:

escena: Renderizado
motivo: Es la primera etapa que aún no ha sido realizada.

### Caso borde

Entrada:

[
  ["Modelado", "Completado"],
  ["Texturizado", "Completado"],
  ["Renderizado", "Completado"]
]

Resultado esperado:

escena: Ninguna
motivo: Todas las etapas de la animación están completadas.

## Explicacion final

La solución funciona porque utiliza una matriz simple donde cada fila almacena una etapa de la animación 3D y su estado. El algoritmo recorre la matriz de forma secuencial hasta encontrar la primera etapa pendiente, generando un resultado claro y verificable. Si no encuentra ninguna, significa que todas las etapas ya fueron completadas.
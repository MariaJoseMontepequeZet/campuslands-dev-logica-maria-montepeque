# Plantilla de solución

## Analisis

* **Entrada**: Un objeto `clima` que contiene `velocidadViento` (número) y `visibilidad` (número).
* **Proceso**: Evaluación secuencial mediante cláusulas de guardia que verifican si las condiciones climáticas superan los límites de seguridad establecidos.
* **Salida**: Un objeto que indica la `accion` (resultado) y el `motivo` (justificación) de la evaluación del salto.

## Reglas identificadas

1. Si la `velocidadViento` es mayor a 30, el salto se cancela por viento fuerte.
2. Si la `visibilidad` es menor a 5, el salto se cancela por visibilidad insuficiente.
3. Si ninguna de las condiciones anteriores se cumple, el salto es autorizado.

## Pruebas

### Caso normal

* **Entrada**: `{ velocidadViento: 15, visibilidad: 10 }`
* **Resultado esperado**: `{ accion: "Salto autorizado", motivo: "Condiciones climáticas óptimas para el salto." }`

### Caso borde

* **Entrada**: `{ velocidadViento: 40, visibilidad: 10 }`
* **Resultado esperado**: `{ accion: "Salto cancelado", motivo: "Viento demasiado fuerte para un salto seguro." }`

## Explicacion final

La solución funciona mediante el uso de **cláusulas de guardia (guard clauses)**, las cuales actúan como filtros de seguridad que interrumpen la ejecución del programa apenas detectan un riesgo para el usuario. Al validar las condiciones críticas (viento y visibilidad) antes de proceder, aseguramos que el flujo de control sea directo y eficiente, proporcionando una respuesta inmediata sobre la viabilidad del salto.

## Sugerencia

Convierte cada regla del problema en una condición clara antes de programar:

* **Regla 1 (Viento)**: `clima.velocidadViento > 30`
* **Regla 2 (Visibilidad)**: `clima.visibilidad < 5`
* **Regla 3 (Autorización)**: Si `! (Regla 1 || Regla 2)` es verdadero.
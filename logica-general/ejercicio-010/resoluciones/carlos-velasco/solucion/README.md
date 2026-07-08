# Plantilla de solución

## Analisis

* **Entrada**: Un objeto `reserva` que contiene `hotelDisponibilidad` (boolean) y `documentosValidos` (boolean).
* **Proceso**: Evaluación secuencial mediante cláusulas de guardia que validan la disponibilidad y la documentación antes de confirmar la reserva.
* **Salida**: Un objeto que define la `accion` (resultado) y el `motivo` (justificación) de la decisión.

## Reglas identificadas

1. Si el hotel no tiene disponibilidad, la reserva es rechazada.
2. Si los documentos del viajero no son válidos, la reserva es rechazada.
3. Si ambas condiciones se cumplen (hotel disponible y documentos válidos), la reserva es confirmada.

## Pruebas

### Caso normal

* **Entrada**: `{ hotelDisponibilidad: true, documentosValidos: true }`
* **Resultado esperado**: `{ accion: "Confirmada", motivo: "Reserva exitosa, disfrute su viaje." }`

### Caso borde

* **Entrada**: `{ hotelDisponibilidad: true, documentosValidos: false }`
* **Resultado esperado**: `{ accion: "Rechazada", motivo: "La documentación del viajero no es válida." }`

## Explicacion final

La solución funciona mediante **cláusulas de guardia (guard clauses)**, que permiten validar los requisitos en orden de criticidad. Al realizar las comprobaciones de error (`false`) al principio, el código evita anidaciones innecesarias, logrando un flujo de ejecución limpio donde solo se confirma la reserva si se han superado todas las validaciones previas de manera exitosa.

## Sugerencia

Convierte cada regla del problema en una condición clara antes de programar:

* **Regla 1 (Disponibilidad)**: `!reserva.hotelDisponibilidad`
* **Regla 2 (Documentación)**: `!reserva.documentosValidos`
* **Regla 3 (Aceptación)**: Si no se cumplen las condiciones 1 y 2, se procede con la confirmación.
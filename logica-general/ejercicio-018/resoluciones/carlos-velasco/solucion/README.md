# Plantilla de solución

## Analisis

* **Entrada**: `operario` (nombre), `soldadura` (tipo de técnica) y `hora` (entero de 0 a 23).
* **Proceso**: Clasificación del turno según el rango horario y validación de la viabilidad de la técnica de soldadura específica para cada turno.
* **Salida**: Un objeto que confirma si la `accion` es autorizada o denegada, junto con el `turno` y el `motivo` de la decisión.

## Reglas identificadas

1. **Turno Mañana (6-14h)**: Toda tarea de soldadura es considerada viable.
2. **Turno Tarde (15-22h)**: Solo se autorizan soldaduras tipo "MIG" o "Electrodo".
3. **Turno Noche (23-5h)**: Solo se autoriza soldadura tipo "TIG".

## Pruebas

### Caso normal

* **Entrada**: `operario: "Juan", soldadura: "TIG", hora: 23`
* **Resultado esperado**: `{ operario: "Juan", turno: "Noche", accion: "Tarea autorizada", motivo: "Procedimiento compatible." }`

### Caso borde

* **Entrada**: `operario: "Ana", soldadura: "TIG", hora: 16`
* **Resultado esperado**: `{ operario: "Ana", turno: "Tarde", accion: "Tarea denegada", motivo: "Tipo de soldadura no permitida en este horario." }`

## Explicacion final

La solución funciona mediante una estructura de control **condicional segmentada**, que organiza el flujo de trabajo en tres bloques temporales. Al definir primero el `turno` mediante la `hora`, se establece el contexto necesario para aplicar las reglas de negocio específicas de cada periodo. El uso de una variable booleana (`esViable`) permite desacoplar la validación de la lógica de negocio de la estructura de reporte, facilitando que la respuesta final sea informativa y cumpla con los estándares de seguridad requeridos.

## Sugerencia

Convierte cada regla del problema en una condicion clara antes de programar:

* **Regla 1 (Mañana)**: `hora >= 6 && hora <= 14`
* **Regla 2 (Tarde)**: `hora > 14 && hora <= 22` -> `soldadura === "MIG" || soldadura === "Electrodo"`
* **Regla 3 (Noche)**: `hora > 22 || hora < 6` -> `soldadura === "TIG"`
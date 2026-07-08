# Plantilla de solución

## Analisis

* **Entrada**: `altitud` (número), `velocidadViento` (número) y `estadoParacaidas` (booleano).
* **Proceso**: Evaluación jerárquica que prioriza la integridad del equipo, seguida de límites ambientales y, finalmente, protocolos de apertura basados en rangos de altitud.
* **Salida**: Un objeto con la `accion` a realizar y un `motivo` que explica la decisión basada en el estado del salto.

## Reglas identificadas

1. Si `estadoParacaidas` es falso, se debe activar la reserva independientemente de cualquier otra variable.
2. Si `velocidadViento` es superior a 50, el salto se cancela por condiciones inseguras.
3. La altitud determina el tipo de apertura: > 500 (Estándar), > 150 (Emergencia) o $\le 150$ (Alerta crítica).

## Pruebas

### Caso normal

* **Entrada**: `altitud: 600, velocidadViento: 20, estadoParacaidas: true`
* **Resultado esperado**: `{ accion: "Apertura estándar", motivo: "Altitud óptima para maniobras." }`

### Caso borde

* **Entrada**: `altitud: 100, velocidadViento: 10, estadoParacaidas: true`
* **Resultado esperado**: `{ accion: "Alerta crítica", motivo: "Altura insuficiente para despliegue seguro." }`

## Explicacion final

La solución funciona mediante una jerarquía estricta de decisiones (priorizando riesgos fatales primero). Al validar primero la seguridad del equipo y luego el entorno antes de evaluar la altitud, el sistema asegura que, ante cualquier inconsistencia, se dispare el protocolo de seguridad adecuado, evitando que se ejecuten maniobras de salto en condiciones donde el despliegue del paracaídas principal no sea viable.

## Sugerencia

Convierte cada regla del problema en una condicion clara antes de programar:

* **Regla 1 (Fallo)**: `if (!estadoParacaidas)`
* **Regla 2 (Viento)**: `if (velocidadViento > 50)`
* **Regla 3 (Altitud)**: `if (altitud > 500) ... else if (altitud > 150) ... else ...`
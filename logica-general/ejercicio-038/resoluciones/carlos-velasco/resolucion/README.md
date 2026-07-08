# Plantilla de solución

## Analisis

* **Entrada**: Un objeto `soldador` (con `nombre`, `nivelCertificacion` y `fatiga`) y un número `complejidad` del proyecto.
* **Proceso**: Validación de seguridad física (fatiga) y validación de competencia técnica (certificación), determinando la viabilidad de la asignación.
* **Salida**: Un objeto que indica si la asignación fue exitosa (`asignado: boolean`) y un `motivo` detallado del resultado.

## Reglas identificadas

1. Si la fatiga del soldador es superior a 80, la asignación es rechazada por seguridad.
2. Si el nivel de certificación del soldador es menor que la complejidad del proyecto, la asignación es rechazada por falta de competencia.
3. La asignación solo es exitosa si se superan ambos filtros de validación.

## Pruebas

### Caso normal

* **Entrada**: `soldador: { nombre: "Pedro", nivelCertificacion: 4, fatiga: 20 }, complejidad: 3`
* **Resultado esperado**: `{ asignado: true, motivo: "Soldador Pedro asignado con éxito." }`

### Caso borde

* **Entrada**: `soldador: { nombre: "Ana", nivelCertificacion: 2, fatiga: 90 }, complejidad: 3`
* **Resultado esperado**: `{ asignado: false, motivo: "Soldador requiere descanso (fatiga alta)." }`

## Explicacion final

La solución funciona mediante una validación jerárquica que antepone la integridad física del trabajador. Al utilizar retornos anticipados, el sistema bloquea inmediatamente cualquier intento de asignación no segura o técnicamente insuficiente, asegurando que el equipo de trabajo sea siempre apto para la tarea asignada.

## Sugerencia

Convierte cada regla del problema en una condición clara antes de programar:

* **Regla de seguridad física**: `soldador.fatiga > 80`.
* **Regla de competencia técnica**: `soldador.nivelCertificacion < complejidad`.
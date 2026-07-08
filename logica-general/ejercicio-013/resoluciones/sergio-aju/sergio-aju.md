# Plantilla de solucion

## Autor: 

Sergio Ajù

## Analisis

- **Entrada:** `altitud` (Number), `velocidadViento` (Number), `equipoListo` (Boolean).
- **Proceso:** Evaluación de condiciones de seguridad necesarias para garantizar un salto exitoso.
- **Salida:** Resolución del caso (Autorización o Cancelación) junto con su justificación.

## Reglas identificadas

1. **Equipo:** Indispensable tener el equipo listo para proceder.
2. **Viento:** Límite máximo de 30 km/h por razones de seguridad.
3. **Altura:** Mínimo 1000 metros requeridos para el despliegue del paracaídas.

## Pruebas

### Caso normal

**Entrada:** `altitud = 3000, velocidadViento = 15, equipoListo = true`

**Resultado esperado:** `Acción: Autorizar salto. Motivo: Condiciones óptimas para el salto.`

### Caso borde

**Entrada:** `altitud = 500, velocidadViento = 10, equipoListo = true`

**Resultado esperado:** `Acción: Cancelar salto. Motivo: Altura insuficiente para despliegue seguro.`

## Explicacion final

La solución implementa una serie de filtros (guard clauses) que validan el cumplimiento de las normas de seguridad del paracaidismo. Al priorizar las verificaciones de equipo y condiciones ambientales, aseguramos que el sistema funcione como una lista de control de seguridad real antes de emitir cualquier autorización.

## Sugerencia

Convierte cada regla del problema en una condicion clara antes de programar. Para mejorar la aplicación, podrías añadir un registro de "bitácora" que almacene por qué razón específica se canceló un salto, facilitando así el análisis estadístico de seguridad.
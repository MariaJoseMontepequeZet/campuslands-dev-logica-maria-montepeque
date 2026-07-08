# Resolución: Taller Mecánico - Priorización

## Pensamiento Lógico
Se utilizó un sistema de **pesos ponderados**. Para ordenar, primero evaluamos la `urgencia` (el nivel más alto siempre encabeza la lista). Si la urgencia es idéntica, el sistema consulta el `tipo_servicio` mediante una tabla de pesos, priorizando reparaciones sobre diagnósticos o mantenimientos.

## Reglas Aplicadas
1. **Nivel de Urgencia:** Rango 1-3. Los de nivel 3 son prioridad absoluta.
2. **Jerarquía de Servicios:** Reparación > Diagnóstico > Mantenimiento.
3. **Estabilidad:** Si ambos criterios coinciden, se mantiene el orden original (orden de llegada).

## Cómo ejecutar
Ejecutar con Node.js:
`node taller-mecanico.js`

## Casos Probados
- **Ana:** Movida al inicio por `urgencia: 3` (Emergencia).
- **Pedro:** Superó a Juan por ser `Reparación` frente a `Mantenimiento`.
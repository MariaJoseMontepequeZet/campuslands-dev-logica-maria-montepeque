# Resolución: Sistema de Turnos de Soldadura

## Pensamiento Lógico
Se utilizó un **diccionario de requisitos** (`requisitos`) para desacoplar las reglas de negocio del código principal. Esto permite que, si en el futuro se añade un nuevo tipo de trabajo, solo sea necesario actualizar el objeto `requisitos` en lugar de modificar toda la lógica condicional.

## Reglas Aplicadas
1. **Validación de Competencia:** El nivel del operario debe ser `>=` al requerido por la complejidad del trabajo.
2. **Prioridad por Riesgo:** El sistema clasifica automáticamente los trabajos para determinar qué operario es apto.

## Cómo ejecutar
`node turnos-soldadura.js`

## Casos Probados
- **Carlos (Crítico/Nivel 3):** Aprobado, turno inmediato.
- **Ana (Estructural/Nivel 1):** Bloqueado, requiere nivel 2.
- **Pedro (Estructural/Nivel 2):** Aprobado.
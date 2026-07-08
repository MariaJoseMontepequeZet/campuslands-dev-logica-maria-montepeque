# Resolución: Sistema de Validación de Capas (Dibujo Digital)

## Pensamiento Lógico
Se utilizó un enfoque de **validación secuencial**. Primero validamos la integridad estructural (presencia de contenido), luego la visibilidad (opacidad) y finalmente la jerarquía (posición de capas especiales). Este orden evita que el sistema pierda tiempo validando reglas de posición si el proyecto ni siquiera tiene contenido base.

## Reglas Aplicadas
1. **Contenido:** Obligatorio tener una capa `pincel`.
2. **Visibilidad:** Las capas `pincel` no pueden tener `0%` de opacidad.
3. **Jerarquía:** Capas `ajuste` bloqueadas en la última posición.

## Cómo ejecutar
`node dibujo-digital.js`

## Casos Probados
- **Proyecto 1:** APROBADO (cumple jerarquía y opacidad).
- **Proyecto 2:** ERROR (capa invisible detectada).
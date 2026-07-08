# Resolución: Normalización de Coordenadas 3D

## Pensamiento Lógico
En animación 3D, trabajar con matrices permite manipular múltiples vértices simultáneamente. Utilicé el método `.map()` para iterar sobre la matriz, lo que garantiza que no se modifique el objeto original (inmutabilidad), sino que se cree una nueva versión "limpia" del espacio.

## Reglas Aplicadas
1. **Límite:** Rango permitido $[-100, 100]$.
2. **Clamping:** Cualquier valor fuera del rango se redondea al límite superior o inferior.
3. **Reporte:** Contador de errores para que el animador sepa qué tan "desviado" estaba su modelo.

## Cómo ejecutar
`node animacion-3d.js`

## Casos Probados
- **Valor Positivo > 100:** Ajustado a 100.
- **Valor Negativo < -100:** Ajustado a -100.
- **Valor dentro de rango:** Sin cambios.
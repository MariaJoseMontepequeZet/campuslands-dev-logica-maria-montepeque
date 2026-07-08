# Resolución: Clasificación de Cine Sci-Fi

## Pensamiento Lógico
Se diseñó un flujo de **tubería (pipeline)**. Cada etapa es un filtro independiente; si la película falla en una etapa, el proceso se interrumpe inmediatamente (*early return*), ahorrando procesamiento y siendo más claro al explicar el "porqué" de la decisión.

## Reglas Aplicadas
1. **Calidad:** `rating >= 7.5`.
2. **Subgénero:** Solo aceptamos `Cyberpunk`, `Space Opera` o `Distopía`.
3. **Temporalidad:** Solo cine moderno (`anio >= 2000`).

## Cómo ejecutar
`node cine-sci-fi.js`

## Casos Probados
- **Blade Runner 2049:** Aprobada (cumple todos los filtros).
- **The Matrix:** Rechazada (cumple calidad/género, pero falla en el filtro de año).
- **Sharknado:** Rechazada (falla en el filtro de calidad).
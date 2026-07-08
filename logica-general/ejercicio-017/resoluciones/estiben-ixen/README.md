# Resolución: Evaluación Estructural 3D

## Pensamiento Lógico
Se utilizó una **Tabla de Decisión** como base para programar el evaluador. El sistema prioriza el tipo de suelo (condición crítica) antes de evaluar la complejidad del diseño (altura y sismo), asegurando que los casos de riesgo alto sean detectados inmediatamente.

## Reglas Aplicadas
1. **Suelo Blando:** Prioridad absoluta hacia cimentación profunda.
2. **Suelo Firme + Sismo Alto:** Se refuerza el material según la altura (Concreto para baja altura, Acero para alta).
3. **Suelo Firme + Sismo Bajo:** Estándar para baja altura.

## Cómo ejecutar
`node arquitectura-3d.js`

## Casos Probados
- **Proyecto Suelo Firme/Baja Altura:** Resultado: Concreto Estándar.
- **Proyecto Suelo Blando:** Resultado: Cimentación Profunda (prioridad sobre altura).
- **Proyecto Suelo Firme/Alta Altura:** Resultado: Acero Estructural.
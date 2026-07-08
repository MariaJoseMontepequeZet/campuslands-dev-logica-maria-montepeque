# Resolución: Diagnóstico de Seguridad en Tatuajes

## Pensamiento Lógico
El sistema opera mediante una **cadena de validación de riesgos**. El diagnóstico no busca simplemente "aprobar", busca identificar si existen factores de riesgo (legales, alérgicos o médicos) que impidan la sesión. Cada `if` actúa como un interruptor de seguridad.

## Reglas Aplicadas
1. **Legal:** Validación de mayoría de edad.
2. **Química:** Detección de alergias contraproducentes.
3. **Salud:** Verificación de condiciones médicas que exigen autorización.
4. **Técnica:** Restricción de zonas sensibles para diseños complejos.

## Cómo ejecutar
`node tatuajes-diagnostico.js`

## Casos Probados
- **Cliente 1:** Diseño APROBADO (cumple todos los estándares).
- **Cliente 2:** ERROR (menor de edad).
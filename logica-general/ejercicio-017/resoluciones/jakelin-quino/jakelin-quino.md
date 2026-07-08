# Analisis

- **Entrada:** `suelo` (string: "rocoso" o "arenoso"), `presupuesto` (number).
- **Proceso:** Se normalizan las entradas para crear una llave única que consulta una tabla de decisión predefinida.
- **Salida:** Un mensaje descriptivo sobre la viabilidad del proyecto.

## Reglas identificadas

1. **Suelo Rocoso + Presupuesto Alto:** Viabilidad total.
2. **Suelo Rocoso + Presupuesto Bajo:** Viable pero ajustado.
3. **Suelo Arenoso + Presupuesto Alto:** Viable con refuerzos adicionales.
4. **Suelo Arenoso + Presupuesto Bajo:** No viable por riesgos de seguridad.

## Pruebas

### Caso normal

**Entrada:** suelo: "rocoso", presupuesto: 150000

**Resultado esperado:** "Proyecto viable: Alta resistencia."

### Caso borde

**Entrada:** suelo: "arenoso", presupuesto: 50000

**Resultado esperado:** "Proyecto no viable: Riesgo estructural alto."

## Explicacion final

En lugar de escribir múltiples `if` anidados, mapeamos las combinaciones de entrada a una salida directa. Si mañana decidimos añadir un tipo de suelo "arcilloso", solo necesitamos agregar una línea más a nuestra tabla de decisiones.
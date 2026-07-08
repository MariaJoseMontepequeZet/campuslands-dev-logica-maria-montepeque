# Analisis

- **Entrada:** `edad` (number), `alcoholConsumido` (boolean), `tieneInfeccion` (boolean).
- **Proceso:** Se utiliza una estructura de filtrado donde cada regla actúa como un "check" de seguridad. Si algún check falla, se bloquea el proceso.
- **Salida:** Un objeto con el estado `apto` (booleano) y un `motivo` detallado.

## Reglas identificadas

1. **Regla Legal:** Se requiere mayoría de edad (18+).
2. **Regla de Salud (Sangrado):** El consumo de alcohol altera la coagulación, lo que impide el trabajo técnico.
3. **Regla de Salud (Sanitaria):** Infecciones activas impiden realizar procesos de ruptura de barrera cutánea.

## Pruebas

### Caso normal

**Entrada:** Edad: 25, alcoholConsumido: false, tieneInfeccion: false

**Resultado esperado:** { apto: true, motivo: "Cliente apto para el procedimiento." }

### Caso borde

**Entrada:** Edad: 20, alcoholConsumido: true, tieneInfeccion: false

**Resultado esperado:** { apto: false, motivo: "El cliente ha consumido alcohol, riesgo de sangrado elevado." }

## Explicacion final

Al evaluar primero la condición legal y luego las condiciones médicas, garantizamos que si el cliente no puede tatuarse, el sistema nos diga exactamente por qué, sin realizar cálculos innecesarios.
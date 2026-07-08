# Analisis

- **Entrada:** `vehiculo` (string), `esEmergencia` (boolean), `esClienteFrecuente` (boolean).
- **Proceso:** Se utiliza una estructura condicional (`if/else if`) para evaluar el nivel de prioridad, comenzando por el escenario más crítico (emergencia) hasta el menos crítico (estándar).
- **Salida:** Un objeto con el `orden` de atención, la `accion` sugerida y el `motivo` de la decisión.

## Reglas identificadas

1. **Regla de Emergencia:** Cualquier vehículo marcado como emergencia pasa al primer lugar.
2. **Regla de Fidelidad:** Los clientes frecuentes tienen preferencia sobre los clientes nuevos.
3. **Regla Estándar:** Si no hay emergencias ni fidelidad, se trata como un vehículo estándar en orden de llegada.

## Pruebas

### Caso normal

**Entrada:** - vehiculo: "Camioneta", esEmergencia: false, esClienteFrecuente: true

**Resultado esperado:** - orden: 2
- accion: "Programar cita próxima"
- motivo: "Prioridad por fidelidad del cliente."

### Caso borde

**Entrada:** - vehiculo: "Sedán", esEmergencia: true, esClienteFrecuente: false

**Resultado esperado:** - orden: 1
- accion: "Atender de inmediato"
- motivo: "Prioridad máxima por emergencia."

## Explicacion final

La solución aplica el concepto de **priorización lógica**. Al evaluar primero la condición de mayor impacto (emergencia), garantizamos que la seguridad o la urgencia del cliente siempre se resuelva antes que cualquier otra solicitud.
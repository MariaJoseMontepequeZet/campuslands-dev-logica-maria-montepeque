# Analisis

- **Entrada:** `tipoSoldadura` (string), `esUrgente` (boolean).
- **Proceso:** Se utiliza una estructura condicional jerárquica que evalúa primero la urgencia y luego la especialización técnica para determinar el turno de trabajo.
- **Salida:** Un objeto con el número de `turno` y un `mensaje` de asignación.

## Reglas identificadas

1. **Regla de Precisión:** TIG urgente recibe la máxima prioridad (Turno 1).
2. **Regla de Rapidez:** Cualquier otra soldadura urgente se clasifica como Turno 2.
3. **Regla Estándar:** Las tareas no urgentes se asignan al Turno 3 para procesamiento normal.

## Pruebas

### Caso normal

**Entrada:** tipoSoldadura: "TIG", esUrgente: true

**Resultado esperado:** { turno: 1, mensaje: "Asignado a estación de alta precisión (Prioridad TIG)." }

### Caso borde

**Entrada:** tipoSoldadura: "MIG", esUrgente: false

**Resultado esperado:** { turno: 3, mensaje: "Asignado a turno de soldadura estándar." }

## Explicacion final

En entornos industriales como la soldadura, no todos los procesos toman el mismo tiempo ni requieren la misma experticia técnica. Al segregar los turnos por estas variables, optimizamos el flujo del taller y aseguramos que los trabajos críticos se completen primero.
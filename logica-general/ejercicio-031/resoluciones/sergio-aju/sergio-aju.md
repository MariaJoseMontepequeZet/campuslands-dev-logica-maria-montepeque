# Plantilla de solucion

## Autor: 

Sergio Ajú

## Analisis

- **Entrada:** Una lista (array) con estados de tareas de los peleadores ("aprobado", "pendiente", "bloqueado").
- **Proceso:** El programa recorre la lista buscando los estados en orden de importancia. Prioriza siempre los riesgos ("bloqueado"), luego los pendientes y finalmente confirma si todo está listo para el combate.
- **Salida:** Un objeto que indica la acción específica a realizar y el motivo basado en la prioridad del evento.

## Reglas identificadas

1. **Prioridad Crítica:** Si la lista contiene al menos un elemento "bloqueado", la acción debe ser resolver ese problema de seguridad primero.
2. **Prioridad Administrativa:** Si no hay bloqueados pero existen "pendientes", la acción es gestionar esos pendientes para que el evento avance.
3. **Estado de Operación:** Si la lista solo contiene estados "aprobado", el sistema autoriza el inicio del combate.

## Pruebas

### Caso normal

**Entrada:** `["aprobado", "pendiente", "bloqueado"]`

**Resultado esperado:**
```json
{
  "accion": "revisar bloqueado",
  "motivo": "la regla prioriza riesgos antes de tareas normales."
}
# Plantilla de solucion

## Analisis

- **Entrada:** Un objeto con una lista de items y una prioridad.
- **Proceso:** Validar existencia de datos, verificar si hay elementos bloqueados con alta prioridad para revisar, y comprobar si hay pendientes con baja prioridad para esperar.
- **Salida:** Un objeto con la accion a realizar y el motivo de la decisión.

## Reglas identificadas

1. Si no hay datos, se ignora la solicitud.
2. Si existen items "bloqueado" y la prioridad es "alta", se activa la revisión.
3. Si existen items "pendiente" y la prioridad es "baja", se pospone la acción.
4. Si no se cumple ninguna alerta, se continúa con el torneo.

## Pruebas

### **Caso normal**

Entrada:
```json
{ 
  "items": ["aprobado", "pendiente", "bloqueado"], 
  "prioridad": "alta", 
  "regla": "revisar bloqueados primero" 
}
```

Resultado esperado:

```json
{ 
  "accion": "revisar bloqueado", 
  "motivo": "la regla prioriza riesgos antes de tareas normales." 
}
```

### **Caso borde**

Entrada:

```json
{ 
  "items": ["pendiente"], 
  "prioridad": "baja", 
  "regla": "revisar pendientes luego" 
}
```

Resultado esperado:

```json
{ 
  "accion": "esperar", 
  "motivo": "Baja prioridad, se puede resolver en la siguiente ronda." 
}
```

### Explicacion final
La solución funciona porque implementa una estructura de control que evalúa condiciones específicas de riesgo y prioridad. Primero filtra casos sin datos y luego utiliza condicionales (if) para priorizar las acciones más críticas, asegurando que el flujo del torneo solo continúe si no hay riesgos pendientes.
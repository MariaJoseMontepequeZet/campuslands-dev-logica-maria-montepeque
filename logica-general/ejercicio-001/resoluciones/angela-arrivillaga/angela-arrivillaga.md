# Plantilla de solucion

## Analisis

- **Entrada:** Un objeto con una lista de items, una prioridad y una regla.
- **Proceso:** Validar que los datos existan, verificar si hay prioridad "alta" junto con la regla de bloqueo y buscar si existe un item "bloqueado".
- **Salida:** Un objeto con la accion a realizar y el motivo de la decisión.

## Reglas identificadas

1. Si la entrada no tiene el formato correcto (items, prioridad, regla), se retorna un error.
2. Si la prioridad es "alta", la regla contiene "bloqueado" y hay un ítem "bloqueado", se activa la acción de revisar.
3. Si no se cumplen las condiciones anteriores, se ejecuta el flujo normal.

## Pruebas

### Caso normal

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

### Caso borde

Entrada:

```json
{ 
  "items": ["aprobado", "pendiente"], 
  "prioridad": "alta", 
  "regla": "revisar bloqueados primero" 
}
```
Resultado esperado:

```json
{ 
  "accion": "procesar flujo normal", 
  "motivo": "No se detectaron elementos bloqueados con alta prioridad." 
}
```

## Explicacion final

La solución funciona porque primero asegura que los datos sean legibles para el código. Luego, usa condicionales (if) para evaluar si los requisitos de prioridad y existencia de ítems críticos se cumplen simultáneamente; si no, por defecto, devuelve el flujo de trabajo normal.
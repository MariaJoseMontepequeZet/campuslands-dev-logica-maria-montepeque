# Solución 1.1

## Analisis

- **Entrada:** - `items`: Arreglo de strings `["aprobado", "pendiente", "bloqueado"]`.
  - `prioridad`: String `"alta"`.
  - `regla`: String `"revisar bloqueados primero"`.
- **Proceso:** Un condicional `if` evalúa si `regla` es igual a `"revisar bloqueados primero"` **Y** si `items` contiene (`.includes`) el valor `"bloqueado"`.
- **Salida:** Mensajes en consola (`accion` y `motivo`).

## Reglas identificadas

1. **Prioridad de riesgo:** Si la regla lo exige y hay un ítem `"bloqueado"`, se detiene el flujo para revisarlo.
2. **Caso alterno (Else):** Si no hay bloqueos o la regla cambia, se pasa al flujo normal.

## Pruebas

### Caso normal

**Entrada:**
```javascript
items = ["aprobado", "pendiente", "bloqueado"];
prioridad = "alta";
regla = "revisar bloqueados primero";
```

Resultado esperado: 
- accion: revisar bloqueado
- motivo: la regla prioriza riesgos antes de tareas normales.

### Caso borde

Entrada:
``` javascript
items = ["aprobado", "pendiente"]; 
// Sin bloqueados
prioridad = "alta";
regla = "revisar bloqueados primero"; 
```

Resultado esperado: 
- accion: revisar pendiente o flujo normal
- motivo: no se cumple la regla de prioridad de bloqueados.

## Explicacion final

La solución funciona porque usa un operador lógico && (Y) para evaluar las dos condiciones críticas en un solo paso. Es el enfoque más simple y directo en JavaScript para resolver el problema sin código redundante.
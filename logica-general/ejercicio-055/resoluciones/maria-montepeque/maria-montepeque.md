# Ejercicio 054 - Diagnostico de errores

## Analisis

- Entrada: una lista de estados de items (`aprobado`, `pendiente`, `bloqueado`).
- Proceso: se compara cada estado contra un mapa de prioridad numerica y se selecciona el de mayor riesgo.
- Salida: un objeto con la `accion` a tomar y el `motivo` que la justifica.

## Reglas identificadas

1. Los items `bloqueado` tienen la prioridad mas alta y deben revisarse primero.
2. Si no hay bloqueados, se revisa un `pendiente` antes que un `aprobado`.
3. Si la lista esta vacia, no hay accion que tomar.

## Pruebas

### Caso normal

Entrada:

```text
["aprobado", "pendiente", "bloqueado"]
```

Resultado esperado:

```text
{ accion: "revisar bloqueado", motivo: "la regla prioriza riesgos antes de tareas normales." }
```

### Caso borde

Entrada:

```text
[]
```

Resultado esperado:

```text
{ accion: "sin accion", motivo: "no se recibieron items para evaluar." }
```

### Caso adicional

Entrada:

```text
["aprobado", "aprobado"]
```

Resultado esperado:

```text
{ accion: "revisar aprobado", motivo: "todos los items estan aprobados, no hay riesgos pendientes." }
```

## Explicacion final

Un mapa de prioridad numerica evita condicionales anidados: cada estado tiene un peso, y `reduce` recorre la lista quedandose siempre con el estado de menor numero (mayor riesgo). Estados no reconocidos reciben la prioridad mas baja posible para no interferir con los ya definidos, y la lista vacia se valida antes de procesar para evitar errores.

## Como ejecutar

```bash
node maria-montepeque.js
```
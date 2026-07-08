# Plantilla de solucion

## Analisis

- Entrada: items (lista de estados), prioridad, regla.
- Proceso: recorrer items con un ciclo, acumular un conteo por categoria (bloqueado, pendiente, aprobado), comparar los conteos.
- Salida: conteos por categoria, categoria ganadora, motivo.

## Reglas identificadas

1. Cada item valido suma 1 al conteo de su categoria (bloqueado, pendiente o aprobado).
2. La categoria con mayor conteo es la ganadora.
3. En caso de empate, gana la categoria de mayor riesgo: bloqueado > pendiente > aprobado.

## Pruebas

### Caso normal

Entrada: items: ["aprobado", "pendiente", "bloqueado"], prioridad: alta, regla: revisar bloqueados primero

Resultado esperado: conteos { bloqueado: 1, pendiente: 1, aprobado: 1 }, ganador: bloqueado (por desempate de riesgo).

### Caso borde

Entrada: items: [], prioridad: alta, regla: revisar bloqueados primero

Resultado esperado: conteos: {}, ganador: null, motivo: no hay items para comparar.

## Explicacion final

La solucion funciona porque separa el conteo (acumulador por categoria mediante un ciclo) de la comparacion (revisar cual acumulador quedo mas alto). Al definir un orden de desempate explicito, el resultado siempre es determinista incluso cuando dos o mas categorias tienen el mismo numero de items.

## Sugerencia

Convierte cada regla del problema en una condicion clara antes de programar.
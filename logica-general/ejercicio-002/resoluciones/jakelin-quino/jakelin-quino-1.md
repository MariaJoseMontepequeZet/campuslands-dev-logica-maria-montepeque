# Solucion

## Analisis

- **Entrada:** `nombreEquipo` (string), `puntos` (number), `estadoSancion` (boolean).
- **Proceso:** Se evalúa primero si existe una sanción. Si no la hay, se verifica si el puntaje es mayor a cero para determinar la participación.
- **Salida:** Un mensaje de texto indicando si el equipo puede participar o el motivo de su exclusión.

## Reglas identificadas

1. **Regla de Sanción:** Si `estadoSancion` es `true`, el equipo queda excluido inmediatamente.
2. **Regla de Participación:** Un equipo activo debe tener un puntaje mayor a 0.
3. **Regla de Validación:** Cualquier puntaje menor o igual a 0 se considera inactivo.

## Pruebas

### Caso normal

**Entrada:** - Nombre: "Los Tigres"
- Puntos: 15
- Sanción: false

**Resultado esperado:** "El equipo Los Tigres puede participar en el ranking."

### Caso borde

**Entrada:** - Nombre: "Fénix"
- Puntos: 0
- Sanción: true

**Resultado esperado:** "El equipo Fénix no puede participar: está sancionado."

## Explicacion final

La solución funciona mediante una estructura de control condicional (`if/else`). Se prioriza la regla de sanción al ser la restricción que tiene más relevancia en el resultado. Al evaluar las condiciones en orden jerárquico, el sistema entrega un resultado claro y correcto, evitando errores de lógica al procesar equipos con 0 puntos o equipos sancionados.
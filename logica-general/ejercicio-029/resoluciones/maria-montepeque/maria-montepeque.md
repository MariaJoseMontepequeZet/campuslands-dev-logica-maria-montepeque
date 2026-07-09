# Solución Ejercicio 029 - Simulación de Estados

## Análisis
- **Entrada**: Nombre del personaje y una lista de eventos (strings).
- **Proceso**: Recorrer los eventos y actualizar el `estadoActual` siguiendo una jerarquía lógica de supervivencia.
- **Salida**: Objeto con el estado final y el rastro de cambios (`historial`).

## Reglas identificadas
1. **Transición 1**: "ruido" cambia de "alerta" a "asustado".
2. **Transición 2**: "contacto" cambia de "asustado" a "en peligro".
3. **Transición 3**: "refugio" siempre lleva a "a salvo", sin importar el estado previo.

## Pruebas

### Caso normal
- **Entrada**: `personaje: "Elena", eventos: ["ruido", "contacto"]`
- **Resultado esperado**: `estadoFinal: "en peligro"`

### Caso borde
- **Entrada**: `personaje: "Pedro", eventos: ["refugio"]`
- **Resultado esperado**: `estadoFinal: "a salvo"`

## Explicación final
La solución funciona mediante una estructura de control que verifica el estado actual y el evento entrante. Esta es la base de las máquinas de estado, fundamentales para modelar sistemas que reaccionan a estímulos externos.
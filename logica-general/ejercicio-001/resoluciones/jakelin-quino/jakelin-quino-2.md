# Analisis

- **Entrada:** `nombre` (string), `puntos` (int).
- **Proceso:** Se utiliza una estructura condicional (`if-elif-else`) para evaluar el puntaje del jugador y asignarlo a una liga predefinida.
- **Salida:** Un diccionario con el nombre del jugador, su liga y un mensaje descriptivo.

## Reglas aplicadas

1. **Liga Diamante:** Requiere 3000 puntos o más.
2. **Liga Oro:** Requiere entre 1500 y 2999 puntos.
3. **Liga Bronce:** Menos de 1500 puntos.

## Pruebas

### Caso normal
- **Entrada:** "PlayerOne", 3200
- **Resultado:** {"jugador": "PlayerOne", "liga": "Diamante", "mensaje": "Nivel profesional."}

### Caso borde
- **Entrada:** "Newbie", 500
- **Resultado:** {"jugador": "Newbie", "liga": "Bronce", "mensaje": "Nivel principiante."}

## Explicacion final

El flujo evalúa primero el rango más alto para descartar condiciones rápidamente. Esto hace que el código sea eficiente y fácil de leer.
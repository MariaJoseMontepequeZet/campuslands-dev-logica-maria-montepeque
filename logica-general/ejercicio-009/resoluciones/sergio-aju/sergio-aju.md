# Plantilla de solucion

## Autor:

Sergio Ajù

## Analisis

- **Entrada:** `evento` (String) que describe la escena actual, y `volumenSonido` (Number) que mide la intensidad sonora.
- **Proceso:** Evaluación condicional jerárquica para determinar el estado emocional del espectador según la intensidad del estímulo.
- **Salida:** Un objeto que contiene el `estado` del usuario y la `accion` recomendada.

## Reglas identificadas

1. **Pánico:** Ocurre ante la combinación de silencio tenso y volumen alto (típico jumpscare).
2. **Alerta:** Se activa ante eventos de susto o sonidos moderadamente altos.
3. **Tranquilidad:** Es el estado inicial cuando los estímulos son bajos.

## Pruebas

### Caso normal

**Entrada:** `evento = "susto", volumenSonido = 30`

**Resultado esperado:** `{estado: "alerta", accion: "Cubrirse los ojos"}`

### Caso borde

**Entrada:** `evento = "silencio", volumenSonido = 95`

**Resultado esperado:** `{estado: "panico", accion: "¡Gritar!"}`

## Explicacion final

El problema fue resuelto utilizando estructuras condicionales `if-else if` para definir la prioridad de los estados. Al priorizar el estado de "pánico" al principio, nos aseguramos de que el programa capture los momentos de máxima intensidad antes de procesar estados de alerta menores. Esta jerarquía es fundamental en sistemas de simulación.

## Sugerencia

Convierte cada regla del problema en una condicion clara antes de programar. Si deseas mejorar este ejercicio, podrías intentar implementar un contador de "niveles de susto" para que el espectador pueda pasar de estado 'tranquilo' a 'alerta' gradualmente, en lugar de hacerlo de golpe.

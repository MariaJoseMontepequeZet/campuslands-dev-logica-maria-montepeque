# Analisis

- **Entrada:** `estado_actual` (string), `presencia_fantasma` (bool), `tiene_arma` (bool).
- **Proceso:** Se utiliza una estructura lógica para evaluar el entorno (eventos) y decidir el nuevo estado del personaje.
- **Salida:** Una cadena de texto representando el nuevo `estado`.

## Reglas aplicadas

1. **Estado Pánico:** Activo ante una amenaza (fantasma) sin medios de defensa.
2. **Estado Alerta:** Activo ante una amenaza, pero con medios para defenderse.
3. **Estado Calma:** Estado por defecto si no hay amenazas presentes.

## Pruebas

### Caso normal
- **Entrada:** estado: "Calma", fantasma: True, arma: False
- **Resultado:** "Pánico"

### Caso borde
- **Entrada:** estado: "Pánico", fantasma: False, arma: True
- **Resultado:** "Calma"

## Explicacion final

He implementado una **máquina de estados finita simplificada**. Este permite que los objetos o personajes reaccionen de forma predecible ante los cambios en su entorno, asegurando que el comportamiento sea siempre coherente con las reglas establecidas.
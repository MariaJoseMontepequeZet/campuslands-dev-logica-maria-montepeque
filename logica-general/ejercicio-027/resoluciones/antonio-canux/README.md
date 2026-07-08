# Ejercicio 27 - Playlist Musical

**CAmper:** Antonio Canux

## Análisis

- **Entrada:** La función recibe un objeto `cancion` que contiene tres propiedades: `titulo` (string), `artista` (string) y `duracionSegundos` (número).
- **Proceso:** Se emplean condicionales para validar la integridad de los datos. Primero se verifica que el título y el artista no estén vacíos o sean nulos. Si esa prueba se supera, se verifica que la duración de la canción sea un número estrictamente mayor a cero.
- **Salida:** Un objeto con el `estado` de la canción ("inconsistente" o "valida") y un `detalle` que explica el motivo del fallo o confirma su viabilidad.

## Reglas identificadas

1. Una canción no puede agregarse a la playlist si no tiene un título o un artista definido, ya que esto rompería la interfaz de usuario de la plataforma de streaming.
2. Un archivo de audio no puede tener una duración de 0 segundos o negativa; de ser así, se clasifica como corrupto.
3. Únicamente cuando la pista tiene metadatos completos y una duración lógica, se clasifica como válida.

## Pruebas

### Caso normal

Entrada: `{ titulo: "Wicked Game", artista: "Chris Isaak", duracionSegundos: 286 }`

Resultado esperado: 
```text
estado: "valida"
detalle: "La canción pasó las validaciones y puede añadirse a la playlist."
```

### Caso borde
Entrada:  `{ titulo: "Las piedras rodantes", artista: "El Tri", duracionSegundos: 0 }`

Resultado esperado:

```text
estado: "inconsistente"
detalle: "La duración de la pista es inválida o el archivo de audio está corrupto."
```

## Explicacion final
La solución funciona porque actúa como una barrera de control de calidad para los datos de entrada. En el desarrollo de software, asumir que los datos siempre llegarán en el formato correcto es un error común que provoca caídas en el sistema. Al validar los campos críticos (titulo y artista) y establecer límites lógicos en los campos numéricos (duracionSegundos > 0), el código previene que el reproductor intente cargar archivos corruptos o mostrar pistas "fantasmas" sin nombre.
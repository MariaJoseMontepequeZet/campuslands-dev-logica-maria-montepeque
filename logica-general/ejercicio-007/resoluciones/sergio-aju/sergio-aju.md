# Plantilla de solucion

## Autor 

Sergio Ajù

## Analisis

- **Entrada:** - `cancion`: Objeto con los atributos `titulo` (string), `artista` (string), `duracion` (number) y `formato` (string).
- **Proceso:** Aplicar una serie de condicionales de validación para filtrar canciones con metadatos incorrectos o corruptos.
- **Salida:** Estado de la validación (`valido` o `inconsistente`) acompañado de una explicación detallada del fallo si existe.

## Reglas identificadas

1. **Campos obligatorios:** Los atributos `titulo` y `artista` deben contener información válida.
2. **Coherencia de tiempo:** La duración de la pista debe ser un valor numérico superior a cero.
3. **Soporte de formatos:** Solo se aceptan extensiones de archivo `mp3`, `wav` y `flac`.

## Pruebas

### Caso normal

**Entrada:** `{titulo: "Blinding Lights", artista: "The Weeknd", duracion: 200, formato: "mp3"}`

**Resultado esperado:** `{estado: "valido", motivo: "La canción cumple con todos los requisitos."}`

### Caso borde

**Entrada:** `{titulo: "Test", artista: "Autor", duracion: -10, formato: "mp3"}`

**Resultado esperado:** `{estado: "inconsistente", motivo: "La duración debe ser un número positivo."}`

## Explicacion final

La solución utiliza una estructura de validación por niveles. Cada regla se evalúa de forma independiente; si una se incumple, se retorna inmediatamente el estado de "inconsistente". Este enfoque es eficiente porque evita realizar comprobaciones innecesarias si el objeto ya ha sido marcado como inválido previamente, garantizando la integridad de la playlist.

## Sugerencia

Convierte cada regla del problema en una condicion clara antes de programar. Si el sistema debe manejar miles de canciones, considera crear una clase `Cancion` que valide estos datos desde el momento de su instanciación, garantizando que nunca se creen objetos "inconsistentes" en el sistema.
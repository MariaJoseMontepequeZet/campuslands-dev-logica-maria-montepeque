# Plantilla de solución

## Analisis

* **Entrada**: Un arreglo `canciones` donde cada objeto contiene `titulo`, `duracion` (en segundos) y `formato`.
* **Proceso**: Iteración sobre la lista aplicando validaciones de calidad (tiempo mínimo), compatibilidad (formatos permitidos) y unicidad (evitar duplicados de títulos) mediante el uso de estructuras de control y un conjunto (`Set`) de seguimiento.
* **Salida**: Un arreglo de objetos `reporte` que indica si cada canción fue "Aprobada" o "Rechazada" (incluyendo el motivo de rechazo si aplica).

## Reglas identificadas

1. Una canción debe tener una `duracion` mínima de 30 segundos.
2. El `formato` debe ser estrictamente "mp3" o "flac" (insensible a mayúsculas).
3. No se permiten `titulos` duplicados; una vez aprobado un título, cualquier otro igual en la lista será rechazado.

## Pruebas

### Caso normal

* **Entrada**: `[{ titulo: "Chill Beats", duracion: 180, formato: "flac" }]`
* **Resultado esperado**: `[{ titulo: "Chill Beats", estado: "Aprobada" }]`

### Caso borde

* **Entrada**: `[{ titulo: "Intro", duracion: 10, formato: "mp3" }, { titulo: "Intro", duracion: 200, formato: "mp3" }]`
* **Resultado esperado**: `[{ titulo: "Intro", estado: "Rechazada", motivo: "Duración insuficiente (< 30s)." }, { titulo: "Intro", estado: "Rechazada", motivo: "Título duplicado en la lista." }]`

## Explicacion final

La solución funciona mediante una validación secuencial (cascada) que garantiza que una canción sea evaluada bajo todos los criterios antes de ser aceptada. El uso de un `Set` para registrar títulos ya aprobados permite que la validación de duplicados sea extremadamente eficiente, evitando búsquedas costosas en el arreglo completo. La estructuración de un objeto `reporte` asegura que el usuario final reciba retroalimentación inmediata sobre qué canciones cumplen con las políticas de la plataforma y cuáles deben ser corregidas.

## Sugerencia

Convierte cada regla del problema en una condición clara antes de programar:

* **Regla 1 (Duración)**: `cancion.duracion < 30`
* **Regla 2 (Formato)**: `!["mp3", "flac"].includes(cancion.formato.toLowerCase())`
* **Regla 3 (Duplicado)**: `titulosRegistrados.has(cancion.titulo)`
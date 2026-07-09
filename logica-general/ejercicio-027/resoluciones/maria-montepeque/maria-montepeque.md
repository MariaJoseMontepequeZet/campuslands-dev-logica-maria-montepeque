# Detección de Inconsistencias en Playlist

## Análisis
- **Entrada**: Un arreglo de objetos, donde cada objeto representa una canción con propiedades `titulo` y `duracion`.
- **Proceso**: El sistema recorre el arreglo verificando dos reglas: que el título no esté vacío y que la duración sea un número positivo.
- **Salida**: Un objeto resumen con el conteo de elementos y una lista detallada de los errores encontrados.

## Reglas identificadas
1. **Validación de tipo**: La entrada debe ser un arreglo.
2. **Integridad de datos**: El título debe ser un string no vacío.
3. **Lógica de negocio**: La duración debe ser mayor a 0.

## Pruebas

### Caso normal
- **Entrada**: `[{ titulo: "Canción A", duracion: 180 }]`
- **Resultado**: `Sin inconsistencias.`

### Caso borde
- **Entrada**: `[{ titulo: "", duracion: -5 }]`
- **Resultado**: `['Índice 0: Título vacío.', 'Índice 0: Duración inválida.']`

## Explicación final
La solución utiliza el método `.forEach` para iterar sobre la lista y un acumulador (`inconsistencias`) para recolectar errores. Esto permite validar múltiples reglas de negocio en una sola pasada.
# Plantilla de solución

## Analisis

* **Entrada**: Un objeto `usuario` (con `preferencia` y `presupuesto`) y un objeto `pelicula` (con `subgenero` y `costoAlquiler`).
* **Proceso**: Evaluación mediante cláusulas de guardia para validar primero la coincidencia de subgénero y luego la disponibilidad presupuestaria.
* **Salida**: Un objeto que resume la `accion` (resultado de la recomendación) y el `motivo` (explicación de la decisión).

## Reglas identificadas

1. Si el `subgenero` de la película no coincide con la `preferencia` del usuario, no se recomienda.
2. Si el `costoAlquiler` excede el `presupuesto` del usuario, la recomendación se marca como fuera de presupuesto.
3. Si ambas condiciones anteriores se cumplen, la película es recomendada.

## Pruebas

### Caso normal

* **Entrada**: `usuario: { preferencia: "Cyberpunk", presupuesto: 5 }, pelicula: { subgenero: "Cyberpunk", costoAlquiler: 3 }`
* **Resultado esperado**: `{ accion: "Recomendada para ver", motivo: "La película coincide con tus gustos y está dentro de tu presupuesto." }`

### Caso borde

* **Entrada**: `usuario: { preferencia: "Cyberpunk", presupuesto: 5 }, pelicula: { subgenero: "Cyberpunk", costoAlquiler: 10 }`
* **Resultado esperado**: `{ accion: "Recomendación fuera de presupuesto", motivo: "El costo de alquiler excede tu presupuesto actual." }`

## Explicacion final

La solución funciona gracias a la aplicación de **cláusulas de guardia (guard clauses)**, que permiten validar las restricciones de forma secuencial y retornar inmediatamente si una condición falla. Esto evita el uso de anidaciones complejas (`if-else` múltiples) y asegura que la lógica de recomendación sea clara, escalable y fácil de mantener para cualquier perfil de usuario o catálogo de películas.

## Sugerencia

Convierte cada regla del problema en una condición clara antes de programar:

* **Regla 1 (Género)**: `pelicula.subgenero !== usuario.preferencia`
* **Regla 2 (Presupuesto)**: `pelicula.costoAlquiler > usuario.presupuesto`
* **Regla 3 (Aceptación)**: Si no se activan las reglas 1 y 2, se devuelve la recomendación positiva.
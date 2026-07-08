# Plantilla de solución

## Analisis

* **Entrada**: Un arreglo `peliculas` de objetos (con `titulo`, `anio` y `ordenCronologico`) y una cadena `preferencia` ("lanzamiento" o "cronologico").
* **Proceso**: Clonación del arreglo original para preservar la inmutabilidad, selección del criterio de ordenamiento (`sort`) basado en el atributo correspondiente según la preferencia, y mapeo de los resultados para extraer solo los títulos.
* **Salida**: Un objeto que contiene una secuencia de títulos (arreglo de strings) y un motivo descriptivo del orden aplicado.

## Reglas identificadas

1. Si el arreglo de películas está vacío, se debe retornar un objeto de error.
2. Si la `preferencia` es "lanzamiento", el orden debe basarse en el atributo `anio` de forma ascendente.
3. Si la `preferencia` es distinta a "lanzamiento" (asumiendo "cronologico"), el orden debe basarse en `ordenCronologico` de forma ascendente.

## Pruebas

### Caso normal

* **Entrada**: `saga: [...], preferencia: "lanzamiento"`
* **Resultado esperado**: `{ secuencia: ["Star Wars: Episodio IV", "Star Wars: Episodio I"], motivo: "Ordenado por preferencia de lanzamiento." }`

### Caso borde

* **Entrada**: `saga: [...], preferencia: "cronologico"`
* **Resultado esperado**: `{ secuencia: ["Star Wars: Episodio I", "Star Wars: Episodio IV"], motivo: "Ordenado por preferencia de cronologico." }`

## Explicacion final

La solución funciona gracias a la flexibilidad del método `.sort()` de JavaScript, el cual permite definir comparadores dinámicos. Al pasar una función de comparación que resta dos valores numéricos (`a.anio - b.anio`), logramos un ordenamiento ascendente preciso sin importar la complejidad de los datos internos. Además, el uso del *spread operator* para crear una copia de la lista garantiza que el arreglo original no sea modificado, cumpliendo con principios de programación segura.

## Sugerencia

Convierte cada regla del problema en una condición clara antes de programar:

* **Regla 1 (Validación)**: `peliculas.length === 0`
* **Regla 2 (Lanzamiento)**: `preferencia === "lanzamiento"`
* **Regla 3 (Cronológico)**: `preferencia !== "lanzamiento"` (u otro criterio por defecto)
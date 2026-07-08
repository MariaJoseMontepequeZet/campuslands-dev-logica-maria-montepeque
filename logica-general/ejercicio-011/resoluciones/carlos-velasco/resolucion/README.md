# Plantilla de solución

## Analisis

* **Entrada**: Un *array* de objetos donde cada objeto contiene el `nombre` y la `categoria` de un peleador.
* **Proceso**: Iteración mediante el método `reduce` para agrupar los nombres de los peleadores en un objeto, utilizando la categoría como clave de agrupación.
* **Salida**: Un objeto cuyas claves son las categorías y cuyos valores son *arrays* con los nombres de los peleadores pertenecientes a dicha categoría.

## Reglas identificadas

1. Se debe crear una nueva entrada en el objeto acumulador para cada categoría que aparezca por primera vez.
2. Cada peleador debe ser insertado en el *array* correspondiente a su categoría definida.
3. El proceso debe retornar un objeto único consolidado con toda la información organizada.

## Pruebas

### Caso normal

* **Entrada**: `[{ nombre: "Juan", categoria: "Pluma" }, { nombre: "Pedro", categoria: "Pesado" }, { nombre: "Luis", categoria: "Pluma" }]`
* **Resultado esperado**: `{ Pluma: ["Juan", "Luis"], Pesado: ["Pedro"] }`

### Caso borde

* **Entrada**: `[{ nombre: "Ana", categoria: "Gallo" }]`
* **Resultado esperado**: `{ Gallo: ["Ana"] }`

## Explicacion final

La solución funciona gracias a la versatilidad del método `reduce`, el cual permite transformar una lista plana en una estructura de datos jerárquica en una sola pasada. Al verificar la existencia de la categoría en el objeto acumulador (`if (!acc[cat])`), garantizamos que el programa pueda manejar cualquier número de categorías de forma dinámica sin errores de referencia, creando los contenedores necesarios al momento de encontrarlos.

## Sugerencia

Convierte cada regla del problema en una condición clara antes de programar:

* **Regla 1 (Inicialización)**: `if (!acc[categoriaActual]) acc[categoriaActual] = []`
* **Regla 2 (Inserción)**: `acc[categoriaActual].push(nombreActual)`
* **Regla 3 (Retorno)**: `return acc` al finalizar cada iteración.
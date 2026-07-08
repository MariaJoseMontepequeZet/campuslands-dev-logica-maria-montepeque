# Lógica general - matrices simples

## Análisis

**Entrada:**

* Un arreglo con objetos de una animación 3D y sus posiciones en una matriz simple (X, Y).

**Proceso:**

* Recorrer la lista de objetos.
* Sumar las coordenadas de los ejes X y Y.
* Verificar si cada objeto está a la derecha o a la izquierda según su posición en X.

**Salida:**

* Mostrar la posición de cada objeto.
* Mostrar el total de las coordenadas en los ejes X y Y.

## Reglas identificadas

* Si no hay objetos, mostrar un mensaje.
* Si la coordenada **X** es mayor o igual a 3, el objeto está a la derecha.
* Si la coordenada **X** es menor que 3, el objeto está a la izquierda.
* Sumar las coordenadas de los ejes X y Y.

## Pruebas

### Caso normal

**Entrada:**

* Cubo: (2, 3)
* Esfera: (5, 4)
* Pirámide: (1, 6)

**Resultado esperado:**

* Cubo: Está a la izquierda.
* Esfera: Está a la derecha.
* Pirámide: Está a la izquierda.
* Total eje X: 8.
* Total eje Y: 13.

### Caso borde

**Entrada:**

* Arreglo vacío (`[]`).

**Resultado esperado:**

* Mostrar el mensaje: "No hay objetos para mostrar."

## Explicación final

La solución funciona porque recorre todos los objetos de la animación, analiza sus coordenadas en la matriz, suma los valores de los ejes X y Y y determina la posición de cada objeto según las reglas establecidas.

# Lógica matemática 014 - areas y perimetros

## Análisis

**Entrada:**

* Un arreglo con los tatuajes y la medida de su lado.

**Proceso:**

* Recorrer la lista de tatuajes.
* Calcular el área y el perímetro de cada uno.
* Sumar las áreas y los perímetros.
* Verificar si el tatuaje es grande o pequeño según su área.

**Salida:**

* Mostrar el área y el perímetro de cada tatuaje.
* Mostrar el área total y el perímetro total.

## Reglas identificadas

* Si no hay tatuajes, mostrar un mensaje.
* Área = lado × lado.
* Perímetro = lado × 4.
* Si el área es mayor o igual a 100, el tatuaje se considera grande.

## Pruebas

### Caso normal

**Entrada:**

* Dragón: lado 10.
* Rosa: lado 8.
* Lobo: lado 12.

**Resultado esperado:**

* Se muestran el área y el perímetro de cada tatuaje.
* Se calcula el área total y el perímetro total.

### Caso borde

**Entrada:**

* Arreglo vacío (`[]`).

**Resultado esperado:**

* Mostrar el mensaje: "No hay tatuajes registrados."

## Explicación final

La solución funciona porque recorre todos los tatuajes, calcula el área y el perímetro de cada uno, acumula los resultados y determina si el tatuaje es grande o pequeño según su área. Al final, muestra los totales calculados.

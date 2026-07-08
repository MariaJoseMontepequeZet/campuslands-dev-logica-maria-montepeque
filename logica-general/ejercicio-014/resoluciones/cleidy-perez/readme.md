# Lógica general 014 - diagnostico de errores

## Análisis

**Entrada:**

* Un arreglo con los clientes y el estado de cicatrización de su tatuaje.

**Proceso:**

* Recorrer la lista de tatuajes.
* Revisar el estado de cicatrización.
* Contar cuántos tatuajes presentan problemas.

**Salida:**

* Mostrar si cada tatuaje está en buen estado o requiere revisión.
* Mostrar el total de tatuajes con problemas.

## Reglas identificadas

* Si no hay tatuajes, mostrar un mensaje.
* Si la cicatrización es **"Mala"**, el tatuaje requiere revisión.
* Si la cicatrización es **"Buena"**, el tatuaje está en buen estado.
* Contar la cantidad de tatuajes que presentan problemas.

## Pruebas

### Caso normal

**Entrada:**

* Juan: Buena.
* María: Mala.
* Carlos: Buena.

**Resultado esperado:**

* Juan y Carlos: Tatuaje en buen estado.
* María: Requiere revisión.
* Total de tatuajes con problemas: 1.

### Caso borde

**Entrada:**

* Arreglo vacío (`[]`).

**Resultado esperado:**

* Mostrar el mensaje: "No hay tatuajes para revisar."

## Explicación final

La solución funciona porque recorre todos los tatuajes, revisa el estado de cicatrización de cada uno y aplica las reglas para determinar si requiere revisión. Además, cuenta cuántos tatuajes presentan problemas y muestra el resultado al finalizar.

# Lógica general 015 - reglas de negocio

## Análisis

**Entrada:**

* Un arreglo con dibujos digitales y la cantidad de capas de cada uno.

**Proceso:**

* Recorrer la lista de dibujos.
* Verificar si cada dibujo cumple la regla de tener al menos 5 capas.
* Contar cuántos dibujos cumplen la regla.

**Salida:**

* Mostrar si cada dibujo cumple o no las reglas.
* Mostrar el total de dibujos aprobados.

## Reglas identificadas

* Si no hay dibujos, mostrar un mensaje.
* Un dibujo cumple la regla si tiene **5 capas o más**.
* Si tiene menos de 5 capas, no cumple la regla.
* Contar el total de dibujos aprobados.

## Pruebas

### Caso normal

**Entrada:**

* Paisaje: 8 capas.
* Retrato: 3 capas.
* Logo: 6 capas.

**Resultado esperado:**

* Paisaje: Cumple las reglas.
* Retrato: No cumple las reglas.
* Logo: Cumple las reglas.
* Total de dibujos aprobados: 2.

### Caso borde

**Entrada:**

* Arreglo vacío (`[]`).

**Resultado esperado:**

* Mostrar el mensaje: "No hay dibujos para revisar."

## Explicación final

La solución funciona porque recorre todos los dibujos digitales, verifica si cumplen la regla mínima de capas y cuenta cuántos fueron aprobados. Al finalizar, muestra el resultado de cada dibujo y el total de los que cumplen las reglas.

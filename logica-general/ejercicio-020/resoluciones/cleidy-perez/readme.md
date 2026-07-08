# Logica general 020 - estrategias de seleccion
## Análisis

**Entrada:**

* Un arreglo con comidas urbanas y su precio.

**Proceso:**

* Recorrer la lista de comidas.
* Comparar el precio de cada comida.
* Contar cuántas opciones son económicas.

**Salida:**

* Mostrar si cada comida es una opción económica o premium.
* Mostrar el total de opciones económicas.

## Reglas identificadas

* Si no hay comidas, mostrar un mensaje.
* Si el precio es **Q40 o menos**, la comida se considera una opción económica.
* Si el precio es mayor a **Q40**, se considera una opción premium.
* Contar el total de opciones económicas.

## Pruebas

### Caso normal

**Entrada:**

* Hamburguesa: Q45.
* Tacos: Q30.
* Pizza: Q60.

**Resultado esperado:**

* Hamburguesa: Opción premium.
* Tacos: Opción económica.
* Pizza: Opción premium.
* Total de opciones económicas: 1.

### Caso borde

**Entrada:**

* Arreglo vacío (`[]`).

**Resultado esperado:**

* Mostrar el mensaje: "No hay comidas disponibles."

## Explicación final

La solución funciona porque recorre todas las comidas urbanas, compara el precio de cada una y aplica las reglas para clasificarlas como opciones económicas o premium. Además, cuenta cuántas comidas son económicas y muestra el resultado al finalizar.

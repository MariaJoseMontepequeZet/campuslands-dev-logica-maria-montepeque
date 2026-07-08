# Logica general - sistema de turnos

## Análisis

**Entrada:**

* Un arreglo con los soldadores y el turno asignado.

**Proceso:**

* Recorrer la lista de soldadores.
* Verificar el turno de cada uno.
* Contar cuántos trabajan en la mañana y cuántos en la tarde.

**Salida:**

* Mostrar el turno de cada soldador.
* Mostrar el total de soldadores por turno.

## Reglas identificadas

* Si no hay soldadores, mostrar un mensaje.
* Si el turno es **"Mañana"**, contar en el turno de mañana.
* Si el turno es **"Tarde"**, contar en el turno de tarde.

## Pruebas

### Caso normal

**Entrada:**

* Juan: Mañana.
* María: Tarde.
* Carlos: Mañana.

**Resultado esperado:**

* Juan: Turno de mañana.
* María: Turno de tarde.
* Carlos: Turno de mañana.
* Total turno mañana: 2.
* Total turno tarde: 1.

### Caso borde

**Entrada:**

* Arreglo vacío (`[]`).

**Resultado esperado:**

* Mostrar el mensaje: "No hay soldadores registrados."

## Explicación final

La solución funciona porque recorre todos los soldadores, identifica el turno asignado a cada uno y utiliza contadores para obtener el total de trabajadores en cada turno. Al finalizar, muestra un resumen de la distribución de los turnos.

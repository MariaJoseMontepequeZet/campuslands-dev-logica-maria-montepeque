# Logica matemática 019 - validaciones numericas

## Análisis

**Entrada:**

* Un arreglo con fórmulas químicas y el valor de su pH.

**Proceso:**

* Recorrer la lista de fórmulas.
* Verificar que el pH esté dentro del rango permitido.
* Contar cuántas fórmulas tienen un pH válido.

**Salida:**

* Mostrar si el pH de cada fórmula es válido o inválido.
* Mostrar el total de fórmulas válidas.

## Reglas identificadas

* Si no hay fórmulas químicas, mostrar un mensaje.
* Un pH es válido si está entre **0 y 14**.
* Si el pH está fuera de ese rango, se considera inválido.
* Contar el total de fórmulas con pH válido.

## Pruebas

### Caso normal

**Entrada:**

* Agua: pH 7.
* Ácido clorhídrico: pH 2.
* Hidróxido de sodio: pH 12.

**Resultado esperado:**

* Agua: pH válido.
* Ácido clorhídrico: pH válido.
* Hidróxido de sodio: pH válido.
* Total de fórmulas válidas: 3.

### Caso borde

**Entrada:**

* Arreglo vacío (`[]`).

**Resultado esperado:**

* Mostrar el mensaje: "No hay fórmulas químicas para revisar."

## Explicación final

La solución funciona porque recorre todas las fórmulas químicas, valida que el valor de pH esté dentro del rango de 0 a 14 y cuenta cuántas cumplen esta condición. Al finalizar, muestra el total de fórmulas con un pH válido.

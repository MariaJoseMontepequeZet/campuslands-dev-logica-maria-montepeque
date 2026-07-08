# Lógica general 026 -  busqueda de elementos

## Entrada:
Un arreglo con autos hiperdeportivos y el nombre del modelo que se desea buscar.

## Proceso:
Se valida que el arreglo tenga datos. Luego se busca el modelo solicitado utilizando el método `find()`.

## Salida:
- Información del auto si existe.
- Mensaje indicando que el auto no fue encontrado.

# Reglas identificadas

- El inventario debe contener al menos un auto.
- La búsqueda se realiza por el nombre del modelo.

# Pruebas

## Caso normal

### Entrada:
Modelo: **Jesko**

### Resultado esperado:
Se muestra la información del auto encontrado.

## Caso borde

### Entrada:
Un arreglo vacío (`[]`).

### Resultado esperado:
Se muestra el mensaje **"No hay autos registrados."**

# Explicación final

La solución funciona porque primero verifica que existan autos registrados. Después busca el modelo solicitado y muestra el resultado si existe; de lo contrario, informa que no fue encontrado.

# Sugerencia

Antes de realizar una búsqueda, valida que el arreglo tenga datos para evitar errores.
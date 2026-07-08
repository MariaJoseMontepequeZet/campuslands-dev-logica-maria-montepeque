# Plantilla de solucion

## Analisis

- **Entrada:** - `inventario`: Arreglo de objetos donde cada objeto representa un auto con sus propiedades (modelo, marca, velocidad).
    - `criterio`: El nombre de la propiedad bajo la cual se desea buscar.
    - `valor`: El dato específico que se desea localizar en el inventario.
- **Proceso:** Aplicar un filtro sobre el arreglo de objetos que compare la propiedad seleccionada contra el valor de búsqueda, retornando una lista de coincidencias.
- **Salida:** Un objeto estructurado que indica el estado de la búsqueda (`encontrado` o `no encontrado`), los elementos hallados y una breve descripción del resultado.

## Reglas identificadas

1. **Coincidencia Exacta:** La búsqueda debe ser precisa; el valor del criterio debe coincidir totalmente con el dato del objeto en el inventario.
2. **Retroalimentación de vacíos:** Si no se encuentran elementos tras aplicar el filtro, el sistema debe retornar explícitamente un estado de "no encontrado" con una lista vacía.
3. **Multi-resultado:** La función debe ser capaz de devolver uno o más vehículos si varios coinciden con el criterio solicitado.

## Pruebas

### Caso normal

**Entrada:** `inventario = [{modelo: "Bugatti Chiron", marca: "Bugatti"}], criterio = "marca", valor = "Bugatti"`

**Resultado esperado:** `estado: "encontrado", datos: [...], motivo: "Se encontraron 1 vehículo(s) bajo el criterio marca."`

### Caso borde

**Entrada:** `inventario = [...], criterio = "marca", valor = "Ferrari"`

**Resultado esperado:** `estado: "no encontrado", datos: [], motivo: "No hay vehículos que coincidan con los parámetros de búsqueda."`

## Explicacion final

La solución utiliza el método `.filter()` de JavaScript, el cual permite iterar sobre la colección de autos y extraer aquellos que cumplen con la condición de búsqueda de forma limpia y eficiente. La estructura de retorno (un objeto con estado, datos y motivo) facilita que otros sistemas o interfaces de usuario puedan procesar la respuesta sin errores, diferenciando claramente entre un resultado exitoso y una búsqueda infructuosa.

## Sugerencia

Convierte cada regla del problema en una condicion clara antes de programar. Si el volumen de datos en el inventario llega a ser masivo, podrías optimizar la búsqueda utilizando índices o Mapas (`Map`) para acceder a los elementos casi de forma instantánea en lugar de recorrer todo el arreglo (`O(n)`).
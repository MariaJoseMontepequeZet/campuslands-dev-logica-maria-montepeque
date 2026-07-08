# Analisis

- **Entrada:** `inventario` (lista de diccionarios), `nombre_buscado` (string).
- **Proceso:** Se utiliza un ciclo `for` para iterar sobre cada elemento de la lista comparando el nombre. Si se encuentra, se verifica el estado de disponibilidad.
- **Salida:** Un diccionario con el estado `encontrado` (boolean) y un `mensaje` personalizado.

## Reglas aplicadas

1. **Búsqueda Exacta:** El nombre debe coincidir (se usa `.lower()` para hacer la búsqueda insensible a mayúsculas/minúsculas).
2. **Verificación de Estado:** Una vez encontrado, el sistema debe informar si está `disponible` o `reservado`.
3. **Manejo de Errores:** Si el auto no está en la lista, el sistema notifica que no existe.

## Pruebas

### Caso normal
- **Entrada:** "Bugatti Chiron"
- **Resultado:** {"encontrado": True, "mensaje": "Bugatti Chiron está disponible para compra."}

### Caso borde
- **Entrada:** "Ferrari"
- **Resultado:** {"encontrado": False, "mensaje": "Auto no encontrado en el inventario."}

## Explicacion final

Esta solución emplea una **búsqueda lineal (O(n))**. Es el método más intuitivo para listas pequeñas. Al recorrer cada objeto individualmente, tenemos control total sobre qué información extraer una vez que el elemento objetivo es localizado.
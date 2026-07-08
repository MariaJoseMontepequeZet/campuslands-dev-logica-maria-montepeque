# Plantilla de solución

## Analisis

* **Entrada**: Un objeto `archivo` con las propiedades `formato` (string), `tamanoMB` (número) y `resolucionDPI` (número).
* **Proceso**: Validación secuencial mediante comprobación de formato permitido, límites de tamaño y umbral mínimo de resolución.
* **Salida**: Un objeto que define el `estado` (Aprobado o Rechazado) y un `motivo` detallado de la validación.

## Reglas identificadas

1. El formato debe ser obligatoriamente uno de los permitidos: "jpg", "png" o "psd".
2. El tamaño del archivo no debe exceder los 50MB.
3. La resolución del archivo debe ser mayor o igual a 72 DPI.

## Pruebas

### Caso normal

* **Entrada**: `{ formato: "png", resolucionDPI: 300, tamanoMB: 10 }`
* **Resultado esperado**: `{ estado: "Aprobado", motivo: "Archivo listo para publicación." }`

### Caso borde

* **Entrada**: `{ formato: "pdf", resolucionDPI: 300, tamanoMB: 5 }`
* **Resultado esperado**: `{ estado: "Rechazado", motivo: "Formato no compatible." }`

## Explicacion final

La solución funciona mediante una validación condicional en cascada. Al verificar primero el formato, luego el tamaño y finalmente la resolución, el sistema rechaza automáticamente cualquier archivo que no cumpla con los estándares mínimos de calidad técnica. El uso de `return` anticipado permite que, en el momento que una regla se incumple, la función finalice inmediatamente, entregando el motivo específico del rechazo.

## Sugerencia

Convierte cada regla del problema en una condición clara antes de programar:

* **Regla 1 (Formato)**: `!["jpg", "png", "psd"].includes(archivo.formato)`
* **Regla 2 (Tamaño)**: `archivo.tamanoMB > 50`
* **Regla 3 (Resolución)**: `archivo.resolucionDPI < 72`
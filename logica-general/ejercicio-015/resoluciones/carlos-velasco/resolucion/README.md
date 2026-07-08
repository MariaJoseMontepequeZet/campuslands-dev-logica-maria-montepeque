# Plantilla de solución

## Analisis

* **Entrada**: Un objeto `archivo` que contiene `dpi` (número), `formato` (cadena) y `perfilColor` (cadena).
* **Proceso**: Evaluación mediante cláusulas de guardia que verifican el cumplimiento de estándares técnicos (resolución, color y formato).
* **Salida**: Un objeto que indica el `estado` (Aprobado, Rechazado o Aprobado con advertencia) y el `motivo` de la decisión.

## Reglas identificadas

1. Si el archivo tiene menos de 300 DPI, debe ser rechazado por resolución insuficiente.
2. Si el perfil de color no es CMYK, debe ser rechazado por no ser apto para impresión.
3. Si el formato es JPG, se aprueba con advertencia sobre la pérdida de calidad, recomendando TIFF.

## Pruebas

### Caso normal

* **Entrada**: `{ dpi: 300, formato: "TIFF", perfilColor: "CMYK" }`
* **Resultado esperado**: `{ estado: "Aprobado", motivo: "El archivo cumple con todos los estándares de impresión." }`

### Caso borde

* **Entrada**: `{ dpi: 150, formato: "PNG", perfilColor: "RGB" }`
* **Resultado esperado**: `{ estado: "Rechazado", motivo: "Resolución insuficiente (mínimo 300 DPI)." }`

## Explicacion final

La solución funciona mediante el uso de **cláusulas de guardia**, las cuales filtran de manera eficiente el estado del archivo. Al realizar las validaciones en orden de importancia técnica —primero la resolución, luego el color y finalmente el formato—, se garantiza que solo los archivos que cumplen con los requisitos críticos lleguen a las etapas finales de aprobación, asegurando un control de calidad riguroso antes de la impresión.

## Sugerencia

Convierte cada regla del problema en una condición clara antes de programar:

* **Regla 1 (Resolución)**: `archivo.dpi < 300`
* **Regla 2 (Color)**: `archivo.perfilColor !== "CMYK"`
* **Regla 3 (Formato)**: `archivo.formato === "JPG"`
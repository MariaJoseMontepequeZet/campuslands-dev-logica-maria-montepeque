# Plantilla de solución

## Analisis

* **Entrada**: Una matriz bidimensional (`matriz`) que contiene valores numéricos que representan niveles de exposición.
* **Proceso**: Recorrido de todos los elementos mediante bucles anidados para verificar umbrales de seguridad, almacenando advertencias únicas en caso de encontrar valores extremos.
* **Salida**: Un objeto que indica el `estado` de la escena y un `detalles` que incluye la lista de advertencias o un mensaje de confirmación de rango óptimo.

## Reglas identificadas

1. Cualquier valor superior a 80 activa una advertencia de "Sobreexposición".
2. Cualquier valor inferior a 10 activa una advertencia de "Subexposición".
3. Si existen advertencias, estas deben presentarse como una lista única (sin duplicados).

## Pruebas

### Caso normal

* **Entrada**: `[[50, 60], [40, 70]]`
* **Resultado esperado**: `{ estado: "Escena balanceada", detalles: "Valores dentro del rango óptimo." }`

### Caso borde

* **Entrada**: `[[90, 50], [5, 60]]`
* **Resultado esperado**: `{ estado: "Alerta", detalles: ["Sobreexposición", "Subexposición"] }`

## Explicacion final

La solución funciona gracias a la capacidad de recorrer estructuras multidimensionales mediante **bucles anidados**, lo cual permite inspeccionar cada punto de datos de manera exhaustiva. El uso de la estructura `Set` es fundamental, ya que actúa como un filtro natural que garantiza que los detalles de la alerta sean claros y concisos, eliminando la redundancia y mejorando la calidad de la información entregada al usuario.

## Sugerencia

Convierte cada regla del problema en una condición clara antes de programar:

* **Regla 1 (Sobreexposición)**: `valor > 80`
* **Regla 2 (Subexposición)**: `valor < 10`
* **Regla 3 (Limpieza)**: `[...new Set(advertencias)]` para consolidar las alertas.
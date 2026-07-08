# Plantilla de solución

## Analisis

* **Entrada**: Un objeto `pasajero` (con `nombre`, `edad`, `tienePasaporte`, `tieneBoleto` y `acompanado`) y un número `restriccionEdad`.
* **Proceso**: Evaluación secuencial (mediante cláusulas de guarda) de tres condiciones críticas de seguridad para determinar si el pasajero cumple con las políticas de viaje.
* **Salida**: Un objeto que define el `estado` (Aprobado/Rechazado) y una `razon` explicativa del resultado.

## Reglas identificadas

1. El pasajero debe poseer un boleto válido (`tieneBoleto === true`).
2. El pasajero debe poseer un pasaporte válido (`tienePasaporte === true`).
3. Si el pasajero es menor a la `restriccionEdad`, debe viajar acompañado (`acompanado === true`).

## Pruebas

### Caso normal

* **Entrada**: `pasajero: { nombre: "Ana", edad: 25, tienePasaporte: true, tieneBoleto: true }, restriccionEdad: 18`
* **Resultado esperado**: `{ estado: "Aprobado", razon: "Todo en orden. ¡Buen viaje!" }`

### Caso borde

* **Entrada**: `pasajero: { nombre: "Luis", edad: 12, tienePasaporte: true, tieneBoleto: true, acompanado: false }, restriccionEdad: 18`
* **Resultado esperado**: `{ estado: "Rechazado", razon: "Menor de edad sin acompañante." }`

## Explicacion final

La solución funciona mediante una estrategia de validación negativa. En lugar de verificar si el usuario cumple con todo, el código busca activamente cualquier motivo de rechazo en un orden de prioridad lógico. Al utilizar retornos anticipados (`return`), el flujo se detiene en el momento exacto en que se encuentra una irregularidad, lo que hace que el código sea altamente eficiente, fácil de leer y sencillo de ampliar si se requieren agregar nuevas reglas de seguridad en el futuro.

## Sugerencia

Convierte cada regla del problema en una condición clara antes de programar:

* **Regla 1 (Boleto)**: `!pasajero.tieneBoleto`
* **Regla 2 (Pasaporte)**: `!pasajero.tienePasaporte`
* **Regla 3 (Menor)**: `pasajero.edad < restriccionEdad && !pasajero.acompanado`
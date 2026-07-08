# Plantilla de solución

## Analisis

* **Entrada**: Dos números enteros, `total` (cantidad total de personajes) y `capacidad` (límite de personas por habitación).
* **Proceso**: Cálculo del cociente entero para habitaciones llenas (`Math.floor`) y del residuo mediante el operador módulo (`%`) para determinar personas excedentes.
* **Salida**: Un objeto que detalla el número de habitaciones completas, el número de personas restantes, el estado de la distribución y una explicación textual.

## Reglas identificadas

1. Si la `capacidad` es menor o igual a 0, la operación no es válida.
2. Las habitaciones llenas se calculan como el cociente entero de la división entre el `total` y la `capacidad`.
3. Si el residuo es igual a 0, la distribución es "equilibrada"; de lo contrario, es "con excedente".

## Pruebas

### Caso normal

* **Entrada**: `20, 5`
* **Resultado esperado**: `{ habitaciones_completas: 4, personas_en_habitacion_extra: 0, estado: "Distribución equilibrada", explicacion: "Todos los personajes están en grupos completos." }`

### Caso borde

* **Entrada**: `22, 5`
* **Resultado esperado**: `{ habitaciones_completas: 4, personas_en_habitacion_extra: 2, estado: "Distribución con excedente", explicacion: "Hay 2 persona(s) que requieren una habitación adicional." }`

## Explicacion final

La solución funciona gracias al uso del **operador módulo (%)**, que permite identificar de forma precisa cuántos individuos quedan fuera de una división exacta. Al combinar esto con `Math.floor()`, logramos separar correctamente la carga de trabajo entre habitaciones totalmente ocupadas y el excedente que requiere gestión adicional, permitiendo una clasificación automática del estado de la distribución.

## Sugerencia

Verifica cada operación con cálculos manuales antes de confiar en el código:

* **Caso `22, 5` (Cálculo manual)**:
* Habitaciones: $22 / 5 = 4.4$. Tomando la parte entera, tenemos $4$ habitaciones completas.
* Residuo: $22 \% 5 = 2$.
* Conclusión: $4$ habitaciones llenas y $2$ personas adicionales.
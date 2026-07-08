# Plantilla de solución

## Analisis

* **Entrada**: Un arreglo `habitaciones` (con valores numéricos de ocupación) y un `numeroClave` (número para determinar múltiplos).
* **Proceso**: Filtrado de las habitaciones para identificar aquellas cuya ocupación es mayor a cero y múltiplo del `numeroClave`, seguido de una evaluación de riesgo para definir el estado de seguridad.
* **Salida**: Un objeto que detalla el total de `alarmas_activas`, el `estado_seguridad` ("Alerta total" o "Seguro") y una `explicacion` del hallazgo.

## Reglas identificadas

1. Se ignoran las habitaciones con ocupación 0 o menor.
2. Una habitación se marca como "alarma" si su ocupación es múltiplo exacto del `numeroClave` (`ocupacion % numeroClave === 0`).
3. El estado de "Alerta total" se activa si hay 2 o más alarmas; de lo contrario, el estado es "Seguro".

## Pruebas

### Caso normal

* **Entrada**: `habitaciones: [4, 8, 3, 5], numeroClave: 4`
* **Resultado esperado**: `{ alarmas_activas: 2, estado_seguridad: "Alerta total", explicacion: "Se detectaron 2 habitaciones con ocupación múltiplo de 4." }`

### Caso borde

* **Entrada**: `habitaciones: [1, 7, 3, 5], numeroClave: 2`
* **Resultado esperado**: `{ alarmas_activas: 0, estado_seguridad: "Seguro", explicacion: "Se detectaron 0 habitaciones con ocupación múltiplo de 2." }`

## Explicacion final

La solución funciona aprovechando la propiedad del operador módulo (`%`), que es la herramienta matemática más directa para detectar divisibilidad. Al combinar esto con el método `.filter()`, logramos aislar únicamente los datos críticos (habitaciones con ocupación que cumplen la condición) y contar su cantidad de forma declarativa. Esta estructura permite un escalamiento sencillo si en el futuro se requiriera modificar el umbral de las alarmas, manteniendo el código limpio y fácil de mantener.

## Sugerencia

Verifica cada operación con cálculos manuales antes de confiar en el código:

* **Ejemplo manual** (`[4, 8, 3, 5], 4`):
* 4 es divisible por 4 (Residuo 0) -> Alarma.
* 8 es divisible por 4 (Residuo 0) -> Alarma.
* Total alarmas: 2.
* 2 >= 2, por lo tanto "Alerta total".
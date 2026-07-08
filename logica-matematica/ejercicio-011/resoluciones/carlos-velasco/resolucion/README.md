# Plantilla de solución

## Analisis

* **Entrada**: Un número entero (`numPeleadores`) que representa la cantidad de participantes en el torneo.
* **Proceso**: Validación de cantidad mínima de participantes, seguida de la aplicación de la fórmula combinatoria $\frac{n(n-1)}{2}$ para determinar el total de enfrentamientos únicos.
* **Salida**: Un objeto que detalla el número de participantes, el total de peleas resultantes y una explicación sobre el formato aplicado.

## Reglas identificadas

1. Si el número de participantes es menor a 2, no es posible realizar el torneo (se retorna un mensaje de error).
2. El total de peleas se calcula multiplicando el número de participantes por el número de participantes menos uno, dividido entre dos.
3. El resultado final debe ser un objeto descriptivo que incluya el desglose de la información.

## Pruebas

### Caso normal

* **Entrada**: `4`
* **Resultado esperado**: `{ participantes: 4, total_peleas: 6, explicacion: "Se aplicó la fórmula n(n-1)/2 para el formato todos contra todos." }`

### Caso borde

* **Entrada**: `2`
* **Resultado esperado**: `{ participantes: 2, total_peleas: 1, explicacion: "Se aplicó la fórmula n(n-1)/2 para el formato todos contra todos." }`

## Explicacion final

La solución funciona debido a que aplica correctamente la **fórmula combinatoria de enfrentamientos en grafos completos**, donde cada nodo (participante) debe conectar con todos los demás. La estructura de código garantiza que, al recibir un número válido ($n \ge 2$), el cálculo se realice de forma exacta, mientras que la validación inicial actúa como un filtro de seguridad que previene errores lógicos en escenarios donde el torneo no podría llevarse a cabo.

## Sugerencia

Verifica cada operación con cálculos manuales antes de confiar en el código:

* **Caso `4` (Cálculo manual)**:
* Fórmula: $4 \times (4 - 1) / 2 = 4 \times 3 / 2 = 12 / 2 = 6$.
* Resultado: $6$ peleas totales.
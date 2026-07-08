# Plantilla de solución

## Analisis

* **Entrada**: Un número entero `numPeleadores` que representa la cantidad de participantes en el torneo.
* **Proceso**: Validación de la cantidad mínima requerida y aplicación de la fórmula combinatoria de pares únicos $\frac{n(n-1)}{2}$.
* **Salida**: Un objeto que contiene el `total_combates` y una `explicacion` textual que detalla la lógica matemática utilizada.

## Reglas identificadas

1. Si hay menos de 2 peleadores, el total de combates es 0 (no se pueden formar parejas).
2. Cada peleador debe enfrentarse a todos los demás, pero solo una vez.
3. El resultado debe evitar duplicados, tratando el encuentro "A vs B" como idéntico a "B vs A".

## Pruebas

### Caso normal

* **Entrada**: `4`
* **Resultado esperado**: `{ total_combates: 6, explicacion: "Con 4 peleadores, cada uno se enfrenta a los otros 3 rivales, dividido por 2 para evitar duplicar combates (A vs B = B vs A)." }`

### Caso borde

* **Entrada**: `1`
* **Resultado esperado**: `{ total_combates: 0, explicacion: "Se necesitan al menos 2 peleadores para un combate." }`

## Explicacion final

La solución funciona porque implementa directamente el modelo combinatorio de una matriz de enfrentamientos. Al multiplicar el número de peleadores por el número de posibles rivales para cada uno ($n \times (n-1)$), obtenemos todas las combinaciones posibles incluyendo direcciones. Dividir entre 2 elimina la redundancia de los combates recíprocos, arrojando exactamente la cantidad de emparejamientos únicos posibles en un entorno de todos contra todos.

## Sugerencia

Verifica cada operación con cálculos manuales antes de confiar en el código:

* **Ejemplo manual** (`4`):
* Peleadores: A, B, C, D.
* Posibles enfrentamientos: AB, AC, AD, BC, BD, CD.
* Total: 6.
* Fórmula: $(4 \times (4-1)) / 2 = 12 / 2 = 6$.
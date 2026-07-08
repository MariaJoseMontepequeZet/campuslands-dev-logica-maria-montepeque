# Plantilla de solucion

## Analisis
El problema se diseñó para automatizar la validación de los índices estequiométricos en fórmulas químicas simples (como los subíndices en compuestos moleculares). En la química computacional, verificar que las proporciones atómicas cumplan con rangos físicos permitidos y sean valores enteros positivos es fundamental antes de balancear cualquier ecuación de reacción o calcular masas moleculares.

- Entrada: Un número entero que representa el subíndice o cantidad de átomos de un elemento específico en la fórmula química.
- Proceso: Evaluar si el número de entrada es un entero estrictamente mayor que cero y comprobar si se encuentra dentro de un límite superior físicamente posible para estructuras moleculares estables en condiciones estándar.
- Salida: Un indicador booleano (`true` o `false`) que confirma si el subíndice químico es válido.

## Reglas identificadas
1. Límite de Existencia Física: Un átomo no puede tener una presencia negativa o nula en una molécula real; por lo tanto, el subíndice debe ser estrictamente mayor o igual a 1 ($índice \geq 1$).
2. Umbral de Estabilidad Molecular: Para este reto estandarizado, el límite máximo permitido para un solo elemento en la fórmula es de 50 átomos. Cualquier valor superior se considera inestable o un error de digitación.
3. Tipo de Dato Riguroso: El valor debe ser un número entero. Si la validación recibe un número con decimales o un formato inválido, la respuesta debe ser automáticamente falsa.

## Pruebas

### Caso normal
Entrada: subindiceAtomo = 12
Resultado esperado: true

### Caso borde
Entrada: subindiceAtomo = 0
Resultado esperado: false

### Caso excedente
Entrada: subindiceAtomo = 55
Resultado esperado: false

## Explicacion final
La solución funciona porque implementa un filtro condicional de doble rango (límite inferior y superior) que descarta estructuras moleculares atómicas lógicamente imposibles o inestables.
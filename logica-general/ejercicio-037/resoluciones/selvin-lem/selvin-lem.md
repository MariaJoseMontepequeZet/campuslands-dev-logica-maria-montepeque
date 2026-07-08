# Resolucion - Logica general 037

## Como pensé el problema
A diferencia del ejercicio 017, aqui cada fila de la tabla tiene una tercera condicion: un volumen minimo de items en el estado critico. Esto permite que la misma combinacion estado+prioridad tenga distintas acciones segun la cantidad de riesgo acumulado. Ademas agregue la posibilidad de forzar una fila especifica directamente desde el texto de la regla, saltando toda la evaluacion normal.

## Reglas aplicadas
- se identifica el estado mas critico presente en items (bloqueado > pendiente > aprobado).
- se cuenta cuantas veces aparece ese estado critico en la lista.
- se buscan en la tabla las filas que combinen ese estado, la prioridad recibida, y un volumenMinimo igual o menor a la cantidad encontrada.
- de las filas candidatas, se elige la que tenga el volumenMinimo mas alto (la mas especifica y severa que aplique).
- regla con "forzar fila N" -> aplica esa fila directamente, sin evaluar estado, prioridad ni volumen.
- sin filas candidatas -> "prioridad no reconocida".
- items vacio -> sin datos.

## Casos probados
1. Caso normal: 1 bloqueado con prioridad alta (bajo el umbral) -> fila 2, "accion inmediata".
2. Caso borde: items vacio -> sin datos.
3. Caso especial: 3 bloqueados con prioridad alta (cumple volumenMinimo 3) -> fila 1, "escalar a comite".
4. Caso especial: regla "forzar fila 4" -> aplica esa fila directamente sin evaluar la tabla.
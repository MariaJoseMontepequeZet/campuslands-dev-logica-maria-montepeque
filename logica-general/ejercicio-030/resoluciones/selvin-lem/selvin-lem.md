# Resolucion - Logica general 030

## Como pensé el problema
A diferencia del ejercicio 010, aqui la regla puede mencionar mas de un estado a la vez, combinados con conectores logicos. Separe la extraccion de palabras clave y la deteccion del conector en funciones distintas, y usé esa combinacion para decidir si la instruccion exige que todos los estados esten presentes o si basta con uno solo.

## Reglas aplicadas
- regla vacia o invalida -> sin accion.
- regla sin ninguna palabra clave conocida -> instruccion no reconocida.
- regla con 2 o mas palabras clave y conector "y" -> exige que todos esos estados existan en items; si falta alguno, instruccion incumplida.
- regla con conector "o" (o sin conector explicito) -> basta con que exista al menos uno de los estados mencionados.
- regla con una sola palabra clave -> mismo comportamiento que buscar ese estado especifico.
- regla valida pero items vacio -> sin datos para aplicar la regla.

## Como ejecutar
node nombre-apellido.js

## Casos probados
1. Caso normal: regla "revisar bloqueados primero" (una palabra clave) -> aplica sobre bloqueado.
2. Caso borde: regla vacia -> sin accion.
3. Caso especial: regla "revisar bloqueado y pendiente" sin que "bloqueado" exista en items -> instruccion incumplida.
4. Caso especial: regla "revisar bloqueado o pendiente" con solo "pendiente" presente -> aplica sobre pendiente.
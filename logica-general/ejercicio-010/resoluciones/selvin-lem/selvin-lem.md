# Resolucion - Logica general 010

## Como pensé el problema
El objetivo es leer e interpretar texto libre (la regla), no asumir un comportamiento fijo como en ejercicios anteriores. Definí palabras clave dentro del texto que activan una accion sobre los items.

## Reglas aplicadas
- regla vacia o invalida -> sin accion.
- regla contiene "bloqueado", "pendiente" o "aprobado" -> se cuenta cuantos items tienen ese estado y se genera la accion.
- regla sin ninguna palabra clave -> instruccion no reconocida.
- regla valida pero items vacio -> sin datos para aplicar la regla.

## Como ejecutar
node nombre-apellido.js

## Casos probados
1. Caso normal: regla "revisar bloqueados primero" -> detecta 1 item bloqueado.
2. Caso borde: regla vacia -> sin accion.
3. Caso borde: regla sin palabra clave conocida -> instruccion no reconocida.
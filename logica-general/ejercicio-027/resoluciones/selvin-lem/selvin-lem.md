# Resolucion - Logica general 027

## Como pensé el problema
A diferencia del ejercicio 007, aqui separe cada regla de deteccion en su propia funcion, y agregue un cuarto detector especial: si la regla escrita menciona un estado que no existe realmente en items, hay una contradiccion entre la instruccion y los datos. Ademas, combine los resultados para calcular una gravedad segun cuantos tipos distintos de problema aparecen a la vez, no solo una lista plana.

## Reglas aplicadas
- item con estado fuera de aprobado/pendiente/bloqueado -> inconsistencia de tipo estado invalido.
- item duplicado en cualquier posicion de la lista -> inconsistencia de tipo duplicado.
- prioridad alta sin bloqueado ni pendiente presentes -> inconsistencia de tipo prioridad sin riesgo.
- regla menciona un estado que no existe en items -> inconsistencia de tipo regla contradictoria.
- 2 o mas tipos de problema presentes a la vez -> gravedad alta.
- exactamente 1 tipo de problema presente -> gravedad media.
- ningun tipo de problema -> gravedad ninguna.
- items vacio -> inconsistencia directa con gravedad alta.

## Casos probados
1. Caso normal: items validos, prioridad alta con riesgo real, regla coherente -> sin inconsistencias, gravedad ninguna.
2. Caso borde: items vacio -> inconsistencia por falta de datos, gravedad alta.
3. Caso especial: duplicado + prioridad alta sin riesgo + regla que menciona un estado inexistente en la lista -> 3 tipos de problema, gravedad alta.
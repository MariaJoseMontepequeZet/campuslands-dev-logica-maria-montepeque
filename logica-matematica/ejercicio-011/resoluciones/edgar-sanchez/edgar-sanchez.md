# Plantilla de solucion

## Analisis
El problema se diseñó para automatizar el cálculo de la cantidad total de combinaciones únicas posibles de asaltos de entrenamiento (*sparring*) en un evento de kickboxing. Al aplicar principios de conteo combinatorio simple entre dos grupos independientes de atletas (ej. Categoría A y Categoría B), el sistema determina cuántos emparejamientos válidos e inéditos se pueden agendar en la cartelera.

- Entrada: Cantidad de peleadores del primer grupo (entero) y cantidad de peleadores del segundo grupo (entero).
- Proceso: Multiplicar directamente la cantidad de integrantes del primer grupo por la cantidad de integrantes del segundo grupo bajo el principio multiplicativo de la combinatoria elemental ($Total = GrupoA \times GrupoB$).
- Salida: Un número entero que representa el total de combinaciones únicas de combates posibles.

## Reglas identificadas
1. Principio Multiplicativo Puro: Cada peleador del primer grupo puede enfrentarse de forma única con cualquiera de los peleadores del segundo grupo sin repetirse.
2. Exclusión de Auto-combate: Los peleadores pertenecen a conjuntos disjuntos, por lo que no existen emparejamientos entre miembros del mismo grupo.
3. Validación de Conjunto Vacío: Si cualquiera de los dos grupos de kickboxing cuenta con cero peleadores registrados, el resultado total de combates agendados debe ser estrictamente cero.

## Pruebas

### Caso normal
Entrada: competidoresGrupoA = 4, competidoresGrupoB = 3
Resultado esperado: 12

### Caso borde
Entrada: competidoresGrupoA = 5, competidoresGrupoB = 0
Resultado esperado: 0

## Explicacion final
La solución funciona porque implementa el principio multiplicativo del conteo combinatorio básico, invalidando el resultado de forma lógica ante la ausencia de rivales.
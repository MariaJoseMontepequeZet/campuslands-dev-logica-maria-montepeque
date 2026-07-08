# Plantilla de solución

## Analisis

* **Entrada**: Un objeto `equipo` que contiene un `estado` (string) y un `nivelHabilidad` (number).
* **Proceso**: Evaluación jerárquica de condiciones: primero se descartan los descalificados, luego se evalúa el estado "listo" comparando su habilidad contra un umbral de 8, y finalmente se asigna un estado por defecto.
* **Salida**: Un objeto que contiene una `accion` (string) y un `motivo` (string) detallando la decisión tomada.

## Reglas identificadas

1. Si el estado del equipo es "descalificado", no debe ser seleccionado.
2. Si el estado es "listo" y el nivel de habilidad es mayor o igual a 8, el equipo es seleccionado para la final.
3. Si el estado es "listo" pero el nivel es menor a 8, el equipo pasa a lista de espera.
4. Cualquier otro estado resulta en la acción de "Ignorar".

## Pruebas

### Caso normal

* **Entrada**: `{ estado: "listo", nivelHabilidad: 9 }`
* **Resultado esperado**: `{ accion: "Seleccionar para final", motivo: "Equipo listo y con nivel competitivo alto." }`

### Caso borde

* **Entrada**: `{ estado: "descalificado", nivelHabilidad: 10 }`
* **Resultado esperado**: `{ accion: "No seleccionar", motivo: "El equipo está descalificado." }`

## Explicacion final

La solución funciona mediante una estructura de **control condicional anidado**. Al priorizar la validación del estado "descalificado", se garantiza que los equipos no aptos sean filtrados inmediatamente sin realizar cálculos adicionales. La posterior segmentación para el estado "listo" permite aplicar un umbral de calidad (`nivelHabilidad >= 8`), asegurando que solo los equipos más aptos avancen a la final, mientras que el resto recibe una clasificación adecuada para su situación.

## Sugerencia

Convierte cada regla del problema en una condición clara antes de programar:

* **Regla 1 (Descalificado)**: `estado === "descalificado"`
* **Regla 2 (Seleccionado)**: `estado === "listo" && nivelHabilidad >= 8`
* **Regla 3 (Espera)**: `estado === "listo" && nivelHabilidad < 8`
* **Regla 4 (Ignorar)**: `else` (cualquier otro caso)
# Plantilla de solución

## Analisis

* **Entrada**: Un *array* de objetos (`ordenes`), donde cada objeto contiene una `descripcion` (string) y un `tipo` (string).
* **Proceso**: Asignación de un peso numérico a cada tipo de trabajo mediante un objeto de mapeo, seguido de un ordenamiento ascendente de la lista según dicho peso y la extracción del primer elemento (el de mayor prioridad).
* **Salida**: Un objeto que contiene la descripción de la tarea a realizar y un mensaje que explica la prioridad asignada.

## Reglas identificadas

1. La jerarquía de prioridades es: Emergencia (nivel 1), Mantenimiento (nivel 2), y Estética (nivel 3).
2. El sistema debe procesar primero el trabajo con el valor numérico más bajo (mayor prioridad).
3. La función debe retornar la tarea con mayor urgencia y el motivo basado en su tipo.

## Pruebas

### Caso normal

* **Entrada**: `[{ descripcion: "Cambio de aceite", tipo: "Mantenimiento" }, { descripcion: "Reparación de frenos", tipo: "Emergencia" }]`
* **Resultado esperado**: `{ siguiente_tarea: "Reparación de frenos", motivo: "Prioridad nivel 1 asignada por tratarse de Emergencia." }`

### Caso borde

* **Entrada**: `[{ descripcion: "Lavado completo", tipo: "Estética" }]`
* **Resultado esperado**: `{ siguiente_tarea: "Lavado completo", motivo: "Prioridad nivel 3 asignada por tratarse de Estética." }`

## Explicacion final

La solución es altamente efectiva porque utiliza un **objeto de configuración (`pesos`)** para abstraer la lógica de prioridad. Esto permite que el algoritmo de ordenamiento `sort` sea extremadamente conciso y fácil de mantener. Al calcular la diferencia entre los pesos, el método garantiza que el trabajo con mayor urgencia siempre se posicione al inicio del *array*, permitiendo una selección inmediata sin necesidad de estructuras condicionales complejas.

## Sugerencia

Convierte cada regla del problema en una condición clara antes de programar:

* **Regla 1 (Pesos)**: `Emergencia = 1`, `Mantenimiento = 2`, `Estética = 3`.
* **Regla 2 (Orden)**: Ordenar ascendentemente según el valor numérico asignado (`pesos[tipo]`).
* **Regla 3 (Selección)**: Extraer siempre el índice `[0]` del listado ya ordenado.
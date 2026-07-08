# Plantilla de solucion

## Autor: 

Sergio Ajù

## Analisis


- **Entrada:** - `listaReparaciones`: Arreglo de objetos donde cada objeto contiene un nombre de tarea y su nivel de urgencia (`emergencia`, `preventiva` o `baja`).
- **Proceso:** Asignar un peso numérico a cada nivel de urgencia y aplicar un método de ordenamiento para organizar la lista de mayor a menor prioridad.
- **Salida:** Una lista ordenada de las tareas a realizar, garantizando que las más críticas se atiendan primero.


## Reglas identificadas


1. **Prioridad Alta (Emergencia):** Fallas críticas (ej. frenos, motor) que deben ser atendidas inmediatamente.
2. **Prioridad Media (Preventiva):** Trabajos de mantenimiento necesario que se realizan después de las emergencias.
3. **Prioridad Baja (Estética):** Trabajos visuales o accesorios que se atienden una vez finalizadas las prioridades altas y medias.
4. **Empates:** Si dos tareas tienen el mismo nivel de urgencia, se respeta el orden de llegada (estabilidad del ordenamiento).


## Pruebas


### Caso normal


**Entrada:** `reparaciones = [{tarea: "Cambio aceite", urgencia: "preventiva"}, {tarea: "Frenos", urgencia: "emergencia"}]`


**Resultado esperado:** `Orden: ["Frenos", "Cambio aceite"]. Motivo: La urgencia "emergencia" tiene prelación sobre la "preventiva".`


### Caso borde


**Entrada:** `reparaciones = [{tarea: "Pintura", urgencia: "baja"}, {tarea: "Pulido", urgencia: "baja"}]`


**Resultado esperado:** `Orden: ["Pintura", "Pulido"]. Motivo: Al tener ambas prioridad baja, se mantiene el orden original de entrada.`


## Explicacion final


La solución utiliza un mapa de prioridades (pesos numéricos) para facilitar la comparación entre elementos. Al usar `sort()` con una función de comparación que resta los pesos, logramos ordenar los objetos de manera eficiente. Esta técnica es ideal porque separa la lógica de negocio (qué es más urgente) de la estructura de datos, permitiendo escalar el sistema fácilmente si se añaden nuevas categorías de urgencia en el futuro.


## Sugerencia


Convierte cada regla del problema en una condicion clara antes de programar. Asegúrate de validar que los valores de urgencia ingresados coincidan exactamente con las claves de tu mapa de prioridades para evitar errores de comparación (`undefined`).



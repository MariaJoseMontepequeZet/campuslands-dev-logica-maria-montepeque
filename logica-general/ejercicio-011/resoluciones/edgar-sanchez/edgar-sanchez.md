# Resolución: Lógica General 011 - Organización de Listas

Este archivo detalla la estructura analítica, el uso de ciclos y las reglas lógicas aplicadas para organizar y agrupar un listado central de atletas en un torneo de kickboxing.

---

## 1. Cómo se pensó el problema (Análisis)

En los deportes de contacto como el kickboxing, la organización equitativa es fundamental para la seguridad. El problema requiere transformar una sola lista desordenada de inscritos en múltiples sub-listas clasificadas de manera automática por rango de peso. Para lograrlo, se implementó un flujo que inspecciona uno a uno los elementos y los distribuye de forma ordenada.

### Tabla de Estructura de Organización

| Entrada | Proceso (Reglas de Organización) | Salida |
| :--- | :--- | :--- |
| **peleadores** (Lista general de diccionarios con pesos individuales). | Crear contenedores por categoría, recorrer la lista usando un ciclo `for` y evaluar condicionalmente los límites de peso de cada atleta. | **organizacion** (Diccionario que agrupa las sub-listas Pluma, Welter y Pesado). |

---

## 2. Por qué se desarrolló de esa manera (Estrategia)

La solución técnica se diseñó optimizando la lectura y utilizando estructuras de acumulación limpias:

* **Estructura de Acumuladores Dinámicos:** En lugar de realizar múltiples búsquedas independientes sobre la misma lista, el algoritmo utiliza un único ciclo `for`. A medida que lee a un peleador, lo clasifica y lo envía a su respectiva lista de destino inmediatamente. Esto garantiza una alta velocidad de ejecución.
* **Rangos Estrictos Cerrados:** El uso de operadores condicionales combinados (`65 <= peso <= 75`) asegura que ningún peleador quede en un "limbo" legal o sin categoría si su peso cae exactamente en un límite numérico cerrado.
* **Modularidad y Tolerancia a Listas Vacías:** El sistema incluye una cláusula de seguridad inicial. Si no hay peleadores registrados, devuelve la estructura de categorías lista pero vacía, evitando errores críticos de ejecución en cascada.

---

## 3. Casos de Prueba Evaluados

1. **Caso Normal (Distribución por Categoría):** Al procesar un grupo de 5 atletas con diferentes pesos, el sistema los segregó con total precisión, creando tres grupos independientes listos para programar los emparejamientos de combate.
2. **Caso Borde (Lista Inicial Vacía):** Al ingresar una colección vacía `[]`, el programa reaccionó de forma controlada entregando un diccionario inicializado con sus tres llaves de categoría en ceros, demostrando robustez lógica.

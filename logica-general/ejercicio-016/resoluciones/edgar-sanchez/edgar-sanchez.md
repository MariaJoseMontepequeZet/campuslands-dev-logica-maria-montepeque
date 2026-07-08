# Resolución: Lógica General 016 - Matrices Simples

Este archivo detalla la estructura matemática de transformación por arreglos bidimensionales y las reglas aplicadas para manipular vértices en un espacio de animación 3D.

---

## 1. Cómo se pensó el problema (Análisis)

El desafío de este ejercicio consiste en la manipulación secuencial de estructuras de datos anidadas (matrices o listas de listas). En la animación por computadora, todos los objetos están construidos por una malla de puntos llamados vértices, donde cada fila guarda las componentes espaciales `[x, y, z]`. El script debe procesar de forma lineal esta matriz, aplicando operaciones matemáticas de multiplicación homogénea para alterar el tamaño e inversión de signos algebraicos para simular reflexiones ópticas.

### Tabla de Estructura de Matrices

| Entrada | Proceso (Reglas de Transformación) | Salida |
| :--- | :--- | :--- |
| **matriz_vertices** (Lista $3 \times 3$).<br>**factor_escala** (Flotante).<br>**eje_espejo** (Texto: X, Y, Z). | Iterar sobre cada fila, multiplicar los componentes por la escala base e invertir la polaridad de la coordenada del eje seleccionado. | **matriz_transformada** (Nueva matriz calculada).<br>**estado_render** (Texto descriptivo) |

---

## 2. Por qué se desarrolló de esa manera (Estrategia)

La solución del problema se estructuró bajo principios de álgebra lineal básica y programación defensiva:

* **Mapeo Hash Indexado:** En lugar de implementar múltiples estructuras condicionales `if/else` complejas para saber qué eje alterar, se usó un diccionario indexador `{"X": 0, "Y": 1, "Z": 2}`. Esto permite apuntar directamente a la celda del arreglo en tiempo constante, optimizando el rendimiento.
* **Inmutabilidad de Datos Base:** El algoritmo genera un arreglo nuevo (`matriz_transformada`) en lugar de sobreescribir los datos originales recibidos. Esto previene la corrupción o pérdida de las coordenadas iniciales del modelo 3D si el motor requiere realizar un cálculo posterior.
* **Filtros de Geometría Segura:** Se incluyeron validaciones atómicas que comprueban que las dimensiones de las sublistas contengan exactamente sus 3 componentes cartesianos. Si una fila está incompleta, el software frena el renderizado de forma controlada previniendo un colapso en tiempo de ejecución.

---

## 3. Casos de Prueba Evaluados

1. **Caso Normal (Transformación Completa):** Al procesar un polígono bajo un escalado de `2.0` con simetría en `"X"`, todas las dimensiones se duplicaron proporcionalmente y los signos de la primera columna se invirtieron con precisión matemática.
2. **Caso Borde (Eje Inexistente):** Al suministrar un parámetro corrupto de dirección (`"W"`), los bloques defensivos abortaron la operación devolviendo una matriz vacía estructurada y notificando el fallo de configuración.
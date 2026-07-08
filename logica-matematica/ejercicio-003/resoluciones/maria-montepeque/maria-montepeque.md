# Ejercicio 026: Motor de Análisis Estadístico y Meta-Rendimiento Competitivo

## Análisis del Problema

El objetivo es desarrollar un componente de software para análisis de analíticas en e-sports que procese las puntuaciones de rendimiento de un jugador en diferentes mapas de un torneo. El sistema calculará y comparará métricas de tendencia central (promedio y mediana) bajo principios de inmutabilidad y programación defensiva para auditar la consistencia del jugador.

* **Entrada:** Un objeto contenedor con la siguiente firma:
    * `partidas`: Array de Numbers (Puntajes de rendimiento obtenidos en cada mapa/partida del torneo).
* **Proceso:** 1. Validar la existencia de datos mediante cláusulas de guarda para evitar indeterminaciones matemáticas o errores de división por cero.
    2. Calcular el promedio aritmético sumando todos los puntajes mediante `.reduce()` y dividiendo por la longitud del arreglo.
    3. Crear una copia profunda o clon del arreglo original para preservar la inmutabilidad de la información fuente.
    4. Ordenar la copia de manera ascendente utilizando el método nativo corregido `.sort((a, b) => a - b)`.
    5. Extraer matemáticamente la mediana del set ordenado controlando las dos condiciones de muestra: par o impar.
    6. Comparar las dos métricas de tendencia central para etiquetar el desempeño estadístico del competidor.
* **Salida:** Un objeto con la estructura estricta: `{ promedio: number, mediana: number, clasificacion: string }`.

---

## Reglas de Negocio

1. **Regla de Inmutabilidad:** Jamás se debe alterar o mutar el orden del arreglo original recibido por parámetro; el ordenamiento para el cálculo de la mediana debe ejecutarse estrictamente sobre una copia.
2. **Criterio de Cálculo de la Mediana:** * Si el tamaño de la muestra es **impar**, la mediana corresponde al elemento central exacto: 
      $$M_e = X_{\left(\frac{n+1}{2}\right)}$$
    * Si el tamaño de la muestra es **par**, la mediana es el promedio de los dos valores centrales: 
      $$M_e = \frac{X_{\left(\frac{n}{2}\right)} + X_{\left(\frac{n}{2}+1\right)}}{2}$$
3. **Clasificación del Meta-Rendimiento:** Un jugador se clasifica como `"consistente"` únicamente si su valor de mediana supera estrictamente a su promedio general. De lo contrario, se le asignará la clasificación `"irregular"`.
4. **Control de Muestra Vacía (Caso Borde):** Ante la total ausencia de partidas registradas (arreglo vacío), el sistema realiza una parada controlada devolviendo valores en cero y la clasificación `"sin registros"`.

---

## Casos de Prueba

### 1. Evaluación de Muestra Impar (Caso Normal - Irregular)
* **Entrada:**
    ```json
    {
      "partidas": [10, 15, 100]
    }
    ```
* **Resultado esperado:**
    ```json
    {
      "promedio": 41.67,
      "mediana": 15,
      "clasificacion": "irregular"
    }
    ```

### 2. Evaluación de Muestra Par (Caso Alterno - Consistente)
* **Entrada:**
    ```json
    {
      "partidas": [25, 20, 22, 18]
    }
    ```
* **Resultado esperado:**
    ```json
    {
      "promedio": 21.25,
      "mediana": 21,
      "clasificacion": "irregular"
    }
    ```

### 3. Activación de Guarda por Datos Vacíos (Caso Borde)
* **Entrada:**
    ```json
    {
      "partidas": []
    }
    ```
* **Resultado esperado:**
    ```json
    {
      "promedio": 0,
      "mediana": 0,
      "clasificacion": "sin registros"
    }
    ```

---

## Arquitectura de la Solución

La solución se diseña bajo el principio de **Funciones Puras**, asegurando que el procesamiento no genere efectos secundarios (*side effects*) sobre los arreglos de entrada utilizando operadores de propagación (`[...]`) para clonar los datos. El cálculo del promedio se ejecuta en una complejidad de tiempo lineal $O(n)$, mientras que la ordenación para la mediana domina la función con una complejidad de tiempo de $O(n \log n)$. Se evitan anidamientos estructurales mediante cláusulas de guarda al inicio del módulo.

---

## Ejecución del Módulo

1. Asegúrate de contar con [Node.js](https://nodejs.org/) instalado en tu estación de trabajo (versión LTS recomendada).
2. Abre la consola de comandos o terminal en el directorio raíz de este ejercicio.
3. Ejecuta el script de la solución utilizando el comando:
    ```bash
    node maria-montepeque.js
    ```
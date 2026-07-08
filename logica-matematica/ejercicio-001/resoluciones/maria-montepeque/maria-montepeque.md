# Ejercicio 001: Motor de Clasificación y Rendimiento de Escuadrones de E-sports

## Análisis del Problema

El objetivo es desarrollar un componente de software para una plataforma de torneos de e-sports que evalúe el rendimiento global de un escuadrón basándose en las puntuaciones base de sus miembros, aplicando bonificaciones y penalizaciones globales mediante programación defensiva para asegurar la consistencia de los rankings.

* **Entrada:** Un objeto contenedor con la siguiente firma:
    * `participantes`: Array de Numbers (Puntuaciones individuales de cada miembro del escuadrón).
    * `bono`: Number (Puntos extra asignados al equipo por hitos globales).
    * `penalizacion`: Number (Puntos a remover por infracciones o faltas técnicas).
* **Proceso:** 1. Validar la existencia de participantes en el arreglo mediante cláusulas de guarda para evitar indeterminaciones matemáticas.
    2. Calcular la media aritmética real del rendimiento del escuadrón.
    3. Adicionar algebraicamente el `bono` y sustraer la `penalizacion` al promedio obtenido.
    4. Redondear el resultado final (`Math.round()`) para mantener consistencia entera en las tablas de clasificación.
* **Salida:** Un objeto con la estructura estricta: `{ puntaje_final: number, clasificacion: string, explicacion: string }`.

---

## Reglas de Negocio

1. **Consistencia del Promedio:** El rendimiento grupal se debe evaluar de forma equitativa mediante la media aritmética antes de aplicar modificadores externos globales.
2. **Umbral de Competitividad:** Un puntaje final total unificado mayor o igual a 20 ($\ge 20$) categoriza automáticamente al equipo en la liga o estado `"competitivo"`. De lo contrario, se asignará el estado `"en observación"`.
3. **Protección contra Cero Elementos (Caso Borde):** Si un escuadrón no presenta participantes inscritos o la lista llega vacía, el sistema interrumpe el cálculo numérico por seguridad y asigna de forma directa la clasificación `"descalificado"`.

---

## Casos de Prueba

### 1. Evaluación de Escuadrón (Caso Normal - Competitivo)
* **Entrada:**
    ```json
    {
      "participantes": [12, 18, 25, 30],
      "bono": 8,
      "penalizacion": 3
    }
    ```
* **Resultado esperado:**
    ```json
    {
      "puntaje_final": 26,
      "clasificacion": "competitivo",
      "explicacion": "El escuadrón supera el umbral requerido con un rendimiento promedio modificado de 26 puntos."
    }
    ```

### 2. Evaluación de Escuadrón Bajo el Umbral (Caso Alterno)
* **Entrada:**
    ```json
    {
      "participantes": [10, 12, 8],
      "bono": 4,
      "penalizacion": 2
    }
    ```
* **Resultado esperado:**
    ```json
    {
      "puntaje_final": 12,
      "clasificacion": "en observación",
      "explicacion": "El escuadrón no alcanza el puntaje mínimo de competitividad."
    }
    ```

### 3. Descalificación por Escuadrón Vacío (Caso Borde)
* **Entrada:**
    ```json
    {
      "participantes": [],
      "bono": 10,
      "penalizacion": 0
    }
    ```
* **Resultado esperado:**
    ```json
    {
      "puntaje_final": 0,
      "clasificacion": "descalificado",
      "explicacion": "Procesamiento cancelado. El escuadrón no cuenta con miembros registrados para la evaluación."
    }
    ```

---

## Arquitectura de la Solución

La solución utiliza el patrón de diseño de Cláusulas de Guarda (*Guard Clauses*) con retornos anticipados (*Early Returns*) para sanear el flujo de control de la aplicación. Al evaluar y abortar el procesamiento al inicio de la función en caso de colecciones vacías, evitamos el anidamiento innecesario de bloques `if/else` (*Arrow Anti-pattern*) y prevenimos errores matemáticos como la división por cero. La sumatoria y el cálculo del promedio aprovechan los métodos iterativos nativos optimizados de JavaScript ($O(n)$), garantizando un diseño limpio, modular y altamente mantenible.

---

## Ejecución del Módulo

1. Asegúrate de contar con [Node.js](https://nodejs.org/) instalado en tu estación de trabajo (versión LTS recomendada).
2. Abre la consola de comandos o terminal en el directorio raíz de este ejercicio.
3. Ejecuta el script de la solución utilizando el comando:
    ```bash
    node maria-montepeque.js
    ```
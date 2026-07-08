# Ejercicio 014: Sistema de Diagnóstico de Seguridad Sanitaria (Taller de Tatuajes)

## Análisis del Problema

El objetivo es desarrollar un componente de software que evalúe el estado operacional y sanitario de las estaciones de un taller de tatuajes, aplicando prioridades dinámicas para detener el flujo de citas ante cualquier riesgo crítico de bioseguridad.

* **Entrada:** Un objeto contenedor con la siguiente firma:
    * `items`: Array de Strings (Estados operativos a evaluar: `"aprobado"`, `"pendiente"`, `"bloqueado"`).
    * `prioridad`: String (Gravedad del diagnóstico general del entorno: `"alta"`, `"media"`, `"baja"`).
    * `regla`: String (Directriz sanitaria activa, ej: `"revisar bloqueados primero"`).
* **Proceso:** 1. Validar la existencia de los datos mediante cláusulas de guarda para mitigar errores por arreglos vacíos o nulos.
    2. Estandarizar todas las cadenas de texto a minúsculas (`.toLowerCase()`) para asegurar tolerancia a fallos de formato.
    3. Comprobar mediante condicionales si el estado crítico `"bloqueado"` coexiste con una regla de análisis prioritario alta.
    4. Derivar el flujo hacia la resolución de estados `"pendiente"` si no se detectan riesgos biológicos inmediatos.
* **Salida:** Un objeto con la estructura estricta: `{ accion: string, motivo: string }`.

---

## Reglas de Negocio

1. **Prioridad de Bioseguridad Crítica:** Si la `prioridad` es `"alta"`, la `regla` es exactamente `"revisar bloqueados primero"` y se encuentra al menos un elemento `"bloqueado"` (ej. fallas en la esterilización o máquinas descalibradas), se suspende la operación y se retorna la acción `"revisar bloqueado"`.
2. **Reacción Preventiva:** Si no existen incidencias de bloqueo pero el arreglo contiene elementos en estado `"pendiente"`, el foco se desplaza hacia la verificación preventiva del inventario devolviendo la acción `"evaluar pendientes"`.
3. **Cláusula de Escape (Caso Borde):** Ante la ausencia total de ítems evaluables (arreglo vacío), el sistema debe ejecutar una parada controlada de los servicios, retornando la acción `"pausar citas"`.

---

## Casos de Prueba

### 1. Interrupción por Riesgo Sanitario (Caso Normal)
* **Entrada:**
    ```json
    {
      "items": ["aprobado", "pendiente", "bloqueado"],
      "prioridad": "alta",
      "regla": "revisar bloqueados primero"
    }
    ```
* **Resultado esperado:**
    ```json
    {
      "accion": "revisar bloqueado",
      "motivo": "Se detectaron estaciones bloqueadas bajo alerta de alta prioridad. Revisión sanitaria requerida de inmediato."
    }
    ```

### 2. Transición a Verificación Preventiva (Caso Alterno)
* **Entrada:**
    ```json
    {
      "items": ["aprobado", "pendiente"],
      "prioridad": "media",
      "regla": "revisar bloqueados primero"
    }
    ```
* **Resultado esperado:**
    ```json
    {
      "accion": "evaluar pendientes",
      "motivo": "Ecosistema libre de bloqueos críticos. Se procede a la revisión preventiva de actividades e inventarios en espera."
    }
    ```

### 3. Parada Controlada por Falta de Datos (Caso Borde)
* **Entrada:**
    ```json
    {
      "items": [],
      "prioridad": "alta",
      "regla": "revisar bloqueados primero"
    }
    ```
* **Resultado esperado:**
    ```json
    {
      "accion": "pausar citas",
      "motivo": "No se proporcionaron datos de estaciones válidas para evaluar. Operaciones suspendidas por seguridad."
    }
    ```

---

## Arquitectura de la Solución

La solución utiliza el patrón de diseño de Cláusulas de Guarda (*Guard Clauses*) para limpiar el flujo de control. Al evaluar y abortar el procesamiento al inicio de la función en caso de colecciones vacías o nulas, evitamos el anidamiento innecesario de bloques `if/else` (*Arrow Anti-pattern*). La búsqueda de elementos específicos dentro del array aprovecha métodos nativos optimizados del motor de JavaScript, manteniendo una complejidad de tiempo en el peor de los casos de $O(n)$ y un diseño de código altamente legible y mantenible.

---

## Ejecución del Módulo

1. Asegúrate de contar con [Node.js](https://nodejs.org/) instalado en tu estación de trabajo (versión LTS recomendada).
2. Abre la consola de comandos o terminal en el directorio raíz de este ejercicio.
3. Ejecuta el script de la solución utilizando el comando:
    ```bash
    node maria-montepeque.js
    ```
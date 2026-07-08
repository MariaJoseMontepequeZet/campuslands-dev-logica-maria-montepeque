# Ejercicio 018: Sistema de Control Operativo y Seguridad Sanitaria (Taller de Soldadura)

## Análisis del Problema

El objetivo es desarrollar un componente de software para una línea de producción industrial que evalúe el estado operacional de las estaciones de soldadura, aplicando prioridades dinámicas para detener o desviar el flujo de trabajo ante cualquier bloqueo técnico o riesgo de seguridad en la maquinaria.

* **Entrada:** Un objeto contenedor con la siguiente firma:
    * `items`: Array de Strings (Estados de los turnos o estaciones: `"aprobado"`, `"pendiente"`, `"bloqueado"`).
    * `prioridad`: String (Nivel de emergencia en el taller: `"alta"`, `"media"`, `"baja"`).
    * `regla`: String (Directriz operativa que altera el orden de los turnos, ej: `"revisar bloqueados primero"`).
* **Proceso:** 1. Evaluar con cláusulas de guarda que el arreglo de entrada contenga datos válidos antes de interactuar con sus métodos integrados para evitar excepciones de memoria.
    2. Convertir las cadenas de entrada a minúsculas (`.toLowerCase()`) para asegurar un procesamiento tolerante a fallos de formato.
    3. Verificar de manera prioritaria si el taller de soldadura tiene una emergencia (`"bloqueado"`) bajo un esquema de alta prioridad.
    4. Evaluar si existen actividades en estado `"pendiente"` si la línea operativa fluye correctamente.
* **Salida:** Un objeto con la estructura estricta: `{ accion: string, motivo: string }`.

---

## Reglas de Negocio

1. **Interrupción por Estación Bloqueada:** Si la `prioridad` es `"alta"`, la `regla` es exactamente `"revisar bloqueados primero"` y la estación de soldadura cuenta con al menos un turno `"bloqueado"`, se frena la cadena de producción de inmediato devolviendo la acción `"revisar bloqueado"`.
2. **Derivación Preventiva:** Si la línea operativa está libre de bloqueos críticos pero registra elementos en estado `"pendiente"`, se desvía la prioridad hacia un turno de inspección preventiva devolviendo la acción `"evaluar pendientes"`.
3. **Parada de Emergencia (Caso Borde):** Si los datos de entrada o el arreglo de `items` se encuentran vacíos, nulos o indefinidos, el sistema debe activar los protocolos de seguridad industrial retornando la acción `"apagar maquinaria"`.

---

## Casos de Prueba

### 1. Interrupción por Bloqueo Crítico (Caso Normal)
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
      "motivo": "Se detectaron estaciones de soldadura bloqueadas bajo alerta de alta prioridad. Cadena de producción frenada."
    }
    ```

### 2. Desvío para Inspección Preventiva (Caso Alterno)
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
      "motivo": "Línea operativa libre de bloqueos. Se procede a la revisión e inspección preventiva de las estaciones en espera."
    }
    ```

### 3. Activación de Parada de Emergencia (Caso Borde)
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
      "accion": "apagar maquinaria",
      "motivo": "Ausencia total de datos evaluables en el lote actual. Maquinaria detenida por seguridad preventiva."
    }
    ```

---

## Arquitectura de la Solución

La solución utiliza el patrón de diseño de Cláusulas de Guarda (*Guard Clauses*) para sanear el flujo de control de la aplicación. Al evaluar y abortar el procesamiento al inicio de la función en caso de argumentos inválidos o colecciones vacías, evitamos el anidamiento innecesario de bloques `if/else` (*Arrow Anti-pattern*). La búsqueda de estados específicos dentro del array aprovecha métodos nativos optimizados del motor V8 de JavaScript, manteniendo una complejidad de tiempo en el peor de los casos de $O(n)$ y una estructura de código limpia, modular y altamente mantenible.

---

## Ejecución del Módulo

1. Asegúrate de contar con [Node.js](https://nodejs.org/) instalado en tu estación de trabajo (versión LTS recomendada).
2. Abre la consola de comandos o terminal en el directorio raíz de este ejercicio.
3. Ejecuta el script de la solución utilizando el comando:
    ```bash
    node maria-montepeque.js
    ```
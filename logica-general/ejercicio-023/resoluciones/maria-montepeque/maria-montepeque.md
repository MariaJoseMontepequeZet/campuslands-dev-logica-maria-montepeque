# Ejercicio 023: Motor de Contingencias y Control de Incidencias en Torneos de Esports

## Análisis del Problema

El objetivo es desarrollar un componente de software para la gestión de infraestructura de un torneo de Esports que evalúe el estado operacional de las escuadras y servicios de backend, aplicando prioridades dinámicas para detener o desviar el flujo de transmisión ante cualquier fallo técnico o desconexión general en vivo.

* **Entrada:** Un objeto contenedor con la siguiente firma:
    * `items`: Array de Strings (Estados de las escuadras o el backend del torneo: `"aprobado"`, `"pendiente"`, `"bloqueado"`).
    * `prioridad`: String (Criticidad de la fase del evento: `"alta"`, `"media"`, `"baja"`).
    * `regla`: String (Criterio corporativo para la gestión de incidencias en vivo, ej: `"revisar bloqueados primero"`).
* **Proceso:** 1. Insertar cláusulas de guarda preventivas al inicio del script para rechazar arreglos vacíos o nulos que comprometan el hilo de ejecución.
    2. Normalizar las cadenas de entrada utilizando `.trim().toLowerCase()` para mitigar fallos por espacios o inconsistencias de formato.
    3. Evaluar la coincidencia del escenario de riesgo más severo: prioridad máxima combinada con una regla activa y la presencia de al menos un estado `"bloqueado"` real.
    4. Revisar estados secundarios del torneo como registros en estado `"pendiente"` si la infraestructura opera de forma segura.
* **Salida:** Un objeto con la estructura estricta: `{ accion: string, motivo: string }`.

---

## Reglas de Negocio

1. **Interrupción por Incidencia Crítica:** Si la `prioridad` organizativa es `"alta"`, el criterio exige exactamente `"revisar bloqueados primero"` y se encuentra al menos un ítem o servicio en estado `"bloqueado"` (ej: desconexión general de red o caída de servidores), se frena el flujo ordinario y se devuelve la acción `"revisar bloqueado"`.
2. **Plan de Contingencia Competitivo:** Si el sistema competitivo no registra incidencias de bloqueo pero mantiene elementos en estado `"pendiente"`, el foco operacional se desvía aplicando la acción `"postergar partida"`.
3. **Protección de Infraestructura (Caso Borde):** Ante la ausencia total o nulidad de elementos dentro del lote de entrada (arreglo vacío), el sistema activa los protocolos de seguridad de radiodifusión devolviendo la acción `"suspender transmision"`.

---

## Casos de Prueba

### 1. Interrupción por Fallo de Red (Caso Normal)
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
      "motivo": "Se detectaron incidencias críticas de bloqueo en el backend bajo alerta de alta prioridad. Flujo ordinario del torneo pausado."
    }
    ```

### 2. Desvío por Contingencia Técnica (Caso Alterno)
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
      "accion": "postergar partida",
      "motivo": "Infraestructura libre de bloqueos severos. Se detectaron configuraciones pendientes; se activa el plan de aplazamiento preventivo."
    }
    ```

### 3. Activación de Parada por Falta de Datos (Caso Borde)
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
      "accion": "suspender transmision",
      "motivo": "Ausencia total de datos de escuadras válidas en el lote recibido. Transmisión interrumpida por seguridad del evento."
    }
    ```

---

## Arquitectura de la Solución

La solución utiliza el patrón de diseño de Cláusulas de Guarda (*Guard Clauses*) para limpiar el flujo de control de la aplicación. Al validar y abortar el procesamiento al inicio de la función en caso de argumentos inválidos, nulos o colecciones vacías, evitamos el anidamiento innecesario de bloques `if/else` (*Arrow Anti-pattern*). La búsqueda de estados específicos dentro del array aprovecha métodos nativos optimizados del motor V8 de JavaScript, manteniendo una complejidad de tiempo en el peor de los casos de $O(n)$ y una estructura de código limpia, modular y altamente mantenible.

---

## Ejecución del Módulo

1. Asegúrate de contar con [Node.js](https://nodejs.org/) instalado en tu estación de trabajo (versión LTS recomendada).
2. Abre la consola de comandos o terminal en el directorio raíz de este ejercicio.
3. Ejecuta el script de la solución utilizando el comando:
    ```bash
    node maria-montepeque.js
    ```
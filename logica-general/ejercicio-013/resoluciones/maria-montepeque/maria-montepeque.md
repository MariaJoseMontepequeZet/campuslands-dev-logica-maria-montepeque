# Ejercicio 013: Motor de Evaluación de Estados Operativos y Control de Protocolos

## Análisis del Problema

El objetivo es implementar un componente de lógica de negocio que evalúe y priorice un listado de estados operacionales basándose en el nivel de urgencia y una directiva condicional, utilizando programación defensiva para asegurar la estabilidad del sistema.

* **Entrada:** Un objeto contenedor con la siguiente firma:
    * `items`: Array de Strings (Estados de las opciones operacionales: `"aprobado"`, `"pendiente"`, `"bloqueado"`).
    * `prioridad`: String (Jerarquía de atención del entorno: `"alta"`, `"media"`, `"baja"`).
    * `regla`: String (Criterio dinámico de comparación, ej: `"revisar bloqueados primero"`).
* **Proceso:** 1. Verificar la existencia y formato correcto de la lista de entrada antes de consultar o iterar sus elementos.
    2. Estandarizar los textos de control a minúsculas (`.toLowerCase()`) para prevenir falsos negativos por formato.
    3. Validar si coexisten la regla de bloqueo prioritario junto con elementos bloqueados reales en la lista.
    4. Evaluar si existen estados de precaución o pendientes en caso de no aplicar la regla crítica.
* **Salida:** Un objeto con la estructura estricta: `{ accion: string, motivo: string }`.

---

## Reglas de Negocio

1. **Interrupción por Bloqueo Crítico:** Si el ecosistema reporta un estado `"bloqueado"`, la `prioridad` es `"alta"` y la `regla` es exactamente `"revisar bloqueados primero"`, se suspenden los procesos normales y se devuelve la acción `"revisar bloqueado"`.
2. **Inspección Preventiva:** Si no se cumplen las condiciones de riesgo crítico pero la lista incluye elementos en estado `"pendiente"`, el foco operacional se desplaza devolviendo la acción `"evaluar pendientes"`.
3. **Control de Argumentos Indispensables (Caso Borde):** Si los parámetros requeridos (`prioridad` o `regla`) están vacíos, nulos o indefinidos, el sistema detiene la evaluación inmediatamente y retorna la acción `"revisar protocolos"`.

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
      "motivo": "Bloqueo crítico detectado bajo la directriz de alta prioridad. Requiere atención inmediata."
    }
    ```

### 2. Transición a Inspección Preventiva (Caso Alterno)
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
      "motivo": "No se detectaron bloqueos críticos en el lote actual; se procede a la revisión de elementos en espera."
    }
    ```

### 3. Activación de Control de Protocolos (Caso Borde)
* **Entrada:**
    ```json
    {
      "items": ["aprobado", "bloqueado"],
      "prioridad": "",
      "regla": "revisar bloqueados primero"
    }
    ```
* **Resultado esperado:**
    ```json
    {
      "accion": "revisar protocolos",
      "motivo": "Argumentos indispensables ausentes o inválidos. Procesamiento cancelado por seguridad."
    }
    ```

---

## Arquitectura de la Solución

La solución adopta el patrón de cláusulas de guarda (*Guard Clauses*) para limpiar el flujo principal de código. Al validar y abortar los escenarios de error o las condiciones críticas al inicio de la función, se elimina la necesidad de estructurar bloques `if/else` anidados. El peor escenario de tiempo se mantiene en una complejidad lineal $O(n)$ debido a la inspección de elementos en el arreglo, garantizando un rendimiento óptimo y un código altamente mantenible.

---

## Ejecución del Módulo

1. Asegúrate de contar con [Node.js](https://nodejs.org/) instalado en tu máquina local (versión LTS recomendada).
2. Abre la terminal de comandos y navega hasta el directorio de este ejercicio.
3. Ejecuta el script de la solución con el comando:
    ```bash
    node maria-montepeque.js
    ```
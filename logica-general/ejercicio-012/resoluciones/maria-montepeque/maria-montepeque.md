# Ejercicio 012: Motor de Mitigación de Riesgos y Filtros de Seguridad

## Análisis del Problema

El objetivo es implementar un componente de lógica de negocio que evalúe y priorice un listado de estados operacionales basándose en el nivel de urgencia y una directriz condicional, utilizando programación defensiva para asegurar la estabilidad del sistema.

* **Entrada:** Un objeto contenedor con la siguiente firma:
    * `items`: Array de Strings (Estados de las opciones operacionales: `"aprobado"`, `"pendiente"`, `"bloqueado"`).
    * `prioridad`: String (Jerarquía de atención del entorno: `"alta"`, `"media"`, `"baja"`).
    * `regla`: String (Criterio dinámico de comparación, ej: `"revisar bloqueados primero"`).
* **Proceso:** 1. Evaluar la integridad de los datos de entrada mediante cláusulas de guarda para mitigar excepciones en tiempo de ejecución.
    2. Normalizar las cadenas de texto (`.toLowerCase()`) para prevenir fallos por discrepancias de mayúsculas.
    3. Verificar con carácter de prioridad absoluta la existencia del estado `"bloqueado"` si el contexto lo exige.
    4. Escalar al análisis de elementos `"pendiente"` si no se detectan riesgos críticos en el sistema.
* **Salida:** Un objeto con la estructura estricta: `{ accion: string, motivo: string }`.

---

## Reglas de Negocio

1. **Mitigación de Riesgo Crítico:** Si la `prioridad` es `"alta"`, la `regla` es exactamente `"revisar bloqueados primero"` y el arreglo de `items` contiene al menos un elemento `"bloqueado"`, se interrumpe inmediatamente el flujo y se retorna la acción `"revisar bloqueado"`.
2. **Gestión de Cuellos de Botella:** Si no se cumplen las condiciones de riesgo crítico pero el arreglo contiene elementos en estado `"pendiente"`, el foco operacional se desplaza devolviendo la acción `"evaluar pendientes"`.
3. **Programación Defensiva (Caso Borde):** Si las entradas son nulas, indefinidas o el arreglo de `items` está vacío, las cláusulas de guarda abortan el proceso de forma segura devolviendo la acción `"error"` junto con una descripción controlada.

---

## Casos de Prueba

### 1. Interrupción por Riesgo Crítico (Caso Normal)
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

### 2. Transición a Elementos Pendientes (Caso Alterno)
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

### 3. Activación de Cláusula de Guarda (Caso Borde)
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
      "accion": "error",
      "motivo": "Estructura de datos inválida o vacía. Procesamiento cancelado por seguridad."
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
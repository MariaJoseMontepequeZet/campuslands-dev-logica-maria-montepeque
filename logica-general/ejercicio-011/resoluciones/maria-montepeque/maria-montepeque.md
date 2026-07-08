# Ejercicio 011: Motor de Evaluación Dinámica de Actividades

## Análisis del Problema

El objetivo es diseñar un componente que evalúe el estado de un conjunto de actividades basándose en su nivel de urgencia y en una directriz o regla de enfoque dinámica inyectada en la petición.

* **Entrada:** Un objeto contenedor con las siguientes propiedades:
    * `items`: Array de Strings (Estados de las actividades: `"aprobado"`, `"pendiente"`, `"bloqueado"`).
    * `prioridad`: String (Nivel de urgencia del proceso: `"alta"`, `"media"`, `"baja"`).
    * `regla`: String (Directriz de enfoque, ej: `"revisar bloqueados primero"`).
* **Proceso:** 1. Validar la existencia de los datos de entrada y descartar estructuras vacías.
    2. Normalizar las cadenas de texto para asegurar la tolerancia a fallos de formato.
    3. Evaluar mediante cortocircuito la directriz de alta prioridad sobre elementos bloqueados.
    4. Desplazar el foco de atención hacia los elementos pendientes en caso de no aplicar la regla crítica.
* **Salida:** Un objeto con la estructura estricta: `{ accion: string, motivo: string }`.

---

## Reglas de Negocio

1. **Enfoque Crítico de Bloqueos:** Si la propiedad `regla` es exactamente `"revisar bloqueados primero"`, la `prioridad` es `"alta"` y el arreglo de `items` contiene al menos un elemento `"bloqueado"`, se determina la acción `"revisar bloqueado"`.
2. **Foco en Elementos Pendientes:** Si no se cumplen las condiciones de la regla crítica anterior, pero el arreglo de `items` contiene elementos en estado `"pendiente"`, la acción pasa a ser `"evaluar pendientes"`.
3. **Contingencia por Falta de Datos (Caso Borde):** Si el arreglo de `items` se encuentra completamente vacío, el sistema mitiga el procesamiento innecesario y retorna inmediatamente la acción `"no requiere accion"`.

---

## Casos de Prueba

### 1. Interrupción por Regla Crítica (Caso Normal)
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
      "motivo": "Se identificaron elementos bloqueados bajo la directriz de alta prioridad."
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
      "motivo": "No se cumplen las condiciones de bloqueo crítico; se procede con la revisión de actividades pendientes."
    }
    ```

### 3. Mitigación por Lista Vacía (Caso Borde)
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
      "accion": "no requiere accion",
      "motivo": "El listado de actividades está vacío; no existen elementos para evaluar."
    }
    ```

---

## Arquitectura de la Solución

El algoritmo implementa una estrategia de evaluación por precedencia lineal. Al estructurar las compuertas lógicas de forma descendente (Validación inicial $\rightarrow$ Regla Crítica $\rightarrow$ Regla Secundaria $\rightarrow$ Estado por Defecto), garantizamos que el flujo sea determinista. El uso de métodos nativos como `Array.prototype.includes()` permite realizar las búsquedas de estados específicos en un solo paso, manteniendo una alta eficiencia en el procesamiento.

---

## Ejecución del Módulo

1. Asegúrate de contar con [Node.js](https://nodejs.org/) instalado en tu estación de trabajo (versión LTS).
2. Abre la consola de comandos en el directorio raíz de este ejercicio.
3. Ejecuta el script de la solución mediante el comando:
    ```bash
    node maria-montepeque.js
    ```
# Ejercicio 017: Motor de Validación Estructural y Control de Planos Arquitectónicos

## Análisis del Problema

El objetivo es desarrollar un componente de software para un pipeline de ingeniería civil y arquitectura que evalúe el estado operacional de los elementos de un plano arquitectónico, aplicando prioridades dinámicas para detener o desviar el flujo de renderizado ante cualquier bloqueo técnico o estructural.

* **Entrada:** Un objeto contenedor con la siguiente firma:
    * `items`: Array de Strings (Estados de los elementos del plano: `"aprobado"`, `"pendiente"`, `"bloqueado"`).
    * `prioridad`: String (Nivel de atención en el flujo de ingeniería: `"alta"`, `"media"`, `"baja"`).
    * `regla`: String (Directriz de la tabla de decisión que regula la prioridad, ej: `"revisar bloqueados primero"`).
* **Proceso:** 1. Implementar cláusulas de guarda iniciales para descartar de manera preventiva arrays vacíos o nulos que comprometan la memoria.
    2. Normalizar los textos ingresados convirtiéndolos a minúsculas (`.toLowerCase()`) para garantizar un procesamiento seguro.
    3. Buscar intersecciones críticas entre los parámetros; si la regla lo exige y existe un elemento `"bloqueado"`, congelar el flujo ordinario.
    4. Evaluar condiciones secundarias como ítems en estado `"pendiente"` si el entorno está libre de bloqueos.
* **Salida:** Un objeto con la estructura estricta: `{ accion: string, motivo: string }`.

---

## Reglas de Negocio

1. **Interrupción por Bloqueo Estructural:** Si la jerarquía del diseño estructural es `"alta"`, la directriz activa indica `"revisar bloqueados primero"` y se ubica al menos un componente `"bloqueado"`, se detiene el flujo ordinario y se devuelve la acción `"revisar bloqueado"`.
2. **Derivación por Pendientes:** Si no hay elementos de bloqueo detectados pero existen capas en estado `"pendiente"`, el foco operacional se desplaza para prevenir retrasos devolviendo la acción `"ajustar calculos"`.
3. **Control de Parámetros Esenciales (Caso Borde):** Si los parámetros de configuración esenciales (`prioridad` o `regla`) se envían vacíos, nulos o indefinidos, el sistema detiene la evaluación de forma segura retornando la acción `"revisar parametros"`.

---

## Casos de Prueba

### 1. Interrupción por Bloqueo Estructural (Caso Normal)
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
      "motivo": "Se detectaron componentes estructurales bloqueados bajo alerta de alta prioridad. Pipeline de renderizado pausado."
    }
    ```

### 2. Desvío para Ajuste de Cálculos (Caso Alterno)
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
      "accion": "ajustar calculos",
      "motivo": "Plano libre de bloqueos críticos. Se procede a la revisión y ajuste preventivo de los elementos pendientes."
    }
    ```

### 3. Activación de Cláusula de Guarda por Vacío (Caso Borde)
* **Entrada:**
    ```json
    {
      "items": ["aprobado", "pendiente"],
      "prioridad": "alta",
      "regla": ""
    }
    ```
* **Resultado esperado:**
    ```json
    {
      "accion": "revisar parametros",
      "motivo": "Configuración esencial incompleta o inválida. Procesamiento cancelado por seguridad del sistema."
    }
    ```

---

## Arquitectura de la Solución

La solución utiliza el patrón de diseño de Cláusulas de Guarda (*Guard Clauses*) para sanear el flujo de control de la aplicación. Al evaluar y abortar el procesamiento al inicio de la función en caso de argumentos inválidos o colecciones vacías, evitamos el anidamiento innecesario de bloques `if/else` (*Arrow Anti-pattern*). La búsqueda de estados específicos dentro del array aprovecha métodos nativos optimizados del motor V8 de JavaScript, manteniendo una complejidad de tiempo en el peor de los casos de $O(n)$ y una estructura de código limpia, modular y mantenible.

---

## Ejecución del Módulo

1. Asegúrate de contar con [Node.js](https://nodejs.org/) instalado en tu estación de trabajo (versión LTS recomendada).
2. Abre la consola de comandos o terminal en el directorio raíz de este ejercicio.
3. Ejecuta el script de la solución utilizando el comando:
    ```bash
    node maria-montepeque.js
    ```
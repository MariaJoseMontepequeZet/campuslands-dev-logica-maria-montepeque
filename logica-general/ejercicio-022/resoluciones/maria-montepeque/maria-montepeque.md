# Ejercicio 022: Sistema de Auditoría Deportiva y Control de Planillas de Torneo

## Análisis del Problema

El objetivo es desarrollar un componente de software para la gestión de comités deportivos que evalúe el estado operacional de los clubes o planillas inscritas en un torneo, aplicando prioridades dinámicas para detener o desviar el flujo de auditoría ante cualquier sanción técnica, financiera o bloqueo reglamentario.

* **Entrada:** Un objeto contenedor con la siguiente firma:
    * `items`: Array de Strings (Estados de las planillas o clubes del torneo: `"aprobado"`, `"pendiente"`, `"bloqueado"`).
    * `prioridad`: String (Nivel de severidad de la validación del entorno: `"alta"`, `"media"`, `"baja"`).
    * `regla`: String (Directriz del comité que condiciona el orden de auditoría, ej: `"revisar bloqueados primero"`).
* **Proceso:** 1. Validar mediante cláusulas de guarda al inicio del código que la lista de datos ingresada contenga elementos y sea un arreglo válido para prevenir excepciones de memoria.
    2. Estandarizar los parámetros de tipo texto pasándolos a minúsculas (`.toLowerCase()`) para omitir discrepancias de escritura o errores humanos de digitación.
    3. Verificar de manera prioritaria si coexisten una regla enfocada en riesgos altos junto con al menos un estado `"bloqueado"` real en el listado del ranking.
    4. Comprobar condiciones secundarias del torneo como reportes en estado `"pendiente"` si el ecosistema está libre de sanciones críticas.
* **Salida:** Un objeto con la estructura estricta: `{ accion: string, motivo: string }`.

---

## Reglas de Negocio

1. **Interrupción por Sanción Crítica:** Si la `prioridad` de la auditoría es `"alta"`, la `regla` activa corresponde exactamente a `"revisar bloqueados primero"` y el listado de `items` contiene al menos un club o planilla `"bloqueado"` (ej: sanción por alineación indebida o deudas financieras), se frena el flujo ordinario y se devuelve la acción `"revisar bloqueado"`.
2. **Derivación a Auditoría de Actas:** Si la tabla de posiciones está libre de bloqueos críticos pero registra elementos en estado `"pendiente"`, el foco operacional se desplaza hacia la validación de reportes de campo devolviendo la acción `"auditar actas arbitrales"`.
3. **Control de Reglamento (Caso Borde):** Si los metadatos necesarios de control (`prioridad` o `regla`) no se envían, se encuentran vacíos, nulos o indefinidos, el sistema detiene la evaluación de forma segura retornando la acción `"revisar reglamento"`.

---

## Casos de Prueba

### 1. Interrupción por Planilla Sancionada (Caso Normal)
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
      "motivo": "Se detectaron clubes o planillas bloqueadas bajo alerta de alta prioridad. Flujo ordinario del torneo suspendido para auditoría."
    }
    ```

### 2. Desvío para Auditoría de Actas (Caso Alterno)
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
      "accion": "auditar actas arbitrales",
      "motivo": "Tabla de posiciones libre de bloqueos severos. Se procede a la revisión preventiva de las planillas en espera."
    }
    ```

### 3. Activación de Cláusula de Guarda por Metadatos (Caso Borde)
* **Entrada:**
    ```json
    {
      "items": ["aprobado", "pendiente", "bloqueado"],
      "prioridad": "alta",
      "regla": ""
    }
    ```
* **Resultado esperado:**
    ```json
    {
      "accion": "revisar reglamento",
      "motivo": "Parámetros indispensables de control ausentes o inválidos. Procesamiento suspendido por seguridad del comité."
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
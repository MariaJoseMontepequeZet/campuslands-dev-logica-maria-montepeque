# Módulo de Priorización de Reparaciones (Taller Mecánico)

## Análisis del Problema
Este componente automatiza la asignación de prioridades de mantenimiento para optimizar el flujo de trabajo en el taller. La lógica prioriza la seguridad operativa (sistemas críticos) y cumple con las obligaciones de nivel de servicio (SLA) para clientes comerciales (flotillas).

* **Entrada:**
    * `sistema`: Nombre del componente afectado (String).
    * `cliente`: Tipo de cliente, `particular` o `flotilla` (String).
* **Proceso:** 1. Validar que los datos de entrada no sean nulos o vacíos mediante cláusulas de guarda.
    2. Verificar si el sistema afectado pertenece a la lista de sistemas críticos.
    3. Aplicar la jerarquía de prioridad: Seguridad (Alta) > Contratos Comerciales (Media) > Mantenimiento General (Baja).
* **Salida:** Un objeto con el detalle de la prioridad asignada y una bandera de atención inmediata.

---

## Reglas de Negocio
1. **Prioridad Alta:** Asignada si el `sistema` es uno de los componentes de seguridad críticos: `['frenos', 'motor', 'transmisión']`.
2. **Prioridad Media:** Asignada a clientes de tipo `flotilla` que no presentan fallas críticas.
3. **Prioridad Baja:** Asignada a cualquier mantenimiento de rutina para clientes `particulares`.
4. **Validación:** Si se ingresa un sistema inexistente, el sistema debe retornar un estado de error por falta de integridad de datos.

---

## Casos de Prueba

### 1. Sistema Crítico (Caso Normal)
* **Entrada:** `{ "sistema": "frenos", "cliente": "particular" }`
* **Resultado esperado:**
    ```json
    {
      "nivel": "Alta",
      "codigo": 1,
      "requiereAtencionInmediata": true
    }
    ```

### 2. Cliente de Flotilla (Caso Borde)
* **Entrada:** `{ "sistema": "aceite", "cliente": "flotilla" }`
* **Resultado esperado:**
    ```json
    {
      "nivel": "Media",
      "codigo": 2,
      "requiereAtencionInmediata": false
    }
    ```

### 3. Mantenimiento General (Caso Normal)
* **Entrada:** `{ "sistema": "luces", "cliente": "particular" }`
* **Resultado esperado:**
    ```json
    {
      "nivel": "Baja",
      "codigo": 3,
      "requiereAtencionInmediata": false
    }
    ```

---

## Arquitectura de la Solución
El sistema utiliza una arquitectura declarativa. La lista de sistemas críticos se define como una constante externa, permitiendo escalabilidad sin modificar la lógica principal.



---

## Ejecución
1. Asegúrate de tener [Node.js](https://nodejs.org/) instalado.
2. Abre la consola en el directorio raíz.
3. Ejecuta el script de auditoría con:
   ```bash
   node maria-montepeque.js
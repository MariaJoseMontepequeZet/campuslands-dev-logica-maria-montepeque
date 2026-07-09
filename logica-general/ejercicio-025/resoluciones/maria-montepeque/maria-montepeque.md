# Módulo de Gestión de Inventario: Reposición Automatizada

## Análisis del Problema
Este componente de software permite a los talleres mecánicos optimizar el flujo de repuestos. Su objetivo es mantener niveles de stock saludables comparando la existencia actual (`stock`) contra límites definidos de seguridad (`min`) y capacidad máxima de almacenamiento (`max`).

* **Entrada:**
    * `stock`: Cantidad actual de unidades en bodega.
    * `min`: Nivel mínimo de seguridad antes de disparar una orden de compra.
    * `max`: Capacidad ideal de almacenamiento.
* **Proceso:** 1. Validar la integridad de los parámetros (específicamente que `max` > `min`).
    2. Evaluar el estado actual del inventario frente a los límites definidos.
    3. Calcular el delta de reposición únicamente cuando el stock cae por debajo del umbral de seguridad.
* **Salida:** Un objeto con la acción sugerida y la cantidad de unidades requeridas.

---

## Reglas de Negocio
1. **Validación de Configuración:** Cualquier configuración donde el límite máximo sea igual o inferior al mínimo (`max <= min`) es considerada inválida y debe interrumpir el proceso con un error.
2. **Lógica de Reposición (Compra):** Si el `stock` actual es menor a `min`, el sistema genera una orden de compra para alcanzar la capacidad total:
    $$\text{cantidad} = \text{max} - \text{stock}$$
3. **Optimización de Stock (Espera):** Si el `stock` se encuentra en o por encima del nivel de seguridad (`stock >= min`), el sistema recomienda no realizar ninguna compra.

---

## Casos de Prueba

### 1. Reabastecimiento Necesario (Caso Normal)
* **Entrada:** `{ "stock": 5, "min": 10, "max": 50 }`
* **Resultado esperado:**
    ```json
    {
      "accion": "Comprar",
      "cantidad": 45
    }
    ```

### 2. Inventario en Nivel Óptimo (Caso Normal)
* **Entrada:** `{ "stock": 20, "min": 10, "max": 50 }`
* **Resultado esperado:**
    ```json
    {
      "accion": "Esperar",
      "cantidad": 0
    }
    ```

### 3. Configuración de Parámetros Inválida (Caso Borde)
* **Entrada:** `{ "stock": 5, "min": 50, "max": 10 }`
* **Resultado esperado:**
    ```json
    {
      "error": "Configuración inválida: El nivel máximo debe ser superior al nivel mínimo."
    }
    ```

---

## Arquitectura de la Solución
La solución utiliza **Cláusulas de Guarda** para validar las reglas de configuración antes de cualquier cálculo. Esto evita procesar datos inconsistentes. La lógica es de tiempo constante $O(1)$, siendo extremadamente eficiente para ejecutarse en cada consulta de inventario sin sobrecargar el sistema.



---

## Ejecución del Módulo
1. Asegúrate de contar con [Node.js](https://nodejs.org/) instalado.
2. Abre la consola en la carpeta raíz del proyecto.
3. Ejecuta el script con:
   ```bash
   node maria-montepeque.js
# Logica matematica 005 - minimos y limites

## Sistema de Gestión de Inventario de Repuestos

Este script implementa un motor de análisis de inventario diseñado para identificar automáticamente el componente con menor disponibilidad y determinar la urgencia de reabastecimiento basada en umbrales críticos.

* **Descripción del proceso:**
* **Conversión de datos:** Transforma el objeto de inventario en un formato de matriz para permitir el procesamiento iterativo.
* **Identificación crítica:** Utiliza el método `reduce` para recorrer el inventario y localizar el elemento con la cantidad mínima.
* **Clasificación de urgencia:** Evalúa la cantidad mínima contra rangos preestablecidos para definir la acción necesaria (Urgente, Programado u Óptimo).


* **Tecnologías:**
* JavaScript (métodos de objeto y colecciones).


---

### Explicación técnica: ¿Cómo funciona la lógica?

La potencia de este script reside en su capacidad de **reducción de datos**:

1. **`Object.entries()`**: Es fundamental porque permite convertir un objeto literal (donde las claves son los nombres de los repuestos) en un formato de *array* procesable por los métodos de iteración de JavaScript.
2. **`reduce()`**: Es el motor principal. A diferencia de un ciclo `for` tradicional, `reduce` permite comparar el elemento actual con el anterior de manera elegante en una sola línea, lo que reduce la posibilidad de errores en los índices.
3. **Desestructuración**: Al extraer `const [nombre, cantidad] = minStock`, el código se vuelve muy legible, permitiendo trabajar con los datos del repuesto crítico como variables independientes, lo que simplifica la lógica condicional posterior.


### Lógica del Código

```javascript
const analizarStock = (inventario) => {
    // 1. Convertir objeto a array de [clave, valor]
    const repuestos = Object.entries(inventario);
    
    // 2. Encontrar el repuesto con menor stock
    const minStock = repuestos.reduce((prev, curr) => (curr[1] < prev[1] ? curr : prev));
    const [nombre, cantidad] = minStock;
    
    // 3. Determinar estado de la acción requerida
    let estado = "";
    if (cantidad <= 5) estado = "Pedido Urgente";
    else if (cantidad <= 15) estado = "Pedido Programado";
    else estado = "Stock Óptimo";
    
    return {
        repuesto_critico: nombre,
        cantidad_actual: cantidad,
        accion_requerida: estado
    };
};

```

### Salida Esperada

```text
{
  repuesto_critico: 'Frenos',
  cantidad_actual: 3,
  accion_requerida: 'Pedido Urgente'
}

```

**Estructura del Proyecto:**

```plaintext
campuslands-dev-logica/
└── logica-matematica/
    └── ejercicio-005/
        └── resoluciones/
            └── carlos-velasco/
                └── carlos-velasco.js

```

Hecho por:
Carlos Velasco

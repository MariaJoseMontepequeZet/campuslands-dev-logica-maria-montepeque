# Logica general 019 - inventarios logicos

## Sistema de Análisis de Inventario

Este script permite auditar automáticamente un inventario de sustancias químicas, clasificando el estado de cada ítem según su cantidad disponible para facilitar la toma de decisiones sobre reabastecimiento.

* **Descripción del proceso:**
* **Iteración**: Recorre cada par clave-valor del objeto `inventario` (donde la clave es la sustancia y el valor es la cantidad).
* **Evaluación de umbrales**: Compara la cantidad disponible contra rangos predefinidos:
* $\le 5$: Crítico.
* $\le 20$: Bajo.
* $> 20$: Óptimo.


* **Generación de reporte**: Crea un nuevo objeto que mapea cada sustancia a su estado actual.


* **Tecnologías:**
* JavaScript (objetos, bucles `for...in` y estructuras de control condicional).

---

### Explicación técnica

1. **`for...in`**: Es la estructura ideal para este caso, ya que permite iterar de manera directa sobre las propiedades (sustancias) de un objeto, haciendo que el código sea altamente legible y eficiente para el manejo de diccionarios de datos.
2. **Reporte dinámico**: La función construye el objeto `reporte` de forma incremental, lo que permite procesar inventarios de cualquier tamaño sin necesidad de definir la estructura de antemano.
3. **Mantenibilidad**: Al separar los umbrales (5 y 20) dentro de la lógica condicional, el script es muy fácil de ajustar si las políticas de compra de la empresa cambian en el futuro.

### Lógica del Código

```javascript
const analizarInventario = (inventario) => {
    let reporte = {};
    // 1. Recorrer cada sustancia en el objeto inventario
    for (let sustancia in inventario) {
        let cantidad = inventario[sustancia];
        let estado = "";
        
        // 2. Clasificar según umbrales de seguridad
        if (cantidad <= 5) estado = "Estado Crítico: Reponer urgente";
        else if (cantidad <= 20) estado = "Estado Bajo: Programar compra";
        else estado = "Estado Óptimo: Stock suficiente";

        reporte[sustancia] = estado;
    }
    return reporte;
};

```

### Salida Esperada

```text
{
  'Ácido Sulfúrico': 'Estado Crítico: Reponer urgente',
  Etanol: 'Estado Bajo: Programar compra',
  'Agua Destilada': 'Estado Óptimo: Stock suficiente'
}

```

**Estructura del Proyecto:**

```plaintext
campuslands-dev-logica/
└── logica-general/
    └── ejercicio-019/
        └── resoluciones/
            └── carlos-velasco/
                └── carlos-velasco.js

```

Hecho por:
Carlos Velasco
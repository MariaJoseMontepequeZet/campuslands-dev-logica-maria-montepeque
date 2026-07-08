# Logica general 006 - busqueda de elementos

## Sistema de Validación de Catálogo de Automóviles

Este script implementa una lógica de búsqueda y validación para un catálogo de vehículos de alto rendimiento. Su función principal es determinar si un modelo específico cumple con un requisito mínimo de velocidad antes de ser incluido en una selección exclusiva.

* **Descripción del proceso:**
* **Búsqueda inteligente:** Utiliza el método `find` para localizar un modelo específico, normalizando los nombres a minúsculas para asegurar que la búsqueda no distinga entre mayúsculas y minúsculas.
* **Validación de existencia:** Verifica si el vehículo fue encontrado en el catálogo antes de realizar cualquier cálculo.
* **Filtrado por rendimiento:** Compara la velocidad máxima del vehículo contra un valor mínimo proporcionado.
* **Reporte detallado:** Retorna un objeto con la acción a tomar y el motivo correspondiente.


* **Tecnologías:**
* JavaScript (lógica condicional y métodos de búsqueda de arrays).


---

### Explicación técnica

1. **Normalización**: La implementación de `toLowerCase()` es fundamental para la experiencia del usuario, evitando errores de coincidencia por variaciones en el formato del texto de entrada.
2. **Evaluación temprana**: La estructura `if (!autoEncontrado)` es una técnica de *guard clause* (cláusula de guardia). Permite terminar la ejecución prematuramente si la condición base no se cumple, lo que mantiene el código limpio y evita anidaciones innecesarias.
3. **Resultados contextuales**: Al devolver un objeto con `accion` y `motivo`, la función no solo procesa datos, sino que comunica el estado de la lógica, lo cual es vital para integraciones donde el usuario final necesita saber exactamente por qué un vehículo fue rechazado o aceptado.

### Lógica del Código

```javascript
const buscarAutoExclusivo = (autos, nombreBusqueda, velocidadMinima) => {
    // 1. Buscar auto normalizando nombres
    const autoEncontrado = autos.find(a => a.nombre.toLowerCase() === nombreBusqueda.toLowerCase());

    // 2. Validar existencia
    if (!autoEncontrado) {
        return { accion: "No encontrado", motivo: "El modelo no existe en la base de datos." };
    }
    
    // 3. Evaluar velocidad mínima
    if (autoEncontrado.velocidadMaxima >= velocidadMinima) {
        return { accion: "Apto para el catálogo", motivo: `Supera los ${velocidadMinima} km/h.` };
    } else {
        return { accion: "Fuera de rango", motivo: "No alcanza la velocidad requerida." };
    }
};

```

### Salida Esperada

```text
{ accion: 'Apto para el catálogo', motivo: 'Supera los 450 km/h.' }
{ accion: 'No encontrado', motivo: 'El modelo no existe en la base de datos.' }

```

**Estructura del Proyecto:**

```plaintext
campuslands-dev-logica/
└── logica-general/
    └── ejercicio-006/
        └── resoluciones/
            └── carlos-velasco/
                └── carlos-velasco.js

```

Hecho por:
Carlos Velasco


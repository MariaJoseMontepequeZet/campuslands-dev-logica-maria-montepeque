# Logica general 025 - ordenamiento de prioridades

## Sistema de Ordenamiento de Taller Mecánico

Este script organiza una fila de vehículos pendientes de reparación. La lógica aplica un sistema de prioridades para asegurar que los casos más críticos o los clientes más leales sean atendidos primero.

* **Descripción del proceso:**
* **Definición de pesos**: Se asigna un valor numérico a cada nivel de prioridad:
* **Peso 3 (Máxima prioridad)**: Vehículos con gravedad "alta".
* **Peso 2 (Prioridad media)**: Vehículos con gravedad "media" cuyos dueños son "clientes frecuentes".
* **Peso 1 (Prioridad baja)**: Cualquier otro caso.


* **Ordenamiento**: Utiliza el método `.sort()` para organizar los vehículos de mayor a menor peso (orden descendente).


* **Tecnologías:**
* JavaScript (método de array `.sort()` y lógica de funciones auxiliares).

---

### Explicación técnica

1. **Función Auxiliar (`obtenerPeso`)**: Esta función encapsula la lógica de negocio, haciendo que el código sea altamente legible y fácil de modificar si las reglas de prioridad cambian.
2. **`sort` con retorno de pesos**: Al restar `obtenerPeso(a)` de `obtenerPeso(b)`, forzamos una clasificación descendente. Esto garantiza que el elemento con mayor peso (el que requiere atención inmediata) aparezca siempre en la primera posición del arreglo.
3. **Abstracción**: La lógica de pesos permite gestionar múltiples variables (gravedad y lealtad del cliente) de forma simultánea, transformando criterios complejos en un simple valor numérico para ordenar.

### Lógica del Código

```javascript
const ordenarTaller = (vehiculos) => {
    return vehiculos.sort((a, b) => {
        // Función interna para calcular peso de prioridad
        const obtenerPeso = (v) => {
            if (v.gravedad === "alta") return 3;
            if (v.gravedad === "media" && v.esClienteFrecuente) return 2;
            return 1;
        };
        // Orden descendente (de mayor a menor peso)
        return obtenerPeso(b) - obtenerPeso(a);
    });
};

```

### Salida Esperada

```text
[
  { modelo: 'Camioneta', gravedad: 'alta', esClienteFrecuente: false },
  { modelo: 'Moto', gravedad: 'media', esClienteFrecuente: true },
  { modelo: 'Sedan', gravedad: 'media', esClienteFrecuente: false }
]

```

**Estructura del Proyecto:**

```plaintext
campuslands-dev-logica/
└── logica-general/
    └── ejercicio-025/
        └── resoluciones/
            └── carlos-velasco/
                └── carlos-velasco.js

```

Hecho por:
Carlos Velasco
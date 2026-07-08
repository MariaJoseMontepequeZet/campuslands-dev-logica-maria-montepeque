# Logica general 005 - ordenamiento de prioridades

## Sistema de Priorización de Trabajos

Este script implementa un motor de gestión de colas de trabajo para un taller. Su objetivo es automatizar la selección de la próxima tarea a realizar, basándose en un sistema de niveles de prioridad predefinidos para optimizar la atención al cliente y la urgencia técnica.

* **Descripción del proceso:**
* **Definición de pesos:** Establece una jerarquía numérica donde "Emergencia" tiene el nivel más alto de prioridad.
* **Ordenamiento:** Utiliza un algoritmo de ordenamiento para organizar la lista de trabajos de menor a mayor peso.
* **Selección:** Extrae el primer elemento de la lista ordenada para determinar la tarea inmediata.
* **Justificación:** Genera un mensaje explicativo detallando el motivo de la priorización.


* **Tecnologías:**
* JavaScript (método de ordenamiento `sort` y mapeo de objetos).


---

### Explicación técnica

1. **Mapeo de prioridades**: La creación del objeto `pesos` actúa como una tabla de búsqueda. Esto es mucho más eficiente y legible que utilizar múltiples sentencias `if-else` para asignar el nivel de prioridad.
2. **Inmutabilidad**: El uso de `[...ordenes]` para crear una copia antes de usar `sort()` es una práctica esencial, ya que garantiza que el array original proporcionado a la función no sea alterado (evitando efectos secundarios no deseados en otras partes del programa).
3. **Algoritmo de ordenamiento**: Al restar `pesos[a.tipo] - pesos[b.tipo]`, el método `sort` reordena los elementos de forma ascendente. Como "Emergencia" tiene el peso `1`, siempre será movido al inicio de la lista, asegurando que el elemento con mayor urgencia sea seleccionado primero.


### Lógica del Código

```javascript
const ordenarTrabajos = (ordenes) => {
    // 1. Mapa de prioridades (menor valor = mayor urgencia)
    const pesos = { "Emergencia": 1, "Mantenimiento": 2, "Estética": 3 };
    
    // 2. Ordenar las órdenes según el peso definido
    const ordenado = [...ordenes].sort((a, b) => pesos[a.tipo] - pesos[b.tipo]);
    
    // 3. Obtener el primer elemento (el de mayor prioridad)
    const siguiente = ordenado[0];

    return {
        siguiente_tarea: siguiente.descripcion,
        motivo: `Prioridad nivel ${pesos[siguiente.tipo]} asignada por tratarse de ${siguiente.tipo}.`
    };
};

```

### Salida Esperada


```text
{
  siguiente_tarea: 'Reparación de frenos',
  motivo: 'Prioridad nivel 1 asignada por tratarse de Emergencia.'
}

```

**Estructura del Proyecto:**

```plaintext
campuslands-dev-logica/
└── logica-general/
    └── ejercicio-005/
        └── resoluciones/
            └── carlos-velasco/
                └── carlos-velasco.js

```

Hecho por:
Carlos Velasco

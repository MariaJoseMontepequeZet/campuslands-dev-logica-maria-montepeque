# Logica general 008 - flujos paso a paso

## Sistema de Recomendación de Películas

Este script implementa un motor de filtrado básico para recomendar películas a un usuario, basándose en la coincidencia de sus preferencias de subgénero y la disponibilidad presupuestaria.

* **Descripción del proceso:**
* **Validación de preferencias:** Compara el subgénero de la película con la preferencia declarada por el usuario.
* **Validación de presupuesto:** Evalúa si el costo de alquiler de la película es menor o igual al presupuesto máximo definido por el usuario.
* **Reporte de decisión:** Retorna un objeto detallando la acción recomendada (si se recomienda, si excede el presupuesto o si no coincide) junto con su respectiva justificación.


* **Tecnologías:**
* JavaScript (lógica de control condicional).


---

### Explicación técnica

1. **Cláusulas de guardia (Guard Clauses)**: La función utiliza una estructura de retorno temprano. Al validar primero las condiciones negativas (falta de coincidencia de género y presupuesto excedido), se elimina la necesidad de sentencias `if-else` anidadas, lo que hace que el código sea mucho más fácil de leer y depurar.
2. **Abstracción de datos**: La función acepta objetos (`usuario`, `pelicula`), lo que permite que el código sea altamente reutilizable para cualquier combinación de perfiles y catálogos, simplemente pasando diferentes objetos como argumentos.
3. **Comunicación clara**: Al devolver un objeto con `accion` y `motivo`, la función actúa como un componente comunicativo que informa al sistema y al usuario final no solo el *qué* (si se recomienda o no), sino el *porqué* exacto de la decisión tomada por la lógica.


### Lógica del Código

```javascript
const recomendarPelicula = (usuario, pelicula) => {
    // 1. Filtrado por afinidad de género
    if (pelicula.subgenero !== usuario.preferencia) {
        return { 
            accion: "No recomendada", 
            motivo: "El subgénero no coincide con tus intereses." 
        };
    }

    // 2. Filtrado por restricciones económicas
    if (pelicula.costoAlquiler > usuario.presupuesto) {
        return { 
            accion: "Recomendación fuera de presupuesto", 
            motivo: "El costo de alquiler excede tu presupuesto actual." 
        };
    }

    // 3. Resultado de recomendación positiva
    return { 
        accion: "Recomendada para ver", 
        motivo: "La película coincide con tus gustos y está dentro de tu presupuesto." 
    };
};

```

### Salida Esperada

```text
{
  accion: 'Recomendada para ver',
  motivo: 'La película coincide con tus gustos y está dentro de tu presupuesto.'
}
{
  accion: 'Recomendación fuera de presupuesto',
  motivo: 'El costo de alquiler excede tu presupuesto actual.'
}

```

**Estructura del Proyecto:**

```plaintext
campuslands-dev-logica/
└── logica-general/
    └── ejercicio-008/
        └── resoluciones/
            └── carlos-velasco/
                └── carlos-velasco.js

```

Hecho por:
Carlos Velasco

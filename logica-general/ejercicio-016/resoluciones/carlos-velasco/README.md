# Logica general 016 - matrices simples

## Sistema de Análisis de Exposición de Escenas

Este script implementa un motor de diagnóstico para matrices de datos, diseñado para evaluar si los valores de una escena (como niveles de luz en una imagen) se encuentran dentro de rangos operativos aceptables.

* **Descripción del proceso:**
* **Iteración**: Recorre cada elemento de la matriz bidimensional proporcionada.
* **Detección**: Identifica valores fuera de los umbrales de seguridad (>$80$ para sobreexposición, <$10$ para subexposición).
* **Filtrado**: Utiliza `Set` para asegurar que los mensajes de alerta sean únicos, evitando duplicados en los detalles finales.
* **Reporte**: Devuelve un objeto de estado ("Escena balanceada" o "Alerta") con la descripción correspondiente.


* **Tecnologías:**
* JavaScript (bucles anidados, estructuras de datos y manejo de conjuntos).



---

### Explicación técnica

1. **Matrices bidimensionales**: El uso de bucles `for...of` anidados permite un recorrido eficiente y legible de estructuras de datos tipo cuadrícula, facilitando la validación de cada pixel o punto de datos individualmente.
2. **`new Set()`**: Es una implementación elegante para la limpieza de datos; al convertir el arreglo `advertencias` en un `Set`, eliminamos automáticamente cualquier redundancia, garantizando que el usuario solo reciba una vez el aviso por cada tipo de error.
3. **Encapsulamiento del estado**: La función separa claramente la lógica de análisis del retorno de datos, lo que permite que el estado resultante sea inmutable y fácil de consumir por otras interfaces de usuario.

### Lógica del Código

```javascript
const analizarEscena = (matriz) => {
    let estado = "Escena balanceada";
    let advertencias = [];

    // 1. Recorrer la matriz para verificar cada valor
    for (let fila of matriz) {
        for (let valor of fila) {
            if (valor > 80) advertencias.push("Sobreexposición");
            if (valor < 10) advertencias.push("Subexposición");
        }
    }

    // 2. Evaluar si existen problemas detectados
    if (advertencias.length > 0) {
        return { 
            estado: "Alerta", 
            detalles: [...new Set(advertencias)] // Eliminar duplicados
        };
    }
    
    return { estado: estado, detalles: "Valores dentro del rango óptimo." };
};

```

### Salida Esperada

```text
{
  estado: 'Escena balanceada',
  detalles: 'Valores dentro del rango óptimo.'
}
{
  estado: 'Alerta',
  detalles: [ 'Sobreexposición', 'Subexposición' ]
}

```

**Estructura del Proyecto:**

```plaintext
campuslands-dev-logica/
└── logica-general/
    └── ejercicio-016/
        └── resoluciones/
            └── carlos-velasco/
                └── carlos-velasco.js

```

Hecho por:
Carlos Velasco
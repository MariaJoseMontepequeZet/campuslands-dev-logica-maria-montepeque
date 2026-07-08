# Logica general 026 - busqueda de elementos

## Sistema de Búsqueda Avanzada de Vehículos

Este script permite filtrar un inventario de automóviles aplicando criterios múltiples de selección: marca específica, una potencia mínima requerida y el estado de disponibilidad del vehículo. Es una herramienta esencial para gestionar catálogos con condiciones dinámicas.

* **Descripción del proceso:**
* **Filtrado dinámico**: Utiliza el método `.filter()` para evaluar tres condiciones simultáneas en cada objeto del inventario.
* **Normalización**: Convierte tanto el criterio de búsqueda como la marca del vehículo a minúsculas (`toLowerCase()`) para asegurar que la búsqueda sea insensible a mayúsculas.
* **Manejo de respuestas**: Si el filtro no encuentra coincidencias, retorna un objeto de error descriptivo; de lo contrario, devuelve un objeto confirmando el éxito con la lista de resultados encontrados.


* **Tecnologías:**
* JavaScript (método de array `.filter()`, manejo de objetos y comparaciones lógicas).

---

### Explicación técnica

1. **Robustez en las búsquedas**: La normalización de cadenas (`toLowerCase`) elimina errores comunes de entrada de usuario, haciendo que "BUGATTI" sea lo mismo que "bugatti".
2. **Eficiencia condicional**: El operador `&&` dentro del filtro garantiza que un vehículo debe cumplir obligatoriamente las tres condiciones para ser considerado válido, optimizando la búsqueda.
3. **Arquitectura de retorno**: La estructura del objeto de salida (`{ encontrado, autos/mensaje }`) permite a una interfaz de usuario o a otro módulo del sistema saber inmediatamente cómo gestionar la respuesta sin necesidad de realizar validaciones extra sobre el largo del arreglo resultante.


### Lógica del Código

```javascript
const buscarAutos = (inventario, criterioPotencia, marcaBusqueda) => {
    // 1. Aplicación de filtros múltiples
    const resultados = inventario.filter(auto => 
        auto.marca.toLowerCase() === marcaBusqueda.toLowerCase() &&
        auto.potencia >= criterioPotencia &&
        auto.disponible === true
    );

    // 2. Validación de resultados
    if (resultados.length === 0) {
        return { encontrado: false, mensaje: "No se encontraron autos con esos criterios." };
    }

    // 3. Retorno del éxito
    return { encontrado: true, autos: resultados };
};

```

### Salida Esperada

De acuerdo con la ejecución registrada en el archivo {E2150227-7F28-4B2D-A559-709D6FC4536D}.png, los resultados obtenidos son:

```text
{
  encontrado: true,
  autos: [
    { marca: 'Bugatti', modelo: 'Chiron', potencia: 1500, disponible: true }
  ]
}
{
  encontrado: false,
  mensaje: 'No se encontraron autos con esos criterios.'
}

```

**Estructura del Proyecto:**

```plaintext
campuslands-dev-logica/
└── logica-general/
    └── ejercicio-026/
        └── resoluciones/
            └── carlos-velasco/
                └── carlos-velasco.js

```

Hecho por:
Carlos Velasco
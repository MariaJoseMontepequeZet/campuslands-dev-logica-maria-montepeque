# Logica general 035 - reglas de negocio

## Sistema de Validación de Arte Digital

Este script automatiza el proceso de control de calidad para archivos de arte, verificando parámetros técnicos críticos como el formato, el peso en megabytes y la resolución (DPI).

* **Descripción del proceso:**
* **Validación de formato**: Verifica que la extensión del archivo pertenezca a la lista permitida (`jpg`, `png`, `psd`).
* **Control de tamaño**: Restringe el peso máximo del archivo a 50MB para asegurar la eficiencia en la carga.
* **Control de calidad**: Exige una resolución mínima de 72 DPI para garantizar la legibilidad del material.
* **Aprobación**: Si el archivo cumple todas las condiciones, se marca como "Aprobado".


* **Tecnologías:**
* JavaScript (método `includes` para listas, lógica condicional de validación).

---

### Explicación técnica

1. **Filtrado de datos**: La función utiliza un conjunto de reglas secuenciales. Si alguna falla, el proceso de validación se detiene inmediatamente (patrón *fail-fast*), lo cual es eficiente para manejar archivos de gran tamaño.
2. **Mantenibilidad**: La lista `formatosValidos` está definida como una constante, lo que permite agregar o quitar formatos permitidos en el futuro sin necesidad de reescribir la lógica de la función.
3. **Interfaz de usuario clara**: Al devolver un objeto con `estado` y `motivo`, la función facilita la creación de mensajes de retroalimentación claros para el usuario final, permitiéndole entender exactamente por qué su archivo no fue aceptado.

### Lógica del Código

```javascript
const validarArte = (archivo) => {
    // 1. Definición de formatos permitidos
    const formatosValidos = ["jpg", "png", "psd"];

    // 2. Validación: Formato
    if (!formatosValidos.includes(archivo.formato)) {
        return { estado: "Rechazado", motivo: "Formato no compatible." };
    }

    // 3. Validación: Tamaño (Límite 50MB)
    if (archivo.tamanoMB > 50) {
        return { estado: "Rechazado", motivo: "El archivo supera los 50MB." };
    }

    // 4. Validación: Resolución (Mínimo 72 DPI)
    if (archivo.resolucionDPI < 72) {
        return { estado: "Rechazado", motivo: "Resolución insuficiente." };
    }

    // 5. Aprobación final
    return { estado: "Aprobado", motivo: "Archivo listo para publicación." };
};

```

### Salida Esperada

```text
{ estado: 'Aprobado', motivo: 'Archivo listo para publicación.' }
{ estado: 'Rechazado', motivo: 'Formato no compatible.' }

```

**Estructura del Proyecto:**

```plaintext
campuslands-dev-logica/
└── logica-general/
    └── ejercicio-035/
        └── resoluciones/
            └── carlos-velasco/
                └── carlos-velasco.js

```

Hecho por:
Carlos Velasco
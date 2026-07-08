# Logica general 015 - reglas de negocio

## Sistema de Validación de Archivos para Impresión

Este script implementa un validador de requisitos técnicos para archivos de diseño, asegurando que cumplan con los estándares necesarios antes de ser enviados a impresión.

* **Descripción del proceso:**
* **Validación de resolución:** Verifica que el archivo tenga al menos 300 DPI.
* **Validación de perfil de color:** Asegura que el perfil de color sea CMYK.
* **Validación de formato:** Evalúa el formato del archivo, ofreciendo una advertencia si se utiliza un formato con pérdida (JPG) en lugar del estándar recomendado (TIFF).
* **Reporte:** Devuelve un estado del archivo (Aprobado, Rechazado o Aprobado con advertencia) junto con su motivo.


* **Tecnologías:**
* JavaScript (lógica condicional basada en cláusulas de guardia).



---

### Explicación técnica

1. **Cláusulas de guardia**: Se utilizan para realizar verificaciones negativas al inicio (`dpi < 300` o `perfilColor !== "CMYK"`). Si no se cumplen los requisitos, la función se detiene inmediatamente, evitando procesar datos que no sirven para el objetivo final.
2. **Jerarquía de validación**: El orden de las validaciones es crítico. Se priorizan primero las restricciones técnicas más estrictas (resolución y color) antes de evaluar recomendaciones de calidad (formato JPG).
3. **Flexibilidad en la respuesta**: El uso de estados como `"Aprobado con advertencia"` permite un flujo de trabajo profesional donde se puede proceder con el trabajo, pero manteniendo al usuario informado de las posibles mejoras en la calidad del resultado final.


### Lógica del Código

```javascript
const validarDiseno = (archivo) => {
    // 1. Validar resolución mínima
    if (archivo.dpi < 300) {
        return { estado: "Rechazado", motivo: "Resolución insuficiente (mínimo 300 DPI)." };
    }
    
    // 2. Validar perfil de color
    if (archivo.perfilColor !== "CMYK") {
        return { estado: "Rechazado", motivo: "El perfil de color debe ser CMYK para impresión." };
    }

    // 3. Evaluar formato de archivo
    if (archivo.formato === "JPG") {
        return { estado: "Aprobado con advertencia", motivo: "Formato JPG aceptado, pero se recomienda TIFF para evitar pérdida de calidad." };
    }

    // 4. Aprobación final
    return { estado: "Aprobado", motivo: "El archivo cumple con todos los estándares de impresión." };
};

```

### Salida Esperada

```text
{
  estado: 'Aprobado',
  motivo: 'El archivo cumple con todos los estándares de impresión.'
}
{
  estado: 'Rechazado',
  motivo: 'Resolución insuficiente (mínimo 300 DPI).'
}

```

**Estructura del Proyecto:**

```plaintext
campuslands-dev-logica/
└── logica-general/
    └── ejercicio-015/
        └── resoluciones/
            └── carlos-velasco/
                └── carlos-velasco.js

```

Hecho por:
Carlos Velasco

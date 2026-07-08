# Logica general 007 - deteccion de inconsistencias

## Sistema de Validación de Metadatos de Canciones

Este script implementa un motor de control de calidad para archivos de audio, evaluando la integridad de los metadatos (duración y género) para asegurar que la biblioteca musical cumpla con los estándares mínimos de reproducción.

* **Descripción del proceso:**
* **Validación de longitud:** Detecta archivos sospechosamente cortos (menos de 30 segundos) que podrían indicar una descarga incompleta.
* **Verificación de género:** Comprueba si el género musical ha sido correctamente categorizado.
* **Análisis de duración inusual:** Marca como advertencia archivos extremadamente largos (más de 10 minutos), útiles para identificar mezclas o podcasts en lugar de canciones.
* **Estado final:** Retorna un informe legible con el estado de la validación y una observación detallada.


* **Tecnologías:**
* JavaScript (lógica condicional jerárquica).


---

### Explicación técnica

1. **Validación de cascada**: La lógica utiliza una estructura `if-else if` para priorizar los errores. Esto significa que si una canción es corta y además no tiene género, el sistema reportará primero el error de duración, que es el más crítico para la integridad del archivo.
2. **Valores predeterminados**: Al inicializar `estado` como `"Válida"` y `observacion` como `"Sin errores"`, se optimiza el código para que solo necesitemos reasignar valores cuando se detecte una anomalía, simplificando significativamente el proceso de retorno.
3. **Flexibilidad**: La lógica permite identificar tanto errores técnicos (descargas corruptas) como errores de metadatos (falta de género o clasificación errónea), lo cual es fundamental para el mantenimiento de grandes bibliotecas de audio digitales.

### Lógica del Código

```javascript
const validarCancion = (cancion) => {
    let estado = "Válida";
    let observacion = "Sin errores";

    // Jerarquía de validaciones
    if (cancion.duracionSegundos < 30) {
        estado = "Inconsistente";
        observacion = "Archivo demasiado corto (posible error de descarga).";
    } else if (cancion.genero === "" || cancion.genero === "desconocido") {
        estado = "Requiere atención";
        observacion = "Género musical no especificado.";
    } else if (cancion.duracionSegundos > 600) {
        estado = "Advertencia";
        observacion = "Duración inusual (posible mix o podcast).";
    }

    return { titulo: cancion.titulo, estado, observacion };
};

```

### Salida Esperada

```text
{
  titulo: 'Bohemian Rhapsody',
  estado: 'Válida',
  observacion: 'Sin errores'
}
{
  titulo: 'Intro',
  estado: 'Inconsistente',
  observacion: 'Archivo demasiado corto (posible error de descarga).'
}

```

**Estructura del Proyecto:**

```plaintext
campuslands-dev-logica/
└── logica-general/
    └── ejercicio-007/
        └── resoluciones/
            └── carlos-velasco/
                └── carlos-velasco.js

```

Hecho por:
Carlos Velasco


# Logica general 027 - deteccion de inconsistencias

## Sistema de Validación de Playlist

Este script analiza una lista de canciones para determinar si cumplen con los requisitos mínimos de calidad y formato establecidos para ser agregadas a una lista de reproducción oficial.

* **Descripción del proceso:**
* **Iteración**: Recorre cada canción de la lista enviada.
* **Validación de reglas**:
* **Duración**: Debe tener al menos 30 segundos.
* **Formato**: Solo se permiten archivos `mp3` o `flac` (insensible a mayúsculas).
* **Unicidad**: No permite títulos duplicados; si una canción ya fue registrada, las siguientes con el mismo nombre son rechazadas.


* **Generación de reporte**: Retorna un nuevo arreglo que detalla el estado ("Aprobada" o "Rechazada") de cada canción, incluyendo el motivo en caso de rechazo.


* **Tecnologías:**
* JavaScript (`Set` para seguimiento de registros, `forEach` para iteración).

---

### Explicación técnica

1. **Uso de `Set**`: La estructura de datos `Set` es ideal para gestionar los `titulosRegistrados` ya que permite verificar si un título ya existe con una complejidad de tiempo $O(1)$, haciendo que el script sea muy eficiente incluso con listas de canciones extensas.
2. **Validación en cascada**: El uso de `if...else if` garantiza que una canción solo sea validada contra la primera regla fallida que encuentre, evitando errores redundantes y facilitando la depuración.
3. **Inmutabilidad del reporte**: Al crear un nuevo arreglo `reporte` y poblarlo según el resultado, el script preserva la integridad de los datos originales de la `playlist`, lo cual es una excelente práctica para evitar efectos secundarios inesperados.

### Lógica del Código

```javascript
const validarPlaylist = (canciones) => {
    let reporte = [];
    let titulosRegistrados = new Set(); // Para controlar duplicados

    canciones.forEach(cancion => {
        let motivo = "";
        let aprobada = true;

        // Validación secuencial
        if (cancion.duracion < 30) {
            motivo = "Duración insuficiente (< 30s).";
            aprobada = false;
        } 
        else if (!["mp3", "flac"].includes(cancion.formato.toLowerCase())) {
            motivo = "Formato no permitido.";
            aprobada = false;
        }
        else if (titulosRegistrados.has(cancion.titulo)) {
            motivo = "Título duplicado en la lista.";
            aprobada = false;
        }

        // Registro del resultado
        if (aprobada) {
            titulosRegistrados.add(cancion.titulo);
            reporte.push({ titulo: cancion.titulo, estado: "Aprobada" });
        } else {
            reporte.push({ titulo: cancion.titulo, estado: "Rechazada", motivo });
        }
    });

    return reporte;
};

```

### Salida Esperada

```text
[
  { titulo: 'Intro', estado: 'Rechazada', motivo: 'Duración insuficiente (< 30s).' },
  { titulo: 'Hit Song', estado: 'Rechazada', motivo: 'Formato no permitido.' },
  { titulo: 'Hit Song', estado: 'Aprobada' },
  { titulo: 'Chill Beats', estado: 'Aprobada' }
]

```

**Estructura del Proyecto:**

```plaintext
campuslands-dev-logica/
└── logica-general/
    └── ejercicio-027/
        └── resoluciones/
            └── carlos-velasco/
                └── carlos-velasco.js

```

Hecho por:
Carlos Velasco
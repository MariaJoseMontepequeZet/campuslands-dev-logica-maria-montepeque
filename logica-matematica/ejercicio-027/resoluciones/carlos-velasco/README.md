# Logica matematica 027 - secuencias numericas

## Sistema de Análisis de Ritmo (BPM)

Este script evalúa la consistencia rítmica de una lista de canciones calculando su promedio de BPM e identificando si existen variaciones bruscas que afecten la fluidez de la *playlist*.

* **Descripción del proceso:**
* **Cálculo de promedio**: Suma todos los BPM y calcula la media aritmética.
* **Detección de inestabilidad**: Compara cada canción contra el promedio; si la diferencia absoluta es mayor a 20 BPM, se marca como una inconsistencia.
* **Clasificación**:
* Si no existen inconsistencias, la *playlist* se clasifica como "fluida".
* Si se detectan inconsistencias, se clasifica como "con cambios bruscos".


* **Reporte**: Genera un objeto con el promedio, el estado detectado y una explicación sobre la estabilidad del ritmo.


* **Tecnologías:**
* JavaScript (`reduce` para cálculos matemáticos, `filter` para análisis de desviaciones).

---

### Explicación técnica

1. **Reducción de datos (`reduce`)**: El uso de `reduce` es la forma más eficiente y legible en JavaScript para acumular valores dentro de un arreglo, permitiendo obtener la suma total de BPM de forma declarativa.
2. **Lógica de desviación**: Al utilizar `Math.abs(bpm - promedio) > 20`, el script detecta automáticamente tanto *spikes* (picos altos) como *drops* (caídas bajas) de ritmo, independientemente del promedio general.
3. **Encapsulamiento del estado**: El uso de operadores ternarios para definir el `estado` y la `explicación` mantiene el código limpio, evitando múltiples bloques `if/else` innecesarios.

### Lógica del Código

```javascript
const analizarRitmo = (bpmList) => {
    // 1. Verificación básica
    if (!bpmList || bpmList.length === 0) return "Lista vacía.";

    // 2. Cálculo del promedio
    const suma = bpmList.reduce((a, b) => a + b, 0);
    const promedio = suma / bpmList.length;

    // 3. Identificación de canciones fuera de rango (desviación > 20)
    const inconsistencias = bpmList.filter(bpm => Math.abs(bpm - promedio) > 20);
    
    const estado = inconsistencias.length > 0 
        ? "Playlist con cambios bruscos" 
        : "Playlist fluida";

    return {
        promedio_bpm: promedio.toFixed(2),
        estado: estado,
        explicacion: inconsistencias.length > 0 
            ? `Se detectaron ${inconsistencias.length} canciones con ritmo inestable.` 
            : "El ritmo es consistente."
    };
};

```

### Salida Esperada

```text
{
  promedio_bpm: '123.75',
  estado: 'Playlist fluida',
  explicacion: 'El ritmo es consistente.'
}
{
  promedio_bpm: '129.25',
  estado: 'Playlist con cambios bruscos',
  explicacion: 'Se detectaron 1 canciones con ritmo inestable.'
}

```

**Estructura del Proyecto:**

```plaintext
campuslands-dev-logica/
└── logica-matematica/
    └── ejercicio-027/
        └── resoluciones/
            └── carlos-velasco/
                └── carlos-velasco.js

```

Hecho por:
Carlos Velasco
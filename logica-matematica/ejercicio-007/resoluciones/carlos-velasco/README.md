# Logica matematica 007 - secuencias numericas

## Sistema de Análisis de Ritmo (BPM)

Este script implementa un motor de análisis de coherencia rítmica para listas de reproducción. Su objetivo es detectar cambios bruscos en los pulsos por minuto (BPM) entre canciones consecutivas, asegurando una transición suave para la experiencia del oyente.

* **Descripción del proceso:**
* **Validación:** Comprueba si la lista contiene al menos dos canciones para realizar una comparación válida.
* **Análisis comparativo:** Itera a través de la lista calculando el valor absoluto de la diferencia entre canciones contiguas.
* **Detección de umbral:** Si cualquier diferencia supera los 20 BPM, marca la lista como inarmónica.
* **Reporte:** Retorna un objeto con el estado de la playlist y una explicación clara del hallazgo.


* **Tecnologías:**
* JavaScript (bucles `for` y métodos matemáticos `Math.abs`).


---

### Explicación técnica

1. **Eficiencia con `break**`: La inclusión de la sentencia `break` dentro del bucle es una optimización clave. Permite que el script finalice su búsqueda en cuanto encuentra el primer error, ahorrando recursos computacionales en listas de reproducción largas.
2. **`Math.abs()`**: Es fundamental para el cálculo, ya que asegura que la diferencia siempre sea un valor positivo, independientemente de si el tempo sube o baja entre canciones, permitiendo una comparación uniforme contra el umbral de 20 BPM.
3. **Lógica booleana**: El uso de la variable `tieneSaltoBrusco` simplifica el retorno final del objeto, utilizando un operador ternario para construir el mensaje de respuesta de forma limpia y concisa.


### Lógica del Código

```javascript
const analizarRitmo = (bpmList) => {
    // 1. Validar tamaño mínimo de la lista
    if (bpmList.length < 2) return "Playlist muy corta para analizar.";
    
    let tieneSaltoBrusco = false;
    
    // 2. Comparar elementos consecutivos
    for (let i = 0; i < bpmList.length - 1; i++) {
        const diferencia = Math.abs(bpmList[i] - bpmList[i + 1]);
        if (diferencia > 20) {
            tieneSaltoBrusco = true;
            break; // Salida temprana si se detecta un salto
        }
    }
    
    return {
        estado: tieneSaltoBrusco ? "Salto brusco detectado" : "Playlist armónica",
        explicacion: tieneSaltoBrusco 
            ? "Hay cambios de ritmo mayores a 20 BPM." 
            : "La transición de ritmos es suave y constante."
    };
};

```

### Salida Esperada

```text
{
  estado: 'Playlist armónica',
  explicacion: 'La transición de ritmos es suave y constante.'
}
{
  estado: 'Salto brusco detectado',
  explicacion: 'Hay cambios de ritmo mayores a 20 BPM.'
}

```

**Estructura del Proyecto:**

```plaintext
campuslands-dev-logica/
└── logica-matematica/
    └── ejercicio-007/
        └── resoluciones/
            └── carlos-velasco/
                └── carlos-velasco.js

```

Hecho por:
Carlos Velasco

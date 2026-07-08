# Logica matematica 024 - rangos y maximos

## Sistema de Análisis de Potencia (Índice Relativo)

Este script evalúa una flota de motocicletas calculando su potencia en relación con la moto más potente del inventario. Esto permite identificar rápidamente qué vehículos lideran el mercado interno y cuáles están destinados a tareas de movilidad urbana.

* **Descripción del proceso:**
* **Determinación de referencia**: Identifica el cilindraje máximo (`maxCilindraje`) del inventario para establecerlo como el 100% de potencia.
* **Cálculo de índice relativo**: Calcula qué porcentaje de potencia tiene cada moto respecto a la referencia.
* **Clasificación**: Asigna una categoría según el nivel de desempeño: "Líder de potencia" (100%), "Alta competitividad" (>= 70%) o "Uso urbano" (< 70%).
* **Formateo**: Retorna un nuevo arreglo con el índice formateado como porcentaje y su clasificación correspondiente.


* **Tecnologías:**
* JavaScript (métodos de array `map`, `Math.max`, y *spread operator*).

---

### Explicación técnica

1. **Escalabilidad (`Math.max(...map)`)**: El uso de `Math.max` junto con el *spread operator* es una forma elegante y eficiente de encontrar el valor máximo sin necesidad de crear bucles `for` manuales, lo que reduce la complejidad ciclomática del código.
2. **Métrica Relativa**: Al no basarse en valores absolutos fijos, este sistema es adaptable. Si mañana el inventario cambia y se añade una moto de 2000cc, todas las demás se recalcularán automáticamente manteniendo la coherencia de la clasificación.
3. **Encapsulamiento**: La función retorna un objeto nuevo por cada moto, garantizando que la estructura de datos original se mantenga intacta, permitiendo su reutilización en otros módulos del sistema.

### Lógica del Código

```javascript
const analizarPotencia = (inventario) => {
    // 1. Verificación de integridad
    if (inventario.length === 0) return "Inventario vacío.";

    // 2. Identificar el valor máximo para la escala relativa
    const maxCilindraje = Math.max(...inventario.map(m => m.cilindraje));

    // 3. Procesar cada moto
    return inventario.map(moto => {
        const indice = (moto.cilindraje / maxCilindraje) * 100;
        let clasificacion = "";
        
        // Asignación de categorías
        if (indice === 100) clasificacion = "Líder de potencia";
        else if (indice >= 70) clasificacion = "Alta competitividad";
        else clasificacion = "Uso urbano";
        
        return { nombre: moto.nombre, indice: indice.toFixed(1) + "%", clasificacion };
    });
};

```

### Salida Esperada

```text
[
  { nombre: 'Deportiva X', indice: '100.0%', clasificacion: 'Líder de potencia' },
  { nombre: 'Turismo Y', indice: '80.0%', clasificacion: 'Alta competitividad' },
  { nombre: 'Scooter Z', indice: '15.0%', clasificacion: 'Uso urbano' }
]

```

**Estructura del Proyecto:**

```plaintext
campuslands-dev-logica/
└── logica-matematica/
    └── ejercicio-024/
        └── resoluciones/
            └── carlos-velasco/
                └── carlos-velasco.js

```

Hecho por:
Carlos Velasco
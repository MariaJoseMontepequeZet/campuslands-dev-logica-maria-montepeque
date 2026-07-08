# Logica matematica 006 - conversion de unidades

## Sistema de Conversión y Clasificación de Vehículos

Este script automatiza la conversión de velocidad de millas por hora (mph) a kilómetros por hora (km/h) y clasifica a los vehículos según su rendimiento máximo alcanzado.

* **Descripción del proceso:**
* **Conversión de unidades:** Aplica el factor de conversión $1.60934$ para transformar mph a km/h.
* **Clasificación jerárquica:** Utiliza rangos definidos para categorizar el rendimiento:
* **>= 400 km/h:** Hiperdeportivo de élite.
* **>= 300 km/h:** Deportivo de alto rendimiento.
* **< 300 km/h:** Deportivo estándar.


* **Formateo de salida:** Presenta la información limpia, redondeando la velocidad a dos decimales.


* **Tecnologías:**
* JavaScript (cálculos aritméticos y condicionales).


---

### Explicación técnica

1. **Constante de conversión**: La definición de `factorMphAKmh` como una constante mejora la legibilidad y evita el uso de "números mágicos" dispersos en el código.
2. **Precisión**: El uso del método `.toFixed(2)` es crucial para estandarizar el formato de los datos de velocidad, asegurando que la salida sea consistente independientemente de la precisión decimal del cálculo inicial.
3. **Lógica condicional (if-else if-else)**: Esta estructura garantiza una clasificación eficiente al evaluar los casos de mayor rendimiento primero, reduciendo la complejidad del proceso de toma de decisiones.

### Lógica del Código

```javascript
const convertirVelocidad = (auto) => {
    const factorMphAKmh = 1.60934;
    const velocidadKmh = auto.velocidadMph * factorMphAKmh;

    let categoria = "";

    if (velocidadKmh >= 400) {
        categoria = "Hiperdeportivo de élite";
    } else if (velocidadKmh >= 300) {
        categoria = "Deportivo de alto rendimiento";
    } else {
        categoria = "Deportivo estándar";
    }

    return {
        modelo: auto.nombre,
        velocidad_kmh: velocidadKmh.toFixed(2),
        categoria: categoria
    };
};

```

### Salida Esperada
```text
{
  modelo: 'Bugatti Chiron',
  velocidad_kmh: '420.04',
  categoria: 'Hiperdeportivo de élite'
}
{
  modelo: 'Auto Prueba',
  velocidad_kmh: '241.40',
  categoria: 'Deportivo estándar'
}

```

**Estructura del Proyecto:**

```plaintext
campuslands-dev-logica/
└── logica-matematica/
    └── ejercicio-006/
        └── resoluciones/
            └── carlos-velasco/
                └── carlos-velasco.js

```

Hecho por:
Carlos Velasco

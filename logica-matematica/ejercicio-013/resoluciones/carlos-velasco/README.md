# Logica matematica 013 - coordenadas y distancia

## Sistema de Evaluación de Aterrizajes

Este script calcula la precisión de un aterrizaje respecto a un punto objetivo mediante el cálculo de la distancia euclidiana en un plano cartesiano de dos dimensiones.

* **Descripción del proceso:**
* **Cálculo de distancia:** Aplica el teorema de Pitágoras para determinar la distancia lineal entre dos puntos $(x, y)$.
* **Categorización:** Clasifica la precisión del aterrizaje en tres niveles: "Aterrizaje perfecto" (≤ 10m), "Aterrizaje aceptable" (≤ 50m) o "Fuera de zona" (> 50m).
* **Generación de informe:** Retorna un objeto estructurado con la distancia calculada (formateada a dos decimales), la categoría asignada y una descripción del cálculo.


* **Tecnologías:**
* JavaScript (cálculos matemáticos, métodos de potencia y raíz cuadrada).


---

### Explicación técnica

1. **Teorema de Pitágoras**: El uso de `Math.sqrt` y `Math.pow` permite resolver la hipotenusa de un triángulo rectángulo formado por las diferencias en los ejes X e Y, lo cual es la base matemática para medir distancias en planos 2D.
2. **Formateo preciso**: Se utiliza `.toFixed(2)` para restringir el número a dos decimales, lo cual es estándar en mediciones físicas para evitar resultados innecesariamente extensos.
3. **Evaluación por rangos**: La lógica `if-else` aplicada asegura que el sistema siempre clasifique el resultado, incluso si la distancia es cero o extremadamente alta, proporcionando siempre una respuesta útil para el usuario.


### Lógica del Código

```javascript
const evaluarAterrizaje = (aterrizaje, objetivo) => {
    // 1. Calcular diferencias de coordenadas
    const deltaX = objetivo.x - aterrizaje.x;
    const deltaY = objetivo.y - aterrizaje.y;
    
    // 2. Calcular distancia euclidiana: sqrt(dx^2 + dy^2)
    const distancia = Math.sqrt(Math.pow(deltaX, 2) + Math.pow(deltaY, 2));

    // 3. Evaluar categoría basada en la distancia
    let categoria = "";
    if (distancia <= 10) categoria = "Aterrizaje perfecto";
    else if (distancia <= 50) categoria = "Aterrizaje aceptable";
    else categoria = "Fuera de zona";

    return {
        distancia: distancia.toFixed(2) + " metros",
        categoria: categoria,
        explicacion: `Calculado desde (${aterrizaje.x}, ${aterrizaje.y}) hacia (${objetivo.x}, ${objetivo.y}).`
    };
};

```

### Salida Esperada

```text
{
  distancia: '7.07 metros',
  categoria: 'Aterrizaje perfecto',
  explicacion: 'Calculado desde (0, 0) hacia (5, 5).'
}
{
  distancia: '60.00 metros',
  categoria: 'Fuera de zona',
  explicacion: 'Calculado desde (0, 0) hacia (60, 0).'
}

```

**Estructura del Proyecto:**

```plaintext
campuslands-dev-logica/
└── logica-matematica/
    └── ejercicio-013/
        └── resoluciones/
            └── carlos-velasco/
                └── carlos-velasco.js

```

Hecho por:
Carlos Velasco

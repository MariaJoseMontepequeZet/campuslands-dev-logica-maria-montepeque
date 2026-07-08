# Logica matematica 033 - coordenadas y distancia

## Sistema de Cálculo de Distancia y Seguridad

Este script implementa la fórmula de la distancia entre dos puntos en un plano cartesiano bidimensional. El objetivo es determinar si la distancia entre un origen y un destino excede un límite de seguridad establecido.

* **Descripción del proceso:**
* **Cálculo de Distancia**: Utiliza el teorema de Pitágoras (fórmula de distancia euclidiana) para calcular la longitud del segmento que une dos coordenadas $(x_1, y_1)$ y $(x_2, y_2)$:

$$d = \sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2}$$


* **Validación de Seguridad**: Compara la distancia resultante contra un umbral de seguridad fijo (10 unidades).
* **Reporte**: Devuelve un objeto con la distancia calculada (redondeada a dos decimales), el estado de seguridad ("Viable" o "Exceso") y una explicación detallada del cálculo realizado.


* **Tecnologías:**
* JavaScript (`Math.sqrt`, `Math.pow` para operaciones matemáticas).

---

### Explicación técnica

1. **Precisión Matemática**: El uso de `toFixed(2)` garantiza una presentación consistente de los resultados, limitando la salida a dos decimales sin comprometer el valor numérico preciso utilizado en la lógica de decisión.
2. **Lógica Condicional**: La implementación de un operador ternario (`? :`) para definir el `estado` hace que el código sea compacto y legible, facilitando la comprensión de la regla de negocio (distancia > 10) de un vistazo.
3. **Aplicabilidad**: Aunque el ejemplo utiliza coordenadas simples, esta función es escalable y puede aplicarse en sistemas de navegación o logística para verificar puntos de entrega o aterrizaje respecto a una base central.


### Lógica del Código

```javascript
const calcularDistancia = (p1, p2) => {
    // 1. Cálculo de distancia euclidiana
    const distancia = Math.sqrt(Math.pow(p2.x - p1.x, 2) + Math.pow(p2.y - p1.y, 2));
    
    // 2. Validación de estado contra umbral de seguridad
    const estado = distancia > 10 ? "Exceso de distancia de seguridad" : "Zona de aterrizaje viable";

    // 3. Retorno del objeto con el reporte detallado
    return {
        distancia: distancia.toFixed(2),
        estado: estado,
        explicacion: `Distancia calculada entre (${p1.x}, ${p1.y}) y (${p2.x}, ${p2.y}).`
    };
};

```

### Salida Esperada

```text
{
  distancia: '5.00',
  estado: 'Zona de aterrizaje viable',
  explicacion: 'Distancia calculada entre (0, 0) y (3, 4).'
}
{
  distancia: '14.14',
  estado: 'Exceso de distancia de seguridad',
  explicacion: 'Distancia calculada entre (0, 0) y (10, 10).'
}

```

**Estructura del Proyecto:**

```plaintext
campuslands-dev-logica/
└── logica-matematica/
    └── ejercicio-033/
        └── resoluciones/
            └── carlos-velasco/
                └── carlos-velasco.js

```

Hecho por:
Carlos Velasco
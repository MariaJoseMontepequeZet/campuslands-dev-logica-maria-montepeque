# Logica matematica 020 - simulaciones con formulas

## Sistema de Simulación de Tiempos de Espera

Este script calcula el tiempo estimado de entrega para un conjunto de pedidos, aplicando un factor de agilidad que ajusta la velocidad operativa, y clasifica el servicio según la carga de trabajo resultante.

* **Descripción del proceso:**
* **Cálculo de tiempo**: Multiplica el número de pedidos por el tiempo base por plato y ajusta el resultado mediante un factor de agilidad (multiplicador).
* **Clasificación**: Evalúa el tiempo total para categorizar el servicio en "Servicio Express", "Servicio Estándar" o "Alta Demanda".
* **Informe detallado**: Retorna un objeto con el tiempo total formateado, la categoría asignada y una explicación resumen.


* **Tecnologías:**
* JavaScript (cálculos aritméticos y estructuras condicionales).

---

### Explicación técnica

1. **Factor de Agilidad**: El script permite una flexibilidad operativa mediante el `factorAgilidad`. Un valor menor a 1 simula una mejora en la eficiencia, mientras que un valor mayor a 1 simula una mayor carga o retraso en la cocina.
2. **`toFixed(1)`**: Garantiza que el tiempo de espera se presente con un formato uniforme de un solo decimal, mejorando la legibilidad para el usuario final.
3. **Lógica de Clasificación**: Utiliza una estructura jerárquica de `if-else`, lo que garantiza que cada `tiempoTotal` sea asignado a exactamente una categoría, evitando ambigüedades en la gestión del servicio.

### Lógica del Código

```javascript
const simularTiempoEspera = (numPedidos, tiempoBase, factorAgilidad) => {
    // 1. Calcular el tiempo total con el factor de agilidad aplicado
    const tiempoTotal = (numPedidos * tiempoBase) * factorAgilidad;
    
    // 2. Determinar la categoría según umbrales de tiempo
    let categoria = "";
    if (tiempoTotal <= 15) categoria = "Servicio Express";
    else if (tiempoTotal <= 40) categoria = "Servicio Estándar";
    else categoria = "Alta Demanda";

    // 3. Retornar los resultados en un objeto estructurado
    return {
        tiempo_estimado: `${tiempoTotal.toFixed(1)} minutos`,
        clasificacion: categoria,
        explicacion: `Para ${numPedidos} pedidos con ${tiempoBase} min/plato y factor ${factorAgilidad}.`
    };
};

```

### Salida Esperada

```text
{
  tiempo_estimado: '8.0 minutos',
  clasificacion: 'Servicio Express',
  explicacion: 'Para 5 pedidos con 2 min/plato y factor 0.8.'
}
{
  tiempo_estimado: '60.0 minutos',
  clasificacion: 'Alta Demanda',
  explicacion: 'Para 10 pedidos con 5 min/plato y factor 1.2.'
}

```

**Estructura del Proyecto:**

```plaintext
campuslands-dev-logica/
└── logica-matematica/
    └── ejercicio-020/
        └── resoluciones/
            └── carlos-velasco/
                └── carlos-velasco.js

```

Hecho por:
Carlos Velasco
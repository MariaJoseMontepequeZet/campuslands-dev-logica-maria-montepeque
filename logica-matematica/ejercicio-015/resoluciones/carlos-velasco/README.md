# Logica matematica 015 - velocidad tiempo distancia

## Sistema de Estimación de Tiempo de Dibujo

Este script calcula el tiempo necesario para completar una pieza digital basándose en la cantidad de píxeles, la velocidad de trabajo y un factor de complejidad.

* **Descripción del proceso:**
* **Conversión de escala:** Convierte los millones de píxeles a unidades totales.
* **Cálculo de duración:** Determina el tiempo total en minutos aplicando la velocidad y multiplicando por el factor de complejidad.
* **Conversión de formato:** Transforma el tiempo total en un formato legible de horas y minutos.
* **Clasificación:** Asigna una categoría ("Rápido", "Estándar" o "Extenso") según el tiempo total calculado.


* **Tecnologías:**
* JavaScript (cálculos matemáticos, redondeo y manipulación de cadenas).



---

### Explicación técnica

1. **Conversión de tiempo**: Se utiliza `Math.floor` para extraer las horas completas y el operador módulo (`%`) para calcular los minutos restantes, asegurando que el formato `h m` sea preciso.
2. **Factor de complejidad**: Al multiplicar el tiempo base por este factor, el script permite escalar la estimación, lo cual es fundamental para proyectos artísticos donde la dificultad varía independientemente de la resolución.
3. **Clasificación lógica**: La estructura de control garantiza que el usuario reciba una estimación cualitativa clara, ayudando a planificar cronogramas de trabajo de forma efectiva.

### Lógica del Código

```javascript
const calcularTiempoDibujo = (pixelesM, velocidad, complejidad) => {
    // 1. Calcular total de píxeles y tiempo en minutos
    const pixelesTotales = pixelesM * 1000000;
    const tiempoMinutos = (pixelesTotales / velocidad) * complejidad;
    
    // 2. Convertir a formato horas y minutos
    const horas = Math.floor(tiempoMinutos / 60);
    const minutos = Math.round(tiempoMinutos % 60);
    
    // 3. Clasificar según duración
    let categoria = "";
    if (tiempoMinutos < 60) categoria = "Rápido";
    else if (tiempoMinutos < 240) categoria = "Estándar";
    else categoria = "Extenso";

    return {
        tiempo_estimado: `${horas}h ${minutos}m`,
        clasificacion: categoria,
        explicacion: `Basado en ${pixelesM}M px y una velocidad de ${velocidad} px/min.`
    };
};

```

### Salida Esperada

```text
{
  tiempo_estimado: '0h 48m',
  clasificacion: 'Rápido',
  explicacion: 'Basado en 2M px y una velocidad de 50000 px/min.'
}
{
  tiempo_estimado: '8h 20m',
  clasificacion: 'Extenso',
  explicacion: 'Basado en 5M px y una velocidad de 20000 px/min.'
}

```

**Estructura del Proyecto:**

```plaintext
campuslands-dev-logica/
└── logica-matematica/
    └── ejercicio-015/
        └── resoluciones/
            └── carlos-velasco/
                └── carlos-velasco.js

```

Hecho por:
Carlos Velasco
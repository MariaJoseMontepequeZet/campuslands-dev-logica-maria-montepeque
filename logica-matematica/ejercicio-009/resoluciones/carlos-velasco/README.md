# Logica matematica 009 - modulos y divisibilidad


## Sistema de Organización de Personajes en Habitaciones

Este script implementa una lógica de distribución matemática para organizar una cantidad total de personajes en grupos de capacidad fija, determinando cuántas habitaciones completas se requieren y cuántas personas exceden dicha capacidad.

* **Descripción del proceso:**
* **Validación inicial:** Asegura que la capacidad por habitación sea válida (mayor a 0).
* **Cálculo de habitaciones:** Utiliza la función `Math.floor` para determinar el número total de habitaciones llenas.
* **Cálculo de excedente:** Utiliza el operador de módulo (`%`) para obtener el número de personas restantes que no caben en una habitación completa.
* **Reporte de estado:** Determina si la distribución es equilibrada o si requiere espacio adicional, generando una explicación contextual.


* **Tecnologías:**
* JavaScript (cálculos aritméticos y operadores de comparación).



---

### Explicación técnica

1. **Operador Módulo (`%`)**: Es la pieza central de la lógica, ya que permite extraer el residuo de una división entera de forma inmediata, facilitando la identificación de personas que quedan "fuera" de una distribución uniforme.
2. **`Math.floor()`**: Se utiliza para redondear hacia abajo el resultado de la división, garantizando que solo se cuenten las habitaciones que están totalmente ocupadas según la capacidad definida.
3. **Lógica ternaria**: El uso de operadores ternarios en la construcción del objeto de retorno permite un código más compacto y legible para situaciones binarias (si hay residuo o no).


### Lógica del Código

```javascript
const organizarPersonajes = (total, capacidad) => {
    // 1. Validar capacidad
    if (capacidad <= 0) return "La capacidad debe ser mayor a 0.";

    // 2. Calcular habitaciones completas y residuo
    const habitacionesLlenas = Math.floor(total / capacidad);
    const residuo = total % capacidad;

    // 3. Generar informe de distribución
    return {
        habitaciones_completas: habitacionesLlenas,
        personas_en_habitacion_extra: residuo,
        estado: residuo === 0 ? "Distribución equilibrada" : "Distribución con excedente",
        explicacion: residuo === 0 
            ? "Todos los personajes están en grupos completos." 
            : `Hay ${residuo} persona(s) que requieren una habitación adicional.`
    };
};

```

### Salida Esperada


```text
{
  habitaciones_completas: 4,
  personas_en_habitacion_extra: 0,
  estado: 'Distribución equilibrada',
  explicacion: 'Todos los personajes están en grupos completos.'
}
{
  habitaciones_completas: 4,
  personas_en_habitacion_extra: 2,
  estado: 'Distribución con excedente',
  explicacion: 'Hay 2 persona(s) que requieren una habitación adicional.'
}

```

**Estructura del Proyecto:**

```plaintext
campuslands-dev-logica/
└── logica-matematica/
    └── ejercicio-009/
        └── resoluciones/
            └── carlos-velasco/
                └── carlos-velasco.js

```

Hecho por:
Carlos Velasco
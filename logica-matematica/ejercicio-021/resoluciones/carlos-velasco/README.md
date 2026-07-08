# Logica matematica 021 - operaciones aritmeticas controladas

## Sistema de Cálculo de Puntaje (PR)

Este script permite calcular un puntaje final (PR) para un usuario basado en su puntaje base, una racha de victorias (que otorga bonos) y penalizaciones acumuladas.

* **Descripción del proceso:**
* **Cálculo de bono**: Calcula un bono basado en la `racha`, con un tope máximo de 50 puntos.
* **Cálculo de penalización**: Multiplica el factor de penalización por 25 para obtener el descuento total.
* **Normalización**: Asegura que el puntaje final no sea inferior a 0 mediante `Math.max(0, pr)`.
* **Categorización**: Clasifica al usuario en "Élite", "Profesional" o "Novato" según su puntaje final.


* **Tecnologías:**
* JavaScript (cálculos aritméticos y estructuras condicionales).

---

### Explicación técnica

1. **`Math.min(racha * 10, 50)`**: Esta lógica implementa un límite (techo) para el bono, asegurando que la racha no permita obtener beneficios infinitos, lo cual es vital para el equilibrio del sistema.
2. **`Math.max(0, pr)`**: Actúa como un suelo para el puntaje, evitando valores negativos en caso de que las penalizaciones superen la suma del puntaje base y el bono.
3. **Encadenamiento de Ternarios**: Se utiliza para clasificar de forma limpia el `pr` en categorías, lo que hace el código altamente legible y fácil de escalar si se desea añadir más niveles en el futuro.

### Lógica del Código

```javascript
const calcularPR = (puntajeBase, racha, penalizacion) => {
    // 1. Bono limitado a un máximo de 50 puntos
    const bono = Math.min(racha * 10, 50);
    
    // 2. Penalización multiplicada por 25
    const totalPenalizacion = penalizacion * 25;
    
    // 3. Cálculo final con restricción de no bajar de 0
    let pr = puntajeBase + bono - totalPenalizacion;
    pr = Math.max(0, pr);
    
    // 4. Clasificación según puntaje obtenido
    let categoria = pr >= 150 ? "Élite" : pr >= 100 ? "Profesional" : "Novato";
    
    return {
        puntaje_final: pr,
        clasificacion: categoria,
        explicacion: `Base: ${puntajeBase}, Bono: +${bono}, Penalización: -${totalPenalizacion}.`
    };
};

```

### Salida Esperada

```text
{
  puntaje_final: 150,
  clasificacion: 'Élite',
  explicacion: 'Base: 120, Bono: +30, Penalización: -0.'
}
{
  puntaje_final: 25,
  clasificacion: 'Novato',
  explicacion: 'Base: 50, Bono: +0, Penalización: -25.'
}

```

**Estructura del Proyecto:**

```plaintext
campuslands-dev-logica/
└── logica-matematica/
    └── ejercicio-021/
        └── resoluciones/
            └── carlos-velasco/
                └── carlos-velasco.js

```

Hecho por:
Carlos Velasco
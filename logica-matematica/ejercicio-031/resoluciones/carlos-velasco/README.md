# Logica matematica 031 - conteo combinatorio simple

## Sistema de Cálculo de Total de Combates

Este script aplica principios de combinatoria para calcular cuántos enfrentamientos únicos se pueden generar en un grupo de peleadores. La lógica asegura que cada pareja se enfrente solo una vez, evitando redundancias (donde A vs B se considera lo mismo que B vs A).

* **Descripción del proceso:**
* **Validación**: Comprueba que exista un mínimo de 2 peleadores; de lo contrario, no es posible organizar un combate.
* **Cálculo combinatorio**: Utiliza la fórmula para determinar combinaciones de $n$ elementos tomados de 2 en 2, expresada como:

$$\frac{n(n-1)}{2}$$


* **Reporte**: Devuelve un objeto con el total de combates y una explicación detallada del razonamiento lógico aplicado.


* **Tecnologías:**
* JavaScript (lógica matemática combinatoria).

---

### Explicación técnica

1. **Fundamento matemático**: La fórmula $\frac{n(n-1)}{2}$ es fundamental en teoría de grafos para contar las aristas en un grafo completo $K_n$, donde cada nodo (peleador) está conectado con todos los demás (rivales).
2. **Eliminación de duplicados**: La división por 2 es el paso clave para convertir las permutaciones (donde el orden importa) en combinaciones (donde el orden no importa), cumpliendo con la regla de que el combate entre A y B es el mismo que entre B y A.
3. **Manejo de estados**: El retorno de un objeto que incluye una `explicacion` textual ayuda a que el usuario final comprenda la lógica detrás del cálculo, mejorando la transparencia de la herramienta.


### Lógica del Código

```javascript
const calcularTotalCombates = (numPeleadores) => {
    // 1. Validación de mínimo necesario
    if (numPeleadores < 2) {
        return { 
            total_combates: 0, 
            explicacion: "Se necesitan al menos 2 peleadores para un combate." 
        };
    }

    // 2. Aplicación de fórmula combinatoria (n * (n - 1) / 2)
    const total = (numPeleadores * (numPeleadores - 1)) / 2;

    // 3. Retorno del reporte
    return {
        total_combates: total,
        explicacion: `Con ${numPeleadores} peleadores, cada uno se enfrenta a los otros ${numPeleadores - 1} rivales, dividido por 2 para evitar duplicar combates (A vs B = B vs A).`
    };
};

```

### Salida Esperada

```text
{
  total_combates: 6,
  explicacion: 'Con 4 peleadores, cada uno se enfrenta a los otros 3 rivales, dividido por 2 para evitar duplicar combates (A vs B = B vs A).'
}
{
  total_combates: 0,
  explicacion: 'Se necesitan al menos 2 peleadores para un combate.'
}

```

**Estructura del Proyecto:**

```plaintext
campuslands-dev-logica/
└── logica-matematica/
    └── ejercicio-031/
        └── resoluciones/
            └── carlos-velasco/
                └── carlos-velasco.js

```

Hecho por:
Carlos Velasco
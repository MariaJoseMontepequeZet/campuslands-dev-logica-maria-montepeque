# Logica matematica 018 - normalizacion de puntajes

## Sistema de Normalización de Puntajes

Este script procesa un arreglo de puntajes académicos o de desempeño, aplicando ajustes de bonificaciones y penalizaciones, asegurando que los valores finales permanezcan dentro de un rango lógico y clasificándolos por categorías.

* **Descripción del proceso:**
* **Cálculo ajustado**: Aplica una suma de bono y resta de penalización a cada puntaje original.
* **Normalización**: Utiliza `Math.max` y `Math.min` para limitar los resultados estrictamente entre 0 y 100.
* **Categorización**: Asigna un nivel de desempeño (Excelente, Aceptable o Reprobado) basado en el resultado ajustado.
* **Transformación**: Retorna un nuevo arreglo de objetos con los datos normalizados.


* **Tecnologías:**
* JavaScript (método `map` para transformación de arreglos, funciones matemáticas y operadores condicionales).

---

### Explicación técnica

1. **`map()`**: Es la herramienta ideal para esta tarea, ya que transforma cada elemento del arreglo original de forma inmutable, generando un nuevo conjunto de datos sin modificar el original.
2. **`Math.max(0, Math.min(100, final))`**: Esta es una forma compacta y eficiente de "encapsular" un valor dentro de un rango. Si el resultado es negativo, `Math.max` lo sube a 0; si supera 100, `Math.min` lo baja a 100.
3. **Encadenamiento de condicionales**: La asignación de la variable `categoria` utiliza operadores ternarios encadenados, lo cual simplifica la lógica de clasificación sin necesidad de múltiples estructuras `if-else`.

### Lógica del Código

```javascript
const normalizarPuntajes = (puntajes, bono, penalizacion) => {
    return puntajes.map(p => {
        // 1. Ajustar puntaje y limitar rango (0-100)
        let final = p + bono - penalizacion;
        final = Math.max(0, Math.min(100, final));
        
        // 2. Determinar categoría
        let categoria = final >= 90 ? "Excelente" : final >= 70 ? "Aceptable" : "Reprobado";
        
        return { puntaje: final, categoria: categoria };
    });
};

```

### Salida Esperada

```text
[
  { puntaje: 90, categoria: 'Excelente' },
  { puntaje: 100, categoria: 'Excelente' },
  { puntaje: 55, categoria: 'Reprobado' }
]

```

**Estructura del Proyecto:**

```plaintext
campuslands-dev-logica/
└── logica-matematica/
    └── ejercicio-018/
        └── resoluciones/
            └── carlos-velasco/
                └── carlos-velasco.js

```

Hecho por:
Carlos Velasco
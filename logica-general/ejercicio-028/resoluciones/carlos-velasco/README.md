# Logica matematica 028 - patrones de puntuacion

## Sistema de Ordenamiento de Películas (Saga)

Este script organiza una lista de películas de una saga, permitiendo al usuario elegir entre dos criterios de visualización: **orden cronológico** de la historia o **orden por año de lanzamiento**.

* **Descripción del proceso:**
* **Clonación**: Crea una copia del arreglo original para no mutar los datos de entrada (preservando la integridad).
* **Lógica de ordenamiento**:
* **Lanzamiento**: Utiliza el atributo `anio` para ordenar de manera ascendente.
* **Cronológico**: Utiliza el atributo `ordenCronologico` para ordenar según la línea temporal de la historia.


* **Proyección**: Utiliza `.map()` para extraer únicamente los títulos y presentarlos como una secuencia de visualización limpia.


* **Tecnologías:**
* JavaScript (`sort` con funciones comparadoras, `spread operator` para inmutabilidad).

---

### Explicación técnica

1. **Inmutabilidad**: La línea `let listaOrdenada = [...peliculas]` es una buena práctica de programación funcional. Garantiza que la lista original de `saga` no sea alterada, permitiendo que la función pueda ser llamada múltiples veces con diferentes preferencias sin efectos secundarios.
2. **Funciones comparadoras**: La lógica `(a, b) => a.atributo - b.atributo` es la forma estándar de ordenar números en JavaScript. Si el resultado es negativo, `a` va antes que `b`, lo que permite organizar años y secuencias de forma ascendente.
3. **Proyección de datos**: Al mapear el resultado final para retornar solo `p.titulo`, la función encapsula los detalles de implementación (los números de año y orden), entregando al usuario final una salida legible y enfocada únicamente en lo que necesita ver.

### Lógica del Código

```javascript
const ordenarPeliculas = (peliculas, preferencia) => {
    // 1. Verificación de integridad
    if (peliculas.length === 0) return { error: "No hay películas para ordenar." };

    // 2. Clonación para evitar mutación del original
    let listaOrdenada = [...peliculas];

    // 3. Selección de criterio de ordenamiento
    if (preferencia === "lanzamiento") {
        listaOrdenada.sort((a, b) => a.anio - b.anio);
    } else {
        listaOrdenada.sort((a, b) => a.ordenCronologico - b.ordenCronologico);
    }

    // 4. Retorno del objeto con la secuencia formateada
    return {
        secuencia: listaOrdenada.map(p => p.titulo),
        motivo: `Ordenado por preferencia de ${preferencia}.`
    };
};

```

### Salida Esperada

```text
{
  secuencia: [ 'Star Wars: Episodio IV', 'Star Wars: Episodio I' ],
  motivo: 'Ordenado por preferencia de lanzamiento.'
}
{
  secuencia: [ 'Star Wars: Episodio I', 'Star Wars: Episodio IV' ],
  motivo: 'Ordenado por preferencia de cronologico.'
}

```

**Estructura del Proyecto:**

```plaintext
campuslands-dev-logica/
└── logica-general/
    └── ejercicio-028/
        └── resoluciones/
            └── carlos-velasco/
                └── carlos-velasco.js

```

Hecho por:
Carlos Velasco
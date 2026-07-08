# Logica general 011 - organizacion de listas

## Sistema de Organización de Torneo

Este script implementa un motor de clasificación para organizar una lista de peleadores en categorías específicas, utilizando métodos funcionales de JavaScript para transformar la estructura de datos.

* **Descripción del proceso:**
* **Iteración funcional:** Utiliza el método `reduce` para recorrer el array de peleadores y construir un objeto acumulador.
* **Clasificación dinámica:** Detecta automáticamente las categorías presentes y agrupa a los peleadores correspondientes en arrays dentro de cada clave de categoría.
* **Resultado estructurado:** Retorna un objeto donde las claves representan las categorías y los valores son listas con los nombres de los peleadores.


* **Tecnologías:**
* JavaScript (método `reduce` y manipulación de objetos).


---

### Explicación técnica

1. **Eficiencia del `reduce**`: Esta solución es altamente eficiente ya que recorre la lista original exactamente una vez ($O(n)$) para generar la estructura agrupada, lo cual es preferible frente a realizar múltiples filtrados.
2. **Inicialización dinámica**: La instrucción `if (!acc[cat]) acc[cat] = [];` garantiza que el código sea flexible; no necesita conocer las categorías de antemano, ya que las crea al vuelo según aparecen en el set de datos.
3. **Inmutabilidad controlada**: El uso de `reduce` con un objeto vacío `{}` como valor inicial permite construir el nuevo objeto sin mutar la fuente de datos original, siguiendo buenas prácticas de programación funcional.

### Lógica del Código

```javascript
const organizarTorneo = (peleadores) => {
    return peleadores.reduce((acc, peleador) => {
        const cat = peleador.categoria;
        // 1. Inicializar array si la categoría no existe en el acumulador
        if (!acc[cat]) acc[cat] = [];
        
        // 2. Insertar nombre en la categoría correspondiente
        acc[cat].push(peleador.nombre);
        
        return acc;
    }, {});
};

```

### Salida Esperada


```text
{ Pluma: [ 'Juan', 'Luis' ], Pesado: [ 'Pedro' ] }

```

**Estructura del Proyecto:**

```plaintext
campuslands-dev-logica/
└── logica-general/
    └── ejercicio-011/
        └── resoluciones/
            └── carlos-velasco/
                └── carlos-velasco.js

```

Hecho por:
Carlos Velasco


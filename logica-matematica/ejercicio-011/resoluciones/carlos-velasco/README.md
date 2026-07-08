# Logica matematica 011 - conteo combinatorio simple

## Sistema de Cálculo de Peleas en Torneo

Este script implementa un algoritmo matemático para determinar el número total de enfrentamientos necesarios en un torneo bajo el formato "todos contra todos" (*round-robin*).

* **Descripción del proceso:**
* **Validación:** Comprueba si el número de participantes es suficiente para realizar al menos un enfrentamiento.
* **Cálculo combinatorio:** Aplica la fórmula matemática $\frac{n(n-1)}{2}$ para obtener el número total de combinaciones únicas de parejas posibles.
* **Generación de informe:** Retorna un objeto con el número de participantes, el total de peleas calculadas y la explicación del método utilizado.


* **Tecnologías:**
* JavaScript (lógica matemática).


---

### Explicación técnica

1. **Fundamento matemático**: La fórmula $\frac{n(n-1)}{2}$ es el estándar para calcular el número de aristas en un grafo completo de $n$ vértices, lo que en términos de torneos deportivos representa que cada competidor debe enfrentarse a todos los demás exactamente una vez.
2. **Validación de límites**: Al incluir un `if (numPeleadores < 2)`, el sistema evita errores lógicos y resultados negativos o nulos, asegurando que la función sea robusta y solo procese escenarios deportivos válidos.
3. **Representación de datos**: El retorno como objeto (`{}`) en lugar de un número simple permite que el sistema proporcione metadatos útiles (la explicación y el número de participantes), lo cual facilita la trazabilidad de los cálculos si este script fuera parte de un sistema más grande.

### Lógica del Código

```javascript
const calcularPeleas = (numPeleadores) => {
    // 1. Validar cantidad mínima de participantes
    if (numPeleadores < 2) {
        return "Se necesitan al menos 2 peleadores para una pelea.";
    }
    
    // 2. Aplicar fórmula de combinatoria para todos contra todos
    const totalPeleas = (numPeleadores * (numPeleadores - 1)) / 2;
    
    // 3. Retornar objeto con el resultado
    return {
        participantes: numPeleadores,
        total_peleas: totalPeleas,
        explicacion: `Se aplicó la fórmula n(n-1)/2 para el formato todos contra todos.`
    };
};

```

### Salida Esperada

```text
{
  participantes: 4,
  total_peleas: 6,
  explicacion: 'Se aplicó la fórmula n(n-1)/2 para el formato todos contra todos.'
}
{
  participantes: 2,
  total_peleas: 1,
  explicacion: 'Se aplicó la fórmula n(n-1)/2 para el formato todos contra todos.'
}

```

**Estructura del Proyecto:**

```plaintext
campuslands-dev-logica/
└── logica-matematica/
    └── ejercicio-011/
        └── resoluciones/
            └── carlos-velasco/
                └── carlos-velasco.js

```

Hecho por:
Carlos Velasco


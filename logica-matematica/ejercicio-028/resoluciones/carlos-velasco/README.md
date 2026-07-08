# Logica matematica 028 - patrones de puntuacion

## Sistema de Cálculo de Puntaje de Sagas Cinematográficas

Este script automatiza la evaluación final de una saga de películas procesando un conjunto de críticas de expertos, aplicando bonificaciones por calidad técnica y restando penalizaciones por fallos narrativos o de producción.

* **Descripción del proceso:**
* **Cálculo de base**: Obtiene el promedio aritmético de un arreglo de puntuaciones de críticas (`criticas`).
* **Ajuste de puntuación**: Calcula el `puntajeFinal` sumando el `bono` y restando la `penalizacion` al promedio base.
* **Clasificación**: Asigna una categoría según el resultado final:
* **Obra maestra**: Puntaje $\ge 8$.
* **Buena producción**: Puntaje entre $5$ y $7.99$.
* **Cine de culto (o fracaso)**: Puntaje $< 5$.


* **Reporte**: Genera un objeto con el puntaje final, la clasificación y una cadena explicativa detallada.


* **Tecnologías:**
* JavaScript (`reduce` para promedios, lógica condicional).

---

### Explicación técnica

1. **Reducción (`reduce`)**: Es la forma más eficiente y legible en JavaScript para sumar elementos de un arreglo, evitando bucles `for` y mejorando la calidad del código.
2. **Formateo de precisión**: El uso de `toFixed(2)` garantiza que los puntajes y explicaciones mantengan una presentación uniforme (dos decimales), lo cual es crucial cuando se trabaja con promedios y ajustes dinámicos.
3. **Trazabilidad**: La propiedad `explicacion` desglosa el cálculo realizado, permitiendo que el usuario entienda cómo se llegó al resultado final a partir del promedio, el bono y la penalización.

### Lógica del Código

```javascript
const calcularPuntajeSaga = (criticas, bono, penalizacion) => {
    // 1. Verificación de integridad
    if (criticas.length === 0) return "Error: No hay críticas registradas.";

    // 2. Cálculo del promedio base
    const suma = criticas.reduce((a, b) => a + b, 0);
    const promedioBase = suma / criticas.length;

    // 3. Aplicación de ajustes
    const puntajeFinal = promedioBase + bono - penalizacion;
    let clasificacion = "";
    if (puntajeFinal >= 8) clasificacion = "Obra maestra";
    else if (puntajeFinal >= 5) clasificacion = "Buena producción";
    else clasificacion = "Cine de culto (o fracaso)";

    // 4. Retorno del reporte
    return {
        puntaje_final: puntajeFinal.toFixed(2),
        clasificacion: clasificacion,
        explicacion: `Promedio base de ${promedioBase.toFixed(2)} más bono de ${bono} menos penalización de ${penalizacion}.`
    };
};

```

### Salida Esperada

```text
{
  puntaje_final: '9.00',
  clasificacion: 'Obra maestra',
  explicacion: 'Promedio base de 8.00 más bono de 2 menos penalización de 1.'
}
{
  puntaje_final: '2.50',
  clasificacion: 'Cine de culto (o fracaso)',
  explicacion: 'Promedio base de 4.50 más bono de 0 menos penalización de 2.'
}

```

**Estructura del Proyecto:**

```plaintext
campuslands-dev-logica/
└── logica-matematica/
    └── ejercicio-028/
        └── resoluciones/
            └── carlos-velasco/
                └── carlos-velasco.js

```

Hecho por:
Carlos Velasco
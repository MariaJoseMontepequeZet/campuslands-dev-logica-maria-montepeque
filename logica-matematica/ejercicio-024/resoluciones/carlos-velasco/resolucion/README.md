# Plantilla de solución

## Analisis

* **Entrada**: Un arreglo `inventario` de objetos, donde cada objeto contiene `nombre` y `cilindraje`.
* **Proceso**: Identificación del valor máximo de cilindraje en todo el inventario, cálculo de un índice relativo de potencia (porcentaje) para cada moto y clasificación según rangos porcentuales.
* **Salida**: Un arreglo de objetos que incluye el `nombre`, el `indice` (porcentaje formateado) y la `clasificacion` asignada.

## Reglas identificadas

1. El índice relativo se calcula comparando el cilindraje de cada moto contra el cilindraje máximo: `(cilindraje / maxCilindraje) * 100`.
2. Si el índice es exactamente 100%, la clasificación es "Líder de potencia".
3. Si el índice es >= 70%, la clasificación es "Alta competitividad"; de lo contrario, se clasifica como "Uso urbano".

## Pruebas

### Caso normal

* **Entrada**: `[{ nombre: "Deportiva X", cilindraje: 1000 }, { nombre: "Turismo Y", cilindraje: 800 }]`
* **Resultado esperado**: `[{ nombre: "Deportiva X", indice: "100.0%", clasificacion: "Líder de potencia" }, { nombre: "Turismo Y", indice: "80.0%", clasificacion: "Alta competitividad" }]`

### Caso borde

* **Entrada**: `[{ nombre: "Scooter Z", cilindraje: 150 }]`
* **Resultado esperado**: `[{ nombre: "Scooter Z", indice: "100.0%", clasificacion: "Líder de potencia" }]`

## Explicacion final

La solución funciona mediante una estrategia de normalización de datos. Al encontrar primero el `maxCilindraje` del inventario, convertimos valores absolutos (cc) en valores relativos (porcentajes). Esto permite que el sistema sea independiente de los valores específicos de cada motor, funcionando correctamente sin importar si las motos son de baja o alta cilindrada. El uso de `.map()` asegura que transformemos cada elemento de manera consistente, mientras que las condicionales segmentan los resultados en categorías útiles para una toma de decisiones comercial o técnica.

## Sugerencia

Verifica cada operación con cálculos manuales antes de confiar en el código:

* **Caso `Deportiva X (1000cc)` y `Turismo Y (800cc)` (Cálculo manual)**:
* Máximo = 1000.
* Índice `Turismo Y`: $(800 / 1000) \times 100 = 80.0\%$.
* Clasificación: $80.0 \ge 70$ = `Alta competitividad`.
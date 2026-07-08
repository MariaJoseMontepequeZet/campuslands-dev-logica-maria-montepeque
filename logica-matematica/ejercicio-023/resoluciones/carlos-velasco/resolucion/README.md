# Plantilla de solución

## Analisis

* **Entrada**: Un arreglo de números `puntajes` que representa el desempeño individual de los miembros del equipo.
* **Proceso**: Cálculo del promedio aritmético y la mediana (valor central), seguido de una comparación estadística para clasificar al equipo según la dispersión de sus resultados.
* **Salida**: Un objeto que contiene el `promedio` (formateado a 2 decimales), la `mediana` y la `clasificacion` obtenida.

## Reglas identificadas

1. Si el arreglo está vacío o es nulo, el sistema retorna un mensaje de error ("No hay datos").
2. La mediana se calcula ordenando los datos: si el número de elementos es impar, es el valor central; si es par, es el promedio de los dos valores centrales.
3. Si el promedio es mayor a la mediana más 10 puntos (`promedio > mediana + 10`), el equipo es "Dependiente de estrellas"; en caso contrario, es un "Equipo equilibrado".

## Pruebas

### Caso normal

* **Entrada**: `[10, 20, 30, 40, 90]`
* **Resultado esperado**: `{ promedio: "38.00", mediana: 30, clasificacion: "Equipo equilibrado" }`

### Caso borde

* **Entrada**: `[20, 25, 30, 35]`
* **Resultado esperado**: `{ promedio: "27.50", mediana: 27.5, clasificacion: "Equipo equilibrado" }`

## Explicacion final

La solución funciona mediante el uso de métodos de ordenamiento y reducción para obtener métricas estadísticas fundamentales. La clave de la lógica radica en la comparación entre el promedio y la mediana: el promedio es sensible a valores extremos (jugadores estrella con puntajes muy altos), mientras que la mediana es robusta ante estos cambios. Esta diferencia permite detectar automáticamente cuando un equipo depende excesivamente de unos pocos individuos destacados, proporcionando un análisis de rendimiento objetivo y automatizado.

## Sugerencia

Verifica cada operación con cálculos manuales antes de confiar en el código:

* **Caso `[10, 20, 30, 40, 90]` (Cálculo manual)**:
* Promedio: $(10+20+30+40+90) / 5 = 190 / 5 = 38$.
* Mediana: El valor central de `[10, 20, 30, 40, 90]` es `30`.
* Clasificación: $38 > (30 + 10)$ es $38 > 40$ (Falso). Resultado: `Equipo equilibrado`.
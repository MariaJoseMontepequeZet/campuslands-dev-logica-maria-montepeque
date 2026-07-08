# Plantilla de solución

## Analisis

* **Entrada**: Un objeto `auto` que contiene `nombre` (string) y `velocidadMph` (number).
* **Proceso**: Conversión de unidades de mph a km/h multiplicando por el factor $1.60934$, seguida de una clasificación jerárquica del rendimiento mediante condicionales.
* **Salida**: Un objeto que contiene el `modelo`, la `velocidad_kmh` redondeada a dos decimales y la `categoria` resultante.

## Reglas identificadas

1. Si la velocidad en km/h es mayor o igual a 400, el vehículo es un "Hiperdeportivo de élite".
2. Si la velocidad es mayor o igual a 300 pero menor a 400, es un "Deportivo de alto rendimiento".
3. Si la velocidad es menor a 300, el vehículo es un "Deportivo estándar".

## Pruebas

### Caso normal

* **Entrada**: `{ nombre: "Bugatti Chiron", velocidadMph: 261 }`
* **Resultado esperado**: `{ modelo: "Bugatti Chiron", velocidad_kmh: "420.04", categoria: "Hiperdeportivo de élite" }`

### Caso borde

* **Entrada**: `{ nombre: "Auto Prueba", velocidadMph: 150 }`
* **Resultado esperado**: `{ modelo: "Auto Prueba", velocidad_kmh: "241.40", categoria: "Deportivo estándar" }`

## Explicacion final

La solución funciona porque aplica una **conversión aritmética precisa** combinada con una **estructura de control jerárquica**. Al evaluar los rangos de velocidad desde el más alto al más bajo, el código garantiza que cada vehículo sea clasificado correctamente en la categoría más alta que le corresponda. El uso de `toFixed(2)` asegura que el formato de salida sea consistente, cumpliendo con los estándares de visualización de datos numéricos.

## Sugerencia

Verifica cada operación con cálculos manuales antes de confiar en el código:

* **Caso Bugatti (Cálculo manual)**:
* Conversión: $261 \times 1.60934 = 420.03774$
* Redondeo: $420.04$
* Clasificación: $420.04 \ge 400$ es verdadero (**Hiperdeportivo de élite**).
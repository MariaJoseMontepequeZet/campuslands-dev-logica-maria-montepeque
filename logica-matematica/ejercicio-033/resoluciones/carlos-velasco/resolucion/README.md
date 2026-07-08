# Plantilla de solución

## Analisis

* **Entrada**: Dos objetos `p1` y `p2`, cada uno conteniendo coordenadas cartesianas `x` e `y`.
* **Proceso**: Cálculo de la distancia euclidiana mediante el teorema de Pitágoras ($\sqrt{(x_2-x_1)^2 + (y_2-y_1)^2}$) y validación de seguridad basada en un umbral de 10 unidades.
* **Salida**: Un objeto que detalla la `distancia` (redondeada a dos decimales), el `estado` de viabilidad y una `explicacion` de los puntos evaluados.

## Reglas identificadas

1. La distancia debe calcularse siempre como el valor absoluto positivo de la raíz cuadrada de la suma de las diferencias al cuadrado.
2. Si la distancia es mayor a 10, el estado se marca como "Exceso de distancia de seguridad".
3. Si la distancia es menor o igual a 10, el estado se marca como "Zona de aterrizaje viable".

## Pruebas

### Caso normal

* **Entrada**: `p1: {x: 0, y: 0}, p2: {x: 3, y: 4}`
* **Resultado esperado**: `{ distancia: "5.00", estado: "Zona de aterrizaje viable", explicacion: "Distancia calculada entre (0, 0) y (3, 4)." }`

### Caso borde

* **Entrada**: `p1: {x: 0, y: 0}, p2: {x: 10, y: 10}`
* **Resultado esperado**: `{ distancia: "14.14", estado: "Exceso de distancia de seguridad", explicacion: "Distancia calculada entre (0, 0) y (10, 10)." }`

## Explicacion final

La solución funciona mediante la aplicación directa del teorema de Pitágoras para medir la separación entre dos puntos en un plano. Al integrar una estructura de control (operador ternario) que compara este resultado con una constante de umbral (10), la función logra clasificar automáticamente la seguridad de una ubicación objetivo, proporcionando una respuesta clara y formateada para el usuario final.

## Sugerencia

Verifica cada operación con cálculos manuales antes de confiar en el código:

* **Ejemplo manual** (`p1: 0,0`, `p2: 3,4`):
* Distancia: $\sqrt{(3-0)^2 + (4-0)^2} = \sqrt{9 + 16} = \sqrt{25} = 5$.
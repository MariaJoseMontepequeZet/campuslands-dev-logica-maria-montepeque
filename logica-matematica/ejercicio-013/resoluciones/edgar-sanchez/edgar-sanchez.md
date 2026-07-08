# Plantilla de solucion

## Analisis
El problema se diseñó para calcular la distancia lineal en el plano horizontal entre el punto de aterrizaje real de un paracaidista y el centro de la zona de caída objetivo (coordenadas $[0, 0]$). Esto permite evaluar la precisión del salto midiendo el desfase absoluto mediante el teorema de Pitágoras (distancia euclidiana) de manera exacta y automatizada.

- Entrada: Coordenada en el eje X (flotante) y coordenada en el eje Y (flotante) del punto donde tocó tierra el paracaidista.
- Proceso: Elevar al cuadrado ambas coordenadas, sumar los resultados y calcular la raíz cuadrada de dicha suma ($\sqrt{x^2 + y^2}$) para obtener la distancia recta hacia el origen de coordenadas.
- Salida: Un número de tipo flotante que representa la distancia total de desviación respecto al objetivo.

## Reglas identificadas
1. Distancia Euclidiana Absoluta: La distancia se calcula usando la hipotenusa de un triángulo rectángulo formado por los desfases en los ejes espaciales.
2. Independencia de Cuadrante: Los valores negativos en las coordenadas se anulan de forma matemática al elevarse al cuadrado, garantizando distancias siempre positivas.
3. Precisión de Vuelo: La distancia final obtenida debe devolverse redondeada a dos posiciones decimales para unificar los registros de rendimiento del club de paracaidismo.

## Pruebas

### Caso normal
Entrada: coordenadaX = 3.0, coordenadaY = -4.0
Resultado esperado: 5.0

### Caso borde
Entrada: coordenadaX = 0.0, coordenadaY = 0.0
Resultado esperado: 0.0

## Explicacion final
La solución funciona porque aplica el teorema de Pitágoras en dos dimensiones para medir de forma exacta el vector de desplazamiento hacia el centro del objetivo.
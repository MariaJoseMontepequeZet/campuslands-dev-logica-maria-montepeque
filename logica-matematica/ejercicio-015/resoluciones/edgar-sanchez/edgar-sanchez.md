# Plantilla de solucion

## Analisis
El problema se diseñó para modelar el comportamiento del cursor o lápiz óptico en un software de dibujo digital utilizando las leyes físicas de cinemática lineal. Se busca calcular la distancia total recorrida por el trazo sobre el lienzo virtual basándose en la velocidad constante de la mano del ilustrador y el tiempo de contacto continuo, optimizando la precisión de los vectores y la detección de líneas discontinuas.

- Entrada: Velocidad de movimiento del lápiz óptico en píxeles por milisegundo (flotante) y el tiempo total de contacto continuo en milisegundos (entero).
- Proceso: Multiplicar la velocidad del cursor por el tiempo medido bajo la fórmula física de movimiento rectilíneo uniforme ($Distancia = velocidad \times tiempo$). Validar que los valores de entrada no representen un estado inmóvil.
- Salida: Un número de tipo flotante que representa la longitud total del trazo digital calculada en píxeles.

## Reglas identificadas
1. Ecuación de Desplazamiento Lineal: La longitud del vector gráfico se rige de forma exacta por el producto escalar de la rapidez del periférico y el intervalo temporal de acción.
2. Control de Inactividad Temporal: Si el tiempo de contacto es menor o igual a cero, o la velocidad es nula, el sistema descarta el trazo y define la distancia final en 0.0 píxeles.
3. Formateo de Coordenadas de Lienzo: La distancia final en píxeles calculada debe ser redondeada a dos posiciones decimales para ajustarse a los motores de renderizado de mapas de bits.

## Pruebas

### Caso normal
Entrada: velocidadPixelesMilisegundo = 4.25, tiempoMilisegundos = 200
Resultado esperado: 850.0

### Caso borde
Entrada: velocidadPixelesMilisegundo = 6.50, tiempoMilisegundos = 0
Resultado esperado: 0.0

## Explicacion final
La solución funciona porque calcula la magnitud escalar del vector del trazo multiplicando linealmente la velocidad de entrada por la ventana temporal activa.
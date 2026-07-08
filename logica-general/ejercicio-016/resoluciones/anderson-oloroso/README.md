# Plantilla de solucion

## Analisis

- **Entrada:** - Una matriz bidimensional (`Array<Array<Number>>`) con las coordenadas iniciales $[X, Y, Z]$ de los vértices del modelo 3D.
  - Un vector unidimensional (`Array<Number>`) con los desplazamientos $[dX, dY, dZ]$ de la animación.
- **Proceso:** - Sumar algebraicamente el vector de traslación a cada uno de los vértices de la matriz para calcular sus nuevas posiciones en el espacio tridimensional.
  - Evaluar la coordenada de profundidad ($Z$) de los nuevos vértices contra el límite del plano de frustum de la cámara.
- **Salida:** - Un objeto con la acción resultante (renderizado completo o parcial) y el motivo del estado del render dependiente de la visibilidad espacial.

## Reglas identificadas

1. **Transformación Lineal Obligatoria:** Cada nuevo punto en el espacio debe responder estrictamente al cálculo de adición de matrices: $V_{final} = V_{inicial} + T$.
2. **Límite de Clipping Estricto:** Si la coordenada transformada final del eje $Z$ es estrictamente mayor a 3.0 ($Z > 3.0$), el vértice se considera fuera de la región de renderizado óptico.
3. **Persistencia d
## Pruebas

### Caso normal

Entrada:
``` js
const verticesIniciales = [
    [1.0, 2.0, 0.0],
    [2.0, 1.0, 1.0]
  ];
const vectorTraslacion = [1.0, 1.0, 1.0]; 
```
Resultado esperado:
accion: "Renderizado completo -> V1[2.0, 3.0, 1.0] | V2[3.0, 2.0, 2.0]
motivo: "Todos los vértices se encuentran dentro del volumen de visión de la cámara."

### Caso borde

Entrada:
``` js
const verticesIniciales = [
    [1.0, 2.0, 0.0],
    [3.0, 4.0, 1.5],
    [0.5, -1.0, 3.0]
  ];
const vectorTraslacion = [2.0, -1.0, 0.5];
```

Resultado esperado:
accion: "Renderizado parcial -> V1[3.0, 1.0, 0.5] | V2[5.0, 3.0, 2.0] | V3[2.5, -2.0, 3.5]"

motivo: "Efecto Oclusión: 1 vértice(s) superaron el plano de corte Z > 3.0."

## Explicacion final

Este desarrollo simula el comportamiento básico de un motor de renderizado gráfico de nivel de hardware (como WebGL) procesando vértices en un espacio euclidiano. Se utiliza para poder saber con exactitud matemática si un objeto animado en 3D sigue estando visible para la cámara de la escena tras aplicarle una transformación lineal de movimiento.
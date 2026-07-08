# Reto: Rasterizador Especial de matrices simples - Animacion 3D

Este repositorio contiene todas las arquitectura logica y la solucion en codigo para el reto de procesamiento de matrices bidimensionales simples aplicado al rendeerizado y calculo de interpolaciones en animacion 3D. A diferencia de las evaluaciones lineales, este ejercicio modela la asignacion posicional disccreta de datos sobre un plano cartesiano maticial y simula el impacto en memoria de las curvas de animacion.

---

## Objetivo del reto

Construir un script interactivo por interfaz de linea de comandos (CLI) capaz de inicializar una estructura de datos matricial estatica, indexar un elemento en sus ejes coordenados protegiendo los limites de memoria y emitir un reporte de renderizado con metricas clarass y verificables ante los instructores.

---

# Plantilla de solucion 

## Analisis

- **Entrada:**
    - nombre_escena: Cadena de texto (str)con la identidad nominal del archivo graficvo, sanitizado con .strip().
    - tipo_keyframe: Cadena de texto (str) que especifica el metodo matematico de interpolacion de movimiento, estandarizada con .strip.capitalize() (Lineal / Bezier / Spline).
    - fila_objeto: Valor numerico entero (int) que representa el indice horizontal de la matriz.
- **Proceso:**
    - **Modelado Matricial:** El sistema instancia una matiz simetica rigida de $3 \times 3$ poblada con ceros nativos para simular el buffer de video apagado.
    - **Inyeccion y control de desbordamiento:** Una compuerta relacional evalua si las coordenadas caen dentro del rengao inclusivo [0,2]. De ser asi, se modifica el valor del indice binario mutandolo a '1'
    - **Evaluacion de impacto fuincional:** Una estructura if-elif-else procesa las opciones cualitativas del keyframe para determinar el costo computacional de renderizado por descarte.
- **Salida:**
    - Impreson visual formateada por ciclos iterativos de la matriz de pixeles actual.
    - estado_coordenada: Diagnostico textual sobre el exito o fallo de la proteccion en el espacio 3D.
    - tiempo_render_segundos: Valor cuantitativo que indica el retardo del procesador por fotograma.

## Reglas identificadas

1. **Limites Fisicos del Vieport:** La matriz es finita de $3 \times 3$. Por lo tanto, el acceso directo seguro exige que las variables de entrada pertenezcan estrictamnente al conjunto de numero enteros entre 0 y 23 inclusive.
2. **Costo de cuurva Lineal:** Si el tipo de interpolacion es "Lineal", el renderizado asigna una carga de procesamiento de nivel Bajo y 2 segundos de tiempo base.
3. **Costo de curva Bezier:** Si la interpolacion es "Bezier", la complejidad algoritmica escala a nivel Medio y consume 5 segundos de renderizado.
4. **Costo de curva Spline:** Si el cuadro es un nodo de interpolacion continuo "Spline", el sistema absorbe una carga de nivel Alto y un retardo de 9 segundos.

## Pruebas

### Caso normal

- **Entrada:**
  - `nombre_escena`: Intro_Personaje
  - `tipo_keyframe`: bezier
  - `fila_objeto`: 1
  - `columna_objeto`: 2
- **Resultado esperado:**
  - Matriz impresa en consola:
    ```text
      [ 0 ] [ 0 ] [ 0 ]
      [ 0 ] [ 0 ] [ 1 ]
      [ 0 ] [ 0 ] [ 0 ]
    ```
  - `Estatus Espacial:   Coordenada proyectada correctamente en el Viewport.`
  - `Consumo de RAM:     Media (Cálculo de curvas polinomiales por tangentes)`
  - `Tiempo Estimado:    5 segundos por frame`

### Caso borde

- **Entrada:**
  - `nombre_escena`: Test_FueraDeCamara
  - `tipo_keyframe`: Lineal
  - `fila_objeto`: 3
  - `columna_objeto`: 0
- **Resultado esperado:**
  - Matriz impresa en consola totalmente limpia (todos ceros).
  - `Estatus Espacial:   Error: Coordenadas fuera del Viewport 3x3. Objeto invisible fuera de cámara.`
  *(Prueba la robustez defensiva del código ante valores fuera de rango, interceptando el error de forma controlada antes de que el procesador intente escribir en un índice inexistente de la lista).*

## Explicacion Final 

Mi solucion funciona de manera robusta porque resuleve el manejo de matrices estructuradas aplicando validacion por barreras logicas. En lugar de permitir que los datos crudos del usuario interactuen directamente con los punteros de los arreglos bidimensionales (lo cual romperia la ejecucion ai aw ingresa una coordenada invalida como un 3 o un -1), el algoritmo comprueba primero la integridad posicional espacial. Posteriormente, la matriz es formateada y desplegada dinamicamente fila por fila mediante un cliclo limpio, aislando por separado la logica de rendimiento matematico de las curvas de animacion para entregar un reporte de simulacion predecible y totalmente auditable.



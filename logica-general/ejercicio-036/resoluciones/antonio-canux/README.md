# Ejercicio de Lógica 036: Temática Animación 3D

**Camper:** Antonio Canux

## Analisis

- Entrada: Una matriz bidimensional (arreglo de arreglos) llamada `matrizRender`, compuesta exclusivamente por números `0` (espacio vacío) y `1` (polígono 3D a renderizar).
- Proceso: El sistema itera sobre cada fila de la matriz. Dentro de cada fila, busca secuencialmente si existe al menos un valor `1`. Si lo encuentra, marca la fila para ser procesada. Si termina de leer toda la fila y solo encuentra `0`, guarda el índice de esa fila para omitirla del proceso gráfico.
- Salida: Un objeto que detalla el `totalFilasRenderizadas`, un arreglo con los índices numéricos de las `filasOptimizadas` (omitidas), y un `mensaje` de resumen.

## Reglas identificadas

1. Una fila que contenga al menos un polígono (`1`) requiere el procesamiento de toda la fila por parte del motor de renderizado.
2. Una fila compuesta únicamente por vacíos (`0`) debe ser identificada y su índice almacenado para excluirla del renderizado, optimizando los recursos del sistema.
3. El proceso de búsqueda dentro de una fila debe detenerse tan pronto como se encuentre el primer `1`, ya que seguir buscando es redundante para esta regla de optimización.

## Pruebas

### Caso normal

Entrada:
```javascript
matrizRender: [
    [0, 0, 0, 0], 
    [0, 1, 1, 0], 
    [0, 1, 1, 0], 
    [0, 0, 0, 0]  
]
```

Resultado esperado:

```javascript
{
  totalFilasRenderizadas: 2,
  filasOptimizadas: [ 0, 3 ],
  mensaje: 'Optimización exitosa. Se ahorró memoria omitiendo el procesamiento de 2 fila(s) vacía(s).'
}
```

### Caso borde
Entrada (Un modelo donde los polígonos están dispersos y cruzan todas las filas, por lo que ninguna puede descartarse):

```javascript
matrizRender: [
    [0, 0, 1],
    [1, 0, 0],
    [0, 1, 0]
]
```

Resultado esperado:

```javascript
{
  totalFilasRenderizadas: 3,
  filasOptimizadas: [],
  mensaje: 'Se renderizó el 100% de la matriz. No hubo filas completamente vacías para optimizar.'
}
```

## Explicación final
La solución es eficiente porque aprovecha la instrucción break en el ciclo interno (el que recorre las columnas). Al momento de detectar un solo polígono (valor 1), el programa comprende que toda la fila requerirá carga gráfica e interrumpe inmediatamente el recorrido de esa fila específica. Esto ahorra tiempo de cálculo al evitar analizar el resto de las columnas cuando la decisión de "procesar" ya está tomada. Las matrices pueden ser pesadas, y esta técnica evita los ciclos innecesarios.
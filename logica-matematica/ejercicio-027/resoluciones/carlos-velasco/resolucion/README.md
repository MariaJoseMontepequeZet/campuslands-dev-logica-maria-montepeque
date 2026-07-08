# Plantilla de solución

## Analisis

* **Entrada**: Un arreglo `bpmList` que contiene valores numéricos de pulsaciones por minuto.
* **Proceso**: Cálculo del promedio aritmético de la lista, identificación de canciones con variaciones superiores a 20 BPM respecto al promedio y clasificación de la *playlist* según la presencia de estas inconsistencias.
* **Salida**: Un objeto que detalla el `promedio_bpm`, el `estado` de la *playlist* y una `explicacion` sobre la estabilidad del ritmo.

## Reglas identificadas

1. Si la lista está vacía o no existe, el sistema debe retornar un mensaje de error.
2. Una canción es considerada "ritmo inestable" si la diferencia absoluta entre su valor y el promedio es mayor a 20.
3. La *playlist* se clasifica como "fluida" solo si no se detecta ninguna canción inestable, de lo contrario se clasifica con "cambios bruscos".

## Pruebas

### Caso normal

* **Entrada**: `[120, 125, 122, 128]`
* **Resultado esperado**: `{ promedio_bpm: "123.75", estado: "Playlist fluida", explicacion: "El ritmo es consistente." }`

### Caso borde

* **Entrada**: `[120, 150, 122, 125]`
* **Resultado esperado**: `{ promedio_bpm: "129.25", estado: "Playlist con cambios bruscos", explicacion: "Se detectaron 1 canciones con ritmo inestable." }`

## Explicacion final

La solución funciona mediante la normalización de los datos musicales en una métrica estadística. Al calcular un promedio, establecemos un punto de equilibrio; luego, mediante el método `.filter()`, aislamos las excepciones que rompen la coherencia rítmica de la lista. Este enfoque es altamente efectivo porque no depende de valores fijos arbitrarios, sino de la desviación estándar respecto a la propia *playlist*, permitiendo que el algoritmo se adapte a cualquier género musical.

## Sugerencia

Verifica cada operación con cálculos manuales antes de confiar en el código:

* **Ejemplo manual** (`[120, 150, 122, 125]`):
* Promedio: $(120+150+122+125) / 4 = 129.25$.
* Diferencia absoluta de 150 respecto a 129.25 = $20.75$.
* Como $20.75 > 20$, se identifica correctamente como ritmo inestable.

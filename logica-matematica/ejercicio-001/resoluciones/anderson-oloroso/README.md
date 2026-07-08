# Plantilla de solucion

## Analisis

- **Entrada:**
  - Un objeto (`Object`) que representa a un jugador.
  - El objeto contiene:
    - `nombre` (cadena de texto).
    - `victorias` (número entero).
    - `derrotas` (número entero).
    - `eliminaciones` (número entero).
    - `asistencias` (número entero).

- **Proceso:**
  - Validar que todas las estadísticas sean números positivos o iguales a cero.
  - Calcular el puntaje total aplicando las reglas de puntuación:
    - Victoria = +100 puntos.
    - Derrota = -30 puntos.
    - Eliminación = +10 puntos.
    - Asistencia = +5 puntos.
  - Comparar el puntaje obtenido con el valor mínimo requerido para clasificar al jugador.

- **Salida:**
  - Un objeto con:
    - Nombre del jugador.
    - Puntaje total obtenido.
    - Categoría alcanzada (Competidor Elite o Competidor en Desarrollo).

## Reglas identificadas

1. Cada victoria suma **100 puntos**, mientras que cada derrota resta **30 puntos**.
2. Cada eliminación agrega **10 puntos** y cada asistencia aporta **5 puntos** adicionales.
3. Si el puntaje final es **mayor o igual a 300**, el jugador pertenece a la categoría **"Competidor Elite"**; de lo contrario será **"Competidor en Desarrollo"**.

## Pruebas

### Caso normal

Entrada:

```javascript
const jugador = {
  nombre: "Shadow",
  victorias: 3,
  derrotas: 1,
  eliminaciones: 12,
  asistencias: 8
};
```

Resultado esperado:

```javascript
{
  jugador: "Shadow",
  puntaje: 430,
  categoria: "Competidor Elite"
}
```

### Caso borde

Entrada:

```javascript
const jugador = {
  nombre: "Nova",
  victorias: -1,
  derrotas: 0,
  eliminaciones: 5,
  asistencias: 2
};
```

Resultado esperado:

```javascript
{
  estado: "Error",
  motivo: "Las estadísticas no pueden contener valores negativos."
}
```

## Explicacion final

Esta solución transforma las estadísticas de un jugador en un puntaje cuantificable mediante operaciones aritméticas simples. Primero valida que los datos sean válidos para evitar cálculos incorrectos. Luego aplica las reglas de puntuación definidas para victorias, derrotas, eliminaciones y asistencias, acumulando el resultado en una única variable.

Finalmente, el algoritmo compara el puntaje obtenido contra un umbral establecido para determinar la categoría del jugador. Este enfoque permite verificar fácilmente los resultados, facilita la realización de pruebas y mantiene una estructura clara basada en entrada, procesamiento y salida.
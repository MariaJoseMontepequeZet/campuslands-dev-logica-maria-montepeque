# Plantilla de solucion

## Autor

Sergio Ajú

## Analisis

- **Entrada:** Dos coordenadas numéricas: `x` (columna) y `y` (fila) que representan la posición de un objeto en una matriz de 3x3.
- **Proceso:** Se valida si las coordenadas están dentro de los límites definidos (de 0 a 2). Si ambos valores cumplen la condición, el objeto es visible.
- **Salida:** Un objeto con un booleano `visible` y un mensaje descriptivo.

## Reglas identificadas

1. **Límites de Matriz:** Una coordenada es válida solo si está entre 0 y el tamaño de la matriz menos uno (en este caso, de 0 a 2).
2. **Fuera de Rango:** Cualquier valor negativo o mayor a 2 indica que el objeto salió del área de renderizado (fuera de cámara).
3. **Visibilidad:** El sistema debe notificar claramente el estado para que el motor de animación sepa si debe procesar el objeto.

## Pruebas

### Caso normal

**Entrada:** `x: 1, y: 2`

**Resultado esperado:**
```json
{
  "visible": true,
  "mensaje": "El objeto está dentro del frame."
}
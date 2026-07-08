# Plantilla de solucion

## Analisis

- **Entrada:**
  - Un objeto (`Object`) que representa un salto de paracaidismo.
  - El objeto contiene:
    - `nombre`: identificación del paracaidista.
    - `puntoInicio`: coordenadas tridimensionales iniciales del salto `[x, y, z]`.
    - `puntoAterrizaje`: coordenadas tridimensionales finales del aterrizaje `[x, y, z]`.

- **Proceso:**
  - Validar que ambas posiciones tengan tres coordenadas.
  - Calcular la distancia entre el punto inicial y el punto final utilizando la fórmula de distancia euclidiana en tres dimensiones:

    \[
    d = \sqrt{(x_2-x_1)^2+(y_2-y_1)^2+(z_2-z_1)^2}
    \]

  - Redondear la distancia obtenida para facilitar la lectura.
  - Clasificar el salto según la distancia recorrida:
    - Salto Básico.
    - Salto Avanzado.
    - Salto Extremo.

- **Salida:**
  - Un objeto con:
    - Nombre del paracaidista.
    - Distancia recorrida durante el salto.
    - Categoría del salto realizado.

## Reglas identificadas

1. Las coordenadas de inicio y aterrizaje deben contener exactamente tres valores representando los ejes **X, Y y Z**.
2. La distancia recorrida se calcula mediante la fórmula de distancia tridimensional:

\[
d = \sqrt{(x_2-x_1)^2+(y_2-y_1)^2+(z_2-z_1)^2}
\]

3. Si la distancia recorrida es mayor o igual a **1000 metros**, el salto se clasifica como **"Salto Extremo"**.
4. Si la distancia recorrida está entre **500 y 999.99 metros**, se clasifica como **"Salto Avanzado"**.
5. Si la distancia es menor a **500 metros**, se clasifica como **"Salto Básico"**.

## Pruebas

### Caso normal

Entrada:

```javascript
const salto = {
  nombre: "Alex",
  puntoInicio: [0, 0, 1200],
  puntoAterrizaje: [300, 400, 200]
};
```

Resultado esperado:

```javascript
{
  paracaidista: "Alex",
  distanciaRecorrida: "1135.78 metros",
  categoria: "Salto Extremo"
}
```

### Caso borde

Entrada:

```javascript
const salto = {
  nombre: "Luis",
  puntoInicio: [0, 0],
  puntoAterrizaje: [100, 200, 300]
};
```

Resultado esperado:

```javascript
{
  estado: "Error",
  motivo: "Las coordenadas deben tener tres dimensiones [x, y, z]."
}
```

## Explicacion final

La solución representa matemáticamente un salto de paracaidismo utilizando coordenadas tridimensionales. Primero valida que los datos recibidos tengan la estructura correcta para poder realizar el cálculo.

Después aplica la fórmula de distancia euclidiana en un espacio de tres dimensiones, comparando el punto inicial del salto con el punto donde aterrizó el paracaidista. Este cálculo permite conocer la magnitud real del desplazamiento realizado.

Finalmente, mediante reglas condicionales se clasifica el salto según la distancia obtenida. La solución utiliza validaciones, operaciones matemáticas y decisiones lógicas para convertir coordenadas espaciales en una evaluación deportiva verificable.
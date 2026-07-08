# Plantilla de solucion

## Analisis

- **Entrada:**
  - Un objeto (`Object`) que representa un diseño de tatuaje.
  - El objeto contiene:
    - `nombre`: nombre del diseño.
    - `tipo`: forma geométrica del tatuaje.
    - `medidas`: valores necesarios para calcular el área y perímetro.
      - Para un rectángulo:
        - `ancho`.
        - `alto`.
      - Para un círculo:
        - `radio`.

- **Proceso:**
  - Validar que existan medidas registradas.
  - Identificar la figura geométrica utilizada en el diseño.
  - Aplicar las fórmulas correspondientes:
    - Rectángulo:
      
      \[
      Area = ancho \times alto
      \]

      \[
      Perimetro = 2 \times (ancho + alto)
      \]

    - Círculo:

      \[
      Area = \pi \times radio^2
      \]

      \[
      Perimetro = 2 \times \pi \times radio
      \]

  - Redondear los resultados para facilitar su lectura.
  - Retornar las dimensiones calculadas del tatuaje.

- **Salida:**
  - Un objeto con:
    - Nombre del diseño.
    - Tipo de figura.
    - Área ocupada por el tatuaje.
    - Perímetro del diseño.

## Reglas identificadas

1. Las medidas ingresadas deben ser valores positivos mayores que cero.
2. El cálculo del área depende de la forma geométrica del tatuaje.
3. El cálculo del perímetro representa la longitud total del borde del diseño.
4. Para un rectángulo se aplican las fórmulas:

\[
A = b \times h
\]

\[
P = 2(b+h)
\]

5. Para un círculo se aplican las fórmulas:

\[
A = \pi r^2
\]

\[
P = 2\pi r
\]

6. Si la figura ingresada no está soportada, el sistema debe devolver un error.

## Pruebas

### Caso normal

Entrada:

```javascript
const tatuaje = {
  nombre: "Dragon Tribal",
  tipo: "rectangulo",
  medidas: {
    ancho: 15,
    alto: 8
  }
};
```

Resultado esperado:

```javascript
{
  nombreDiseno: "Dragon Tribal",
  tipo: "rectangulo",
  area: 120,
  perimetro: 46
}
```

### Caso borde

Entrada:

```javascript
const tatuaje = {
  nombre: "Rosa",
  tipo: "circulo",
  medidas: {
    radio: 0
  }
};
```

Resultado esperado:

```javascript
{
  estado: "Error",
  motivo: "El radio debe ser mayor que cero."
}
```

## Explicacion final

La solución utiliza conceptos geométricos para calcular las dimensiones físicas de un diseño de tatuaje. Primero identifica la figura utilizada y valida que las medidas proporcionadas sean correctas.

Después aplica las fórmulas matemáticas correspondientes para obtener el área y el perímetro del diseño. Esto permite conocer cuánto espacio ocupará el tatuaje y cuál será la longitud de su contorno.

El algoritmo utiliza estructuras condicionales para manejar diferentes formas geométricas y validaciones para evitar cálculos incorrectos. De esta manera, convierte información básica de un diseño artístico en datos numéricos verificables mediante operaciones matemáticas.
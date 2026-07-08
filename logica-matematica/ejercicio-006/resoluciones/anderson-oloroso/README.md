# Plantilla de solucion

## Analisis

- **Entrada:**
  - Un objeto (`Object`) que representa un auto hiperdeportivo.
  - El objeto contiene:
    - `modelo`: nombre del vehículo.
    - `velocidadKmH`: velocidad máxima expresada en kilómetros por hora.
    - `potenciaHP`: potencia del motor expresada en caballos de fuerza.
    - `pesoKg`: peso del vehículo expresado en kilogramos.

- **Proceso:**
  - Validar que los valores ingresados sean correctos y no contengan números negativos.
  - Convertir la velocidad de kilómetros por hora a metros por segundo utilizando:

    \[
    m/s = \frac{km/h}{3.6}
    \]

  - Convertir la potencia de caballos de fuerza (`HP`) a kilovatios (`kW`) utilizando:

    \[
    kW = HP \times 0.7457
    \]

  - Convertir el peso de kilogramos a libras utilizando:

    \[
    lb = kg \times 2.20462
    \]

  - Devolver los valores convertidos en un formato organizado.

- **Salida:**
  - Un objeto con:
    - Modelo del auto.
    - Velocidad convertida a metros por segundo.
    - Potencia convertida a kilovatios.
    - Peso convertido a libras.

## Reglas identificadas

1. La conversión de velocidad utiliza la relación fija:

\[
1\ km/h = 0.27778\ m/s
\]

por lo tanto se divide la velocidad en km/h entre **3.6**.

2. La potencia del motor se convierte mediante:

\[
1\ HP = 0.7457\ kW
\]

3. El peso del vehículo se transforma utilizando:

\[
1\ kg = 2.20462\ lb
\]

4. Los datos ingresados deben ser valores positivos, excepto la potencia y velocidad que pueden ser cero en una validación matemática, pero no deben ser negativos.

## Pruebas

### Caso normal

Entrada:

```javascript
const auto = {
  modelo: "Ferrari SF90 Stradale",
  velocidadKmH: 340,
  potenciaHP: 986,
  pesoKg: 1570
};
```

Resultado esperado:

```javascript
{
  modelo: "Ferrari SF90 Stradale",
  conversiones: {
    velocidad: "94.44 m/s",
    potencia: "735.26 kW",
    peso: "3461.25 lb"
  }
}
```

### Caso borde

Entrada:

```javascript
const auto = {
  modelo: "Prototype X",
  velocidadKmH: -100,
  potenciaHP: 900,
  pesoKg: 1500
};
```

Resultado esperado:

```javascript
{
  estado: "Error",
  motivo: "Los datos del vehículo deben ser valores válidos."
}
```

## Explicacion final

La solución convierte las características técnicas de un auto hiperdeportivo entre diferentes sistemas de unidades utilizando factores matemáticos establecidos.

Primero se validan los valores recibidos para evitar conversiones incorrectas. Luego se aplican fórmulas de conversión para transformar velocidad, potencia y peso a unidades alternativas más utilizadas en análisis técnicos internacionales.

El programa mantiene separadas las entradas, los cálculos y la salida final, permitiendo verificar cada transformación matemática de manera sencilla. Este enfoque facilita adaptar el sistema para comparar vehículos, analizar especificaciones técnicas o integrar nuevos tipos de conversiones.
# Plantilla de solucion

## Analisis

- **Entrada:**
  - Un objeto (`Object`) que representa una fórmula química.
  - El objeto contiene:
    - `nombre`: nombre o representación de la fórmula química.
    - `elementos`: arreglo con los elementos que forman la fórmula.
  - Cada elemento contiene:
    - `simbolo`: símbolo químico.
    - `cantidad`: número de átomos presentes.
    - `masaAtomica`: masa atómica del elemento.

- **Proceso:**
  - Validar que la fórmula tenga un nombre y elementos registrados.
  - Recorrer cada elemento químico mediante un ciclo.
  - Verificar que las cantidades de átomos y masas atómicas sean valores positivos.
  - Calcular la cantidad total de átomos:

    \[
    Total\ Atomos = \sum Cantidad
    \]

  - Calcular la masa molecular de la fórmula:

    \[
    Masa\ Molecular = \sum (Cantidad \times Masa\ Atomica)
    \]

  - Determinar si la fórmula cumple las condiciones numéricas establecidas.

- **Salida:**
  - Un objeto con:
    - Nombre de la fórmula.
    - Cantidad total de átomos.
    - Masa molecular calculada.
    - Estado de validación de la fórmula.

## Reglas identificadas

1. Una fórmula química debe contener al menos un elemento registrado.
2. La cantidad de átomos de cada elemento debe ser un número entero positivo.
3. La masa atómica de cada elemento debe ser mayor que cero.
4. La cantidad total de átomos se obtiene sumando las cantidades individuales:

\[
Atomos_{total}=A_1+A_2+A_3+...+A_n
\]

5. La masa molecular se calcula multiplicando cada cantidad de átomos por su masa atómica y acumulando los resultados:

\[
Masa = \sum(Cantidad_i \times MasaAtomica_i)
\]

6. Una fórmula es válida si contiene datos numéricos correctos y una masa molecular calculable.

## Pruebas

### Caso normal

Entrada:

```javascript
const formula = {
  nombre: "H2O",
  elementos: [
    {
      simbolo: "H",
      cantidad: 2,
      masaAtomica: 1.008
    },
    {
      simbolo: "O",
      cantidad: 1,
      masaAtomica: 16
    }
  ]
};
```

Resultado esperado:

```javascript
{
  formula: "H2O",
  cantidadAtomos: 3,
  masaMolecular: 18.02,
  estadoValidacion: "Formula valida"
}
```

### Caso borde

Entrada:

```javascript
const formula = {
  nombre: "CO2",
  elementos: [
    {
      simbolo: "C",
      cantidad: 0,
      masaAtomica: 12.01
    }
  ]
};
```

Resultado esperado:

```javascript
{
  estado: "Error",
  motivo: "Las cantidades y masas atómicas deben ser valores positivos."
}
```

## Explicacion final

La solución valida una fórmula química mediante reglas numéricas y operaciones acumulativas. Primero comprueba que existan elementos registrados y que sus valores sean correctos.

Después recorre cada elemento para calcular dos datos importantes: la cantidad total de átomos y la masa molecular de la sustancia. Para esto utiliza acumuladores que suman los valores obtenidos durante el recorrido.

Finalmente determina si la fórmula cumple las condiciones establecidas. El algoritmo combina validaciones, ciclos y cálculos matemáticos para representar un proceso básico de análisis químico mediante programación.
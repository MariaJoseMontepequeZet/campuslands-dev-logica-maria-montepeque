# Plantilla de solucion

## Analisis

- **Entrada:**
  - Un arreglo (`Array<Object>`) que representa un inventario de motos.
  - Cada objeto contiene:
    - `modelo`: nombre o referencia de la moto.
    - `precio`: valor comercial de la moto.
    - `cilindraje`: capacidad del motor en centímetros cúbicos.
    - `anio`: año de fabricación.

- **Proceso:**
  - Validar que exista información en el inventario.
  - Filtrar las motos que tengan datos válidos.
  - Clasificar las motos según rangos de precio:
    - Económicas.
    - Gama media.
    - Premium.
  - Buscar la moto con mayor precio utilizando una comparación de valores máximos.
  - Calcular el promedio de cilindraje del inventario.
  - Generar un resumen estadístico del inventario.

- **Salida:**
  - Un objeto con:
    - Cantidad total de motos válidas.
    - Modelo de la moto más costosa.
    - Precio máximo encontrado.
    - Cantidad de motos por rango de precio.
    - Promedio de cilindraje del inventario.

## Reglas identificadas

1. Una moto pertenece al rango **económico** si su precio es menor a **5000**.
2. Una moto pertenece al rango **gama media** si su precio está entre **5000 y 10000**.
3. Una moto pertenece al rango **premium** si su precio es mayor a **10000**.
4. La moto más costosa será aquella cuyo precio sea el valor máximo dentro del inventario.
5. El promedio de cilindraje se calcula sumando todos los cilindrajes y dividiendo entre la cantidad de motos válidas.

## Pruebas

### Caso normal

Entrada:

```javascript
const inventario = [
  {
    modelo: "Honda CB500",
    precio: 6500,
    cilindraje: 500,
    anio: 2024
  },
  {
    modelo: "Yamaha R1",
    precio: 18000,
    cilindraje: 1000,
    anio: 2023
  },
  {
    modelo: "Suzuki GN125",
    precio: 3000,
    cilindraje: 125,
    anio: 2022
  }
];
```

Resultado esperado:

```javascript
{
  totalMotos: 3,
  motoMasCostosa: "Yamaha R1",
  precioMaximo: 18000,
  rangoPrecios: {
    economicas: 1,
    gamaMedia: 1,
    premium: 1
  },
  promedioCilindraje: 541.67
}
```

### Caso borde

Entrada:

```javascript
const inventario = [];
```

Resultado esperado:

```javascript
{
  estado: "Error",
  motivo: "El inventario debe contener al menos una moto."
}
```

## Explicacion final

La solución permite analizar un inventario de motos utilizando operaciones de filtrado, clasificación por rangos y búsqueda de valores máximos. Primero se valida que los datos recibidos sean correctos para evitar errores durante el procesamiento.

Luego se separan las motos según su precio, permitiendo conocer la distribución del inventario en diferentes segmentos comerciales. Mediante una comparación se obtiene la moto con mayor valor económico y utilizando una operación matemática se calcula el promedio de cilindraje.

Este enfoque permite transformar una lista de datos simples en información útil para la toma de decisiones, aplicando conceptos de rangos, máximos y cálculos estadísticos básicos.
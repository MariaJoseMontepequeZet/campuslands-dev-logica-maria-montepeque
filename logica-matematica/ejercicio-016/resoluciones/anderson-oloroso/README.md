# Plantilla de solucion

## Analisis

- **Entrada:**
  - Un objeto (`Object`) que representa un proyecto de animación 3D.
  - El objeto contiene:
    - `nombre`: nombre del proyecto.
    - `modelado3D`: costo del proceso de creación de modelos tridimensionales.
    - `texturas`: costo del diseño y aplicación de materiales visuales.
    - `animacion`: costo del movimiento de los elementos.
    - `renderizado`: costo del procesamiento final de imágenes.
    - `cantidadEscenas`: número de escenas del proyecto.

- **Proceso:**
  - Validar que los costos sean valores positivos y que exista al menos una escena.
  - Sumar todos los costos para obtener el presupuesto inicial:

    \[
    Costo\ Inicial = Modelado + Texturas + Animacion + Renderizado
    \]

  - Determinar el porcentaje de descuento según la cantidad de escenas.
  - Calcular el valor descontado:

    \[
    Descuento = Costo\ Inicial \times Porcentaje
    \]

  - Restar el descuento al presupuesto inicial para obtener el costo final.

- **Salida:**
  - Un objeto con:
    - Nombre del proyecto.
    - Costo inicial.
    - Porcentaje de descuento aplicado.
    - Valor descontado.
    - Presupuesto final.

## Reglas identificadas

1. Todos los costos del proyecto deben ser valores mayores o iguales a cero.
2. El presupuesto inicial se obtiene sumando los costos de cada etapa de producción:

\[
Presupuesto = Modelado + Texturas + Animacion + Renderizado
\]

3. Los descuentos se aplican según la cantidad de escenas:
   - 10 o más escenas → **15% de descuento**.
   - Entre 5 y 9 escenas → **10% de descuento**.
   - Menos de 5 escenas → **sin descuento**.

4. El costo final se calcula mediante:

\[
Costo\ Final = Costo\ Inicial - Descuento
\]

5. Si los datos ingresados no cumplen las condiciones establecidas, el sistema debe devolver un error.

## Pruebas

### Caso normal

Entrada:

```javascript
const proyecto = {
  nombre: "Guardianes del Espacio",
  modelado3D: 5000,
  texturas: 2500,
  animacion: 7000,
  renderizado: 3000,
  cantidadEscenas: 12
};
```

Resultado esperado:

```javascript
{
  proyecto: "Guardianes del Espacio",
  costoInicial: 17500,
  descuentoAplicado: "15%",
  valorDescuento: 2625,
  costoFinal: 14875
}
```

### Caso borde

Entrada:

```javascript
const proyecto = {
  nombre: "Proyecto Vacío",
  modelado3D: -500,
  texturas: 2000,
  animacion: 3000,
  renderizado: 1000,
  cantidadEscenas: 3
};
```

Resultado esperado:

```javascript
{
  estado: "Error",
  motivo: "Los costos y la cantidad de escenas deben ser válidos."
}
```

## Explicacion final

La solución permite calcular el presupuesto de un proyecto de animación 3D aplicando reglas de costos y descuentos progresivos. Primero se validan los datos ingresados para evitar trabajar con valores negativos o cantidades inválidas.

Después se suman los costos individuales de producción para obtener el presupuesto inicial. Dependiendo de la cantidad de escenas del proyecto, se aplica un descuento porcentual que representa beneficios por proyectos de mayor escala.

Finalmente se calcula el costo final restando el descuento obtenido. El algoritmo utiliza acumuladores, operaciones matemáticas y estructuras condicionales para representar un proceso real de planificación financiera dentro de un proyecto de animación digital.
# Plantilla de solucion

## Analisis

- **Entrada:**
  - Un arreglo (`Array<Object>`) que contiene los vehículos ingresados a un taller mecánico.
  - Cada vehículo contiene:
    - `vehiculo`: nombre o modelo del vehículo.
    - `horasTrabajo`: cantidad de horas estimadas para la reparación.
    - `repuestos`: cantidad de repuestos necesarios.
    - `prioridad`: nivel de urgencia de la reparación (1 a 5).

- **Proceso:**
  - Validar que existan vehículos registrados.
  - Verificar que las horas de trabajo, repuestos y prioridad tengan valores correctos.
  - Buscar el vehículo con menor cantidad de horas de reparación.
  - Contar los vehículos que superan el límite permitido de horas de trabajo.
  - Calcular el promedio de horas necesarias para completar todas las reparaciones.
  - Generar un resumen del estado general del taller.

- **Salida:**
  - Un objeto con:
    - Cantidad total de vehículos válidos.
    - Vehículo con menor tiempo de reparación.
    - Mínimo de horas requerido encontrado.
    - Cantidad de vehículos que superan el límite de trabajo.
    - Promedio de horas de reparación.

## Reglas identificadas

1. Los datos de un vehículo son válidos si las horas de trabajo y cantidad de repuestos son valores mayores o iguales a cero, y la prioridad está entre **1 y 5**.
2. El vehículo con reparación más rápida será aquel que tenga el menor número de horas de trabajo dentro del taller.
3. Un vehículo se considera pendiente si requiere más de **10 horas** de reparación.
4. El promedio de horas de trabajo se calcula mediante la fórmula:

\[
Promedio = \frac{Suma\ de\ horas\ de\ reparación}{Cantidad\ de\ vehículos}
\]

5. Si no existen vehículos registrados o todos contienen datos inválidos, el sistema debe devolver un mensaje de error.

## Pruebas

### Caso normal

Entrada:

```javascript
const vehiculos = [
  {
    vehiculo: "Toyota Corolla",
    horasTrabajo: 8,
    repuestos: 3,
    prioridad: 3
  },
  {
    vehiculo: "Mazda CX5",
    horasTrabajo: 15,
    repuestos: 5,
    prioridad: 5
  },
  {
    vehiculo: "Kia Rio",
    horasTrabajo: 5,
    repuestos: 2,
    prioridad: 2
  }
];
```

Resultado esperado:

```javascript
{
  totalVehiculos: 3,
  reparacionMasRapida: "Kia Rio",
  minimoHorasTrabajo: 5,
  vehiculosPendientes: 1,
  promedioHorasTrabajo: 9.33
}
```

### Caso borde

Entrada:

```javascript
const vehiculos = [];
```

Resultado esperado:

```javascript
{
  estado: "Error",
  motivo: "No existen vehículos registrados en el taller."
}
```

## Explicacion final

La solución analiza la información de un taller mecánico utilizando operaciones de mínimos, límites y promedios. Primero se validan los datos de entrada para asegurar que solamente se procesen vehículos con información correcta.

Después se utiliza una comparación para encontrar el vehículo con menor tiempo estimado de reparación, cumpliendo la búsqueda de un valor mínimo. También se aplican límites para identificar reparaciones que requieren más tiempo del permitido y se calcula el promedio general de horas del taller.

El programa organiza los resultados en un objeto final que permite conocer rápidamente el estado del taller, facilitando la toma de decisiones sobre tiempos de reparación y carga de trabajo.
# Ejercicio 24 - Inventario de Motos

**Camper:** Antonio Canux

## Analisis

- **Entrada:** La función recibe dos datos clave del vehículo: el `estadoMecanico` (un string que indica si la moto está en estado "optimo" o tiene fallos) y el `kilometraje` (un número entero que representa el desgaste de uso).
- **Proceso:** Se aplican filtros mediante estructuras condicionales. Primero se descartan las motocicletas que no están en estado mecánico óptimo para enviarlas al taller. Luego, para las que sí están en buen estado, se aplica un sub-filtro evaluando el kilometraje para decidir si se venden a precio regular o con descuento.
- **Salida:** Un objeto con la `categoria` asignada a la motocicleta en el inventario y la `accion` operativa que se debe tomar con ella.

## Reglas identificadas

1. Toda motocicleta cuyo estado mecánico sea diferente a "optimo" es filtrada inmediatamente hacia el área de taller, ignorando su kilometraje.
2. Si la motocicleta está mecánicamente óptima pero excede los 30,000 kilómetros, se clasifica para venta con descuento.
3. Si la motocicleta es óptima y su kilometraje es igual o menor a 30,000, pasa directamente al área de ventas regulares.

## Pruebas

### Caso normal

Entrada: `estadoMecanico: "optimo"`, `kilometraje: 12500`

Resultado esperado: 
```text
categoria: "venta regular"
accion: "exhibir en sala de ventas principal."
```

### Caso borde
Entrada: `estadoMecanico: "falla en transmisión"`, `kilometraje: 45000`

Resultado esperado:

```text
categoria: "taller"
accion: "programar revisión de motor y sistemas auxiliares."
```

## Explicacion final
La solución funciona porque aplica los filtros en el orden lógico correcto (priorizando la integridad mecánica antes que el criterio comercial de desgaste). Al usar condicionales if/else if, aseguramos que cada motocicleta caiga en una única categoría de inventario sin cruzar datos. La separación de las reglas permite que el sistema decida rápidamente si una moto está lista para la vitrina o si requiere intervención técnica.
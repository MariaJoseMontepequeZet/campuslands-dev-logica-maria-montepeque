# Solucion ejercicio 004 - Filtros por condiciones

## Como pense el problema

Primero identifique que el inventario contiene varias motos con diferentes caracteristicas. Luego estableci reglas para mostrar solo las motos que cumplen determinadas condiciones.

## Entradas

- Lista de motos.
- Cilindrada minima.

Cada moto contiene:

- Marca.
- Modelo.
- Cilindrada.
- Disponibilidad.

## Reglas aplicadas

1. La lista debe contener motos.
2. Solo se muestran motos disponibles.
3. La cilindrada debe ser igual o mayor al valor solicitado.

## Salidas

- Lista de motos que cumplen las condiciones.
- Mensaje si no existen resultados.

## Como ejecutar

Abrir una terminal y ejecutar:

```bash
node stefani-sanchez.js
```

## Casos probados

### Caso normal

Se filtran las motos disponibles con cilindrada mayor o igual a 150 cc.

Resultado esperado:

```text
[
  { marca: 'Yamaha', modelo: 'FZ', cilindrada: 150, disponible: true },
  { marca: 'Suzuki', modelo: 'Gixxer', cilindrada: 155, disponible: true }
]
```

### Caso borde

Lista vacia.

Resultado esperado:

```text
No hay motos registradas.
```
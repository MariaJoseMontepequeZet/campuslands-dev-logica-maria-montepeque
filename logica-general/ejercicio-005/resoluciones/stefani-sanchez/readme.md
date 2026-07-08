# Solucion ejercicio 005 - Ordenamiento de prioridades

## Como pense el problema

Primero identifique que cada vehiculo tiene un nivel de prioridad. La solucion consiste en ordenar los vehiculos para atender primero los casos mas urgentes.

## Entradas

- Lista de vehiculos.

Cada vehiculo contiene:

- Placa.
- Problema.
- Prioridad.

## Reglas aplicadas

1. La lista debe contener vehiculos.
2. La prioridad mas baja representa la mayor urgencia.
3. Los vehiculos se ordenan de menor a mayor prioridad.

## Salidas

- Lista ordenada por prioridad.
- Mensaje indicando que no existen vehiculos registrados cuando la lista esta vacia.

## Como ejecutar

Abrir una terminal y ejecutar:

```bash
node stefani-sanchez.js
```

## Casos probados

### Caso normal

Vehiculos con prioridades diferentes.

Resultado esperado:

```text
[
  { placa: 'P456DEF', problema: 'Frenos dañados', prioridad: 1 },
  { placa: 'P789GHI', problema: 'Revision general', prioridad: 2 },
  { placa: 'P123ABC', problema: 'Cambio de aceite', prioridad: 3 }
]
```

### Caso borde

Lista vacia.

Resultado esperado:

```text
No hay vehiculos registrados.
```
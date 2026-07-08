# Plantilla de solucion

## Analisis

- Entrada: Objetos js para su posterior proceso
- Proceso: Se aplican las reglas 
- Salida: Array ordenado que cumplen con las condiciones ya ordenado

## Reglas identificadas

1. Se incluye un destino solo si costo <= presupuesto
2. Se incluye un destino solo si dias <= tiempoDisponible (dura como máximo lo que tienes).
3. Se ordena por costo de menor a mayor; si empatan, por dias de menor a mayor.

## Pruebas

### Caso normal

Entrada:
``` js
const destinos = [
  { nombre: "Isla", costo: 1200, dias: 5 },
  { nombre: "Ciudad", costo: 800, dias: 3 },
  { nombre: "Montaña", costo: 800, dias: 4 },
  { nombre: "Playa", costo: 1500, dias: 4 },
];

const solucion = filtrarViajes(destinos, { presupuesto: 1000, tiempoDisponible: 4 });
console.log(solucion);
```
Resultado esperado:
{ nombre: "Ciudad", costo: 800, dias: 3 },
{ nombre: "Montaña", costo: 800, dias: 4 }

### Caso borde

Entrada:
``` js
const destinosBorde = [
  { nombre: "Montana", costo: 1000, dias: 4 },
  { nombre: "Montevideo", costo: 1000, dias: 4 }, 
  { nombre: "Caribe", costo: 1001, dias: 4 }, 
];

const esperado = filtrarViajes(destinosBorde, { presupuesto: 1000, tiempoDisponible: 4 });
console.log(esperado);

```
Resultado esperado:
Debe devolver: Montana y montevideo

## Explicacion final

El programa funciona escogiendo y mostrando lugares viables para visitar tomando en cuenta las 3 reglas anteriores

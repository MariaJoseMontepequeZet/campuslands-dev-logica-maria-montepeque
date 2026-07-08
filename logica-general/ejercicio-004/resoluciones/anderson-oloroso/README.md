# Plantilla de solucion

## Analisis

- Entrada: Recibira un objeto js con estado y kilometraje, y luego se devolverán las motos dependiendo la necesidad, si son las de buen o mal estado.
- Proceso: Pasa por 2 filtros verificando que km no sea mayor al maximo de km y que el estado tenga una coincidencia exacta
- Salida:

## Reglas identificadas

1. km no puede ser mayor al máximo de km
2. Debe coincidir exactamente los estados
3.

## Pruebas

### Caso normal

Entrada:
``` js
const motos = [
  { km: 12000, estado: "usado" },
  { km: 3000, estado: "nuevo" },
  { km: 5000, estado: "nuevo" },
];
```

Resultado esperado:
{ km: 3000, estado: "nuevo" }
{ km: 5000, estado: "nuevo" }

### Caso borde

Entrada:
``` js
const motos = [
  { km: 12000, estado: "nuevo" },
  { km: 3000, estado: "nuevo" },
  { km: 5000, estado: "nuevo" },
];
```

Resultado esperado: vacio si busca motos usadas
[]

## Explicacion final

Es un programa que por medio de filtros devuelve la serie de motos que se encuentren devido a las condiciones, ya sea quilometraje o estado


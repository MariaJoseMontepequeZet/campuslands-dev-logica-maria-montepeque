# Plantilla de solucion

## Analisis

- Entrada: Datos js en formato de objeto que contiene modelo y marca
- Proceso: Filtra para poder obtener los datos de la marco o bien del modelo
- Salida: Array de los autos que coinciden

## Reglas identificadas

1. La marca tiene que tener coincidencia
2. El modelo tiene que tener coincidencia
3. Las condiciones no se aplican si no hay datos

## Pruebas

### Caso normal

Entrada:
``` js
const autos = [
  { marca: "Ferrari", modelo: "LaFerrari" },
  { marca: "Lamborghini", modelo: "Aventador" },
  { marca: "Ferrari", modelo: "F8" },
];

console.log(buscarAutos(autos, { modelo: "Aventador" }));

```

Resultado esperado:
{marca: 'Ferrari', modelo: 'LaFerrari'}
{marca: 'Ferrari', modelo: 'F8'}

### Caso borde
Entrada:
``` js
console.log(buscarAutos(autos, { modelo: "Ford" }));
```

Resultado esperado:
[]

## Explicacion final
La apllicacion busca en base a sus datos y si en dado caso le damos un valor que no existe aun o no esta registrdo, solo devolverá un array vacio
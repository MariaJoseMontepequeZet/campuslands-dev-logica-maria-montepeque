# Lógica general 032 - Comparación de opciones

## Análisis

### Entrada

```javascript
const competidoresDePingPong = [
    {id:1, competidor:"Juan", habilidad:"agilidad", punteos:[85,90]},
    {id:2, competidor:"Ester", habilidad:"técnica", punteos:[67,90]},
    {id:3, competidor:"Maryori", habilidad:"reactividad", punteos:[67,89]},
    {id:4, competidor:"José", habilidad:"técnica", punteos:[56,78]}
];
```

### Proceso

```javascript
1. Validar que el arreglo no esté vacío.
2. Recorrer cada competidor.
3. Sumar sus punteos.
4. Calcular el promedio.
5. Comparar la habilidad y el promedio.
6. Mostrar el resultado correspondiente.
```

### Salida

```text
Juan: Es apto para ir al torneo.
Ester: Debe seguir practicando.
Maryori: Debe seguir practicando.
José: No es apto, pero sigue practicando.
```

## Reglas identificadas

```text
- El arreglo debe contener competidores.
- Si la habilidad es "agilidad" y el promedio es mayor o igual a 80, el competidor es apto para el torneo.
- Si la habilidad es "técnica" o "reactividad" y el promedio es mayor o igual a 70, debe seguir practicando.
- En cualquier otro caso, no es apto.
```

## Pruebas

### Caso normal

#### Entrada

```javascript
seleccionParaTorneo(competidoresDePingPong);
```

#### Resultado esperado

```text
Juan: Es apto para ir al torneo.
Ester: Debe seguir practicando.
Maryori: Debe seguir practicando.
José: No es apto, pero sigue practicando.
```

### Caso borde

#### Entrada


seleccionParaTorneo([]);

#### Resultado esperado

No hay competidores para seleccionar al torneo.


## Explicación final

La solución valida que existan competidores, recorre el arreglo, calcula el promedio de los punteos de cada uno y compara ese promedio con la habilidad del competidor. Según el resultado de la comparación, determina si es apto para el torneo, debe seguir practicando o no es apto.
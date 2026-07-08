# Lógica general 032 - Probabilidad de ganar

## Análisis

### Entrada

```javascript
const competidoresDePingPong = [
    {id:1, competidor:"Tatiana", victorias:4, derrotas:6, puntos:[57,79]},
    {id:2, competidor:"Estefani", victorias:6, derrotas:4, puntos:[67,90]},
    {id:3, competidor:"Edy", victorias:8, derrotas:2, puntos:[89,87]}
];
```

### Proceso

```javascript
1. Validar que existan competidores.
2. Recorrer el arreglo.
3. Sumar los puntos.
4. Calcular el promedio.
5. Calcular la probabilidad de ganar.
6. Mostrar el resultado.
```

### Salida

```text
Nombre del competidor.
Promedio de puntos.
Probabilidad de ganar.
Clasificación de la probabilidad.
```

## Reglas identificadas

```text
- El arreglo no debe estar vacío.
- La probabilidad se calcula como:
  (Victorias / (Victorias + Derrotas)) * 100.
- Si la probabilidad es mayor o igual a 70 % y el promedio es mayor o igual a 80, tiene alta probabilidad de ganar.
- Si la probabilidad es mayor o igual a 50 %, tiene probabilidad media.
- En cualquier otro caso, tiene probabilidad baja.
```

## Pruebas

### Caso normal

#### Entrada

```javascript
probabilidadGanar(competidoresDePingPong);
```

#### Resultado esperado

```text
Competidor: Tatiana
Promedio de puntos: 68.00
Probabilidad de ganar: 40.00%
Probabilidad baja de ganar.

Competidor: Estefani
Promedio de puntos: 78.50
Probabilidad de ganar: 60.00%
Probabilidad media de ganar.

Competidor: Edy
Promedio de puntos: 88.00
Probabilidad de ganar: 80.00%
Alta probabilidad de ganar.
```

### Caso borde

#### Entrada

```javascript
probabilidadGanar([]);
```

#### Resultado esperado

```text
No hay competidores para realizar la probabilidad.
```

## Explicación final

```text
La solución valida que existan competidores, recorre el arreglo, calcula el promedio de puntos y la probabilidad de ganar utilizando las victorias y derrotas. Finalmente clasifica a cada competidor según el porcentaje obtenido y muestra el resultado.
```
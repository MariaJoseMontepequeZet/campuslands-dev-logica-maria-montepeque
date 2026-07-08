# Plantilla de solucion

## Analisis

- Entrada: Recibirá un array de objetos js con los registros de cada round de la pelea (golpes por tipo y derribos de cada peleador).
- Proceso: Se calcularán los puntos de cada peleador aplicando las reglas de negocio (multiplicadores por tipo de golpe) y se acumularán los totales recorriendo todos los rounds mediante un ciclo.
- Salida: Objeto con el ganador (o empate técnico), puntos totales de cada peleador y detalle del resultado.

## Reglas identificadas

1. Golpe a la cabeza vale 3 puntos
2. Golpe al cuerpo vale 2 puntos
3. Golpe a la pierna vale 1 punto
4. Derribo (knockdown) vale 5 puntos adicionales
5. Gana quien tenga más puntos al final de todos los rounds
6. Si hay igualdad de puntos, se declara "Empate técnico"

## Pruebas

### Caso normal

Entrada: 
``` js
const pelea = [
  {
    round: 1,
    peleador1: { cabeza: 2, cuerpo: 3, pierna: 1, derribos: 0 },
    peleador2: { cabeza: 1, cuerpo: 2, pierna: 2, derribos: 1 }
  },
  {
    round: 2,
    peleador1: { cabeza: 3, cuerpo: 2, pierna: 2, derribos: 1 },
    peleador2: { cabeza: 2, cuerpo: 3, pierna: 1, derribos: 0 }
  }
];
```

Resultado esperado: El peleador 1 ganará

### Caso borde

Entrada:
``` js
const peleaEmpate = [
  {
    round: 1,
    peleador1: { cabeza: 2, cuerpo: 2, pierna: 2, derribos: 0 },
    peleador2: { cabeza: 2, cuerpo: 3, pierna: 0, derribos: 0 }
  }
];
```

Resultado esperado: Empate técnico

## Explicacion final

La aplicacion actua contando los golpes de cada pelador, se irán acumulando los putos y al final se calculan los puntos obtenidos por cada pelador y asi se obtiene a un ganador.

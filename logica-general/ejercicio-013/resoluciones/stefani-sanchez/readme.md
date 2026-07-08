# Solucion ejercicio 013 - Resolucion de casos

## Como pense el problema

Analice cada participante de forma individual y aplique las reglas para determinar si puede realizar un salto en paracaidas. Cada caso se evalua segun la edad y la presentacion del certificado medico.

## Entradas

- Lista de participantes.

Cada participante contiene:

- Nombre.
- Edad.
- Certificado medico.

## Reglas aplicadas

1. La lista debe contener participantes.
2. El participante debe ser mayor o igual a 18 años.
3. Debe presentar un certificado medico valido.
4. Si cumple ambas condiciones, puede participar.

## Salidas

- Resultado de cada participante indicando si puede o no participar.
- Mensaje cuando la lista esta vacia.

## Como ejecutar

```bash
node stefani-sanchez.js
```

## Casos probados

### Caso normal

Evaluacion de varios participantes.

Resultado esperado:

```text
Carlos: Puede participar.
Ana: No puede participar por ser menor de edad.
Luis: No puede participar porque no presenta certificado medico.
```

### Caso borde

Lista vacia.

Resultado esperado:

```text
No hay participantes registrados.
```
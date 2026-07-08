# Solucion ejercicio 006 - Busqueda de elementos

## Como pense el problema

El objetivo fue buscar un auto dentro de una lista utilizando la marca como criterio. Si la marca existe, se muestran sus datos; de lo contrario, se informa que no fue encontrada.

## Entradas

- Lista de autos.
- Marca del auto que se desea buscar.

Cada auto contiene:

- Marca.
- Modelo.
- Velocidad maxima.

## Reglas aplicadas

1. La lista debe contener elementos.
2. La busqueda se realiza por la marca del auto.
3. Si existe coincidencia, se devuelve el auto encontrado.
4. Si no existe, se muestra un mensaje indicando que no fue encontrado.

## Salidas

- Informacion del auto encontrado.
- Mensaje si el auto no existe o la lista esta vacia.

## Como ejecutar

Ejecutar el siguiente comando:

```bash
node stefani-sanchez.js
```

## Casos probados

### Caso normal

Buscar la marca **Bugatti**.

Resultado esperado:

```text
{
  marca: 'Bugatti',
  modelo: 'Chiron',
  velocidadMaxima: 420
}
```

### Caso borde

Buscar la marca **Ferrari**.

Resultado esperado:

```text
Auto no encontrado.
```
# Solucion ejercicio 011 - Organizacion de listas

## Como pense el problema

Analice que los peleadores debian organizarse segun su categoria de peso. La solucion recorre la lista y agrupa a cada participante en la categoria correspondiente.

## Entradas

- Lista de peleadores.

Cada peleador contiene:

- Nombre.
- Categoria.

## Reglas aplicadas

1. La lista debe contener peleadores.
2. Cada peleador se agrupa segun su categoria.
3. Si una categoria no existe, se crea.
4. Si la lista esta vacia, se muestra un mensaje.

## Salidas

- Objeto con los peleadores organizados por categoria.
- Mensaje indicando que no existen registros.

## Como ejecutar

```bash
node stefani-sanchez.js
```

## Casos probados

### Caso normal

Lista con varias categorias.

Resultado esperado:

```text
{
  "Peso Ligero": ["Carlos", "Luis"],
  "Peso Pluma": ["Ana", "Jose"],
  "Peso Medio": ["Maria"]
}
```

### Caso borde

Lista vacia.

Resultado esperado:

```text
No hay peleadores registrados.
```
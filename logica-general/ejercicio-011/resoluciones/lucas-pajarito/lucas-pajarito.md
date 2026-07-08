# Plantilla de solución

## Análisis

- **Entrada:**
  - Un arreglo de peleadores con:
    - Nombre.
    - Categoría.
    - Cantidad de victorias.

- **Proceso:**
  1. Recorrer la lista de peleadores.
  2. Ordenarlos de mayor a menor según la cantidad de victorias.
  3. Mostrar la lista organizada.

- **Salida:**
  - Un ranking de peleadores ordenado por cantidad de victorias.

---

## Reglas identificadas

1. Todos los peleadores deben tener nombre, categoría y número de victorias.
2. El peleador con más victorias aparece primero.
3. El resto de los peleadores se organiza en orden descendente.

---

## Pruebas

### Caso normal

**Entrada**

```javascript
{
    nombre: "Juan Pérez",
    categoria: "Peso Pluma",
    victorias: 20
}
```

**Resultado esperado**

```text
1. Juan Pérez - Peso Pluma (20 victorias)
```

---

### Caso borde

**Entrada**

```javascript
{
    nombre: "Carlos Ramírez",
    categoria: "Peso Ligero",
    victorias: 10
},
{
    nombre: "Miguel Herrera",
    categoria: "Peso Pesado",
    victorias: 10
}
```

**Resultado esperado**

```text
Carlos Ramírez y Miguel Herrera aparecen juntos con la misma cantidad de victorias dentro del ranking.
```

> Este es un caso borde porque dos peleadores tienen exactamente el mismo número de victorias y el programa debe seguir organizando la lista correctamente.

---

## Explicación final

La solución funciona porque recibe un arreglo de peleadores y utiliza el método `sort()` para ordenarlos según el número de victorias de mayor a menor. Después recorre la lista con `forEach()` para mostrar el ranking organizado. Así se resuelve un problema de organización de listas de forma clara y verificable.

---

## Sugerencia

Antes de programar, identifica el criterio con el que se organizará la lista. En este reto, el criterio es la cantidad de victorias, por lo que primero se ordenan los datos y luego se muestran en el nuevo orden.
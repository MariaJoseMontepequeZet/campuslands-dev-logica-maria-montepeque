# Plantilla de solución

## Análisis

- **Entrada:**
  - Una lista de autos hiperdeportivos con:
    - Marca.
    - Modelo.
    - Velocidad máxima.
  - La marca del auto que se desea buscar.

- **Proceso:**
  1. Recorrer la lista de autos.
  2. Comparar la marca ingresada con la marca de cada auto.
  3. Si existe una coincidencia, mostrar la información del vehículo.
  4. Si no existe, informar que el auto no fue encontrado.

- **Salida:**
  - La información del auto encontrado o un mensaje indicando que no existe.

---

## Reglas identificadas

1. La búsqueda se realiza por la marca del auto.
2. Si la marca existe, se muestra toda la información del vehículo.
3. Si la marca no existe, el programa informa que no fue encontrada.

---

## Pruebas

### Caso normal

**Entrada**

```python
buscar_auto(autos, "Bugatti")
```

**Resultado esperado**

```text
=== AUTO ENCONTRADO ===
Marca: Bugatti
Modelo: Chiron
Velocidad máxima: 420 km/h
```

---

### Caso borde

**Entrada**

```python
buscar_auto(autos, "Lamborghini")
```

**Resultado esperado**

```text
No se encontró un auto con esa marca.
```

> Este es un caso borde porque la marca buscada no existe en la lista. El programa debe finalizar la búsqueda sin producir errores y mostrar un mensaje informativo.

---

## Explicación final

La solución funciona porque recorre la lista de autos hiperdeportivos comparando la marca ingresada por el usuario con la marca de cada vehículo. Cuando encuentra una coincidencia, muestra toda la información del auto y finaliza la búsqueda. Si ninguna marca coincide, informa que el vehículo no se encuentra registrado. De esta manera se resuelve un problema de **búsqueda de elementos**.

---

## Sugerencia

Cuando debas buscar un elemento dentro de una colección, recorre cada registro y compara el atributo que identifica al elemento. Si encuentras una coincidencia, muestra la información correspondiente; de lo contrario, informa que el elemento no existe.
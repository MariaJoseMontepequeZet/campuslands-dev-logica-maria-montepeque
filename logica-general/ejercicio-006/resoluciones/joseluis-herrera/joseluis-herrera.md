# Ejercicio 05

## Explicacion
En el siguiente ejercicio se realiza una busqueda de un vehiculo hiperdeportivo, en el cual nos demuestran los datos del vehiculo como el precio, el modelo... la regla que se esque el vehiculo tiene que estar en el inventario para poder mostrarse los datos de lo contrario se dira que no se encontro tambien se puede observar que se usan elementos simple los cuales son un while para ver si el cliente desea seguir buscando o no y un if para cumplir la regla si el valor ingresado coincide con los del inventario y mostrarse la informacion.

## Caso normal 
```text
 {
        "marca": "Aston Martin",
        "modelo": "DB11",
        "año": 2020,
        "potencia": 630,
        "precio": 205600
 }
```

Resultado esperado:
Los autos de la marca ingresada son:
Marca: Ferrari
Modelo: F8 Tributo
Año: 2020
Caballos de fuerza: 710
Precio: 276000
¿Desea buscar otro auto? (si/no):

### Caso borde
```text
    ¿Desea buscar otro auto? (si/no):si
Ingrese el modelo del auto que desea buscar: PG
```

Resultado esperado:
No se encontraro autos de  la marca ingresada. 
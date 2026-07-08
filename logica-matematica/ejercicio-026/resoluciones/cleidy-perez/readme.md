# Lógica matemática 026 - conversion de unidades

## Entrada:
Un arreglo con información de autos hiperdeportivos que contiene marca, modelo y velocidad en kilómetros por hora.

## Proceso:
Se valida que el arreglo tenga datos. Luego se recorren los autos para sumar sus velocidades, calcular el promedio y seleccionar los vehículos que superan los 400 km/h. Después se realiza la conversión de velocidad de km/h a mph utilizando un factor de conversión.

## Salida:
- Lista de autos con velocidad mayor a 400 km/h.
- Velocidad convertida de km/h a mph.
- Promedio de velocidad del inventario.

# Reglas identificadas

- El arreglo debe contener al menos un auto.
- Se consideran autos rápidos aquellos que superan los 400 km/h.
- La conversión de unidades utiliza la fórmula:

  mph = km/h × 0.621371

- El promedio se calcula con:

  promedio = suma de velocidades / cantidad de autos

# Pruebas

## Caso normal

### Entrada:
Un arreglo con cinco autos hiperdeportivos y diferentes velocidades.

### Resultado esperado:
Se muestran los autos que superan los 400 km/h, su conversión a mph y el promedio general de velocidad.

## Caso borde

### Entrada:
Un arreglo vacío (`[]`).

### Resultado esperado:
Se muestra el mensaje **"No hay autos registrados."**

# Explicación final

La solución funciona porque primero valida que existan datos en el arreglo. Después utiliza ciclos para recorrer los autos, un acumulador para sumar velocidades y condiciones para seleccionar los autos que cumplen la regla establecida. Finalmente realiza cálculos numéricos para obtener el promedio y convertir las unidades de velocidad.

# Sugerencia

Divide el problema en pasos: primero valida los datos, luego procesa la información y finalmente muestra los resultados. Esto permite crear soluciones más ordenadas y fáciles de mantener.
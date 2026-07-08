# Logica matemática 017 - estadistica de ranking

## Análisis

**Entrada:**

* Un arreglo de modelos 3D con su nombre y nivel de calidad.

**Proceso:**

* Recorrer la lista de modelos.
* Sumar la calidad de todos los modelos.
* Identificar el modelo con mayor calidad.
* Clasificar cada modelo según su calidad.
* Calcular el promedio de calidad.

**Salida:**

* Mostrar si cada modelo es de alta, media o baja calidad.
* Mostrar el mejor modelo.
* Mostrar el promedio general de calidad.

---

## Reglas identificadas

* Si no hay modelos, mostrar un mensaje.
* Si la calidad es **≥ 80**, es alta calidad.
* Si la calidad es menor a 80, es media o baja.
* El mejor modelo es el que tiene mayor calidad.
* El promedio se calcula sumando todas las calidades y dividiendo entre la cantidad de modelos.

---

## Pruebas

### Caso normal

**Entrada:**

* Cubo: 85
* Esfera: 60
* Pirámide: 95

**Resultado esperado:**

* Cubo: Alta calidad
* Esfera: Media o baja calidad
* Pirámide: Alta calidad
* Mejor modelo: Pirámide
* Promedio: 80.00

---

### Caso borde

**Entrada:**

* Arreglo vacío (`[]`)

**Resultado esperado:**

* Mostrar mensaje: "No hay modelos 3D para analizar."

---

## Explicación final

La solución funciona porque recorre todos los modelos 3D, calcula estadísticas como suma y promedio, identifica el mejor modelo y clasifica cada uno según su nivel de calidad. Esto permite generar un ranking claro basado en reglas de negocio simples.

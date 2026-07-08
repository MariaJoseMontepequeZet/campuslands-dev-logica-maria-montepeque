# Ejercicio 16

# Explicacion
Este proyecto implementa un script en Python estructurado para procesar y auditar elementos tridimensionales organizados dentro de una matriz bidimensional (listas anidadas), simulando el flujo de capas y fotogramas clave en un software de animación 3D.

## Características

* **Estructura Bidimensional:** Organización de datos mediante filas (capas de animación) y columnas (propiedades del entorno).
* **Cálculo de Renderizado:** Multiplica dinámicamente los puntos (FPS base) de cada diccionario para determinar la tasa de carga de procesamiento en milisegundos.
* **Recorrido Anidado:** Uso de ciclos `for` con rangos de longitud (`range(len())`) para leer cada coordenada de la matriz sin alterar el índice original.

## Estructura de Datos de los Objetos

Cada recurso dentro de la matriz conserva rigurosamente la siguiente sintaxis de diccionario:

```python
{
  "nombre": "Personaje_Iddle",
  "equipo": "Modelado",
  "puntos": 24,
}
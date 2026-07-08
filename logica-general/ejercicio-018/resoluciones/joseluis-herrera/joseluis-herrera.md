# Sistema de Asignación de Turnos - Taller de Soldadura (Python)

Este proyecto implementa un script en Python diseñado para resolver la gestión de turnos dentro de un taller de soldadura industrial, utilizando una estructura de control de flujo basada en colas de atención.

## Características

* **Lógica FIFO (First In, First Out):** El primer operario en llegar con su pieza es el primero en ser atendido mediante el método `.pop(0)`.
* **Carga de Trabajo Dinámica:** Calcula automáticamente el tiempo de ocupación de las estaciones de soldadura según los puntos de complejidad de la estructura.
* **Control de Cola Continuo:** Implementa un ciclo `while` que procesa los elementos en tiempo real hasta vaciar los registros pendientes.

## Estructura de Datos de los Objetos

Cada orden de trabajo en la cola conserva rigurosamente la siguiente sintaxis de diccionario:

```python
{
  "nombre": "Mateo",
  "equipo": "España",
  "puntos": 88,
}
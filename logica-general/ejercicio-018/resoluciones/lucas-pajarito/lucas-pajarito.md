# Plantilla de solución

## Análisis

- **Entrada:**
  - Un arreglo de trabajadores con la siguiente información:
    - Nombre.
    - Turno asignado (Mañana, Tarde o Noche).

- **Proceso:**
  1. Recorrer el arreglo de trabajadores.
  2. Leer el turno asignado a cada trabajador.
  3. Mostrar el horario correspondiente según el turno.

- **Salida:**
  - Un mensaje indicando el horario de trabajo de cada empleado.

---

## Reglas identificadas

1. Si el turno es **Mañana**, el horario es de **6:00 a.m. a 2:00 p.m.**.
2. Si el turno es **Tarde**, el horario es de **2:00 p.m. a 10:00 p.m.**.
3. Si el turno es **Noche**, el horario es de **10:00 p.m. a 6:00 a.m.**.

---

## Pruebas

### Caso normal

**Entrada:**

```javascript
{
    nombre: "Carlos",
    turno: "Mañana"
}
```

**Resultado esperado:**

```text
Carlos: Debe presentarse de 6:00 a.m. a 2:00 p.m.
```

---

### Caso borde

**Entrada:**

```javascript
{
    nombre: "Miguel",
    turno: "Noche"
}
```

**Resultado esperado:**

```text
Miguel: Debe presentarse de 10:00 p.m. a 6:00 a.m.
```

> Este es un caso borde porque el turno de **Noche** cambia de un día al siguiente. El programa debe asignar correctamente el horario correspondiente.

---

## Explicación final

La solución funciona porque recorre el arreglo de trabajadores y evalúa el turno asignado a cada uno. Mediante una estructura `if...else if...else`, determina el horario correspondiente y lo muestra en pantalla. De esta manera se implementa un **sistema de turnos**, donde cada trabajador recibe un horario según la jornada que le fue asignada.

---

## Sugerencia

Cuando un problema involucre **sistemas de turnos**, identifica primero todos los turnos disponibles y el horario que corresponde a cada uno. Después utiliza estructuras de decisión para asignar automáticamente el horario correcto según el turno de cada trabajador.
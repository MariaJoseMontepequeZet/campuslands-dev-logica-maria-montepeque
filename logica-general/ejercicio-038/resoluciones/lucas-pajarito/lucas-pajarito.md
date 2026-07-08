# Plantilla de solución

## Análisis

- **Entrada:**
  - Una lista de soldadores con:
    - Nombre.
    - Turno asignado.

- **Proceso:**
  1. Recorrer la lista de soldadores.
  2. Leer el turno asignado.
  3. Comparar el turno con los horarios disponibles.
  4. Mostrar el horario correspondiente.

- **Salida:**
  - El nombre del soldador.
  - El turno asignado.
  - El horario de trabajo correspondiente.

---

## Reglas identificadas

1. El turno **Mañana** corresponde al horario de **6:00 a.m. a 2:00 p.m.**
2. El turno **Tarde** corresponde al horario de **2:00 p.m. a 10:00 p.m.**
3. El turno **Noche** corresponde al horario de **10:00 p.m. a 6:00 a.m.**

---

## Pruebas

### Caso normal

**Entrada**

```python
{
    "nombre": "Laura",
    "turno": "Tarde"
}
```

**Resultado esperado**

```text
Soldador: Laura
Turno asignado: Tarde
Horario: 2:00 p.m. - 10:00 p.m.
```

---

### Caso borde

**Entrada**

```python
{
    "nombre": "Miguel",
    "turno": "Noche"
}
```

**Resultado esperado**

```text
Soldador: Miguel
Turno asignado: Noche
Horario: 10:00 p.m. - 6:00 a.m.
```

> Este es un caso borde porque el turno de **Noche** inicia un día y termina al siguiente. El programa debe identificar correctamente este turno y asignar el horario correspondiente.

---

## Explicación final

La solución funciona porque recorre la lista de soldadores y analiza el turno asignado a cada uno. Mediante una estructura `if`, `elif` y `else`, compara el turno con las opciones disponibles y muestra el horario correspondiente. De esta manera se implementa un **sistema de turnos**, donde cada trabajador recibe un horario específico según su turno asignado.

---

## Sugerencia

Cuando desarrolles un **sistema de turnos**, identifica previamente todos los turnos disponibles y el horario asociado a cada uno. Luego utiliza estructuras condicionales para relacionar cada turno con su horario y mostrar la información de forma clara.

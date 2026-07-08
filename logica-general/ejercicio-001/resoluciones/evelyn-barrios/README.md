# Solución Ejercicio 01: Clasificación de Recompensa

## 1. Análisis del Problema

El objetivo es clasificar el rendimiento de un jugador en una partida para asignarle una recompensa (caja de botín). En lugar de usar una cadena de condicionales `if-else`, decidí adoptar un enfoque más declarativo y escalable.

La idea principal fue separar los **datos** (las reglas de clasificación) de la **lógica** (la función que las aplica). Esto hace que el código sea más fácil de leer y mantener, ya que para añadir o modificar una recompensa, solo es necesario cambiar la estructura de datos, sin tocar la función principal.

## 2. Estructura y Reglas Aplicadas

La solución se basa en una lista ordenada de reglas, donde cada regla es un objeto con dos propiedades:

- `nombre`: El nombre de la recompensa (ej. "Caja Mítica").
- `condicion`: Una función que recibe las estadísticas del jugador y devuelve `true` si cumple los requisitos para esa recompensa.

Las reglas se almacenan en el array `REGLAS_RECOMPENSA`, ordenadas de mayor a menor prioridad.

La función `determinarRecompensa` utiliza el método `find()` para recorrer este array. Se detiene en la **primera regla** cuya condición se cumpla, garantizando así que se aplique la recompensa de mayor rango posible. Si ninguna regla se cumple, se asigna una recompensa por defecto (`Caja Común`).

## 3. Cómo Ejecutar la Solución

El archivo `evelyn-barrios.js` es un script autónomo de JavaScript. Para verificar su funcionamiento, puedes ejecutarlo usando Node.js en tu terminal:

```bash
node evelyn-barrios.js
```

## 4. Casos de Prueba

- **Prueba 1: Rendimiento Excepcional**
  - **Entrada**: `{ muertes: 12, asistencias: 5, danoInfligido: 5500 }`
  - **Resultado esperado**: "El jugador ha ganado una Caja Mítica." (Verifica la regla de mayor prioridad).

- **Prueba 2: Rendimiento Básico**
  - **Entrada**: `{ muertes: 2, asistencias: 3, danoInfligido: 1500 }`
  - **Resultado esperado**: "El jugador ha ganado una Caja Común." (Verifica el caso por defecto).
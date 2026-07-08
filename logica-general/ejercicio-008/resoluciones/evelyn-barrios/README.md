# Solución Ejercicio 08: Validación y Manejo de Errores

## 1. Análisis del Problema

En el mundo real, los datos no siempre son perfectos. Este ejercicio aborda ese problema. El desafío es procesar una lista de jugadores que puede contener errores: datos faltantes, formatos incorrectos, etc.

El objetivo es crear una solución "robusta", es decir, que no falle si encuentra datos incorrectos. En su lugar, debe ser capaz de identificar las entradas problemáticas, separarlas y continuar procesando las que sí son válidas.

## 2. Estructura y Lógica Aplicada

La solución implementa un flujo de validación antes del procesamiento:

1.  **Paso 1: Preparar contenedores**. Se crean dos listas vacías: una para los jugadores que resulten ser válidos y otra para registrar los errores que se encuentren.

2.  **Paso 2: Recorrer y validar**. El código revisa cada jugador de la lista de entrada. Para cada uno, realiza una serie de comprobaciones. Por ejemplo, verifica si el jugador tiene un nombre y si sus estadísticas están completas y en el formato correcto.

3.  **Paso 3: Separar los datos**.
    - Si un jugador pasa todas las validaciones, se considera "válido". Se calcula su puntaje y se añade a la lista de jugadores procesados.
    - Si un jugador falla alguna validación, se considera un "error". Se añade a la lista de errores junto con una descripción del problema, y el código pasa al siguiente jugador sin intentar procesarlo.

Al final, la función devuelve un objeto que contiene tanto el reporte de los jugadores que se pudieron procesar correctamente como un listado de todos los errores encontrados.

## 3. Cómo Ejecutar la Solución

El archivo `evelyn-barrios.js` contiene la implementación. Para ver el resultado del procesamiento, se puede ejecutar el siguiente comando:

```bash
node evelyn-barrios.js
```

## 4. Resultado Esperado

La salida se divide en dos partes: primero, una tabla con los jugadores válidos y su puntaje calculado; segundo, una lista detallada de los datos que no se pudieron procesar y el motivo.
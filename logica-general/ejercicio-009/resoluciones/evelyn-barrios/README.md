# Solución Ejercicio 09: Manejo de Datos Asíncronos

## 1. Análisis del Problema

Este ejercicio introduce un concepto fundamental en la programación moderna: la **asincronía**. En el mundo real, los datos no siempre están disponibles de inmediato; pueden tardar en llegar desde un servidor o una base de datos.

El desafío es crear una solución que pueda solicitar datos de varias fuentes que tardan en responder, esperar pacientemente a que lleguen y solo entonces, procesarlos para generar un resultado.

## 2. Estructura y Lógica Aplicada

La solución simula la obtención de datos de dos "APIs" distintas, una para el rendimiento y otra para los perfiles. El proceso se estructura de la siguiente manera:

1.  **Paso 1: Solicitar los datos en paralelo**. En lugar de pedir una lista y esperar, y luego pedir la otra, el código solicita ambas al mismo tiempo. Esto es más eficiente, como hacer dos llamadas telefónicas a la vez en lugar de una después de la otra.

2.  **Paso 2: Esperar a que todo llegue**. El código utiliza una herramienta (`Promise.all`) que funciona como un supervisor. Este supervisor espera a que las dos "descargas" de datos hayan finalizado por completo antes de pasar al siguiente paso.

3.  **Paso 3: Fusionar y presentar los datos**. Una vez que el supervisor confirma que todos los datos han llegado, se utiliza la misma lógica del ejercicio 07 para fusionar la información de rendimiento con la de los perfiles. Finalmente, se presenta un reporte completo.

Este enfoque (`async/await`) permite escribir código que es fácil de leer y que maneja de forma elegante las esperas de datos.

## 3. Cómo Ejecutar la Solución

El archivo `evelyn-barrios.js` contiene la implementación. Al ejecutarlo, se podrá observar en la terminal cómo el programa informa sobre el estado de las descargas antes de mostrar el resultado final.

```bash
node evelyn-barrios.js
```

## 4. Resultado Esperado

La salida mostrará primero los mensajes sobre el inicio y fin de las descargas de datos, y luego una tabla con la información completa y fusionada de todos los jugadores.
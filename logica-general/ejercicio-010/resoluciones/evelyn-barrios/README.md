# Solución Ejercicio 10: Asincronía y Validación de Datos

## 1. Análisis del Problema

Este ejercicio combina dos de los desafíos más importantes de los ejercicios anteriores: el manejo de datos que tardan en llegar (asincronía) y la gestión de datos que pueden ser imperfectos (validación).

El objetivo es crear una solución completa que solicite información de varias fuentes, espere a que llegue, verifique que los datos recibidos sean correctos y, finalmente, procese únicamente la información válida.

## 2. Estructura y Lógica Aplicada

La solución sigue un flujo de trabajo robusto y ordenado:

1.  **Paso 1: Solicitar todos los datos a la vez**. Al igual que en el ejercicio anterior, el código pide la información de rendimiento y de perfiles al mismo tiempo para ser más eficiente.

2.  **Paso 2: Esperar a que lleguen las respuestas**. El programa espera pacientemente a que ambas "descargas" de datos terminen, sin importar si los datos que vienen son correctos o no.

3.  **Paso 3: Validar y fusionar**. Una vez que se tienen los datos, el código los revisa uno por uno.
    - Si un dato de rendimiento está incompleto (por ejemplo, le falta el nombre), se registra como un error y se descarta.
    - Si para un jugador con rendimiento válido no se encuentra su perfil correspondiente, también se registra como un error y se descarta.
    - Solo si ambos, rendimiento y perfil, son válidos, se fusionan en un único registro completo.

Al final, se obtiene una lista limpia solo con los jugadores que tenían toda su información correcta, y una lista separada con todos los problemas que se encontraron en el camino.

## 3. Cómo Ejecutar la Solución

El archivo `evelyn-barrios.js` contiene la implementación. Al ejecutarlo, se podrá observar el proceso de descarga, seguido por el reporte final.

```bash
node evelyn-barrios.js
```

## 4. Resultado Esperado

La salida mostrará, por un lado, una tabla con los datos completos de los jugadores que pasaron todas las validaciones y, por otro, una lista detallada de todos los registros que fueron descartados por ser inválidos.
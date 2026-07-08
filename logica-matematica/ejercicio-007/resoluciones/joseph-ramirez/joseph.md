## Justificación de la Entrega - Logica matematica 007

Para resolver este septimo ejercicio enfocado en secuencias numericas para una playlist musical, mantuve la linea de codigo limpio y compacto que venimos trabajando con funciones flecha, eliminando lineas innecesarias para que sea muy facil de auditar en el repositorio.

Implemente el metodo nativo `.reduce()` para sacar la sumatoria total de los datos de la secuencia de un solo viaje, y lo dividi por la cantidad de elementos para obtener el promedio base del flujo musical. A partir de ahi le sume el bono y le reste la penalizacion correspondiente, metiendo un `Math.round` al final por si el promedio tiraba decimales, garantizando de esta forma que devuelva el numero entero exacto de 27 que pide la guia.

El programa incluye su respectivo candado de seguridad al inicio con un "early return" usando `!participantes?.length` para capturar de inmediato si mandan colecciones vacias o nulas, evitando que el script falle en la terminal. Corre de forma nativa sin ninguna dependencia externa de node.

### Como ejecutar la solucion
1. Abrir la terminal de comandos en la ruta de mi carpeta personal.
2. Tirar el comando de ejecucion `node joseph-ramirez.js`.
3. En la pantalla saldran listadas las tres pruebas: el caso base del ejemplo que da 27 competitivo, el control del caso borde con datos vacios y mi caso propio para flujos de ritmo estandard
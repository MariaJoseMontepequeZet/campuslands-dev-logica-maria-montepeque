## Justificación de la Entrega - Logica matematica 009

Para resolver este noveno ejercicio de logica matematica sobre patrones de puntuacion en peliculas de miedo, mantuve el mismo enfoque compacto y ordenado de los retos anteriores usando funciones flecha y metodos nativos de java scrips para demostrar un codigo limpio y facil de leer.

Implemente el metodo `.reduce()` para sumar de forma directa todos los elementos del arreglo de participantes, y dividi ese resultado por la longitud total de la coleccion para encontrar la media estadistica base. Al promedio obtenido le sume el bono y le reste la penalizacion segun las reglas del negocio, aplicando un `Math.round()` al final del calculo para evitar que queden decimales sueltos en la consola, asegurando asi el puntaje exacto de 27 que solicita la guia del ejercicio.

Ademas, deje configurado un filtro de "early return" (`!participantes?.length`) al inicio del script como medida de seguridad, previniendo que si la aplicacion recibe datos corruptos o arreglos vacios, devuelva un objeto controlado en lugar de romper la ejecucion de Node.js. Corre nativo sin librerias externas.

### Como ejecutar la solucion
1. Abrir la terminal y ubicarse en la ruta de mi carpeta personal dentro del ejercicio 009.
2. Ejecutar el script usando el comando tipico `node joseph-ramirez.js`.
3. En la pantalla se van a imprimir los tres casos probados: la ejecucion normal de la guia con la salida esperada, la captura del caso borde de error y mi prueba personalizada de calificacion para maratones de terror
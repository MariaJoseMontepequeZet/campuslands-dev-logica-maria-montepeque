## Justificación de la Entrega - Logica matematica 002

Para resolver este reto de operaciones aritmeticas y proporciones en el ranking de futbol sala, use un enfoque enfocado en el rendimiento cuantitativo pero manteniendo la sintaxis bien corta y optimizada que pide la plataforma. 

Para sacar el promedio proporcional de los equipos implemente el metodo `.reduce()` ke suma todo el arreglo de un solo viaje sin usar bucles tradicionales. Despues dividi esa suma por la longitud de los participantes y le aplique directamente el bono y la penalizacion matematica. Tambien le clave un `Math.round` al calculo final por si las operaciones daban decimales raros, para que la salida coincida exacto con los numeros enteros que se esperan.

Le deje puesta la validacion con "optional chaining" en la primera linea por si mandan la lista vacia o si los parametros de bono vienen dañados, haci la app devuelve un objeto controlado en ves de dar un error de consola. El script es super eficiente y corre sin librerias de afuera directo en node.

### Como ejecutar la solucion
1. Abrir la terminal de comandos dentro de la ruta de mi entrega.
2. Tirar el comando `node joseph-ramirez.js`.
3. El sistema va a correr las tres pruebas: la de la guia para validar el 27 competitivo, el caso borde de control, y mi prueba automatizada de alto rendimiento
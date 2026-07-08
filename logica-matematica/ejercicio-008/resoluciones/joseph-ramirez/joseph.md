## Justificación de la Entrega - Logica matematica 008

Para resolver este octavo ejercicio de logica matematica sobre patrones de puntuacion en peliculas de ciencia ficcion, decidi estructurar una solucion que fuera bastante directa y limpia usando funciones flecha para demostrar un manejo avanzado de la sintaxis en java scrips.

Implemente el metodo nativo `.reduce()` para liquidar en una sola linea de codigo la sumatoria de todos los datos del patron de votaciones de los participantes, dividiendo el total por la longitud de elementos para sacar el promedio base. Despues le aplique el bono de clasificacion y le reste la penalizacion segun las reglas de negocio, metiendole un `Math.round` al final por si las operaciones daban decimales raros, garantizando haci que devuelva el numero entero exacto de 27 que pide la guia.

El codigo viene protegido en la primera linea con un filtro de "early return" usando `!participantes?.length` por si la plataforma o la base de datos manda arreglos vacios o datos dañados, evitando de esta forma que el script explote en la terminal de comandos. Funciona de forma nativa sin ninguna dependencia de afuera.

### Como ejecutar la solucion
1. Abrir la terminal de comandos en la ruta de mi carpeta personal de resolucion del ejercicio 008.
2. Correr el script usando el comando `node joseph-ramirez.js`.
3. En la pantalla se van a imprimir los tres casos probados: el del ejemplo que da 27 competitivo, el caso borde de control de errores y mi caso propio para calificaciones altas de estrenos
## Justificación de la Entrega - Logica matematica 004

Para cerrar este cuarto ejercicio de logica matematica sobre rangos y maximos en el inventario de motos, segui con la idea de estructurar un codigo super compacto y moderno usando funciones flecha para no meter un monton de codigo espagueti por gusto.

Para resolver la operacion matematica del promedio de stock use `.reduce()` por que me permite hacer la sumatoria de todo el arreglo en una sola linea de codigo limpia. Despues de dividirlo por la cantidad de elementos le sume el bono y le reste la penalizacion de las reglas, metiendole un `Math.round` al final por si las moscas salian decimales, asegurando de esta forma que de el numero entero exacto que pide el ejemplo.

El codigo viene protegido al puro inicio con un "early return" usando `!participantes?.length` para capturar cualquier dato corrupto o vacio que tire la plataforma antes de que joda el programa en la consola de java scrips. No depende de librerias raras de node asi que es completamente autoejecutable.

### Como ejecutar la solucion
1. Abrir la terminal de comandos en la carpeta de este ejercicio.
2. Ejecutar el archivo con el comando `node joseph-ramirez.js`.
3. En la pantalla se van a imprimir los tres casos de prueba: la prueba obligatoria de la guia con el puntaje final de 27, el caso borde de error y mi prueba propia para evaluar rangos medios de inventario
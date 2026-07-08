## Justificación de la Entrega - Logica matematica 006

Para resolver este sexto ejercicio de logica matematica sobre conversion de unidades en autos hiperdeportivos, decidi estructurar una solucion que fuera bastante directa y compacta usando funciones flecha para demostrar un manejo limpio de la sintaxis.

Implemente el metodo `.reduce()` para liquidar en una sola linea la sumatoria de todos los datos de telemetria de los participantes, dividiendo el total por la longitud de elementos para sacar el promedio base. Despues le aplique el bono de conversion y le reste la penalizacion segun las reglas de negocio, metiendole un `Math.round` al final por si las divisiones daban decimales raros, garantizando haci que devuelva el numero entero exacto de 27 que pide la guia.

El codigo viene protegido en la primera linea con un filtro de "early return" usando `!participantes?.length` por si la plataforma o la base de datos manda arreglos limpios o datos dañados, evitando de esta forma que el script explote feo en la terminal de java scrips. Funciona de forma nativa sin ninguna dependencia de afuera.

### Como ejecutar la solucion
1. Abrir la consola de comandos en la ruta de mi carpeta personal de resolucion.
2. Correr el script usando el comando `node joseph-ramirez.js`.
3. En la pantalla se van a imprimir los tres casos probados: el del ejemplo que da 27 competitivo, el caso borde de control de errores y mi caso propio de escuderia
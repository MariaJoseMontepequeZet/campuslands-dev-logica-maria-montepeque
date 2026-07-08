## Justificación de la Entrega - Logica matematica 010

Para cerrar este decimo ejercicio de logica matematica sobre redondeo y precision en el sector de viajes y turismo, mantuve la linea de diseño compacta y limpia que use en los retos anteriores con funciones flecha y metodos nativos de java scrips para que mi codigo sea super facil de auditar en el repositorio.

Implemente el metodo nativo `.reduce()` para resolver de un solo viaje la sumatoria de las tarifas de los participantes, dividiendo el total por la cantidad de elementos para obtener el promedio real. Despues le sume el bono y le reste la penalizacion segun el flujo del negocio. Al final le aplique el metodo `Math.round()` para clavar la precision numerica en un entero exacto, evitando que los tipicos decimales flotantes de java scrips alteren el resultado y asegurando haci el puntaje final de 27 exacto que pide la guia de Campuslands.

Ademas, deje puesto el candado de seguridad con `!participantes?.length` al inicio para capturar de inmediato arreglos vacios o datos corruptos antes de que el script falle en la terminal, devolviendo una accion controlada de error. No dependo de modulos de terceros por lo que corre de forma nativa e independiente.

### Como ejecutar la solucion
1. Abrir la terminal de comandos en la ruta de mi carpeta personal del ejercicio 010.
2. Ejecutar el archivo usando el comando tipico `node joseph-ramirez.js`.
3. En la consola se desplegaran las tres pruebas automatizadas: la de la guia con el puntaje final de 27 competitivo, el control del caso borde con datos nulos y mi prueba propia para el ajuste de precision
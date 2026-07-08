## Justificación de la Entrega - Logica general 003

En este tercer ejercicio enfocado en la toma de decisiones para un torneo de esports, decidi seguir con la linea de codigo limpio y estructurado de los retos anteriores, usando funciones flecha y reduciendo el uso de condicionales "if" tradicionales para que se vea mas avanzado.

Para la toma de decisiones use constantes booleanas (`esBloqueado` y `esPendienteUrgente`) combinadas con un operador ternario en el retorno. Siento que esto calza perfecto con lo que pide el problema por que toma caminos logicos claros dependiendo de las reglas del torneo, mandando a revisar de inmediato si algo interrumpe el flujo normal del bracket competitvo.

Le puse el candado al inicio usando `!items?.length` por si mandan datos vacios, asi el programa no explota en la terminal y tira una accion controlada de error. El script corre de forma automatica y es totalmente independiente, ideal para lo que nos exigen en las carpetas de resoluciones de Campuslands.

### Como ejecutar la solucion
1. Abrir la consola dentro de la carpeta del ejercicio 003.
2. Correr el archivo usando el comando `node joseph-ramirez.js`.
3. En la terminal saldran listadas las 3 pruebas: la requerida de la guia, la validacion del caso borde de datos corruptos y mi prueba propia para un bracket limpio
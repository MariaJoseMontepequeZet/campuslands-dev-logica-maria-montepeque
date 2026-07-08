## Justificación de la Entrega - Logica general 010

Para resolver este decimo ejercicio sobre lectura de instrucciones en un sistema de viajes y turismo, mantuve el mismo diseño compacto y moderno usando funciones flecha y reduccion de codigo innecesario que use en los retos anteriores para que sea muy facil de auditar en Campuslands.

Cree dos variables booleanas llamadas `esBloqueado` y `esPendienteUrgente` ayudandome del metodo nativo `.includes()` para evaluar y cambiar rapido los estados de las reservas en el itinerario. Lo pense de esta forma porque en una plataforma de turismo real, los pasajes o reservas de hotel que reportan bloqueos por sobreventa o problemas de alertas de usuario (bloqueados) se tienen que apartar de la cola de procesamiento de inmediato antes de seguir despachando los vuelos normales.

El script incluye un candado de seguridad con `!items?.length` en la pura primera linea para capturar valores nulos o vacios enviados por error, previniendo que la terminal tire un crash feo. Funciona de manera 100% nativa en java scrips sin depender de modulos ni librerias externas.

### Como ejecutar la solucion
1. Abrir la terminal de comandos en la ruta de mi carpeta personal del ejercicio 010.
2. Correr el archivo con el comando `node joseph-ramirez.js`.
3. En la pantalla se van a imprimir las tres pruebas: la de la guia con la salida exacta solicitada, el control de datos corruptos y mi prueba propia con el flujo de viaje libre de advertencias
## Justificación de la Entrega - Logica general 009

Para resolver este noveno ejercicio sobre simulacion de estados en un catalogo de peliculas de miedo, segui aplicando el mismo diseño compacto y moderno usando funciones flecha y reduccion de codigo innecesario que use en los retos anteriores para que sea muy facil de auditar en Campuslands.

Cree dos variables booleanas llamadas `esBloqueado` y `esPendienteUrgente` ayudandome del metodo nativo `.includes()` para evaluar y cambiar rapido los estados de las peliculas en el catalogo. Lo pense de esta forma porque en una plataforma de streaming real, los videos que reportan bloqueos de copyright o problemas de censura (bloqueados) se tienen que tumbar de la cola de reproduccion de inmediato antes de seguir procesando los estrenos o las tareas pendientes normales.

El script incluye un candado de seguridad con `!items?.length` en la pura primera linea para capturar valores nulos o vacios enviados por error, previniendo que la terminal tire un crash feo. Funciona de manera 100% nativa en java scrips sin depender de modulos ni librerias externas.

### Como ejecutar la solucion
1. Abrir la terminal de comandos en la ruta de mi carpeta personal del ejercicio 009.
2. Correr el archivo con el comando `node joseph-ramirez.js`.
3. En la pantalla se van a imprimir las tres pruebas: la de la guia con la salida exacta solicitada, el control de datos corruptos y mi prueba propia con el flujo de reproduccion libre de advertencias
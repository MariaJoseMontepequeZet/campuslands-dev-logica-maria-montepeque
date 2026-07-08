## Justificación de la Entrega - Logica general 005

Para este quinto ejercicio basado en el ordenamiento de prioridades en un taller mecanico, implemente una solucion avanzada pero super corta con funciones flecha y operadores lógicos directos para mantener limpio mi repositorio de Campuslands.

Genere un par de constantes booleanas (`esBloqueado` y `esPendienteUrgente`) para filtrar y ordenar que autos o tareas se deben atender de primero. Esto lo pense haci porque en un taller real los carros que vienen con motores trabados o fallas criticas de seguridad (bloqueados) tienen que pasar directo a la fosa antes de atender una afinacion de rutina o un cambio de llantas pendiente.

Deje la validacion con "optional chaining" al puro inicio (`!items?.length`) para asegurar que si el sistema del taller manda un dato vacio o dañado por error, el programa responda de forma controlada con un mensaje claro en ves de crashear bien feo en la terminal. Todo el script corre de forma nativa en java scrips sin depender de librerias de afuera.

### Como ejecutar la solucion
1. Abrir la terminal de comandos en la ruta de mi entrega.
2. Tirar el comando `node joseph-ramirez.js`.
3. En la pantalla se imprimiran las tres pruebas: la de la guia para validar el resultado, el caso borde de error con datos nulos y mi caso propio para flujo de mantenimiento normal
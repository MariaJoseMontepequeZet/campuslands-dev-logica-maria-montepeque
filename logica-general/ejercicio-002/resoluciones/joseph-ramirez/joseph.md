## Justificación de la Entrega - Logica general 002

Para este segundo ejercicio que se enfoca en la validacion de datos dentro de un contexto de ranking de futbol sala, decidi implementar una sintaxis bien moderna usando funciones flecha y operadores lógicos directos. Quise que el codigo fuera mas corto que el primero por que haci es mas legible y facil de mantener en plataformas de produccion.

Aplique un "early return" al puro principio usando el operador `?.` para el tamaño del array de los items. Esto lo ise haci porque en los torneos deportivos muchas veces los formularios mandan datos nulos o cadenas vacias, y con este filtro evito de un solo golpe que la app se rompa si mandan un dato corrupto, cumpliendo cabal con el punto de evitar errores comunes.

Las reglas de negocio las maneje guardando los resultados logicos en constantes booleanas (`esBloqueado` y `esPendienteUrgente`). De este modo, el operador ternario que devuelve el objeto con la accion y el motivo queda super limpio y no se vuelve un desmadre de leer. El script corre de una sola ves sin depender de librerias raras externas lo que lo hace perfecto para los requerimientos de Campuslands.

### Como probar la solucion
1. Abrir la consola de comandos en la ruta de la carpeta personal.
2. Ejecutar el comando `node joseph-ramirez.js`.
3. La pantalla mostrara los resultados de las tres pruebas configuradas: el caso de la guia, el control de errores con entradas nulas y la prueba propia para rankings limpios
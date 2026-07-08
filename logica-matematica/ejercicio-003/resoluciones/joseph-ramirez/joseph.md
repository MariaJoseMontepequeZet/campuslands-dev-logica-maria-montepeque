## Justificación de la Entrega - Logica matematica 003

Para cumplir con este ultimo reto de operaciones de promedios para el torneo de esports, decidi irme por una sintaxis que fuera bien corta pero que resolviera de forma optima el analisis cuantitativo del rendimiento de los jugadores.

Use la funcion nativa `.reduce()` para resolver la suma de los puntajes de los participantes en una linea limpia, y luego dividi ese resultado por el tamaño del array para encontrar el promedio base de la escuadra. Despues le sume el bono de rendimiento y le reste la penalizacion de las reglas competitivas, pasandole un `Math.round` al final por si el promedio daba con decimales para que el numero se imprima entero y ordenado en la consola.

Tambien deje programado el filtro de control con "optional chaining" al puro inicio para capturar si mandan arreglos sin datos, previniendo que la consola de java scrips tire un error fatal que arruine la revision. El codigo es totalmente legible y no necesita de ninguna libreria externa de node para jalar.

### Como ejecutar la solucion
1. Abrir la terminal en la carpeta correspondiente a este reto.
2. Tirar el comando de ejecucion `node joseph-ramirez.js`.
3. En la terminal se listaran los tres casos ejecutados: la prueba base que da el 27 competitivo esperado, el caso borde de control y mi prueba propia con puntajes mas bajos